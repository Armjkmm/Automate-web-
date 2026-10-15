// const { it } = require("@faker-js/faker");

function goToSubMenuAllCompany() {
  cy.get(
    ".css-1mvsuhg > .MuiDrawer-root > .MuiPaper-root > .css-1jd25az > .MuiList-root > :nth-child(2) > #MAINMENU_6 > .MuiListItemText-root > .MuiTypography-root",
  ).click();
  cy.wait(3000);
  let companyListBtn = cy.get(
    "#SUB_MENU_6_1_1 > .MuiListItemText-root > .MuiTypography-root",
    { timeout: 20000 },
  );
  companyListBtn.should("be.visible");
  companyListBtn.click();
}

function goToSubMenuReportLog() {
  cy.get(
    ".css-1mvsuhg > .MuiDrawer-root > .MuiPaper-root > .css-1jd25az > .MuiList-padding > :nth-child(9) > #MAINMENU_1",
  ).click();
  cy.wait(3000);
  let companyListBtn = cy.get("#SUB_MENU_1_1", { timeout: 20000 });
  companyListBtn.should("be.visible");
  companyListBtn.click();
}

function goToSubMenuTransactionQRCreditCard() {
  cy.get(
    ".css-1mvsuhg > .MuiDrawer-root > .MuiPaper-root > .css-1jd25az > .MuiList-root > :nth-child(4) > #MAINMENU_8",
  ).click();
  cy.wait(3000);
  let transactionQRCSPageBtn = cy.get("#SUB_MENU_8_7_1", { timeout: 20000 });
  transactionQRCSPageBtn.should("be.visible");
  transactionQRCSPageBtn.click();
}

function goToSubMenuTransactionPromptPay() {
  cy.get(
    ".css-1mvsuhg > .MuiDrawer-root > .MuiPaper-root > .css-1jd25az > .MuiList-root > :nth-child(4) > #MAINMENU_8",
  ).click();
  cy.wait(3000);
  let transactionPPPageBtn = cy.get("#SUB_MENU_8_2_1", { timeout: 20000 });
  transactionPPPageBtn.should("be.visible");
  transactionPPPageBtn.click();
}

function goToAuditLog() {
  cy.intercept("POST", "/audit/api/audit/menu").as("auditLogPage");
  cy.get(
    ".css-1mvsuhg > .MuiDrawer-root > .MuiPaper-root > .css-1jd25az > .MuiList-padding > :nth-child(9) > #MAINMENU_1",
  ).click();
  cy.wait(3000);
  cy.get("#SUB_MENU_1_2").click();
  cy.wait("@auditLogPage");
}

function goToNotificationLogPromptPay() {
  cy.intercept("POST", "/transaction-tqrc/api/transaction/tqrc/search").as(
    "notificationLogPromptPayPage",
  );
  cy.get(
    ".css-1mvsuhg > .MuiDrawer-root > .MuiPaper-root > .css-1jd25az > .MuiList-padding > :nth-child(9) > #MAINMENU_1",
  ).click();
  cy.wait(3000);
  cy.get("#SUB_MENU_1_3").click();
  cy.wait("@notificationLogPromptPayPage");
}

function goToNotificationLogQRCS() {
  cy.intercept("POST", "/notification-log/api/notification-log/list").as(
    "notificationLogQRCSPage",
  );
  cy.get(
    ".css-1mvsuhg > .MuiDrawer-root > .MuiPaper-root > .css-1jd25az > .MuiList-padding > :nth-child(9) > #MAINMENU_1",
  ).click();
  cy.wait(3000);
  cy.get("#SUB_MENU_1_4").click();
  cy.wait("@notificationLogQRCSPage");
}

let startDateNotFound = "31/08/2025";
let endDateNotFound = "31/08/2025";
let startHaveData = "03/09/2025";
let endHaveData = "03/09/2025";
let startHaveDataReportLog = "01/08/2026";
let endHaveDataReportLog = "01/09/2026";
let midQRPP = "862846318025752";

let userName = "TESTMERCDGOAD3";
let userNameRolePP = "Najaowner";
let userNameRoleQRCS = "monowner";
let transactionIDPP = "ZDGOE260903085842XSI";
let transactionIDQRCS = "ZDGOE260903085942UOJ";
let companyName = "CMU56";
let MID = "862846318025752";
let acountNumber = "0541056438";
let companyID = "907d4db9-1a9e-4b19-bcbc-71131e4d680a";

