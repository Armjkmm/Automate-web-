const { clear } = require("console");

function goToSubMenuReport() {
  cy.get(
    ".css-1mvsuhg > .MuiDrawer-root > .MuiPaper-root > .css-1jd25az > .MuiList-root > :nth-child(7) > #MAINMENU_10",
  ).click();
  cy.wait(2000);
  cy.get(
    "#SUB_MENU_10_1 > .MuiListItemText-root > .MuiTypography-root",
  ).click();
  cy.wait(2000);
}

function goToSubMenuReportRequestStatus() {
  cy.get(
    ".css-1mvsuhg > .MuiDrawer-root > .MuiPaper-root > .css-1jd25az > .MuiList-root > :nth-child(7) > #MAINMENU_10",
  ).click();
  cy.intercept("POST", "/report/api/report/request").as(
    "reportRequestStatuspayPage",
  );
  cy.get("#SUB_MENU_10_2").click();
  cy.wait("@reportRequestStatuspayPage");
}

function goToSubMenuReportSummaryTransaction() {
  cy.get(
    ".css-1mvsuhg > .MuiDrawer-root > .MuiPaper-root > .css-1jd25az > .MuiList-root > :nth-child(7) > #MAINMENU_10",
  ).click();
  cy.wait(2000);
  cy.get("#SUB_MENU_10_3").click();
  cy.wait(2000);
}

function goToSubMenuReportAllMerchant() {
  cy.get(
    ".css-1mvsuhg > .MuiDrawer-root > .MuiPaper-root > .css-1jd25az > .MuiList-root > :nth-child(7) > #MAINMENU_10",
  ).click();
  cy.wait(2000);
  cy.get(
    ":nth-child(5) > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiList-root > #SUB_MENU_10_3",
  ).click();
  cy.wait(2000);
}

function goToSubMenuRequestTransactionReportForMerchant() {
  cy.get(
    ".css-1mvsuhg > .MuiDrawer-root > .MuiPaper-root > .css-1jd25az > .MuiList-root > :nth-child(7) > #MAINMENU_10",
  ).click();
  cy.wait(2000);
  cy.intercept("POST", "/report/api/report/request-for-merchant-list").as(
    "waitRequestTransactionReportForMerchantPage",
  );
  cy.get("#SUB_MENU_10_5").click();
  cy.wait("@waitRequestTransactionReportForMerchantPage");
}

let userNotFound = "ArmTest123";
let userHaveData = "TESTMERCUAT1";

let startDateNotFound = "28/06/2025";
let endDateNotFound = "29/06/2025";

let startHaveData = "03/09/2025";
let endHaveData = "03/09/2025";

let startHaveDataMerchant = "27/07/2025";
let endHaveDataMerchant = "05/08/2025";

let requestReportPrefix = "T896";
let RequestTransactionReportForMerchantStartDate = "29/04/2026";
let RequestTransactionReportForMerchantEndDate = "29/04/2026";
let RequestTransactionReportForMerchantEmail = "niti@digio.asia";
let searchRequestTransactionReportForMerchantCompany = "CMU56";
let searchRequestTransactionReportForMerchantBillerID = "010753700001716";
let searchRequestTransactionReportForMerchantPerFixNo = "T896";
let searchRequestTransactionReportForMerchantStartDate = "29/04/2026";
let searchRequestTransactionReportForMerchantEndDate = "30/04/2026";

//#region prepare data report
let startDateQRReport = "05/08/2024";
let endDateQRReport = "03/09/2025";

let startDateMerchantRegister = "05/08/2025";
let endDateMerchantRegister = "03/09/2025";

let startDateStaffReport = "05/08/2025";
let endDateStaffReport = "03/09/2025";

let startDateTransactionReport = "25/08/2025";
let endDateTransactionReport = "27/08/2025";
//#endregion

