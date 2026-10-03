(function () {
  const $ = (s, r = document) => r.querySelector(s);
  const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;");

  // ---------- mind map ----------
  const R = window.NEO_RESEARCH;
  function tree(node, depth) {
    const has = node.k && node.k.length;
    const closed = has && depth >= 2 ? " closed" : "";
    return `<li class="${closed}" data-c="${node.c}"><span class="node ${node.c}${has ? " has" : ""}">${esc(node.t)}</span>${has ? `<ul>${node.k.map((k) => tree(k, depth + 1)).join("")}</ul>` : ""}</li>`;
  }
  $("#mm-business").innerHTML = `<h3>Neo business <small>(merchant app and back office)</small></h3><ul>${R.business.k.map((k) => tree(k, 1)).join("")}</ul>`;
  $("#mm-pay").innerHTML = `<h3>Neo Pay <small>(customer app)</small></h3><ul>${R.pay.k.map((k) => tree(k, 1)).join("")}</ul>`;
  document.querySelectorAll(".tree").forEach((t) => t.addEventListener("click", (ev) => {
    const n = ev.target.closest(".node.has");
    if (n) n.parentElement.classList.toggle("closed");
  }));
  document.querySelectorAll(".legend button").forEach((b) => b.addEventListener("click", () => {
    const on = b.getAttribute("aria-pressed") !== "true";
    document.querySelectorAll(".legend button").forEach((x) => x.setAttribute("aria-pressed", "false"));
    document.querySelectorAll(".tree").forEach((t) => {
      t.classList.toggle("filtered", on);
      t.querySelectorAll(".node").forEach((n) => n.classList.toggle("hit", on && n.classList.contains(b.dataset.c)));
      if (on) t.querySelectorAll("li.closed").forEach((li) => li.classList.remove("closed"));
    });
    if (on) b.setAttribute("aria-pressed", "true");
  }));
  $("#mm-expand").addEventListener("click", () => document.querySelectorAll(".tree li.closed").forEach((li) => li.classList.remove("closed")));

  // ---------- roadmap ----------
  const cols = [["customer", "Customer"], ["merchant", "Merchant"], ["colleague", "Colleague"]];
  function showPI(i) {
    const pi = R.roadmap[i];
    document.querySelectorAll("#rm-tabs button").forEach((b, j) => b.setAttribute("aria-selected", i === j));
    $("#rm-body").innerHTML = `<div class="rm">${cols.map(([k, l]) => `<div class="col ${k}">
        <h4>${l} Outcomes</h4><ul class="out">${pi.outcomes[k].map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
        <div class="rm-sub">${l} Features</div><div class="stickies">${pi.features[k].map((x) => `<div class="sticky">${esc(x)}</div>`).join("")}</div></div>`).join("")}</div>
      <div class="platform"><h4 style="margin:0 0 8px">Platform Capabilities</h4><div class="stickies">${pi.platform.map((x) => `<div class="sticky">${esc(x)}</div>`).join("")}</div></div>`;
  }
  $("#rm-tabs").innerHTML = R.roadmap.map((p, i) => `<button role="tab" data-i="${i}">${esc(p.pi)}</button>`).join("");
  $("#rm-tabs").addEventListener("click", (ev) => { const b = ev.target.closest("button"); if (b) showPI(+b.dataset.i); });
  showPI(0);

  // ---------- journey viewer ----------
  const J = window.NEO_JOURNEYS;
  let journey = "customer", idx = 0;
  function draw() {
    const j = J[journey], s = j.screens[idx];
    $("#j-intro").textContent = j.intro;
    $("#phone").innerHTML = NeoUI.render(s);
    $("#a-phase").textContent = s.phase;
    $("#a-name").textContent = s.name;
    $("#a-why").textContent = s.why;
    $("#a-count").textContent = `${idx + 1} of ${j.screens.length}`;
    const phases = [...new Set(j.screens.map((x) => x.phase))];
    $("#phases").innerHTML = phases.map((p) => `<button class="${p === s.phase ? "on" : ""}" data-p="${esc(p)}">${esc(p)}</button>`).join("");
    document.querySelectorAll(".thumb").forEach((t, i) => t.classList.toggle("on", i === idx));
    const cur = document.querySelectorAll(".thumb")[idx];
    if (cur) cur.parentElement.scrollTo({ left: cur.offsetLeft - 20, behavior: "smooth" });
    document.querySelectorAll(".jtabs button").forEach((b) => b.setAttribute("aria-selected", b.dataset.j === journey));
  }
  function thumbs() {
    $("#thumbs").innerHTML = J[journey].screens.map((s, i) => `<div class="thumb" data-i="${i}">${NeoUI.render(s)}<span>${i + 1}</span></div>`).join("");
  }
  function go(d) { const n = J[journey].screens.length; idx = (idx + d + n) % n; draw(); }
  $("#prev").onclick = () => go(-1);
  $("#next").onclick = () => go(1);
  $("#thumbs").addEventListener("click", (ev) => { const t = ev.target.closest(".thumb"); if (t) { idx = +t.dataset.i; draw(); } });
  $("#phases").addEventListener("click", (ev) => { const b = ev.target.closest("button"); if (b) { idx = J[journey].screens.findIndex((s) => s.phase === b.dataset.p); draw(); } });
  document.querySelectorAll(".jtabs button").forEach((b) => b.addEventListener("click", () => { journey = b.dataset.j; idx = 0; thumbs(); draw(); }));
  document.addEventListener("keydown", (ev) => {
    const r = $("#journeys").getBoundingClientRect();
    if (r.top > innerHeight || r.bottom < 0) return;
    if (ev.key === "ArrowRight") go(1);
    if (ev.key === "ArrowLeft") go(-1);
  });
  const fromHash = location.hash.match(/^#(customer|merchant)-(\d+)$/);
  if (fromHash) { journey = fromHash[1]; idx = Math.max(0, +fromHash[2] - 1); }
  thumbs(); draw();
})();
