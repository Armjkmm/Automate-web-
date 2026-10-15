function goToSubMenuMerchantManagement() {
  cy.get(
    ".css-1mvsuhg > .MuiDrawer-root > .MuiPaper-root > .css-1jd25az > .MuiList-root > :nth-child(2) > #MAINMENU_6 > .MuiListItemText-root > .MuiTypography-root",
  ).click();
  cy.wait(3000);
  let merchantManagementPageBtn = cy.get("#SUB_MENU_6_1_3", { timeout: 20000 });
  merchantManagementPageBtn.should("be.visible");
  merchantManagementPageBtn.click();
}

let startDateNotFound = "05/07/2025";
let endDateNotFound = "05/07/2025";
let startHaveData = "02/09/2025";
let endHaveData = "02/09/2025";

let midCompany = "862847771172963";
let merchantName = "play 48";
let merchantNameUpDateLimiPerTransaction = "ซีเอ็มยู52";
let upDateLimiPerTransaction = "60,000";

//#region edit Merchant
let editMerchantName = "play44";
let editAddress = "BBK";
let editZip = "22222";
let editTle = "0982222222";
//#endregion

describe("Test Scenario: 02-2 Company (Merchant Management)", () => {
  beforeEach(() => {
    //auto login to enter portal page
    cy.loginBankPortalPageUAT(
      Cypress.env("OPERATOR_USERNAME2"),
      Cypress.env("OPERATOR_PASSWORD2"),
    );
    //   Startเปลี่ยนภาษา Web ให้เป็นภาษา English
    //  cy.get("#BT_CHANGE_LANG").click();
    //  cy.get("#MENU_LANG_EN > .MuiTypography-root").click();
    //   End เปลี่ยนภาษา Web ให้เป็นภาษา English
  });

  context("1 Search Merchant Management", () => {
    it("TS02-2_TC01-TC02_Merchant Management page", () => {
      goToSubMenuMerchantManagement();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS02-2_TC03_MID data not found", () => {
      goToSubMenuMerchantManagement();
      cy.get("#TF_MID").type("111111111110923");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.wait(2000);
      cy.contains("Data Not Found");
      cy.wait(3000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS02-2_TC04_Merchant Name data not found", () => {
      goToSubMenuMerchantManagement();
      cy.get("#TF_MID_NAME").type("Hex");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.wait(2000);
      cy.contains("Data Not Found");
      cy.wait(3000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS02-2_TC05_Date data not found", () => {
      goToSubMenuMerchantManagement();
      cy.get("#TF_DATERANGEPICKER_START").type(startDateNotFound);
      cy.get("#TF_DATERANGEPICKER_END").type(endDateNotFound);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.wait(2000);
      cy.contains("Data Not Found");
      cy.wait(3000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS02-2_TC06_Date and Status data not found", () => {
      goToSubMenuMerchantManagement();
      cy.get("#TF_DATERANGEPICKER_START").type(startDateNotFound);
      cy.get("#TF_DATERANGEPICKER_END").type(endDateNotFound);
      cy.wait(1000);
      cy.get("#DD_STATUS").click();
      cy.wait(1000);
      cy.get("#DD_STATUS_4").click();
      cy.wait(1000);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.wait(2000);
      cy.contains("Data Not Found");
      cy.wait(3000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS02-2_TC07_Date invalid", () => {
      goToSubMenuMerchantManagement();
      cy.get("#TF_DATERANGEPICKER_START").type("2020");
      cy.get("#TF_DATERANGEPICKER_END").type("202010");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.wait(2000);
      cy.contains("Data Not Found");
      cy.wait(3000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS02-2_TC08_MID", () => {
      goToSubMenuMerchantManagement();
      cy.get("#TF_MID").type(midCompany);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.wait(1000);
      cy.contains(midCompany);
      cy.wait(3000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS02-2_TC09_Merchant Name", () => {
      goToSubMenuMerchantManagement();
      cy.get("#TF_MID_NAME").type(merchantName);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.wait(1000);
      cy.contains(merchantName);
      cy.wait(3000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS02-2_TC10_Date", () => {
      goToSubMenuMerchantManagement();
      cy.get("#TF_DATERANGEPICKER_START").type(startHaveData);
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.wait(1000);
      cy.contains("Active");
      cy.wait(3000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS02-2_TC11_Date and Status", () => {
      goToSubMenuMerchantManagement();
      cy.get("#TF_DATERANGEPICKER_START").type(startHaveData);
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData);
      cy.wait(1000);
      cy.get("#DD_STATUS").click();
      cy.wait(1000);
      cy.get("#DD_STATUS_1").click();
      cy.wait(1000);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.wait(1000);
      cy.contains("Active");
      cy.wait(3000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
  });

  context("2 View Merchant Detail", () => {
    it("TS02-2_TC12-TC13_Merchant Detail page", () => {
      goToSubMenuMerchantManagement();
      cy.wait(1000);
      cy.get("#TF_MID").type(midCompany);
      cy.get("#BT_SEARCH").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(
        ":nth-child(1) > :nth-child(6) > #IB_TABLE_MENU_undefined",
      ).click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#MENU_BUTTON_DETAIL").click();
      cy.contains(midCompany);
      cy.wait(3000);
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
  });

  context("3 Edit Merchant Detail", () => {
    it("TS02-2_TC14-TC21_Edit Merchant Detail", () => {
      goToSubMenuMerchantManagement();
      cy.wait(1000);
      cy.get("#TF_MID_NAME").type(editMerchantName);
      cy.get("#BT_SEARCH").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(
        ":nth-child(1) > :nth-child(6) > #IB_TABLE_MENU_undefined",
      ).click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#MENU_BUTTON_DETAIL").click();
      cy.contains(editMerchantName);
      cy.wait(2000);
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#IB_MENU_GENERNAL_undefined").click();
      cy.wait(1000);
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#MENU_BUTTON_MERCHANT_EDIT").click();
      cy.wait(1000);
      cy.takeScreenshotSimple(5, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".MuiGrid-grid-xs-2 > #BT_CONFIRM_EDIT_COMPANY").click();
      cy.contains("อัพเดท Account name และ Account number เรียบร้อย");
      cy.takeScreenshotSimple(6, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
      cy.wait(1000);
      cy.takeScreenshotSimple(7, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#TF_SETTLEMENT_PER_DAY").clear();
      cy.get("#TF_SETTLEMENT_PER_MONTH").clear();
      cy.get("#TF_ADDRESS1").clear();
      cy.get(
        ":nth-child(8) > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #TF_ZIP",
      ).clear();
      cy.get("#TF_PHONE").clear();
      cy.get(".css-1vj6niw > .MuiGrid-root > #BT_CONFIRM_EDIT_COMPANY").click();
      cy.contains("(Only 5 Numeric characters)");
      cy.contains("(Between 9-10 Numeric characters, starting with 0)");
      cy.wait(2000);
      cy.takeScreenshotSimple(8, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#TF_SETTLEMENT_PER_DAY").type("1");
      cy.get("#TF_SETTLEMENT_PER_MONTH").type("10");
      cy.wait(1000);
      cy.get("#TF_ADDRESS1").type(editAddress);
      cy.get(
        ":nth-child(8) > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #TF_ZIP",
      ).type(editZip);
      cy.get("#TF_PHONE").type(editTle);
      cy.takeScreenshotSimple(9, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".css-1vj6niw > .MuiGrid-root > #BT_CONFIRM_EDIT_COMPANY").click();
      cy.takeScreenshotSimple(10, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.wait(1000);
      cy.get("#BT_RIGHT").click();
      cy.wait(1000);
      cy.get(".css-1vj6niw > .MuiGrid-root > #BT_CONFIRM_EDIT_COMPANY").click();
      cy.takeScreenshotSimple(11, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.wait(1000);
      cy.get("#BT_LEFT").click();
      cy.takeScreenshotSimple(12, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("Success");
      cy.wait(2000);
      cy.get("#BT_CENTER").click();
      cy.takeScreenshotSimple(13, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains(editAddress);
      cy.contains(editZip);
      cy.contains(editTle);
      cy.takeScreenshotSimple(14, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.wait(3000);
    });
  });

  context("4 Edit Payment Service (QR Credit Card) in Company Detail", () => {
    it("TS02-2_TC22-TC30_Edit Limit Per Transaction", () => {
      goToSubMenuMerchantManagement();
      cy.wait(1000);
      cy.get("#TF_MID_NAME").type(merchantNameUpDateLimiPerTransaction);
      cy.get("#BT_SEARCH").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(
        ":nth-child(1) > :nth-child(6) > #IB_TABLE_MENU_undefined",
      ).click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#MENU_BUTTON_DETAIL").click();
      cy.contains(merchantNameUpDateLimiPerTransaction);
      cy.wait(1000);
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(
        ":nth-child(4) > .MuiGrid-grid-xs-1 > #IB_MENU_GENERNAL_undefined",
      ).click();
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".MuiPaper-root > .MuiList-root").click();
      cy.get("#limit-per-transaction").clear();
      cy.wait(1000);
      cy.get("#limit-per-transaction").type(upDateLimiPerTransaction);
      cy.get(":nth-child(3) > .MuiFormControl-root > .MuiInputBase-root").type(
        "Update Limit Per Transaction",
      );
      cy.wait(1000);
      cy.takeScreenshotSimple(5, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CONFIRM_CHANGE_STATUS").click();
      cy.contains("Success");
      cy.wait(2000);
      cy.takeScreenshotSimple(7, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
      cy.contains(upDateLimiPerTransaction);
      cy.wait(3000);
      cy.takeScreenshotSimple(8, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
  });

  context(
    "5 Edit Payment Service (QR Credit Card) status Suspended in Merchant Detail",
    () => {
      it("TS02-2_TC31-TC39_Edit Limit Per Transaction", () => {
        goToSubMenuMerchantManagement();
        cy.wait(1000);
        cy.get("#TF_MID_NAME").type(merchantNameUpDateLimiPerTransaction);
        cy.get("#BT_SEARCH").click();
        cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get(
          ":nth-child(1) > :nth-child(6) > #IB_TABLE_MENU_undefined",
        ).click();
        cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get("#MENU_BUTTON_DETAIL").click();
        cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.contains(merchantNameUpDateLimiPerTransaction);
        cy.wait(1000);
        cy.get(
          ":nth-child(4) > .MuiGrid-grid-xs-1 > #IB_MENU_GENERNAL_undefined",
        ).click();
        cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get(".MuiPaper-root > .MuiList-root").click();
        cy.wait(1000);
        cy.get("#DD_SELECT_STATUS").click();
        cy.wait(1000);
        cy.get("#DD_STATUS_3").click();
        cy.wait(1000);
        cy.get(
          ":nth-child(3) > .MuiFormControl-root > .MuiInputBase-root",
        ).type("Update Status Payment Suspend");
        cy.wait(1000);
        cy.takeScreenshotSimple(5, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get("#BT_CONFIRM_CHANGE_STATUS").click();
        cy.contains("Success");
        cy.wait(2000);
        cy.takeScreenshotSimple(6, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get("#BT_CENTER").click();
        cy.contains("Suspended");
        cy.wait(3000);
        cy.takeScreenshotSimple(7, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      });
    },
  );

  context(
    "6 Edit Payment Service (QR Credit Card) status Active in Merchant Detail",
    () => {
      it("TS02-2_TC40-TC48_Edit Limit Per Transaction", () => {
        goToSubMenuMerchantManagement();
        cy.wait(1000);
        cy.get("#TF_MID_NAME").type(merchantNameUpDateLimiPerTransaction);
        cy.get("#BT_SEARCH").click();
        cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get(
          ":nth-child(1) > :nth-child(6) > #IB_TABLE_MENU_undefined",
        ).click();
        cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get("#MENU_BUTTON_DETAIL").click();
        cy.contains(merchantNameUpDateLimiPerTransaction);
        cy.wait(1000);
        cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get(
          ":nth-child(4) > .MuiGrid-grid-xs-1 > #IB_MENU_GENERNAL_undefined",
        ).click();
        cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get(".MuiPaper-root > .MuiList-root").click();
        cy.wait(1000);
        cy.get("#DD_SELECT_STATUS").click();
        cy.wait(1000);
        cy.get("#DD_STATUS_2").click();
        cy.wait(1000);
        cy.get(
          ":nth-child(3) > .MuiFormControl-root > .MuiInputBase-root",
        ).type("Update Status Payment Active");
        cy.takeScreenshotSimple(5, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.wait(1000);
        cy.get("#BT_CONFIRM_CHANGE_STATUS").click();
        cy.contains("Success");
        cy.wait(2000);
        cy.takeScreenshotSimple(5, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get("#BT_CENTER").click();
        cy.contains("Active");
        cy.wait(3000);
        cy.takeScreenshotSimple(6, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      });
    },
  );

  context("7 Export Excel in Merchant Management page", () => {
    it("TS02-2_TC49 Export of Merchant Management in All Merchant Management page", () => {
      goToSubMenuMerchantManagement();
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
    it("TS02-2_TC50_Search by MID then Export of Company Report", () => {
      goToSubMenuMerchantManagement();
      cy.get("#TF_MID").type(midCompany);
      cy.get("#BT_SEARCH").click();
      cy.wait(1000);
      cy.contains(midCompany);
      cy.wait(3000);
      cy.get("#BT_EXPORT_EXCEL").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.renameNewfile("xlsx"); // ไม่ต้องระบุชื่อไฟล์, มันจะหาตัวล่าสุดให้เอง
      cy.get("@filename").then((newFileName) => {
        cy.log("ชื่อไฟล์ใหม่ล่าสุด:", newFileName);
        cy.validateFile(newFileName, 1);
      });
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.RUNNER);
    });
    it("TS02-2_TC51_Search by Merchant Name then Export of Company Report", () => {
      goToSubMenuMerchantManagement();
      cy.get("#TF_MID_NAME").type(merchantName);
      cy.get("#BT_SEARCH").click();
      cy.wait(1000);
      cy.contains(merchantName);
      cy.wait(3000);
      cy.wait(3000);
      cy.get("#BT_EXPORT_EXCEL").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.renameNewfile("xlsx"); // ไม่ต้องระบุชื่อไฟล์, มันจะหาตัวล่าสุดให้เอง
      cy.get("@filename").then((newFileName) => {
        cy.log("ชื่อไฟล์ใหม่ล่าสุด:", newFileName);
        cy.validateFile(newFileName, 1);
      });
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.RUNNER);
    });
    it("TS02-2_TC52_Search by Date then Export of Company Report", () => {
      goToSubMenuMerchantManagement();
      cy.get("#TF_DATERANGEPICKER_START").type(startHaveData);
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData);
      cy.get("#BT_SEARCH").click();
      cy.wait(1000);
      cy.contains("Active");
      cy.wait(3000);
      cy.wait(3000);
      cy.get("#BT_EXPORT_EXCEL").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.renameNewfile("xlsx"); // ไม่ต้องระบุชื่อไฟล์, มันจะหาตัวล่าสุดให้เอง
      cy.get("@filename").then((newFileName) => {
        cy.log("ชื่อไฟล์ใหม่ล่าสุด:", newFileName);
        cy.validateFile(newFileName, 1);
      });
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.RUNNER);
    });
    it("TS02-2_TC53_Search by Status and Date  then Export of Company Report", () => {
      goToSubMenuMerchantManagement();
      cy.get("#TF_DATERANGEPICKER_START").type(startHaveData);
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData);
      cy.wait(1000);
      cy.get("#DD_STATUS").click();
      cy.wait(1000);
      cy.get("#DD_STATUS_1").click();
      cy.wait(1000);
      cy.get("#BT_SEARCH").click();
      cy.wait(1000);
      cy.contains("Active");
      cy.wait(3000);
      cy.get("#BT_EXPORT_EXCEL").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.renameNewfile("xlsx"); // ไม่ต้องระบุชื่อไฟล์, มันจะหาตัวล่าสุดให้เอง
      cy.get("@filename").then((newFileName) => {
        cy.log("ชื่อไฟล์ใหม่ล่าสุด:", newFileName);
        cy.validateFile(newFileName, 1);
      });
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.RUNNER);
    });
  });
});
