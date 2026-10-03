// Neo Pay screen kit: small components that recreate the wallet screens in HTML.
// Each screen is a list of [component, props] pairs, rendered into a 375 x 812 phone.
(function () {
  const e = (s) => String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const md = (s) => e(s).replace(/\[(.+?)\]/g, '<span class="lnk">$1</span>');

  const C = {
    status: (p) => `<div class="sb ${p.dark ? "dk" : ""}"><b>9:41</b><i class="sig"></i></div>`,
    splash: (p) => `<div class="splash ${p.bg}">${p.top ? `<div class="sp-top">${e(p.top)}</div>` : ""}
      <div class="logo big"><span class="mark"></span><div>${e(p.brand)}</div></div>
      <div class="sp-btns"><div class="btn outline">${e(p.signup)}</div><div class="btn white">Sign in</div></div>
      ${p.dialog ? `<div class="dim"></div><div class="ios-alert"><b>Allow "${e(p.brand)}" to access your location?</b><div>Allow Once</div><div>Allow While Using the App</div><div>Don't Allow</div></div>` : ""}</div>`,
    progress: (p) => {
      const w = (x) => `${(x / p.total) * 100}%`;
      if (p.done) return `<div class="prog"><div class="bar"><i class="g" style="width:100%"></i></div><span class="ck g">✓</span><span>${p.n}/${p.total}</span></div>`;
      const black = p.black ?? p.n - 1;
      return `<div class="prog"><div class="bar"><i class="k" style="width:${w(black)}"></i><i class="y" style="left:${w(black)};width:${w(p.gold ?? 1)}"></i></div><span class="ck">✓</span><span>${p.n}/${p.total}</span></div>`;
    },
    back: (p) => `<div class="nav-row">${p.none ? "<span></span>" : '<span class="arrow">←</span>'}${p.right ? `<span class="rt ${p.on ? "on" : ""}">${e(p.right)}</span>` : ""}</div>`,
    h1: (p) => `<h1 class="${p.c ? "c" : ""}">${e(p.t)}</h1>`,
    p: (p) => `<p class="${p.c ? "c" : ""} ${p.sm ? "sm" : ""}">${md(p.t)}</p>`,
    field: (p) => `<div class="fld"><label><span>${e(p.l)}</span>${p.add ? '<span class="add">+ Add</span>' : ""}</label>
      <div class="box ${p.s || ""}">${p.flag ? '<i class="flag"></i><span class="cc">+966</span>' : ""}
      <span class="${p.v ? "val" : "ph"}">${e(p.v || p.ph || "")}${p.caret ? '<i class="caret"></i>' : ""}</span>
      ${p.drop ? '<span class="chev">⌄</span>' : ""}${p.cal ? '<span class="cal">▦</span>' : ""}${p.go ? '<span class="chev r">›</span>' : ""}</div>
      ${p.err ? `<div class="err">${md(p.err)}</div>` : ""}</div>`,
    opts: (p) => `<div class="opts">${p.o.map((x) => `<div class="${x === p.sel ? "sel" : ""}">${e(x)}</div>`).join("")}</div>`,
    picker: () => `<div class="kb-bar"><span>Cancel</span><span>Done</span></div><div class="picker">
      <div class="r f">August  17  2010</div><div class="r">September  18  2011</div><div class="r">October  19  2012</div>
      <div class="r cur">November  20  2013</div><div class="r">December  21  2014</div><div class="r">January  22  2015</div><div class="r f">February  23  2016</div></div>`,
    otp: (p) => `<div class="otp">${Array.from({ length: 6 }, (_, i) => `<div class="${i === p.cur ? "cur" : ""} ${p.dark && i < (p.c || []).length ? "dk" : ""}">${e((p.c || [])[i] || "")}</div>`).join("")}</div>`,
    note: (p) => `<div class="note">${md(p.t)}</div>`,
    link: (p) => `<div class="link">${e(p.t)}</div>`,
    grow: () => `<div class="grow"></div>`,
    btn: (p) => `<div class="btn ${p.k || "dark"}">${e(p.t)}</div>`,
    keypad: (p) => `${p.bar ? '<div class="kb-bar"><span>Cancel</span><span>Done</span></div>' : ""}<div class="keypad">${["1", "2", "3", "4", "5", "6", "7", "8", "9", p.dot ? "·" : "", "0", "⌫"].map((k) => `<span class="${k === "⌫" ? "del" : ""}">${k}</span>`).join("")}</div>`,
    logo: (p) => `<div class="logo"><span class="mark"></span><div>${e(p.t)}</div></div>`,
    notif: (p) => `<div class="notif"><div class="nh"><span class="ic ${p.mail ? "mail" : ""}"></span>${p.mail ? "MAIL" : "MESSAGES"}<span>now</span></div><b>${e(p.from)}</b><div>${e(p.t)}</div></div>`,
    toast: (p) => `<div class="toast"><span class="i">i</span><div>${p.h ? `<b>${e(p.h)}</b>` : ""}<div>${e(p.t)}</div></div><span class="x">×</span></div>`,
    sheet: (p) => `<div class="dim"></div><div class="sheet" style="${p.top ? `top:${p.top}px` : ""}">${p.close ? '<span class="x">×</span>' : ""}
      <div class="sic ${p.i}">${p.i === "ok" ? "✓" : p.i === "warn" ? "!" : "i"}</div><h3>${e(p.h)}</h3>${p.t ? `<p>${e(p.t)}</p>` : ""}
      ${p.link ? `<div class="link">${e(p.link)}</div>` : ""}${p.cta ? `<div class="btn dark">${e(p.cta)}</div>` : ""}</div>`,
    steps: (p) => `<div class="steps">${p.s.map(([ic, t]) => `<div><span class="sic2">${ic}</span><span>${e(t)}</span></div>`).join("")}</div>`,
    upload: (p) => `<div class="upl"><div class="uh"><span>${e(p.l || "Upload PDF")}</span><span class="${p.ok ? "ok" : "inc"}">${p.ok ? "Complete ●" : "Incomplete ●"}</span><span>⌃</span></div>
      ${(p.btns || []).map((b) => `<div class="dash">${e(b)}</div>`).join("")}${(p.files || []).map((f) => `<div class="file"><i class="doc"></i><span>${e(f)}</span>${p.del ? '<span class="trash">🗑</span>' : ""}</div>`).join("")}</div>`,
    rows: (p) => `<div class="rows">${p.r.map(([a, b]) => `<div><small>${e(a)}</small><span>${e(b)}</span></div>`).join("")}</div>`,
    statusRows: (p) => `<div class="srows">${p.r.map((r) => `<div><span>${e(r)}:</span><span class="ok">Complete <i>✓</i></span></div>`).join("")}</div>`,
    email: () => `<div class="mailapp"><div class="mh">‹ <b>Almost done! Just your email addr…</b> AA</div><div class="mb">
      <div class="logo tiny"><span class="mark"></span>Neo Pay Business</div><p>Hi Merchant,</p><p>Thank you for signing up to Neo Pay Business.<br>Click the button below to verify your email.</p>
      <div class="pill">Verify email address</div><p>Wasn't you? Please ignore this email.</p><p>Thank you,<br>Team Neo Pay Business</p></div>
      <div class="mf"><span>Delete</span><span>Archive</span><span>Move</span><span>Reply</span><span>More</span></div></div>`,
    homeTop: (p) => `<div class="htop">${p.welcome ? `<span class="av ghost">👤</span><span>Welcome to Neo Pay</span>` : `<span class="av">S</span><span>Hi Shakira</span>`}<span class="bell">🔔<i>3</i></span></div>`,
    addCard: () => `<div class="addcard"><div class="rings"><div>ADD A<br>CARD</div></div><p>Add a card to get started</p></div>`,
    balance: (p) => `<div class="bal"><small>SAR</small>${e(p.v)}<span class="eye">◌</span></div>
      <div class="acts"><div><i class="blue">+</i>Add funds</div><div><i class="orange">⇄</i>${e(p.second)}</div></div>`,
    nudge: (p) => `<div class="nudge"><span class="tog"></span><div><b>${e(p.h)}</b><small>${e(p.t)}</small></div><span class="x">×</span></div>`,
    sectionHead: (p) => `<div class="shead"><span>${e(p.t)}</span>${p.all ? "<span>See all</span>" : ""}</div>`,
    recents: () => `<div class="recents"><div><span class="av">W</span><small>Wade</small></div>${"<div><span class=\"av ghost\"></span></div>".repeat(4)}</div>`,
    offers: () => `<div class="offers">${[["S", "Starbucks", "Free drink"], ["B", "Booking.com", "1% cash back"], ["N", "Netflix", "1% cash back"]].map(([l, n, o]) => `<div><span class="x">×</span><span class="lg">${l}</span><b>${n}</b><small>${o}</small></div>`).join("")}</div>`,
    tabbar: (p) => p.merchant
      ? `<div class="tabbar m"><span>▣</span><span>⇋</span><span>▥</span><span class="me ${p.ring ? "ring" : ""}">C</span></div>`
      : `<div class="tabbar"><span>⌂</span><span class="plus">+</span><span>⌗</span></div>`,
    amount: () => `<div class="amt"><small>SAR</small><div>0.00</div></div>`,
    storeTop: () => `<div class="stop"><span>⇥</span><span class="bell">🔔<i>3</i></span></div>`,
    store: () => `<div class="store"><span class="av big">C</span><div><b>Carrefour - The Line</b><small>Merchant ID: 123456789 - 1</small></div></div>
      <div class="mbal"><small>Balance</small><div><small>SAR</small>0.00</div></div>`,
    tiles: () => `<div class="tiles">${[["teal", "▭", "Card management"], ["orange", "⌂", "Bank account Settings"], ["blue", "+", "Add funds"], ["amber", "⚙", "Settings"]].map(([c, i, t]) => `<div><i class="${c}">${i}</i><span>${t}</span></div>`).join("")}</div>`,
    qrBadge: () => `<div class="qrb">▦</div>`,
    settings: () => {
      const g = (rows) => `<div class="sgroup">${rows.map((r) => `<div><span class="si">◎</span><span>${r}</span><span class="chev r">›</span></div>`).join("")}</div>`;
      return g(["Business profile"]) + `<div class="sl">Account management</div>` + g(["Manage cards", "Wallet account"]) + `<div class="sl">Profile settings</div>` + g(["Account details", "Security &amp; privacy", "Help", "العربية"]);
    },
    meter: (p) => `<div class="meter ${p.sm ? "sm" : ""}"><small>Account status:</small><div><i></i><span>✓ 100%</span></div></div>`,
    toggles: () => {
      const blk = (h, sub, on) => `<div class="tg-h"><b>${h}</b><small>${sub}</small></div><div class="tg">${["Push", "Email", "SMS"].map((x, i) => `<div><span>${x}${x === "SMS" ? "<small>Carrier charges apply</small>" : ""}</span><i class="sw ${on[i] === 1 ? "on" : on[i] === 2 ? "dis" : ""}"></i></div>`).join("")}</div>`;
      return blk("Account updates", "Keep track of any changes to your account security", [0, 0, 2]) + blk("Payment", "Keep track of any payments sent and received", [1, 1, 2]) + blk("Smart alerts", "Keep track of sales with smart alerts and reports", [0, 0, 1]);
    },
    avatarEdit: () => `<div class="bp-av"><span class="av big">C</span><i>✎</i></div>`,
    avatarBig: () => `<div class="bp-av"><span class="av huge">C</span></div>`,
    verified: (p) => `<div class="rows">${p.r.map(([a, b, v, link]) => `<div class="${v ? "vf" : ""}"><small>${e(a)}</small><span class="${link ? "lnk2" : ""}">${e(b)}</span>${v ? '<em>Verified ✓</em>' : ""}</div>`).join("")}</div>`,
    review: () => `<div class="review"><div class="rv-h"><span>←</span><span class="lnk">Edit</span></div><h4>Review &amp; Confirm</h4><p>Please confirm these details are correct.<br>Any errors may delay the approval process.</p>
      ${[["Mobile number", "+966 555 4345 6783"], ["Email address", "theline.business@carrefour.com"], ["Company name", "Carrefour UAE"], ["Company type", "Private"], ["Company registration number", "123456789"], ["Senior management(s)", "Bobby Ali"], ["Business category", "Grocery"], ["Transaction volume (monthly)", "1001 - 5000"], ["Transaction value (monthly)", "SAR 5,001 - SAR 10,000"]].map(([a, b]) => `<div><small>${a}</small><span>${b}</span></div>`).join("")}
      <div class="rv-up"><span>Upload PDF, JPEG or PNG</span><span class="ok">Complete ●</span></div>${["Company registration certificate.pdf", "identity 01.pdf", "identity 02.jpg"].map((f) => `<div class="file sm"><i class="doc"></i><span>${f}</span></div>`).join("")}
      <div class="btn dark sm">Submit</div></div>`,
    editDetails: () => `<div class="ed">${[["Company registration number", "123456789"], ["Company registration expiry date", "10/23/2025"], ["Company type", "Private"]].map(([a, b]) => `<div><small>${a}</small><span>${b}</span></div>`).join("")}</div>`,
  };

  function render(screen) {
    return `<div class="screen ${screen.bg || ""}">${screen.c.map(([name, props]) => {
      const fn = C[name];
      return fn ? fn(props || {}) : `<!-- unknown ${name} -->`;
    }).join("")}</div>`;
  }

  window.NeoUI = { render };
})();
