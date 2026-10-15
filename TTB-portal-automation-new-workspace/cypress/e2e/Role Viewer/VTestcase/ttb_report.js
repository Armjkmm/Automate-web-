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

let startHaveData = "25/06/2026";
let endHaveData = "25/06/2026";

let startHaveDataMerchant = "27/07/2025";
let endHaveDataMerchant = "05/08/2025";

let RequestTransactionReportForMerchantStartDate = "29/04/2026";
let RequestTransactionReportForMerchantEndDate = "29/04/2026";
let RequestTransactionReportForMerchantEmail = "niti@digio.asia";
let searchRequestTransactionReportForMerchantCompany = "CMU56XD";
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

describe("Test Scenario: 05 Report", () => {
  beforeEach(() => {
    // auto login to enter portal page
    cy.loginBankPortalPageUAT(
      Cypress.env("VIEWER_USERNAME2"),
      Cypress.env("VIEWER_PASSWORD2"),
    );
    // // Startเปลี่ยนภาษา Web ให้เป็นภาษา English
    // cy.get("#BT_CHANGE_LANG").click();
    // cy.get("#MENU_LANG_EN > .MuiTypography-root").click();
    // // End เปลี่ยนภาษา Web ให้เป็นภาษา English
  });

  context("4_Report", () => {
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
      // cy.renameNewfile("xlsx"); // ไม่ต้องระบุชื่อไฟล์, มันจะหาตัวล่าสุดให้เอง
      // cy.get("@filename").then((newFileName) => {
      //   cy.log("ชื่อไฟล์ใหม่ล่าสุด:", newFileName);
      //   cy.validateFile(newFileName, 1);
      // });
      // cy.wait(3000);

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
      // cy.renameNewfile("xlsx"); // ไม่ต้องระบุชื่อไฟล์, มันจะหาตัวล่าสุดให้เอง
      // cy.get("@filename").then((newFileName) => {
      //   cy.log("ชื่อไฟล์ใหม่ล่าสุด:", newFileName);
      //   cy.validateFile(newFileName, 1);
      // });
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
      // cy.renameNewfile("xlsx"); // ไม่ต้องระบุชื่อไฟล์, มันจะหาตัวล่าสุดให้เอง
      // cy.get("@filename").then((newFileName) => {
      //   cy.log("ชื่อไฟล์ใหม่ล่าสุด:", newFileName);
      //   cy.validateFile(newFileName, 1);
      // });
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
      // cy.renameNewfile("xlsx"); // ไม่ต้องระบุชื่อไฟล์, มันจะหาตัวล่าสุดให้เอง
      // cy.get("@filename").then((newFileName) => {
      //   cy.log("ชื่อไฟล์ใหม่ล่าสุด:", newFileName);
      //   cy.validateFile(newFileName, 1);
      // });
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
      // cy.renameNewfile("xlsx"); // ไม่ต้องระบุชื่อไฟล์, มันจะหาตัวล่าสุดให้เอง
      // cy.get("@filename").then((newFileName) => {
      //   cy.log("ชื่อไฟล์ใหม่ล่าสุด:", newFileName);
      //   cy.validateFile(newFileName, 1);
      // });
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
      // cy.renameNewfile("xlsx"); // ไม่ต้องระบุชื่อไฟล์, มันจะหาตัวล่าสุดให้เอง
      // cy.get("@filename").then((newFileName) => {
      //   cy.log("ชื่อไฟล์ใหม่ล่าสุด:", newFileName);
      //   cy.validateFile(newFileName, 1);
      // });
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

    it("TS06_TC15_Search by Date", () => {
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
    it("TS06_TC15_Start case Search by Select Report and Date", () => {
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
    it("TS06_TC16_Start case Search by status and Date", () => {
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
      cy.get("#DD_STATUS_2").click();
      cy.wait(500);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.wait(3000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
  });

  context("3_Download", () => {
    it("TS06_TC18_Download of Sale Trasaction report  in Report page and go to download at Report Request Status page", () => {
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

    it("TS06_TC19_Download of Merchant Registration report in Report page", () => {
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

    it("TS06_TC20_Download of Staff Report  in Report page", () => {
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

    it("TS06_TC21_Download of QR Requrest Report  in Report page", () => {
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

  context("4_Transaction summary report", () => {
    it("TS06_TC22-TC24_Transaction summary report", () => {
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

  context("5_Report All Merchant", () => {
    it("TS06_TC25-TC26_Report All Merchant", () => {
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
});