describe("Test Scenario: 06 Report", () => {
  beforeEach(() => {
    // auto login to enter portal page
    cy.loginBankPortalPageUAT(
      Cypress.env("ADMIN_USERNAME"),
      Cypress.env("ADMIN_PASSWORD"),
    );
    // // Startเปลี่ยนภาษา Web ให้เป็นภาษา English
    // cy.get("#BT_CHANGE_LANG").click();
    // cy.get("#MENU_LANG_EN > .MuiTypography-root").click();
    // // End เปลี่ยนภาษา Web ให้เป็นภาษา English
  });

  context("1_Report", () => {
    it("Prepare Data Report Merchant", () => {
      goToSubMenuReport();
      cy.get(
        ":nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #TF_DATERANGEPICKER",
      ).type(startDateMerchantRegister);
      cy.get(
        ":nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > #TF_DATERANGEPICKER",
      ).type(endDateMerchantRegister);
      cy.wait(2000);
      cy.get("#DD_REPORT").click();
      cy.wait(1000);
      cy.get("#DD_MERCHANT_REGISTER").click();
      cy.wait(1000);
      cy.get("#BT_DOWNLOAD").click();
      cy.wait(2000);
      cy.get("#BT_LEFT").click();
      cy.get("#BT_CENTER").click();
      cy.renameNewfile("xlsx"); // ไม่ต้องระบุชื่อไฟล์, มันจะหาตัวล่าสุดให้เอง
      cy.get("@filename").then((newFileName) => {
        cy.log("ชื่อไฟล์ใหม่ล่าสุด:", newFileName);
        cy.validateFile(newFileName, 1);
      });
      cy.wait(3000);

      cy.get(
        ":nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #TF_DATERANGEPICKER",
      ).clear();
      cy.get(
        ":nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > #TF_DATERANGEPICKER",
      ).clear();
      cy.wait(2000);
      cy.get(
        ":nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #TF_DATERANGEPICKER",
      ).type(startDateTransactionReport);
      cy.get(
        ":nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > #TF_DATERANGEPICKER",
      ).type(endDateTransactionReport);
      cy.wait(2000);
      cy.get("#DD_REPORT").click();
      cy.wait(1000);
      cy.get("#DD_SALE_TRANSACTION").click();
      cy.wait(1000);
      cy.get("#BT_DOWNLOAD").click();
      cy.wait(2000);
      cy.get("#BT_LEFT").click();
      cy.get("#BT_CENTER").click();
      cy.renameNewfile("xlsx"); // ไม่ต้องระบุชื่อไฟล์, มันจะหาตัวล่าสุดให้เอง
      cy.get("@filename").then((newFileName) => {
        cy.log("ชื่อไฟล์ใหม่ล่าสุด:", newFileName);
        cy.validateFile(newFileName, 1);
      });
      cy.wait(3000);
      cy.get(
        ":nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #TF_DATERANGEPICKER",
      ).clear();
      cy.get(
        ":nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > #TF_DATERANGEPICKER",
      ).clear();
      cy.wait(2000);
      cy.get(
        ":nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #TF_DATERANGEPICKER",
      ).type(startDateQRReport);
      cy.get(
        ":nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > #TF_DATERANGEPICKER",
      ).type(endDateQRReport);
      cy.wait(2000);
      cy.get("#DD_REPORT").click();
      cy.wait(1000);
      cy.get("#DD_QR_REQUEST").click();
      cy.wait(1000);
      cy.get("#BT_DOWNLOAD").click();
      cy.wait(2000);
      cy.get("#BT_LEFT").click();
      cy.get("#BT_CENTER").click();
      cy.renameNewfile("xlsx"); // ไม่ต้องระบุชื่อไฟล์, มันจะหาตัวล่าสุดให้เอง
      cy.get("@filename").then((newFileName) => {
        cy.log("ชื่อไฟล์ใหม่ล่าสุด:", newFileName);
        cy.validateFile(newFileName, 1);
      });
      cy.wait(3000);
      cy.get(
        ":nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #TF_DATERANGEPICKER",
      ).clear();
      cy.get(
        ":nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > #TF_DATERANGEPICKER",
      ).clear();
      cy.wait(2000);
      cy.get(
        ":nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #TF_DATERANGEPICKER",
      ).type(startDateStaffReport);
      cy.get(
        ":nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > #TF_DATERANGEPICKER",
      ).type(endDateStaffReport);
      cy.get("#DD_REPORT").click();
      cy.wait(1000);
      cy.get("#DD_STAFF_REPORT").click();
      cy.wait(1000);
      cy.get("#BT_DOWNLOAD").click();
      cy.wait(2000);
      cy.get("#BT_LEFT").click();
      cy.get("#BT_CENTER").click();
      cy.renameNewfile("xlsx"); // ไม่ต้องระบุชื่อไฟล์, มันจะหาตัวล่าสุดให้เอง
      cy.get("@filename").then((newFileName) => {
        cy.log("ชื่อไฟล์ใหม่ล่าสุด:", newFileName);
        cy.validateFile(newFileName, 1);
      });
      cy.wait(3000);

      //End case Select Date and report then Click "Download"
    });

    it("TS06_TC01-TC10_Download Report", () => {
      goToSubMenuReport();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      //Start case Not input Start Date and "End Date"
      cy.get("#BT_DOWNLOAD").click();
      cy.contains("Incorrect information");
      cy.wait(3000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      //End case Not input Start Date and "End Date"
      //Start case Input Start Date and not input "End Date"
      cy.get(
        ":nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > #TF_DATERANGEPICKER",
      ).type(startDateNotFound);
      cy.get("#BT_DOWNLOAD").click();
      cy.wait(3000);
      cy.contains("Incorrect information");
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      //End case Input Start Date and not input "End Date"
      //Start case Not input "Start Date" and input ""End Date""
      cy.get(
        ":nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > #TF_DATERANGEPICKER",
      ).clear();
      cy.wait(1000);
      cy.get(
        ":nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > #TF_DATERANGEPICKER",
      ).type(endDateNotFound);
      cy.wait(2000);
      cy.get("#BT_DOWNLOAD").click();
      cy.wait(3000);
      cy.contains("Incorrect information");
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      //End case Not input "Start Date" and input ""End Date""
      //Start case Input invalid Start Date and "End Date"
      cy.get(
        ":nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #TF_DATERANGEPICKER",
      ).clear();
      cy.get(
        ":nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #TF_DATERANGEPICKER",
      ).type("18/23");
      cy.wait(1000);
      cy.get(
        ":nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > #TF_DATERANGEPICKER",
      ).type("15/23");
      cy.get("#BT_DOWNLOAD").click();
      cy.wait(3000);
      cy.contains("Incorrect information");
      cy.takeScreenshotSimple(5, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      //End case Input invalid Start Date and "End Date"
      //Start case Not Select Date and select report
      cy.get(
        ":nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #TF_DATERANGEPICKER",
      ).clear();
      cy.get(
        ":nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > #TF_DATERANGEPICKER",
      ).clear();
      cy.wait(1000);
      cy.get("#DD_REPORT").click();
      cy.wait(1000);
      cy.get("#DD_SALE_TRANSACTION").click();
      cy.wait(1000);
      cy.get("#BT_DOWNLOAD").click();
      cy.wait(3000);
      cy.contains("Incorrect information");
      cy.takeScreenshotSimple(6, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      //End case Not Select Date and select report
      //Start case Select Date and report data not found
      cy.get(
        ":nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #TF_DATERANGEPICKER",
      ).type(endDateNotFound);
      cy.get(
        ":nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > #TF_DATERANGEPICKER",
      ).type(endDateNotFound);
      cy.wait(1000);
      cy.get("#DD_REPORT").click();
      cy.wait(1000);
      cy.get("#DD_SALE_TRANSACTION").click();
      cy.wait(1000);
      cy.takeScreenshotSimple(7, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_DOWNLOAD").click();
      cy.wait(3000);
      cy.takeScreenshotSimple(8, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_LEFT").click();
      cy.takeScreenshotSimple(9, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();

      cy.renameNewfile("xlsx"); // ไม่ต้องระบุชื่อไฟล์, มันจะหาตัวล่าสุดให้เอง
      cy.get("@filename").then((newFileName) => {
        cy.log("ชื่อไฟล์ใหม่ล่าสุด:", newFileName);
        cy.validateFile(newFileName, 1);
      });
      cy.takeScreenshotSimple(10, Cypress.ScreenshotCaptureEnum.RUNNER);
      //End case Select Date and report data not found

      //Start case Select Date and report then Click "Download"
      cy.get(
        ":nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #TF_DATERANGEPICKER",
      ).clear();
      cy.get(
        ":nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > #TF_DATERANGEPICKER",
      ).clear();
      cy.wait(3000);
      cy.get(
        ":nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #TF_DATERANGEPICKER",
      ).type(startHaveData);
      cy.get(
        ":nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > #TF_DATERANGEPICKER",
      ).type(endHaveData);
      cy.wait(2000);
      cy.get("#DD_REPORT").click();
      cy.wait(1000);
      cy.get("#DD_SALE_TRANSACTION").click();
      cy.wait(1000);
      cy.takeScreenshotSimple(11, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_DOWNLOAD").click();
      cy.wait(2000);
      cy.takeScreenshotSimple(12, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_LEFT").click();
      cy.takeScreenshotSimple(13, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
      cy.renameNewfile("xlsx"); // ไม่ต้องระบุชื่อไฟล์, มันจะหาตัวล่าสุดให้เอง
      cy.get("@filename").then((newFileName) => {
        cy.log("ชื่อไฟล์ใหม่ล่าสุด:", newFileName);
        cy.validateFile(newFileName, 1);
      });
      cy.wait(3000);
      cy.takeScreenshotSimple(14, Cypress.ScreenshotCaptureEnum.RUNNER);
      //End case Select Date and report then Click "Download"
    });
  });

  context("2 Search Report Request Status", () => {
    it("TS06_TC11_Search Report Request Status", () => {
      goToSubMenuReportRequestStatus();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.wait(3000);
    });
    it("TS06_TC12_Search by Date Not found data", () => {
      goToSubMenuReportRequestStatus();
      cy.get(
        ":nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #TF_DATERANGEPICKER",
      ).type(endDateNotFound);
      cy.get(
        ":nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > #TF_DATERANGEPICKER",
      ).type(endDateNotFound);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains("Data Not Found");
      cy.wait(3000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
      cy.wait(1000);
    });
    it("TS06_TC13_Start case Search by Select Report and Date data not found", () => {
      goToSubMenuReportRequestStatus();
      cy.get("#BT_RESET_VALUE").click();
      cy.get(
        ":nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #TF_DATERANGEPICKER",
      ).type(startDateNotFound);
      cy.get(
        ":nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > #TF_DATERANGEPICKER",
      ).type(startDateNotFound);
      cy.get("#DD_REPORT").click();
      cy.wait(500);
      cy.get('[data-value="merchant"]').click();
      cy.wait(500);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains("Data Not Found");
      cy.wait(3000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
      cy.wait(1000);
    });
    it("TS06_TC14_Start case Search by status and Date data not found", () => {
      goToSubMenuReportRequestStatus();
      cy.get("#BT_RESET_VALUE").click();
      cy.get(
        ":nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #TF_DATERANGEPICKER",
      ).type(startDateNotFound);
      cy.get(
        ":nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > #TF_DATERANGEPICKER",
      ).type(startDateNotFound);
      cy.get("#DD_STATUS").click();
      cy.wait(500);
      cy.get("#DD_STATUS_5").click();
      cy.wait(500);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains("Data Not Found");
      cy.wait(3000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
      cy.wait(1000);
    });
    it("TS06_TC15_Start case Search by Tik Check Box All User and Date data not found", () => {
      goToSubMenuReportRequestStatus();
      cy.get("#BT_RESET_VALUE").click();
      cy.get(
        ":nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #TF_DATERANGEPICKER",
      ).type(startDateNotFound);
      cy.get(
        ":nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > #TF_DATERANGEPICKER",
      ).type(startDateNotFound);
      cy.get("#TF_ALL_USER").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains("Data Not Found");
      cy.wait(3000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
      cy.wait(1000);
    });
    it("TS06_TC16_Start case Search by Username data not found", () => {
      goToSubMenuReportRequestStatus();
      cy.get("#BT_RESET_VALUE").click();
      cy.get(
        ":nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #TF_DATERANGEPICKER",
      ).type(startDateNotFound);
      cy.get(
        ":nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > #TF_DATERANGEPICKER",
      ).type(startDateNotFound);
      cy.get("#TF_USERNAME").type(userNotFound);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains("Data Not Found");
      cy.wait(3000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
      cy.wait(1000);
    });
    it("TS06_TC17_Search by Date", () => {
      goToSubMenuReportRequestStatus();
      cy.get(
        ":nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #TF_DATERANGEPICKER",
      ).type(startHaveData);
      cy.get(
        ":nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > #TF_DATERANGEPICKER",
      ).type(endHaveData);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.wait(3000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS06_TC18_Start case Search by Select Report and Date", () => {
      goToSubMenuReportRequestStatus();
      cy.get("#BT_RESET_VALUE").click();
      cy.get(
        ":nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #TF_DATERANGEPICKER",
      ).type(startHaveData);
      cy.get(
        ":nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > #TF_DATERANGEPICKER",
      ).type(endHaveData);
      cy.get("#DD_REPORT").click();
      cy.wait(500);
      cy.get('[data-value="merchant"]').click();
      cy.wait(500);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.wait(3000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS06_TC19_Start case Search by status and Date", () => {
      goToSubMenuReportRequestStatus();
      cy.get("#BT_RESET_VALUE").click();
      cy.get(
        ":nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #TF_DATERANGEPICKER",
      ).type(startHaveData);
      cy.get(
        ":nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > #TF_DATERANGEPICKER",
      ).type(endHaveData);
      cy.get("#DD_STATUS").click();
      cy.wait(500);
      cy.get("#DD_STATUS_5").click();
      cy.wait(500);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.wait(3000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS06_TC20_Start case Search by Tik Check Box All User and Date", () => {
      goToSubMenuReportRequestStatus();
      cy.get("#BT_RESET_VALUE").click();
      cy.get(
        ":nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #TF_DATERANGEPICKER",
      ).type(startHaveData);
      cy.get(
        ":nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > #TF_DATERANGEPICKER",
      ).type(endHaveData);
      cy.get("#TF_ALL_USER").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.wait(3000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS06_TC21_Start case Search by Username", () => {
      goToSubMenuReportRequestStatus();
      cy.get("#BT_RESET_VALUE").click();
      cy.get(
        ":nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #TF_DATERANGEPICKER",
      ).type(startHaveData);
      cy.get(
        ":nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > #TF_DATERANGEPICKER",
      ).type(endHaveData);
      cy.get("#TF_USERNAME").type(userHaveData);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains(userHaveData);
      cy.wait(3000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
  });

  context("3_Transaction summary report", () => {
    it("TS06_TC19-TC21Transaction summary report", () => {
      goToSubMenuReportSummaryTransaction();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      //Start case Select year
      cy.get("#DD_REPORT").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#\\32 025").click();
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.intercept("POST", "/report/api/report/summary").as(
        "waitReportSumaryTransactionPage",
      );
      cy.get("#BT_DOWNLOAD").click();
      cy.wait("@waitReportSumaryTransactionPage");
      cy.renameNewfile("xlsx"); // ไม่ต้องระบุชื่อไฟล์, มันจะหาตัวล่าสุดให้เอง
      cy.get("@filename").then((newFileName) => {
        cy.log("ชื่อไฟล์ใหม่ล่าสุด:", newFileName);
        cy.validateFile(newFileName, 1);
      });
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.RUNNER);
    });
  });

  context("4_Download", () => {
    it("TS06_TC22_Download of Sale Trasaction report  in Report page and go to download at Report Request Status page", () => {
      goToSubMenuReportRequestStatus();
      cy.wait(2000);
      cy.get("#DD_REPORT").click();
      cy.get("#DD_REPORT_2").click();
      cy.get("#BT_SEARCH").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(":nth-child(1) > :nth-child(6) > #BT_DOWNLOAD_REPORT").click();
      cy.renameNewfile("xlsx"); // ไม่ต้องระบุชื่อไฟล์, มันจะหาตัวล่าสุดให้เอง
      cy.get("@filename").then((newFileName) => {
        cy.log("ชื่อไฟล์ใหม่ล่าสุด:", newFileName);
        cy.validateFile(newFileName, 1);
      });
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.RUNNER);
      //End case Select year
    });

    it("TS06_TC23_Download of Merchant Registration report in Report page", () => {
      goToSubMenuReportRequestStatus();
      cy.wait(2000);
      cy.get("#DD_REPORT").click();
      cy.get('[data-value="merchant"]').click();
      cy.get("#BT_SEARCH").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(":nth-child(1) > :nth-child(6) > #BT_DOWNLOAD_REPORT").click();
      cy.renameNewfile("xlsx"); // ไม่ต้องระบุชื่อไฟล์, มันจะหาตัวล่าสุดให้เอง
      cy.get("@filename").then((newFileName) => {
        cy.log("ชื่อไฟล์ใหม่ล่าสุด:", newFileName);
        cy.validateFile(newFileName, 1);
      });
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.RUNNER);
      //End case Select year
    });

    it("TS06_TC24_Download of Staff Report  in Report page", () => {
      goToSubMenuReportRequestStatus();
      cy.wait(2000);
      cy.get("#DD_REPORT").click();
      cy.get('[data-value="staff"]').click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(":nth-child(1) > :nth-child(6) > #BT_DOWNLOAD_REPORT").click();
      cy.renameNewfile("xlsx"); // ไม่ต้องระบุชื่อไฟล์, มันจะหาตัวล่าสุดให้เอง
      cy.get("@filename").then((newFileName) => {
        cy.log("ชื่อไฟล์ใหม่ล่าสุด:", newFileName);
        cy.validateFile(newFileName, 1);
      });
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.RUNNER);
      //End case Select year
    });

    it("TS06_TC25_Download of QR Requrest Report  in Report page", () => {
      goToSubMenuReportRequestStatus();
      cy.wait(2000);
      cy.get("#DD_REPORT").click();
      cy.get('[data-value="qr"]').click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(":nth-child(1) > :nth-child(6) > #BT_DOWNLOAD_REPORT").click();
      cy.renameNewfile("xlsx"); // ไม่ต้องระบุชื่อไฟล์, มันจะหาตัวล่าสุดให้เอง
      cy.get("@filename").then((newFileName) => {
        cy.log("ชื่อไฟล์ใหม่ล่าสุด:", newFileName);
        cy.validateFile(newFileName, 1);
      });
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.RUNNER);
      //End case Select year
    });
  });

  context("5_Report All Merchant", () => {
    it("TS06_TC26-TC28_Report All Merchant", () => {
      goToSubMenuReportAllMerchant();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_DOWNLOAD").click();
      cy.intercept("POST", "/report/api/report/all-merchant").as(
        "waitReportAllMerchantPage",
      );
      cy.get("#BT_DOWNLOAD").click();
      cy.wait("@waitReportAllMerchantPage");
      cy.renameNewfile("xlsx"); // ไม่ต้องระบุชื่อไฟล์, มันจะหาตัวล่าสุดให้เอง
      cy.get("@filename").then((newFileName) => {
        cy.log("ชื่อไฟล์ใหม่ล่าสุด:", newFileName);
        cy.validateFile(newFileName, 1);
      });
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.RUNNER);
    });
  });

  context("6_Request Transaction Report for Merchant", () => {
    it("TS06_TC31_TC43_Request Report", () => {
      goToSubMenuRequestTransactionReportForMerchant();
      cy.closePopupIfExists();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.intercept("POST", "/company/api/company/list/billerId").as(
        "waitRequestTransactionReportForMerchantPopup",
      );
      cy.get("#BT_REQUEST_CREATE_COMPANY").click();
      cy.wait("@waitRequestTransactionReportForMerchantPopup");
      cy.contains("Request Transaction Report for Merchant");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.intercept(
        "POST",
        "/report/api/report/search-prefix-for-send-email",
      ).as("waitSearchPerfixForSendEmailPopup");
      cy.get(".MuiGrid-grid-xs-10 > #BT_SEARCH").click();
      cy.wait("@waitSearchPerfixForSendEmailPopup");
      cy.contains("Please input prefix no");
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
      cy.wait(1000);
      cy.get("#TF_PREFIX").type("TS");
      cy.wait(1000);
      cy.get(".MuiGrid-grid-xs-10 > #BT_SEARCH").click();
      cy.wait("@waitSearchPerfixForSendEmailPopup");
      cy.contains("Invalid prefix no");
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
      cy.wait(1000);
      cy.get("#TF_PREFIX").clear();
      cy.wait(1000);
      cy.get("#TF_PREFIX").type("TSSS");
      cy.get(".MuiGrid-grid-xs-10 > #BT_SEARCH").click();
      cy.wait("@waitSearchPerfixForSendEmailPopup");
      cy.contains("Not found prefix no");
      cy.takeScreenshotSimple(5, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
      cy.wait(1000);
      cy.get("#TF_PREFIX").clear();
      cy.wait(1000);
      cy.get("#TF_PREFIX").type(requestReportPrefix);
      cy.get("#DD_BILLER_ID").click();
      cy.wait(1000);
      cy.get("#\\30 10753700001781").click();
      cy.wait(1000);
      cy.takeScreenshotSimple(6, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".MuiGrid-grid-xs-10 > #BT_SEARCH").click();
      cy.wait("@waitSearchPerfixForSendEmailPopup");
      cy.contains("Not found prefix no");
      cy.takeScreenshotSimple(7, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
      cy.wait(1000);
      cy.get("#DD_BILLER_ID").click();
      cy.wait(1000);
      cy.get("#\\30 10753700001716").click();
      cy.takeScreenshotSimple(8, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".MuiGrid-grid-xs-10 > #BT_SEARCH").click();
      cy.wait("@waitSearchPerfixForSendEmailPopup");
      cy.contains("Company Name *").should("be.visible");
      cy.contains("Request Transaction Date *").should("be.visible");
      cy.contains("Email Other :").should("be.visible");
      cy.takeScreenshotSimple(9, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CONFIRM_CHANGE_STATUS").click();
      cy.contains("Incorrect Information").should("be.visible");
      cy.get("#BT_CENTER").click();
      cy.get(
        '[style="margin-left: 70px;"] > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #TF_DATERANGEPICKER_START',
      ).type("12/03");
      cy.get(
        '[style="margin-right: 100px;"] > .MuiFormControl-root > .MuiInputBase-root > #TF_DATERANGEPICKER_END',
      ).type("22/12");
      cy.takeScreenshotSimple(10, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CONFIRM_CHANGE_STATUS").click();
      cy.takeScreenshotSimple(11, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("Invalid date format. Please use DD/MM/YYYY.").should(
        "be.visible",
      );
      cy.takeScreenshotSimple(12, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
      cy.get(
        '[style="margin-left: 70px;"] > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #TF_DATERANGEPICKER_START',
      ).clear();
      cy.get(
        '[style="margin-right: 100px;"] > .MuiFormControl-root > .MuiInputBase-root > #TF_DATERANGEPICKER_END',
      ).clear();
      cy.wait(1000);
      cy.get(
        '[style="margin-left: 70px;"] > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #TF_DATERANGEPICKER_START',
      ).type(RequestTransactionReportForMerchantStartDate);
      cy.get(
        '[style="margin-right: 100px;"] > .MuiFormControl-root > .MuiInputBase-root > #TF_DATERANGEPICKER_END',
      ).type(RequestTransactionReportForMerchantEndDate);
      cy.get(
        '[style="margin-left: 70px; width: 80%;"] > .MuiInputBase-root',
      ).type("saiasaiasa");
      cy.takeScreenshotSimple(13, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CONFIRM_CHANGE_STATUS").click();
      cy.contains("Invalid email format.").should("be.visible");
      cy.takeScreenshotSimple(14, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
      cy.get(
        '[style="margin-left: 70px; width: 80%;"] > .MuiInputBase-root',
      ).clear();
      cy.get(
        ".MuiFormControl-root > .MuiInputBase-root > .MuiSelect-select",
      ).click();
      cy.get('input[type="checkbox"]').eq(0).check().should("be.checked");
      cy.takeScreenshotSimple(15, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#menu- > .MuiBackdrop-root").click();
      cy.takeScreenshotSimple(16, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CONFIRM_CHANGE_STATUS").click();
      cy.intercept("POST", "/report/api/report/send-request-report").as(
        "waitSendRequestReport",
      );
      cy.contains("Confirm Report For Merchant").should("be.visible");
      cy.takeScreenshotSimple(17, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_RIGHT").click();
      cy.takeScreenshotSimple(18, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CONFIRM_CHANGE_STATUS").click();
      cy.contains("Confirm Report For Merchant").should("be.visible");
      cy.takeScreenshotSimple(19, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_LEFT").click();
      cy.wait("@waitSendRequestReport");
      cy.contains("Success").should("be.visible");
      cy.takeScreenshotSimple(20, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
      cy.takeScreenshotSimple(21, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#IB_TABLE_MENU_undefined").click();
      cy.takeScreenshotSimple(22, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#MENU_BUTTON_DETAIL").click();
      cy.takeScreenshotSimple(23, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS06_TC44_Request Report", () => {
      goToSubMenuRequestTransactionReportForMerchant();
      cy.closePopupIfExists();
      cy.wait(1000);
      cy.intercept("POST", "/company/api/company/list/billerId").as(
        "waitRequestTransactionReportForMerchantPopup",
      );
      cy.get("#BT_REQUEST_CREATE_COMPANY").click();
      cy.wait(1000);
      cy.get("#TF_PREFIX").type("T896");
      cy.get(".MuiGrid-grid-xs-10 > #BT_SEARCH").click();
      cy.get(
        '[style="margin-left: 70px;"] > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #TF_DATERANGEPICKER_START',
      ).type(RequestTransactionReportForMerchantStartDate);
      cy.get(
        '[style="margin-right: 100px;"] > .MuiFormControl-root > .MuiInputBase-root > #TF_DATERANGEPICKER_END',
      ).type(RequestTransactionReportForMerchantEndDate);
      cy.get(
        ".MuiFormControl-root > .MuiInputBase-root > .MuiSelect-select",
      ).click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get('input[type="checkbox"]').eq(1).check().should("be.checked");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#menu- > .MuiBackdrop-root").click();
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CONFIRM_CHANGE_STATUS").click();
      cy.contains("Confirm Report For Merchant");
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.intercept("POST", "/report/api/report/send-request-report").as(
        "waitSendRequestReport",
      );
      cy.get("#BT_LEFT").click();
      cy.wait("@waitSendRequestReport");
      cy.contains("Success");
      cy.takeScreenshotSimple(5, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
      cy.get("#IB_TABLE_MENU_undefined").click();
      cy.takeScreenshotSimple(6, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#MENU_BUTTON_DETAIL").click();
      cy.takeScreenshotSimple(7, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS06_TC45_Request Report", () => {
      goToSubMenuRequestTransactionReportForMerchant();
      cy.closePopupIfExists();
      cy.wait(1000);
      cy.intercept("POST", "/company/api/company/list/billerId").as(
        "waitRequestTransactionReportForMerchantPopup",
      );
      cy.get("#BT_REQUEST_CREATE_COMPANY").click();
      cy.wait(1000);
      cy.get("#TF_PREFIX").type("T896");
      cy.get(".MuiGrid-grid-xs-10 > #BT_SEARCH").click();
      cy.get(
        '[style="margin-left: 70px;"] > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #TF_DATERANGEPICKER_START',
      ).type(RequestTransactionReportForMerchantStartDate);
      cy.get(
        '[style="margin-right: 100px;"] > .MuiFormControl-root > .MuiInputBase-root > #TF_DATERANGEPICKER_END',
      ).type(RequestTransactionReportForMerchantEndDate);
      cy.get(
        ".MuiFormControl-root > .MuiInputBase-root > .MuiSelect-select",
      ).click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get('input[type="checkbox"]').eq(2).check().should("be.checked");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#menu- > .MuiBackdrop-root").click();
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CONFIRM_CHANGE_STATUS").click();
      cy.contains("Confirm Report For Merchant");
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.intercept("POST", "/report/api/report/send-request-report").as(
        "waitSendRequestReport",
      );
      cy.get("#BT_LEFT").click();
      cy.wait("@waitSendRequestReport");
      cy.contains("Success");
      cy.takeScreenshotSimple(5, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
      cy.get("#IB_TABLE_MENU_undefined").click();
      cy.takeScreenshotSimple(6, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#MENU_BUTTON_DETAIL").click();
      cy.takeScreenshotSimple(7, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS06_TC46_TC50_Request Report", () => {
      goToSubMenuRequestTransactionReportForMerchant();
      cy.closePopupIfExists();
      cy.wait(1000);
      cy.intercept("POST", "/company/api/company/list/billerId").as(
        "waitRequestTransactionReportForMerchantPopup",
      );
      cy.get("#BT_REQUEST_CREATE_COMPANY").click();
      cy.wait(1000);
      cy.get("#TF_PREFIX").type("T896");
      cy.get(".MuiGrid-grid-xs-10 > #BT_SEARCH").click();
      cy.get(
        '[style="margin-left: 70px;"] > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #TF_DATERANGEPICKER_START',
      ).type(RequestTransactionReportForMerchantStartDate);
      cy.get(
        '[style="margin-right: 100px;"] > .MuiFormControl-root > .MuiInputBase-root > #TF_DATERANGEPICKER_END',
      ).type(RequestTransactionReportForMerchantEndDate);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(
        '[style="margin-left: 70px; width: 80%;"] > .MuiInputBase-root',
      ).type(RequestTransactionReportForMerchantEmail);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CONFIRM_CHANGE_STATUS").click();
      cy.contains("Confirm Report For Merchant");
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.intercept("POST", "/report/api/report/send-request-report").as(
        "waitSendRequestReport",
      );
      cy.get("#BT_LEFT").click();
      cy.wait("@waitSendRequestReport");
      cy.contains("Success");
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
      cy.get("#IB_TABLE_MENU_undefined").click();
      cy.takeScreenshotSimple(5, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#MENU_BUTTON_DETAIL").click();
      cy.takeScreenshotSimple(6, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
  });
  context("7_Search Request Report For Merchant", () => {
    it("TS06_TC51_Search by Company Name data not found", () => {
      goToSubMenuRequestTransactionReportForMerchant();
      cy.closePopupIfExists();
      cy.get("#TF_COMPANY_NAME").type("kai");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains("Data Not Found");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS06_TC52_Search by Biller ID and Perfix No. data not found", () => {
      goToSubMenuRequestTransactionReportForMerchant();
      cy.closePopupIfExists();
      cy.get("#TF_BILLER_ID").type("1112222222345678");
      cy.get("#TF_PREFIX_NO").type("TSSS");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains("Data Not Found");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS06_TC53_Search by Biller ID  data not found", () => {
      goToSubMenuRequestTransactionReportForMerchant();
      cy.closePopupIfExists();
      cy.get("#TF_BILLER_ID").type("1112222222345678");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains("Data Not Found");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS06_TC54_Search by Perfix No. data not found", () => {
      goToSubMenuRequestTransactionReportForMerchant();
      cy.closePopupIfExists();
      cy.get("#TF_PREFIX_NO").type("TSSS");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains("Data Not Found");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS06_TC55_Search by Status and Date data not found", () => {
      goToSubMenuRequestTransactionReportForMerchant();
      cy.closePopupIfExists();
      cy.get("#DD_STATUS").click();
      cy.wait(1000);
      cy.get("#DD_STATUS_3").click();
      cy.wait(1000);
      cy.get("#TF_DATERANGEPICKER_START").type("11/11/2026");
      cy.wait(1000);
      cy.get("#TF_DATERANGEPICKER_END").type("11/11/2026");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains("Data Not Found");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS06_TC56_Search by Date data not found", () => {
      goToSubMenuRequestTransactionReportForMerchant();
      cy.closePopupIfExists();
      cy.wait(1000);
      cy.get("#TF_DATERANGEPICKER_START").type("11/11/2026");
      cy.wait(1000);
      cy.get("#TF_DATERANGEPICKER_END").type("11/11/2026");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains("Data Not Found");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS06_TC57_Search by Company Name", () => {
      goToSubMenuRequestTransactionReportForMerchant();
      cy.closePopupIfExists();
      cy.get("#TF_COMPANY_NAME").type(
        searchRequestTransactionReportForMerchantCompany,
      );
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.wait("@waitRequestTransactionReportForMerchantPage");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS06_TC58_Search by Biller ID and Perfix No.", () => {
      goToSubMenuRequestTransactionReportForMerchant();
      cy.closePopupIfExists();
      cy.get("#TF_BILLER_ID").type(
        searchRequestTransactionReportForMerchantBillerID,
      );
      cy.get("#TF_PREFIX_NO").type(
        searchRequestTransactionReportForMerchantPerFixNo,
      );
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.wait("@waitRequestTransactionReportForMerchantPage");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS06_TC59_Search by Biller ID", () => {
      goToSubMenuRequestTransactionReportForMerchant();
      cy.closePopupIfExists();
      cy.get("#TF_BILLER_ID").type(
        searchRequestTransactionReportForMerchantBillerID,
      );
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS06_TC60_Search by Perfix No.", () => {
      goToSubMenuRequestTransactionReportForMerchant();
      cy.closePopupIfExists();
      cy.get("#TF_PREFIX_NO").type(
        searchRequestTransactionReportForMerchantPerFixNo,
      );
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.wait("@waitRequestTransactionReportForMerchantPage");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS06_TC61_Search by Status and Date", () => {
      goToSubMenuRequestTransactionReportForMerchant();
      cy.closePopupIfExists();
      cy.get("#DD_STATUS").click();
      cy.wait(1000);
      cy.get("#DD_STATUS_1").click();
      cy.wait(1000);
      cy.get("#TF_DATERANGEPICKER_START").type(
        searchRequestTransactionReportForMerchantStartDate,
      );
      cy.wait(1000);
      cy.get("#TF_DATERANGEPICKER_END").type(
        searchRequestTransactionReportForMerchantEndDate,
      );
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.wait("@waitRequestTransactionReportForMerchantPage");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS06_TC62_Search by Date", () => {
      goToSubMenuRequestTransactionReportForMerchant();
      cy.closePopupIfExists();
      cy.wait(1000);
      cy.get("#TF_DATERANGEPICKER_START").type(
        searchRequestTransactionReportForMerchantStartDate,
      );
      cy.wait(1000);
      cy.get("#TF_DATERANGEPICKER_END").type(
        searchRequestTransactionReportForMerchantEndDate,
      );
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.wait("@waitRequestTransactionReportForMerchantPage");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
  });
  context("8_Re-send Request Report", () => {
    it("TS06_TC63_TCTS06_TC69_Re-send Request Report", () => {
      goToSubMenuRequestTransactionReportForMerchant();
      cy.closePopupIfExists();
      cy.wait(1000);
      cy.get("#TF_COMPANY_NAME").type(
        searchRequestTransactionReportForMerchantCompany,
      );
      cy.get("#BT_SEARCH").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(
        ".MuiTableBody-root > :nth-child(1) > :nth-child(7) > .MuiButtonBase-root",
      ).click();
      cy.contains("Confirm Re-send Report For Merchant?");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_RIGHT").click();
      cy.wait(1000);
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(
        ".MuiTableBody-root > :nth-child(1) > :nth-child(7) > .MuiButtonBase-root",
      ).click();
      cy.contains("Confirm Re-send Report For Merchant?");
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_LEFT").click();
      cy.wait("@waitRequestTransactionReportForMerchantPage");
      cy.contains("Success");
      cy.takeScreenshotSimple(5, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
      cy.takeScreenshotSimple(6, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
  });

  context("9_View Request Report Detail", () => {
    it("TS06_TC70_TC73_View Request Report Detail", () => {
      goToSubMenuRequestTransactionReportForMerchant();
      cy.closePopupIfExists();
      cy.wait(1000);
      cy.get("#TF_COMPANY_NAME").type(
        searchRequestTransactionReportForMerchantCompany,
      );
      cy.get("#BT_SEARCH").click();
      cy.get(
        ":nth-child(1) > :nth-child(8) > #IB_TABLE_MENU_undefined",
      ).click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.intercept("POST", "/report/api/report/request-for-merchant-detail").as(
        "waitRequestReportDetail",
      );
      cy.get("#MENU_BUTTON_DETAIL").click();
      cy.wait("@waitRequestReportDetail");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
  });
});