describe("Test Scenario: 08 Audit Log", () => {
  beforeEach(() => {
    // auto login to enter portal page
    cy.loginBankPortalPageUAT(
      Cypress.env("ADMIN_USERNAME"),
      Cypress.env("ADMIN_PASSWORD"),
    );
    // // Startเปลี่ยนภาษา Web ให้เป็นภาษา English
    // cy.get("#BT_CHANGE_LANG").click();
    // cy.wait(1000);
    // cy.get("#MENU_LANG_EN > .MuiTypography-root").click();
    // cy.wait(1000);
    // // End เปลี่ยนภาษา Web ให้เป็นภาษา English
  });
  context("1_Search Audit log", () => {
    it("TS08_TC01_Click Audit log sub-menu", () => {
      cy.intercept("POST", "/audit/api/audit/list").as("waitAuditLogPage");
      goToAuditLog();
      cy.wait("@waitAuditLogPage");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS08_TC02_Search by Username data not found", () => {
      goToAuditLog();
      cy.get("#TF_ActionBy").type("Arm");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.intercept("POST", "/audit/api/audit/list").as("waitAuditLogPage");
      cy.get("#BT_SEARCH").click();
      cy.wait("@waitAuditLogPage");
      cy.contains("Data Not Found");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS08_TC03_Search by Date data not found", () => {
      goToAuditLog();
      cy.get("#TF_DATERANGEPICKER_START").type(startDateNotFound);
      cy.get("#TF_DATERANGEPICKER_END").type(endDateNotFound);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.intercept("POST", "/audit/api/audit/list").as("waitAuditLogPage");
      cy.get("#BT_SEARCH").click();
      cy.wait("@waitAuditLogPage");
      cy.contains("Data Not Found");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS08_TC04_Search by Role and Date data not found", () => {
      goToAuditLog();
      cy.get("#TF_DATERANGEPICKER_START").type(startDateNotFound);
      cy.get("#TF_DATERANGEPICKER_END").type(endDateNotFound);
      cy.get("#TF_Role").click();
      cy.wait(1000);
      cy.get("#MENU_ADMIN").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.intercept("POST", "/audit/api/audit/list").as("waitAuditLogPage");
      cy.get("#BT_SEARCH").click();
      cy.wait("@waitAuditLogPage");
      cy.contains("Data Not Found");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS08_TC05_Search by Menu and Date data not found", () => {
      goToAuditLog();
      cy.get("#TF_DATERANGEPICKER_START").type(startDateNotFound);
      cy.get("#TF_DATERANGEPICKER_END").type(endDateNotFound);
      cy.get("#DD_MENU").click();
      cy.wait(1000);
      cy.get("#MENU_COMPANY_REGISTER").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.intercept("POST", "/audit/api/audit/list").as("waitAuditLogPage");
      cy.get("#BT_SEARCH").click();
      cy.wait("@waitAuditLogPage");
      cy.contains("Data Not Found");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS08_TC06_Search by Username", () => {
      goToAuditLog();
      cy.get("#TF_ActionBy").type(userName);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.intercept("POST", "/audit/api/audit/list").as("waitAuditLogPage");
      cy.get("#BT_SEARCH").click();
      cy.wait("@waitAuditLogPage");
      cy.contains(userName);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS08_TC07_Search by Date", () => {
      goToAuditLog();
      cy.get("#TF_DATERANGEPICKER_START").type(startHaveData);
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.intercept("POST", "/audit/api/audit/list").as("waitAuditLogPage");
      cy.get("#BT_SEARCH").click();
      cy.wait("@waitAuditLogPage");
      cy.contains("Success");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS08_TC08_Search by Role and Date", () => {
      goToAuditLog();
      cy.get("#TF_DATERANGEPICKER_START").type(startHaveData);
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData);
      cy.get("#TF_Role").click();
      cy.wait(3000);
      cy.get("#MENU_ADMIN").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.intercept("POST", "/audit/api/audit/list").as("waitAuditLogPage");
      cy.get("#BT_SEARCH").click();
      cy.wait("@waitAuditLogPage");
      cy.contains("Success");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS08_TC09_Search by Menu and Date", () => {
      goToAuditLog();
      cy.get("#TF_DATERANGEPICKER_START").type(startHaveData);
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData);
      cy.get("#DD_MENU").click();
      cy.wait(3000);
      cy.get("#MENU_AUDIT_LOG").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.intercept("POST", "/audit/api/audit/list").as("waitAuditLogPage");
      cy.get("#BT_SEARCH").click();
      cy.wait("@waitAuditLogPage");
      cy.contains("Success");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
  });

  context("2_Audit log Detail", () => {
    it("TS08_TC10_Search by Username", () => {
      goToAuditLog();
      cy.get("#TF_ActionBy").type(userName);
      cy.intercept("POST", "/audit/api/audit/list").as("waitAuditLogPage");
      cy.get("#BT_SEARCH").click();
      cy.wait("@waitAuditLogPage");
      cy.contains(userName);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".MuiTableBody-root > :nth-child(1) > :nth-child(7)").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
  });

  context("3_Export Audit Log", () => {
    it("TS08_TC11_Click Download Audit Log in main Audit Log page", () => {
      goToAuditLog();
      cy.get("#BT_EXPORT_EXCEL").click();
      cy.wait(3000);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.renameNewfile("xlsx"); // ไม่ต้องระบุชื่อไฟล์, มันจะหาตัวล่าสุดให้เอง
      cy.get("@filename").then((newFileName) => {
        cy.log("ชื่อไฟล์ใหม่ล่าสุด:", newFileName);
        cy.validateFile(newFileName, 1);
      });
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.RUNNER);
    });
    it("TS08_TC12_Search by Username then Click Download Audit Log", () => {
      goToAuditLog();
      cy.get("#TF_ActionBy").type(userName);
      cy.intercept("POST", "/audit/api/audit/list").as("waitAuditLogPage");
      cy.get("#BT_SEARCH").click();
      cy.wait("@waitAuditLogPage");
      cy.contains(userName);
      cy.get("#BT_EXPORT_EXCEL").click();
      cy.wait(3000);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.renameNewfile("xlsx"); // ไม่ต้องระบุชื่อไฟล์, มันจะหาตัวล่าสุดให้เอง
      cy.get("@filename").then((newFileName) => {
        cy.log("ชื่อไฟล์ใหม่ล่าสุด:", newFileName);
        cy.validateFile(newFileName, 1);
      });
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.RUNNER);
    });
    it("TS08_TC13_Search by Date then Click Download Audit Log", () => {
      goToAuditLog();
      cy.get("#TF_DATERANGEPICKER_START").type(startHaveData);
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData);
      cy.intercept("POST", "/audit/api/audit/list").as("waitAuditLogPage");
      cy.get("#BT_SEARCH").click();
      cy.wait("@waitAuditLogPage");
      cy.contains("Success");
      cy.get("#BT_EXPORT_EXCEL").click();
      cy.wait(3000);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.renameNewfile("xlsx"); // ไม่ต้องระบุชื่อไฟล์, มันจะหาตัวล่าสุดให้เอง
      cy.get("@filename").then((newFileName) => {
        cy.log("ชื่อไฟล์ใหม่ล่าสุด:", newFileName);
        cy.validateFile(newFileName, 1);
      });
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.RUNNER);
    });
    it("TS08_TC14_Search by Role and Date then Click Download Audit Log", () => {
      goToAuditLog();
      cy.get("#TF_DATERANGEPICKER_START").type(startHaveData);
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData);
      cy.get("#TF_Role").click();
      cy.wait(3000);
      cy.get("#MENU_ADMIN").click();
      cy.intercept("POST", "/audit/api/audit/list").as("waitAuditLogPage");
      cy.get("#BT_SEARCH").click();
      cy.wait("@waitAuditLogPage");
      cy.contains("Success");
      cy.get("#BT_EXPORT_EXCEL").click();
      cy.wait(3000);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.renameNewfile("xlsx"); // ไม่ต้องระบุชื่อไฟล์, มันจะหาตัวล่าสุดให้เอง
      cy.get("@filename").then((newFileName) => {
        cy.log("ชื่อไฟล์ใหม่ล่าสุด:", newFileName);
        cy.validateFile(newFileName, 1);
      });
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.RUNNER);
    });
    it("TS08_TC15_Search by Menu and Date then Click Download Audit Log", () => {
      goToAuditLog();
      cy.get("#TF_DATERANGEPICKER_START").type(startHaveData);
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData);
      cy.get("#DD_MENU").click();
      cy.wait(3000);
      cy.get("#MENU_AUDIT_LOG").click();
      cy.intercept("POST", "/audit/api/audit/list").as("waitAuditLogPage");
      cy.get("#BT_SEARCH").click();
      cy.wait("@waitAuditLogPage");
      cy.contains("Success");
      cy.get("#BT_EXPORT_EXCEL").click();
      cy.wait(3000);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.renameNewfile("xlsx"); // ไม่ต้องระบุชื่อไฟล์, มันจะหาตัวล่าสุดให้เอง
      cy.get("@filename").then((newFileName) => {
        cy.log("ชื่อไฟล์ใหม่ล่าสุด:", newFileName);
        cy.validateFile(newFileName, 1);
      });
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.RUNNER);
    });
  });

  context("4_Log Subkebab Report Log in Company page", () => {
    it("TS08_TC17_TC20_Log Sub kebab Notification Log in Company page", () => {
      goToSubMenuAllCompany();
      cy.get("#TF_COMPANY_NAME").type(companyName);
      cy.get("#BT_SEARCH").click();
      cy.contains(companyName);
      cy.get("#IB_TABLE_MENU_undefined").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#MENU_BUTTON_LOG").click();
      cy.intercept("POST", "/report/api/report/log ").as("goToReportPage");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("Report Log").click();
      cy.wait("@goToReportPage");
      cy.closePopupIfExists();
      cy.get(
        ":nth-child(4) > .css-1jlyu35 > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #TF_DATERANGEPICKER_START",
      ).type(startHaveDataReportLog);
      cy.get(
        ":nth-child(4) > .css-1jlyu35 > :nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > #TF_DATERANGEPICKER_END",
      ).type(endHaveDataReportLog);
      cy.intercept("POST", "/report/api/report/log ").as("goToReportPage");
      cy.get("#BT_SEARCH").click();
      cy.wait("@goToReportPage");
      cy.contains(companyName).should("be.visible");
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(
        ".MuiTableBody-root > :nth-child(1) > .MuiTableCell-alignLeft",
      ).click();
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
  });

  context("6_Log Sub kebab Notification Log PromptPay in Company page", () => {
    it("TS08_TC41_TC44_Log Sub kebab Notification Log PromptPay in Company page", () => {
      goToSubMenuAllCompany();
      cy.closePopupIfExists();
      cy.get("#TF_COMPANY_NAME").type(companyName);
      cy.get("#BT_SEARCH").click();
      cy.contains(companyName);
      cy.get("#IB_TABLE_MENU_undefined").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#MENU_BUTTON_LOG").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.intercept("POST", "/transaction-tqrc/api/transaction/tqrc/search").as(
        "waitNotifacationTQRCPage",
      );
      cy.get("#SUB_MENU_BUTTON_NOTIFICATION_LOG_TQRC").click();
      cy.wait("@waitNotifacationTQRCPage");
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
  });

  context("7_Notification_Log_PromptPay in Company page", () => {
    it("TS08_TC45_TC47_Log Subkebab Notification Log in Notification Log PromptPay page", () => {
      goToSubMenuTransactionPromptPay();
      cy.get("#TF_MID").type(midQRPP);
      cy.get("#BT_SEARCH").click();
      cy.contains(midQRPP);
      cy.intercept("POST", "/transaction-tqrc/api/transaction/tqrc/search").as(
        "waitSearchTransaction",
      );
      cy.get("#DD_STATUS").click();
      cy.wait(1000);
      cy.get("#DD_STATUS_2").click();
      cy.get("#BT_SEARCH").click();
      cy.wait("@waitSearchTransaction");
      cy.get("#IB_TABLE_MENU_undefined").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.intercept("POST", "/transaction-tqrc/api/transaction/tqrc/search").as(
        "waitNotifacationTQRCPage",
      );
      cy.get("#NOTIFICATION_LOG").click();
      cy.contains("Notification Log (PromptPay)");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
  });

  context("8_Search Notification Log PromptPay", () => {
    it("TS08_TC48_TC49_Click Main menu Log", () => {
      goToNotificationLogPromptPay();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS08_TC50_Search by Username data not found", () => {
      goToNotificationLogPromptPay();
      cy.get("#TF_Username").type("gane");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.intercept("POST", "/transaction-tqrc/api/transaction/tqrc/search").as(
        "waitNotifacationTQRCPage",
      );
      cy.get("#BT_SEARCH").click();
      cy.contains("Data Not Found");
      cy.wait("@waitNotifacationTQRCPage");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS08_TC51_Search by Transaction ID data not found", () => {
      goToNotificationLogPromptPay();
      cy.get("#TF_TransactionId").type("SDGO862840718601111");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.intercept("POST", "/transaction-tqrc/api/transaction/tqrc/search").as(
        "waitNotifacationTQRCPage",
      );
      cy.get("#BT_SEARCH").click();
      cy.contains("Data Not Found");
      cy.wait("@waitNotifacationTQRCPage");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS08_TC52_Search by Company Name data not found", () => {
      goToNotificationLogPromptPay();
      cy.get("#TF_CompanyName").type("ganana");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.intercept("POST", "/transaction-tqrc/api/transaction/tqrc/search").as(
        "waitNotifacationTQRCPage",
      );
      cy.get("#BT_SEARCH").click();
      cy.contains("Data Not Found");
      cy.wait("@waitNotifacationTQRCPage");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS08_TC53_Search by  MID data not found", () => {
      goToNotificationLogPromptPay();
      cy.get("#TF_MID").type("862840718602722");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.intercept("POST", "/transaction-tqrc/api/transaction/tqrc/search").as(
        "waitNotifacationTQRCPage",
      );
      cy.get("#BT_SEARCH").click();
      cy.contains("Data Not Found");
      cy.wait("@waitNotifacationTQRCPage");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS08_TC54_Search by Account Number data not found", () => {
      goToNotificationLogPromptPay();
      cy.get("#TF_AccountNumber").type("1112399123");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.intercept("POST", "/transaction-tqrc/api/transaction/tqrc/search").as(
        "waitNotifacationTQRCPage",
      );
      cy.get("#BT_SEARCH").click();
      cy.contains("Data Not Found");
      cy.wait("@waitNotifacationTQRCPage");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS08_TC55_Search by Company ID data not found", () => {
      goToNotificationLogPromptPay();
      cy.get("#TF_CompanyId").type("fd5b08cb-637b-48b8-8b6e-67a7b60df0JJ");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.intercept("POST", "/transaction-tqrc/api/transaction/tqrc/search").as(
        "waitNotifacationTQRCPage",
      );
      cy.get("#BT_SEARCH").click();
      cy.contains("Data Not Found");
      cy.wait("@waitNotifacationTQRCPage");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS08_TC56_Search by Transaction Date data not found", () => {
      goToNotificationLogPromptPay();
      cy.get("#TF_DATERANGEPICKER_START").type("19/04/2026");
      cy.get("#TF_DATERANGEPICKER_END").type("19/04/2026");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.intercept("POST", "/transaction-tqrc/api/transaction/tqrc/search").as(
        "waitNotifacationTQRCPage",
      );
      cy.get("#BT_SEARCH").click();
      cy.contains("Data Not Found");
      cy.wait("@waitNotifacationTQRCPage");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS08_TC57_Search by Transaction Date and Status data not found", () => {
      goToNotificationLogPromptPay();
      cy.get("#TF_DATERANGEPICKER_START").type("19/04/2026");
      cy.get("#TF_DATERANGEPICKER_END").type("19/04/2026");
      cy.wait(1000);
      cy.get("#DD_STATUS").click();
      cy.wait(1000);
      cy.get("#DD_STATUS_3").click();
      cy.wait(1000);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.intercept("POST", "/transaction-tqrc/api/transaction/tqrc/search").as(
        "waitNotifacationTQRCPage",
      );
      cy.get("#BT_SEARCH").click();
      cy.contains("Data Not Found");
      cy.wait("@waitNotifacationTQRCPage");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS08_TC58_Search by Username", () => {
      goToNotificationLogPromptPay();
      cy.get("#TF_Username").type(userNameRolePP);
      cy.intercept("POST", "/transaction-tqrc/api/transaction/tqrc/search").as(
        "waitNotifacationTQRCPage",
      );
      cy.get("#BT_SEARCH").click();
      cy.wait("@waitNotifacationTQRCPage");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".MuiTableBody-root > :nth-child(1) > :nth-child(8)").click();
      cy.contains(userNameRolePP);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS08_TC59_Search by Transaction ID", () => {
      goToNotificationLogPromptPay();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#TF_TransactionId").type(transactionIDPP);
      cy.intercept("POST", "/transaction-tqrc/api/transaction/tqrc/search").as(
        "waitNotifacationTQRCPage",
      );
      cy.get("#BT_SEARCH").click();
      cy.wait("@waitNotifacationTQRCPage");
      cy.contains(transactionIDPP);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS08_TC60_Search by Company Name", () => {
      goToNotificationLogPromptPay();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#TF_CompanyName").type(companyName);
      cy.intercept("POST", "/transaction-tqrc/api/transaction/tqrc/search").as(
        "waitNotifacationTQRCPage",
      );
      cy.get("#BT_SEARCH").click();
      cy.wait("@waitNotifacationTQRCPage");
      cy.contains(companyName);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS08_TC61_Search by MID", () => {
      goToNotificationLogPromptPay();
      cy.get("#TF_MID").type(MID);
      cy.intercept("POST", "/transaction-tqrc/api/transaction/tqrc/search").as(
        "waitNotifacationTQRCPage",
      );
      cy.get("#BT_SEARCH").click();
      cy.wait("@waitNotifacationTQRCPage");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".MuiTableBody-root > :nth-child(1) > :nth-child(8)").click();
      cy.contains(MID);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS08_TC62_Search by Account Number", () => {
      goToNotificationLogPromptPay();
      cy.get("#TF_AccountNumber").type(acountNumber);
      cy.intercept("POST", "/transaction-tqrc/api/transaction/tqrc/search").as(
        "waitNotifacationTQRCPage",
      );
      cy.get("#BT_SEARCH").click();
      cy.wait("@waitNotifacationTQRCPage");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".MuiTableBody-root > :nth-child(1) > :nth-child(8)").click();
      cy.contains(acountNumber);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS08_TC63_Search by Company ID", () => {
      goToNotificationLogPromptPay();
      cy.get("#TF_CompanyId").type(companyID);
      cy.intercept("POST", "/transaction-tqrc/api/transaction/tqrc/search").as(
        "waitNotifacationTQRCPage",
      );
      cy.get("#BT_SEARCH").click();
      cy.wait("@waitNotifacationTQRCPage");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".MuiTableBody-root > :nth-child(1) > :nth-child(8)").click();
      cy.contains(companyID);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS08_TC64_Search by Transaction Date", () => {
      goToNotificationLogPromptPay();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#TF_DATERANGEPICKER_START").type("25/04/2026");
      cy.get("#TF_DATERANGEPICKER_END").type("25/04/2026");
      cy.intercept("POST", "/transaction-tqrc/api/transaction/tqrc/search").as(
        "waitNotifacationTQRCPage",
      );
      cy.get("#BT_SEARCH").click();
      cy.wait("@waitNotifacationTQRCPage");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS08_TC65_Search by Status ", () => {
      goToNotificationLogPromptPay();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#DD_STATUS").click();
      cy.wait(1000);
      cy.get("#DD_STATUS_3").click();
      cy.wait(1000);
      cy.intercept("POST", "/transaction-tqrc/api/transaction/tqrc/search").as(
        "waitNotifacationTQRCPage",
      );
      cy.get("#BT_SEARCH").click();
      cy.wait("@waitNotifacationTQRCPage");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
  });

  context("9_View Notification Log PromptPay Detail", () => {
    it("TS08_TC66_TC67_View Notification Log PromptPay Detail ", () => {
      goToNotificationLogPromptPay();
      cy.intercept("POST", "/transaction-tqrc/api/transaction/tqrc/search").as(
        "waitNotifacationTQRCPage",
      );
      cy.get("#DD_STATUS").click();
      cy.wait(1000);
      cy.get("#DD_STATUS_2").click();
      cy.wait(1000);
      cy.get("#BT_SEARCH").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.wait("@waitNotifacationTQRCPage");
      cy.intercept("POST", "/notification-log/api/notification-log/detail").as(
        "waitNotificationLogPromptPayPage",
      );
      cy.get(".MuiTableBody-root > :nth-child(1) > :nth-child(8)").click();
      cy.wait("@waitNotificationLogPromptPayPage");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS08_TC68_TC69_View Notification Log PromptPay Detail ", () => {
      goToNotificationLogPromptPay();
      cy.intercept("POST", "/transaction-tqrc/api/transaction/tqrc/search").as(
        "waitNotifacationTQRCPage",
      );
      cy.get("#DD_STATUS").click();
      cy.wait(1000);
      cy.get("#DD_STATUS_3").click();
      cy.wait(1000);
      cy.get("#BT_SEARCH").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.wait("@waitNotifacationTQRCPage");
      cy.intercept("POST", "/notification-log/api/notification-log/detail").as(
        "waitNotificationLogPromptPayPage",
      );
      cy.get(".MuiTableBody-root > :nth-child(1) > :nth-child(8)").click();
      cy.wait("@waitNotificationLogPromptPayPage");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
  });

  context("10_Log Sub kebab  Notification Log in Company page", () => {
    it("TS08_TC70_TC73_Log Sub kebab Notification Log in Company page", () => {
      goToSubMenuAllCompany();
      cy.closePopupIfExists();
      cy.get("#TF_COMPANY_NAME").type(companyName).should("be.visible");
      cy.get("#BT_SEARCH").click();
      cy.contains(companyName).should("be.visible");
      cy.get("#IB_TABLE_MENU_undefined").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#MENU_BUTTON_LOG").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.intercept("POST", "/transaction-tqrc/api/transaction/tqrc/search").as(
        "waitNotifacationTQRCPage",
      );
      cy.get("#SUB_MENU_BUTTON_NOTIFICATION_LOG_QRCS").click();
      cy.wait("@waitNotifacationTQRCPage");
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
  });

  context("11_Log Sub kebab  Notification Log in QR Credit Card page", () => {
    it("TS08_TC74_TC76_Log Sub kebab  Notification Log in QR Credit Card page", () => {
      goToSubMenuTransactionQRCreditCard();
      cy.get("#TF_MID").type(midQRPP).should("be.visible");
      cy.wait(2000);
      cy.get("#BT_SEARCH").click();
      cy.contains(midQRPP).should("be.visible");
      cy.intercept("POST", "/transaction-tqrc/api/transaction/tqrc/search").as(
        "waitSearchTransaction",
      );
      cy.get("#DD_STATUS").click();
      cy.wait(1000);
      cy.get('[data-value="APPROVED"]').click();
      cy.get("#BT_SEARCH").click();
      cy.wait("@waitSearchTransaction");
      cy.get("#IB_TABLE_MENU_undefined").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.intercept("POST", "/transaction-tqrc/api/transaction/tqrc/search").as(
        "waitNotifacationTQRCPage",
      );
      cy.get("#NOTIFICATION_LOG").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
  });

  context("12_Search Notification Log QRCS", () => {
    it("TS08_TC77_TC78_Click Main menu Log", () => {
      goToNotificationLogQRCS();
      cy.wait(3000);
      cy.contains("Notification Log (QRCS)").should("be.visible");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS08_TC79_Search by Username data not found", () => {
      goToNotificationLogQRCS();
      cy.get("#TF_Username").type("gane").should("be.visible");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains("Data Not Found").should("be.visible");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS08_TC80_Search by Transaction ID data not found", () => {
      goToNotificationLogQRCS();
      cy.get("#TF_TransactionId")
        .type("SDGO862840718601111")
        .should("be.visible");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains("Data Not Found").should("be.visible");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS08_TC81_Search by Company Name data not found", () => {
      goToNotificationLogQRCS();
      cy.get("#TF_CompanyName").type("ganana").should("be.visible");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains("Data Not Found").should("be.visible");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS08_TC82_Search by  MID data not found", () => {
      goToNotificationLogQRCS();
      cy.get("#TF_MID").type("862840718602722").should("be.visible");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains("Data Not Found").should("be.visible");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS08_TC83_Search by Account Number data not found", () => {
      goToNotificationLogQRCS();
      cy.get("#TF_AccountNumber").type("1112399123").should("be.visible");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains("Data Not Found").should("be.visible");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS08_TC84_Search by Company ID data not found", () => {
      goToNotificationLogQRCS();
      cy.get("#TF_CompanyId")
        .type("fd5b08cb-637b-48b8-8b6e-67a7b60df0JJ")
        .should("be.visible");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains("Data Not Found").should("be.visible");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS08_TC85_Search by Transaction Date data not found", () => {
      goToNotificationLogQRCS();
      cy.get("#TF_DATERANGEPICKER_START")
        .type("19/04/2026")
        .should("be.visible");
      cy.get("#TF_DATERANGEPICKER_END").type("19/04/2026").should("be.visible");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains("Data Not Found").should("be.visible");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS08_TC86_Search by Transaction Date and Status data not found", () => {
      goToNotificationLogQRCS();
      cy.get("#TF_DATERANGEPICKER_START")
        .type("19/04/2025")
        .should("be.visible");
      cy.get("#TF_DATERANGEPICKER_END").type("19/04/2025").should("be.visible");
      cy.wait(1000);
      cy.get("#DD_STATUS").click();
      cy.wait(1000);
      cy.get("#DD_STATUS_3").click();
      cy.wait(1000);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains("Data Not Found").should("be.visible");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS08_TC87_Search by Username", () => {
      goToNotificationLogQRCS();
      cy.get("#TF_Username").type(userNameRoleQRCS).should("be.visible");
      cy.intercept("POST", "/transaction-tqrc/api/transaction/tqrc/search").as(
        "waitNotificationLogQRCSPage",
      );
      cy.get("#BT_SEARCH").click();
      cy.wait("@waitNotificationLogQRCSPage");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".MuiTableBody-root > :nth-child(1) > :nth-child(8)").click();
      cy.contains(userNameRoleQRCS).should("be.visible");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS08_TC88_Search by Transaction ID", () => {
      goToNotificationLogQRCS();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#TF_TransactionId").type(transactionIDQRCS).should("be.visible");
      cy.get("#BT_SEARCH").click();
      cy.contains(transactionIDQRCS).should("be.visible");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS08_TC89_Search by Company Name", () => {
      goToNotificationLogQRCS();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#TF_CompanyName").type(companyName).should("be.visible");
      cy.get("#BT_SEARCH").click();
      cy.contains(companyName).should("be.visible");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS08_TC90_Search by MID", () => {
      goToNotificationLogQRCS();
      cy.get("#TF_MID").type(MID).should("be.visible");
      cy.intercept("POST", "/notification-log/api/notification-log/list").as(
        "searchNotificationLogQRCSPage",
      );
      cy.get("#BT_SEARCH").click();
      cy.wait("@searchNotificationLogQRCSPage");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".MuiTableBody-root > :nth-child(1) > :nth-child(8)", {
        timeout: 60000,
      })
        .should("be.visible")
        .click();
      cy.contains(MID).should("be.visible");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS08_TC91_Search by Account Number", () => {
      goToNotificationLogQRCS();
      cy.get("#TF_AccountNumber").type(acountNumber).should("be.visible");
      cy.intercept("POST", "/notification-log/api/notification-log/list").as(
        "searchNotificationLogQRCSPage",
      );
      cy.get("#BT_SEARCH").click();
      cy.wait("@searchNotificationLogQRCSPage");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".MuiTableBody-root > :nth-child(1) > :nth-child(8)").click();
      cy.contains(acountNumber).should("be.visible");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS08_TC92_Search by Company ID", () => {
      goToNotificationLogQRCS();
      cy.get("#TF_CompanyId").type(companyID).should("be.visible");
      cy.intercept("POST", "/notification-log/api/notification-log/list").as(
        "searchNotificationLogQRCSPage",
      );
      cy.get("#BT_SEARCH").click();
      cy.wait("@searchNotificationLogQRCSPage");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".MuiTableBody-root > :nth-child(1) > :nth-child(8)").click();
      cy.contains(companyID).should("be.visible");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS08_TC93_Search by Transaction Date", () => {
      goToNotificationLogQRCS();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#TF_DATERANGEPICKER_START")
        .type("25/04/2026")
        .should("be.visible");
      cy.get("#TF_DATERANGEPICKER_END").type("25/04/2026").should("be.visible");
      cy.intercept("POST", "/notification-log/api/notification-log/list").as(
        "searchNotificationLogQRCSPage",
      );
      cy.get("#BT_SEARCH").click();
      cy.wait("@searchNotificationLogQRCSPage");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS08_TC94_Search by Status ", () => {
      goToNotificationLogQRCS();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#DD_STATUS").click();
      cy.wait(1000);
      cy.get("#DD_STATUS_3").click();
      cy.wait(1000);
      cy.intercept("POST", "/notification-log/api/notification-log/list").as(
        "searchNotificationLogQRCSPage",
      );
      cy.get("#BT_SEARCH").click();
      cy.wait("@searchNotificationLogQRCSPage");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
  });
  context("13_View Notification Log QRCS  Detail", () => {
    it("TS08_TC95_TC96_View Notification Log QRCS  Detail ", () => {
      goToNotificationLogQRCS();
      cy.get("#DD_STATUS").click();
      cy.wait(1000);
      cy.get("#DD_STATUS_2").click();
      cy.wait(1000);
      cy.intercept("POST", "/notification-log/api/notification-log/list").as(
        "searchNotificationLogQRCSPage",
      );
      cy.get("#BT_SEARCH").click();
      cy.wait("@searchNotificationLogQRCSPage");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".MuiTableBody-root > :nth-child(1) > :nth-child(8)", {
        timeout: 60000,
      })
        .should("be.visible")
        .click();
      cy.contains("Success").should("be.visible");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS08_TC97_TC98_View Notification Log QRCS  Detail ", () => {
      goToNotificationLogQRCS();
      cy.get("#DD_STATUS").click();
      cy.wait(1000);
      cy.get("#DD_STATUS_3").click();
      cy.wait(1000);
      cy.intercept("POST", "/notification-log/api/notification-log/list").as(
        "searchNotificationLogQRCSPage",
      );
      cy.get("#BT_SEARCH").click();
      cy.wait("@searchNotificationLogQRCSPage");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".MuiTableBody-root > :nth-child(1) > :nth-child(8)", {
        timeout: 60000,
      })
        .should("be.visible")
        .click();
      cy.contains("Failed").should("be.visible");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
  });
});
