// The project mind map and the 2022 roadmap, recreated from the originals.
// Mind map colour = release: g = PI 1 (Jan), o = PI 2 (April), b = PI 3 (July), p = MVP (Oct), n = no tag.
(function () {
  const N = (t, c = "n", k = []) => ({ t, c, k });

  const business = N("Neo business", "n", [
    N('Digital onboarding "Sign up"', "n", [
      N("KYB", "n", [
        N("Manual process", "g", [N("Maker", "g", [N("Through NEO Business App")]), N("Checker", "g", [N("Compliance team through Neo Business backend portal")])]),
        N('OCR & Document Verification "Real Time" ( when available from NEO)'),
      ]),
      N("Digital Sanction Screening", "n", [
        N("International sanction screening", "o", [N("Integration with T&R / 3i Infotech")]),
        N("Local Sanction Screening", "b", [N("Integration with Local Bank Partner")]),
      ]),
      N("Risk Assessment", "o", [
        N("Merchant Limits", "o", [N("MCC Based Daily Limit (in/out)"), N("MCC Based Monthly limit (in/out)")]),
        N("Fraud Prevention", "o", [N("Transactions based limits"), N("Geo Location"), N("Rule Based cases")]),
        N("Risk Level Calculation", "o"),
      ]),
    ]),
    N("Payment Acceptance", "n", [
      N("QR Payment", "n", [N("MQR", "g", [N("Integrate SAQAR QR Code")]), N("CQR", "o")]),
      N("Card Payment", "p", [N("Soft-POS Integration", "p")]),
      N("in-app Payment", "g"), N("Web-Checkout", "g"), N("Direct Debit", "b"), N("3rd Party App Payment", "g"),
    ]),
    N("Login Management", "n", [N("Passcode Login", "g"), N("Biometric Login", "g"), N("Lock Account", "o"), N("Unlock Account", "o"), N("Logout", "g")]),
    N("Account Management", "g", [
      N("Account Info", "g", [N("View Account Info", "n", [N("Integrated")]), N("Copy Account Info", "n", [N("Integrated")]), N("Share Account Info", "n", [N("Integrated")])]),
      N("Update KYB info", "g", [N("Update ID Expiry Date", "n", [N("Integrated")]), N("Notification on the Expiry of ID", "n", [N("Integrated")]), N("Lock the account while no valid ID", "n", [N("Integrated")])]),
      N("Deactivate Account", "g"),
    ]),
    N("Fund Management", "n", [
      N("Cash in", "x", [
        N("Card Management", "g", [N("Add Token", "n", [N("Integrated")]), N("Remove Token", "n", [N("Integrated")]), N("Set Default Token", "n", [N("Integrated")])]),
        N("Card Topup", "g", [N("3d Secure", "n", [N("Integrated")]), N("Non 3d Secure", "n", [N("Integrated")])]),
        N("Apple Pay topup", "o", [N("Integrated")]),
        N("Bank Account Topup", "o"),
      ]),
      N("Cash Out", "n", [N("Transfer to bank account", "o"), N("International Remittance", "p")]),
    ]),
    N("Transfer", "g", [N("M2M Transfer", "g", [N("Neo to Neo", "n", [N("Integrate SAQAR QR Code")])])]),
    N("Transactions Management", "n", [N("View Transactions", "g"), N("Filter transactions", "o"), N("Refund Transactions", "o"), N("Share transaction Detail", "o"), N('Print Receipt "Download trx info"', "g")]),
    N("Notifications Management", "n", [
      N("Transactions Notification", "g", [N("Push"), N("Email"), N("SMS")]),
      N("Login Notifications", "g", [N("Push"), N("Email"), N("SMS")]),
      N("Event notifications", "p", [N("Push"), N("Email"), N("SMS")]),
    ]),
    N("Customer Service", "n", [N("Live Chat", "p"), N("Call Customer service", "b")]),
    N("Security Management", "g", [N("Bio Metric Management", "g", [N("Enable / Disable")]), N("Password Management", "g", [N("Change / Forget Password")])]),
    N("Cashier Management", "o", [N("Add / Remove / Update Cashier", "o"), N("Transactions Authority", "o"), N("Create Static QR Code", "o")]),
    N("Reports Management", "b", [N("Daily/ weekly/ Monthly/ Quarterly / Annual Sales Report", "b"), N("Daily/ weekly/ Monthly/ Quarterly / Annual Refund Report", "b"), N("Daily Statement", "b"), N("Cashier Performance Reports", "b")]),
    N("Reconciliation Management", "o", [N("Reconciliation Files extraction", "o"), N("Reconciliation Exceptions", "o"), N("Exceptions Handling", "o")]),
    N("Data Analytics", "p", [N("Conversion Cycle", "p"), N('Merchant insights "branches, peak time, best cashiers, ticket size, etc.."', "p"), N('Transactions insights " Type, Volu, Count"', "p")]),
    N("Settlement Management", "b", [N("Extract Settlement files", "b"), N("Initiate Settlement Request", "b"), N("Check Settlement Results", "b"), N("Generate Settlement Reports", "b")]),
  ]);

  const pay = N("Neo Pay", "n", [
    N('Digital onboarding "Sign up"', "n", [
      N("KYC", "n", [N("National ID / Iqama holder Verification", "g"), N("OCR Scanning / Document verification / Face ID Verification", "b"), N("NEO ID Verification", "p")]),
      N("Sanctions Screening", "n", [N("International Sanction Screening", "o"), N("local sanction screening", "b")]),
      N("Risk Assessment", "n", [N("Customer Risk Classification", "g"), N("User Limits", "o", [N("Configured on the backend")]), N("Fraud Prevention Rules", "o", [N("Configured on the backend")])]),
      N("Account Creation", "g", [N("Wallet Account ID", "g")]),
      N("Setup bio-metric", "g"),
    ]),
    N("Login Management", "n", [N("Passcode Login", "g"), N("Biometric Login", "g"), N("Lock Account", "o"), N("Unlock Account", "o"), N("Logout", "g")]),
    N("Account Management", "g", [
      N("Account Info", "g", [N("View Account Info"), N("Copy Account Info"), N("Share Account Info")]),
      N("Update KYC info", "g", [N("Update ID Expiry Date"), N("Notification on the Expiry of ID"), N("Lock the account while no valid ID")]),
      N("Deactivate Account", "g"),
    ]),
    N("Fund Management", "n", [
      N("Cash in", "n", [
        N("Card Management", "g", [N("Add Token"), N("Remove Token"), N("Set Default Token")]),
        N("Card Topup", "g", [N("3d Secure"), N("Non 3d Secure")]),
        N("Apple Pay topup", "o"), N("Bank Account Topup", "o"),
      ]),
      N("Cash Out", "n", [N("Transfer to bank account", "o"), N("International Remittance", "p")]),
    ]),
    N("Transfer", "n", [
      N("P2P Transfer", "g"),
      N("Request Transfer", "o", [N("Request"), N("Check Status"), N("Re-notify")]),
      N("Split the bill", "b", [N("Request"), N("Check status"), N("Re-Notify")]),
    ]),
    N("Payment", "n", [
      N("Offline Payment", "n", [N("Scan to Pay", "g"), N("Present to Pay", "o")]),
      N("Online Payment", "n", [N("in-app Payment", "g"), N("Web-Checkout", "g"), N("Direct Debit", "b"), N("3rd Party App Payment", "g")]),
    ]),
    N("Transactions Management", "n", [N("View Transactions", "g"), N("Filter transactions", "o"), N("Hide Transactions", "o"), N("Share transaction Detail", "o"), N('Print Receipt "Download trx info"', "g")]),
    N("Security Management", "g", [N("Bio Metric Management", "g", [N("Enable / Disable")]), N("Password Management", "g", [N("Change / Forget Password")])]),
    N("Notifications Management", "n", [N("Transactions Notification", "g"), N("Login Notifications", "g"), N("Marketing Notifications", "b"), N("Event notifications", "p")]),
    N("Customer Service", "n", [N("Live Chat", "p"), N("Call Customer service", "b")]),
    N("Reconciliation Management", "o", [N("Reconciliation Files extraction", "o"), N("Reconciliation Exceptions", "o"), N("Exceptions Handling", "o")]),
    N("Marketing Management", "o", [N("Campaign Management System", "o"), N("Push Campaigns to the application", "o")]),
    N("Data Analytics", "p", [N("Conversion Cycle", "p"), N('Customers insights "Gender, Age, Nationality, etc..', "p"), N('Transactions insights " Type, Volu, Count"', "p")]),
    N("Settlement Management", "b", [N("Extract Settlement files", "b"), N("Initiate Settlement Request", "b"), N("Check Settlement Results", "b"), N("Generate Settlement Reports", "b")]),
  ]);

  const roadmap = [
    { pi: "PI 1 Jan '22",
      outcomes: {
        customer: ["New customers can sign up for a Neo Pay account and digital wallet", "Customers can login and logout of the Neo Pay mobile app using biometrics and passcode", "Customers can link debit and credit cards to their wallet and add funds to it for payments", "Customers can make payments to physical merchants via MQR codes and merchants in digital channels using an embedded payments service", "Customers can pay other Neo Pay users", "Customers can view and download their transactions and receive notifications about login and transaction activity on their account"],
        merchant: ["New merchants can sign up for a Neo Pay account and digital wallet", "Merchants can login and logout of the Neo Pay mobile app using biometrics and passcode", "Merchants can accept payments via MQR code in physical locations", "Merchants can embed Neo Pay in their mobile and web commerce journeys to take immediate one-off payments", "Merchants can link debit and credit cards to their app and add fund to their account", "Merchants can make transfers to other Neo Pay merchants"],
        colleague: ["Neo Pay support colleagues can create merchant accounts", "Neo Pay compliance colleagues can manage customer and merchant onboarding exceptions", "Neo Pay support colleagues can view customer and merchant details", "Neo Pay support colleagues can view customer and merchant payment transactions"] },
      features: {
        customer: ["Sign up", "Create wallet account", "Link / Remove any bank Card to/ From the wallet", "Add funds to the wallet", "Perform MQR payment Transactions", "Login / Logout", "check all the transactions details", "Download transactions details", "Check Account Details", "Deactivate Wallet Account", "Transfer Money", "Receive Notifications on login / transacting", "Update KYC info"],
        merchant: ["Sign up", "Login / logout", "Wallet Account Creation", "Generate Static / Dynamic QR code", "View transactions details", "Embedded Payment APIs", "Login & Payment Notifications", "Accept MQR Payment", "Add / Remove any bank Cards to the Wallet", "Add Funds to the Wallet", "View Account Details", "Merchant to Merchant Transfer"],
        colleague: ["Compliance case management", "View transactions", "View customer details", "View merchant details", "Onboard Merchants to the system"] },
      platform: ["KYC check module", "Integrate Account Management System", "Integrate Payment gateway", "Integrate SMS Gateway", "Integrate Email Gateway", "Integrate SAQAR QR Code", "Integrate Push Notifications system"] },
    { pi: "PI 2: April '22",
      outcomes: {
        customer: ["Customers can Add funds to their wallets via Apple pay or Via local bank account transfer", "Customer can pay the merchants even if they are not connected to the internet via CQR payment.", "Customers can withdraw their wallet balance back to any local bank in saudi arabia.", "Customers can request Money from any of their contact with a single click, and they can follow up their request.", "Customers can manage their transactions by download or hide any non necessary transaction."],
        merchant: ["Merchants will be able to control their limits, lock and unlock the wallet account.", "Merchants should be able to Add funds to their wallet via Apple pay or local bank transfer.", "Merchant can link their local bank account to withdraw the money they collect on a daily basis.", "Merchant can initiate a refund transaction to the customers.", "Merchant can add/remove/update authority for any cashier and print the cashier Static QR code.", "Merchant Can accept CQR payments in the physical stores."],
        colleague: ["Neo Pay operations teams can set and update customers and merchants limits", "Neo Pay compliance teams can define and manage fraud prevention rules", "Neo Pay compliance teams can configure the risk score engine and link the risk level to limits or rules.", "Neo Pay marketeers can create and push new marketing campaigns to the customers.", "Neo Pay operations can oversee the reconciliation process and solve daily exception problems", "Neo Pay operations manage merchants and customers status as per any requirements from compliance or risk teams.", "Neo Pay system administrators can create new users on the system and configure their system privileges and authorities."] },
      features: {
        customer: ["Perform Online / Offline CQR payment transactions", "Lock & Unlock Wallet Account", "Add Funds via local bank transfer", "withdraw funds to a local bank in saudi", "Pay via CQR", "Filter transactions on transaction history tab", "Download any transaction receipt", "Hide transactions", "Add Funds via Apple Pay", "Check New Marketing Campaigns", "Request Money transfer from contacts", "Refunds", "Change Passcode", "Enable/Disable Biometric", "Reset Passcode"],
        merchant: ["control Merchant Limits", "Lock & Unlock the merchant account", "Add Funds to the wallet account Via Apple Pay", "Withdraw funds from the wallet to any local bank account", "Initiate refund transactions", "Filter transactions history", "Add Cashiers to the merchants", "Manage Cashier authorities", "Generate Cashier Static QR codes", "Add Funds to the wallet account Via local bank transfer", "Accept CQR Payments"],
        colleague: ["Manage Customers limits", "Manage Fraud Prevention Rules", "Manage Risk Parameters and score engine", "Manage Marketing Campaigns", "Manage the Reconciliation Process", "Solve exceptions on Reconciliation process.", "Manage Merchants limits", "Review and update cashiers details", "Manage Merchant status", "Access control Matrix"] },
      platform: ["Integrate with international sanctions screening service", "Integrate with Identity verification Service", "Integrate with Risk Assessment Engine", "Integrate with Fraud Prevention Engine", "Push Marketing campaigns to the application", 'integrate marketing management system "Campaigns management"', "Configure the reconciliation system"] },
    { pi: "PI 3: July '22",
      outcomes: {
        customer: ["New customers can fulfil KYC and same person verification by scanning documents and biometric (Face ID) verification", "Customers can set up a direct debit for subscriptions", "Customers can split bills or transactions with contacts (Phone contacts, people nearby? )", "Customers can get personalised marketing notifications", "Customers can call customer support from the app"],
        merchant: ["Merchants can get their performance reports – sales, cashier reports for any set duration", "Merchant can get Refund reports for any set duration", "Merchants can access daily statements", "Merchants can call the support center from the app"],
        colleague: ["Neo Pay support colleagues can take customer and merchant calls", "Ability to log customer and merchant calls", "Neo Pay colleagues can be assigned actions / owners as defined in the workflow", "Neo Pay teams can manage workflows for their teams"] },
      features: {
        customer: ["Scan Documents to sign up + Bio metric verification", "Split any transactions or bill with contacts", 'Subscriptions payment "Direct Debit"', "Receive Notification on any new added marketing campaign", "Call the customer service from the application", "Manage Notifications"],
        merchant: ["Check Daily / Weekly/ Monthly / Quarterly / Annual Sales Reports", "Check Daily / Weekly/ Monthly / Quarterly / Annual cashier Reports", "Check Daily Statement reports", "Check Daily / Weekly/ Monthly / Quarterly / Annual Refund Reports", "Call the customer service from the application"],
        colleague: ["Receive customer calls", "Log customer call", "Configure/ manage workflow", "Assign owners/ actions", "Generate Reports about Customers/ Merchants", "Solve Reconciliation problems", "Credit/ Debit Functionality to customers and merchants", "Solve Settlement Problems"] },
      platform: ["Configure the Settlement system and generate daily settlement files.", "Integrate Local Sanction Screening service from the partner bank", "Integrate with International remittance partner"] },
    { pi: "PI 4: Oct '22",
      outcomes: {
        customer: ["Customers can make international payments", "Customers can get support from Neo Pay support staff using Live Chat", "Customers can track their expenses and link them to their transactions"],
        merchant: ["Merchants can xxx"],
        colleague: ["Neo Pay support colleagues can manage customer complaints", "Neo Pay product managers can get rich insights into Neo Pay usage using analytics"] },
      features: {
        customer: ["Verify NEO ID", "Transfer Money international", "Live chat with Customer service", "Track the expenses from transactions history"],
        merchant: ["Accept Card Payments", "Transfer Money International", "Live chat with customer service"],
        colleague: ["Login to the chat service and solve customers complains", 'Merchant insights "branches, peak time, best cashiers, ticket size, etc.."', 'Customers insights "Gender, Age, Nationality, etc..', "Conversion Cycle Reports", 'Transactions insights " Type, Volu, Count"', "Configure the soft-POS configuration per merchant", "Check the heatmaps reports", "Define Event based notifications"] },
      platform: ["Build the data analytics Platform", "Integrate with Heatmaps and Event based analytics platforms", "Integrate in- app chatting tool"] },
  ];

  window.NEO_RESEARCH = { business, pay, roadmap };
})();
