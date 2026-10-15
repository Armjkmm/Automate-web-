function goToSubMenuMerchantManagement() {
  cy.get(
    ".css-1mvsuhg > .MuiDrawer-root > .MuiPaper-root > .css-1jd25az > .MuiList-root > :nth-child(2) > #MAINMENU_6 > .MuiListItemText-root > .MuiTypography-root",
  ).click();
  cy.wait(3000);
  cy.intercept("POST", "/company/api/web/merchant/ttb/summary").as(
    "merchantManagementPage",
  );
  cy.get("#SUB_MENU_6_1_3").click();
  cy.wait("@merchantManagementPage");
}

let startDateNotFound = "05/07/2025";
let endDateNotFound = "05/07/2025";
let startHaveData = "02/09/2025";
let endHaveData = "02/09/2025";

let midCompany = "862847771172963";
let merchantName = "บจก_ซิกเซเว่น67 จัดกัด";
let merchantNameUpDateLimiPerTransaction = "ซีเอ็มยู56";
let upDateLimiPerTransaction = "60,000";
let EditQRCSCaseNoHaveOwner = "ttb33G(ซีเอ็มยู53)";

//#region edit Merchant
let editMerchantName = "บจก_ซิกเซเว่น67 จัดกัด";
let editAddress = "BBK";
let editZip = "22222";
let editTle = "0982222222";
//#endregion

describe("Test Scenario: 02-3 Company (Merchant Management)", () => {
  beforeEach(() => {
    //auto login to enter portal page
    cy.loginBankPortalPageUAT(
      Cypress.env("ADMIN_USERNAME"),
      Cypress.env("ADMIN_PASSWORD"),
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
      cy.get("#TF_MID").type("111111111110923").should("be.visible");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains("Data Not Found").should("be.visible");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS02-2_TC04_Merchant Name data not found", () => {
      goToSubMenuMerchantManagement();
      cy.get("#TF_MID_NAME").type("Hex").should("be.visible");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains("Data Not Found").should("be.visible");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS02-2_TC05_Date data not found", () => {
      goToSubMenuMerchantManagement();
      cy.get("#TF_DATERANGEPICKER_START")
        .type(startDateNotFound)
        .should("be.visible");
      cy.get("#TF_DATERANGEPICKER_END")
        .type(endDateNotFound)
        .should("be.visible");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains("Data Not Found").should("be.visible");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS02-2_TC06_Date and Status data not found", () => {
      goToSubMenuMerchantManagement();
      cy.get("#TF_DATERANGEPICKER_START")
        .type(startDateNotFound)
        .should("be.visible");
      cy.get("#TF_DATERANGEPICKER_END")
        .type(endDateNotFound)
        .should("be.visible");
      cy.wait(1000);
      cy.get("#DD_STATUS").click();
      cy.wait(1000);
      cy.get("#DD_STATUS_4").click();
      cy.wait(1000);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains("Data Not Found").should("be.visible");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS02-2_TC07_Date invalid", () => {
      goToSubMenuMerchantManagement();
      cy.get("#TF_DATERANGEPICKER_START").type("2020").should("be.visible");
      cy.get("#TF_DATERANGEPICKER_END").type("202010").should("be.visible");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains("Data Not Found").should("be.visible");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS02-2_TC08_MID", () => {
      goToSubMenuMerchantManagement();
      cy.get("#TF_MID").type(midCompany).should("be.visible");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains(midCompany).should("be.visible");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS02-2_TC09_Merchant Name", () => {
      goToSubMenuMerchantManagement();
      cy.get("#TF_MID_NAME").type(merchantName).should("be.visible");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains(merchantName).should("be.visible");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS02-2_TC10_Date", () => {
      goToSubMenuMerchantManagement();
      cy.get("#TF_DATERANGEPICKER_START")
        .type(startHaveData)
        .should("be.visible");
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData).should("be.visible");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains("Active").should("be.visible");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS02-2_TC11_Date and Status", () => {
      goToSubMenuMerchantManagement();
      cy.get("#TF_DATERANGEPICKER_START")
        .type(startHaveData)
        .should("be.visible");
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData).should("be.visible");
      cy.wait(1000);
      cy.get("#DD_STATUS").click();
      cy.wait(1000);
      cy.get("#DD_STATUS_1").click();
      cy.wait(1000);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains("Active").should("be.visible");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
  });

  context("2 View Merchant Detail", () => {
    it("TS02-2_TC12-TC14_Merchant Detail page", () => {
      goToSubMenuMerchantManagement();
      cy.wait(1000);
      cy.get("#TF_MID").type(midCompany).should("be.visible");
      cy.get("#BT_SEARCH").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(
        ":nth-child(1) > :nth-child(6) > #IB_TABLE_MENU_undefined",
      ).click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#MENU_BUTTON_DETAIL").click();
      cy.contains(midCompany).should("be.visible");
      cy.contains("QR Crossborder").should("be.visible");
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
  });

  context("3 Edit Merchant Detail", () => {
    it("TS02-2_TC15-TC23_Edit Merchant Detail", () => {
      goToSubMenuMerchantManagement();
      cy.wait(1000);
      cy.get("#TF_MID_NAME").type(editMerchantName).should("be.visible");
      cy.get("#BT_SEARCH").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(
        ":nth-child(1) > :nth-child(6) > #IB_TABLE_MENU_undefined",
      ).click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);

      cy.get("#MENU_BUTTON_DETAIL").click();
      cy.contains(editMerchantName).should("be.visible");
      cy.wait(2000);
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#IB_MENU_GENERNAL_undefined").click();
      cy.wait(1000);
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.intercept("POST", "/company/api/company/city").as("createCity");
      cy.get("#MENU_BUTTON_MERCHANT_EDIT").click();
      cy.intercept(
        "POST",
        "/company/api/company/ttb/inquiry/accountNameAndNumber",
      ).as("updateAccountNumber");
      cy.get(".MuiGrid-grid-xs-2 > #BT_CONFIRM_EDIT_COMPANY").click();
      cy.wait("@updateAccountNumber");
      cy.takeScreenshotSimple(5, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("อัพเดท Account name และ Account number เรียบร้อย").should(
        "be.visible",
      );
      cy.get("#BT_CENTER").click();
      cy.takeScreenshotSimple(6, Cypress.ScreenshotCaptureEnum.VIEWPORT);

      //Start check radio button
      cy.get('input[type="radio"]:not([disabled]):not(:checked)')
        .first()
        .check();
      //End check radio button

      cy.get("#TF_SETTLEMENT_PER_DAY").clear();
      cy.get("#TF_SETTLEMENT_PER_MONTH").clear();
      cy.wait(2000);
      cy.get("#TF_SETTLEMENT_PER_DAY").type("1").should("be.visible");
      cy.get("#TF_SETTLEMENT_PER_MONTH").type("30").should("be.visible");
      cy.get("#TF_ADDRESS1").clear();
      cy.get(
        ":nth-child(8) > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #TF_ZIP",
      ).clear();
      cy.get("#TF_PHONE").clear();
      cy.get("#TF_ADDRESS_1").clear();
      cy.get(
        ":nth-child(5) > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #TF_ZIP",
      ).clear();
      cy.get("#TF_TAX_BRANCH_NAME").clear();
      cy.get("#TF_TAX_BRANCH_NO").clear();
      cy.get(".css-1vj6niw > .MuiGrid-root > #BT_CONFIRM_EDIT_COMPANY").click();

      cy.takeScreenshotSimple(7, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.genAddressText().then((address) => {
        cy.get("#TF_ADDRESS1").type(address).should("be.visible");
      });
      cy.genZipCode().then((zip) => {
        cy.get(
          ":nth-child(8) > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #TF_ZIP",
        )
          .type(zip)
          .should("be.visible");
      });
      cy.genThaiPhoneNumber().then((phone) => {
        cy.get("#TF_PHONE").type(phone).should("be.visible");
      });
      cy.getRandomNickname().then((nickname) => {
        cy.get("#TF_TAX_BRANCH_NAME").type(nickname);
      });
      cy.genZipCode().then((zip) => {
        cy.get("#TF_TAX_BRANCH_NO").type(zip).should("be.visible");
      });
      cy.genAddressText().then((address) => {
        cy.get("#TF_ADDRESS_1").type(address).should("be.visible");
      });
      cy.genZipCode().then((zip) => {
        cy.get(
          ":nth-child(5) > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #TF_ZIP",
        )
          .type(zip)
          .should("be.visible");
      });
      cy.takeScreenshotSimple(8, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".css-1vj6niw > .MuiGrid-root > #BT_CONFIRM_EDIT_COMPANY").click();
      cy.takeScreenshotSimple(9, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("Confirm Edit Merchant?").should("be.visible");
      cy.takeScreenshotSimple(11, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_RIGHT").click();
      cy.takeScreenshotSimple(10, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".css-1vj6niw > .MuiGrid-root > #BT_CONFIRM_EDIT_COMPANY").click();
      cy.takeScreenshotSimple(11, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("Confirm Edit Merchant?").should("be.visible");
      cy.get("#BT_LEFT").click();
      cy.takeScreenshotSimple(12, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("Success").should("be.visible");
      cy.intercept("POST", "/company/api/company/province").as(
        "goToMerchantPage",
      );
      cy.get("#BT_CENTER").click();
      cy.wait("@goToMerchantPage");
      cy.takeScreenshotSimple(13, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
  });

  context("4 Edit Payment Service QR Credit Card in Merchant Detail", () => {
    it("TS02_TC24-TC32_Edit Limit Per Transaction", () => {
      goToSubMenuMerchantManagement();
      cy.get("#TF_MID_NAME")
        .type(merchantNameUpDateLimiPerTransaction)
        .should("be.visible");
      cy.get("#BT_SEARCH").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#IB_TABLE_MENU_undefined").click();
      cy.contains("View Details").should("be.visible");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("View Details").click();
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(
        ":nth-child(4) > .MuiGrid-grid-xs-1 > #IB_MENU_GENERNAL_undefined",
      ).click();
      cy.contains("Edit QR Credit Card").should("be.visible");
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("Edit QR Credit Card").click();
      cy.takeScreenshotSimple(5, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#limit-per-transaction").clear();
      cy.takeScreenshotSimple(7, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.wait(1000);
      cy.genZipCode().then((zip) => {
        cy.get("#limit-per-transaction").type(zip).should("be.visible");
      });
      cy.get(":nth-child(3) > .MuiFormControl-root > .MuiInputBase-root")
        .type("Update Limit Per Transaction")
        .should("be.visible");
      cy.takeScreenshotSimple(8, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CONFIRM_CHANGE_STATUS").click();
      cy.takeScreenshotSimple(9, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("Success").should("be.visible");
      cy.get("#BT_CENTER").click();
      cy.takeScreenshotSimple(10, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
  });

  context(
    "5 Edit Payment Service QR Credit Card status Suspended in Company Detail",
    () => {
      it("TS02-2_TC33-TC41_Update Staus Payment Suspended", () => {
        goToSubMenuMerchantManagement();
        cy.get("#TF_MID_NAME")
          .type(merchantNameUpDateLimiPerTransaction)
          .should("be.visible");
        cy.get("#BT_SEARCH").click();
        cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get("#IB_TABLE_MENU_undefined").click();
        cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.contains("View Details").click();
        cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get(
          ":nth-child(4) > .MuiGrid-grid-xs-1 > #IB_MENU_GENERNAL_undefined",
        ).click();
        cy.contains("Edit QR Credit Card").should("be.visible");
        cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.contains("Edit QR Credit Card").click();
        cy.takeScreenshotSimple(5, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get("#limit-per-transaction").clear();
        cy.takeScreenshotSimple(7, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.wait(1000);

        cy.genZipCode().then((zip) => {
          cy.get("#limit-per-transaction").type(zip).should("be.visible");
        });
        cy.get("#DD_SELECT_STATUS").click();
        cy.wait(1000);
        cy.takeScreenshotSimple(7, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get("#DD_STATUS_3").click();
        cy.wait(1000);
        cy.get(":nth-child(3) > .MuiFormControl-root > .MuiInputBase-root")
          .type("Update Limit Per Transaction and status Active suspened")
          .should("be.visible");
        cy.takeScreenshotSimple(8, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get("#BT_CONFIRM_CHANGE_STATUS").click();
        cy.takeScreenshotSimple(9, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.contains("Success").should("be.visible");
        cy.get("#BT_CENTER").click();
        cy.takeScreenshotSimple(10, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      });
    },
  );

  context(
    "6 Edit Payment Service QR Credit Card status Active in Company Detail",
    () => {
      it("TS02-2_TC42-TC50_Update Staus Payment Active", () => {
        goToSubMenuMerchantManagement();
        cy.get("#TF_MID_NAME")
          .type(merchantNameUpDateLimiPerTransaction)
          .should("be.visible");
        cy.get("#BT_SEARCH").click();
        cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get("#IB_TABLE_MENU_undefined").click();
        cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.contains("View Details").click();
        cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get(
          ":nth-child(4) > .MuiGrid-grid-xs-1 > #IB_MENU_GENERNAL_undefined",
        ).click();
        cy.contains("Edit QR Credit Card").should("be.visible");
        cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.contains("Edit QR Credit Card").click();
        cy.takeScreenshotSimple(5, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get("#limit-per-transaction").clear();
        cy.takeScreenshotSimple(7, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.wait(1000);
        cy.genZipCode().then((zip) => {
          cy.get("#limit-per-transaction").type(zip).should("be.visible");
        });
        cy.get("#DD_SELECT_STATUS").click();
        cy.wait(1000);
        cy.takeScreenshotSimple(7, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get("#DD_STATUS_2").click();
        cy.wait(2000);
        cy.get(":nth-child(3) > .MuiFormControl-root > .MuiInputBase-root")
          .type("Update Limit Per Transaction and status Active")
          .should("be.visible");
        cy.takeScreenshotSimple(8, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get("#BT_CONFIRM_CHANGE_STATUS").click();
        cy.takeScreenshotSimple(9, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.contains("Success").should("be.visible");
        cy.get("#BT_CENTER").click();
        cy.takeScreenshotSimple(10, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      });
    },
  );

  context("7 Export Excel in Merchant Management page", () => {
    it("TS02-2_TC51 Export of Merchant Management in All Merchant Management page", () => {
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
    it("TS02-2_TC52_Search by MID then Export of Company Report", () => {
      goToSubMenuMerchantManagement();
      cy.get("#TF_MID").type(midCompany).should("be.visible");
      cy.get("#BT_SEARCH").click();
      cy.contains(midCompany).should("be.visible");
      cy.get("#BT_EXPORT_EXCEL").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.renameNewfile("xlsx"); // ไม่ต้องระบุชื่อไฟล์, มันจะหาตัวล่าสุดให้เอง
      cy.get("@filename").then((newFileName) => {
        cy.log("ชื่อไฟล์ใหม่ล่าสุด:", newFileName);
        cy.validateFile(newFileName, 1);
      });
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.RUNNER);
    });
    it("TS02-2_TC53_Search by Merchant Name then Export of Company Report", () => {
      goToSubMenuMerchantManagement();
      cy.get("#TF_MID_NAME").type(merchantName).should("be.visible");
      cy.get("#BT_SEARCH").click();
      cy.contains(merchantName).should("be.visible");
      cy.get("#BT_EXPORT_EXCEL").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.renameNewfile("xlsx"); // ไม่ต้องระบุชื่อไฟล์, มันจะหาตัวล่าสุดให้เอง
      cy.get("@filename").then((newFileName) => {
        cy.log("ชื่อไฟล์ใหม่ล่าสุด:", newFileName);
        cy.validateFile(newFileName, 1);
      });
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.RUNNER);
    });
    it("TS02-2_TC54_Search by Date then Export of Company Report", () => {
      goToSubMenuMerchantManagement();
      cy.get("#TF_DATERANGEPICKER_START")
        .type(startHaveData)
        .should("be.visible");
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData).should("be.visible");
      cy.get("#BT_SEARCH").click();
      cy.contains("Active").should("be.visible");
      cy.get("#BT_EXPORT_EXCEL").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.renameNewfile("xlsx"); // ไม่ต้องระบุชื่อไฟล์, มันจะหาตัวล่าสุดให้เอง
      cy.get("@filename").then((newFileName) => {
        cy.log("ชื่อไฟล์ใหม่ล่าสุด:", newFileName);
        cy.validateFile(newFileName, 1);
      });
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.RUNNER);
    });
    it("TS02-2_TC55_Search by Status and Date  then Export of Company Report", () => {
      goToSubMenuMerchantManagement();
      cy.get("#TF_DATERANGEPICKER_START")
        .type(startHaveData)
        .should("be.visible");
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData).should("be.visible");
      cy.wait(1000);
      cy.get("#DD_STATUS").click();
      cy.wait(1000);
      cy.get("#DD_STATUS_1").click();
      cy.wait(1000);
      cy.get("#BT_SEARCH").click();
      cy.wait(1000);
      cy.contains("Active").should("be.visible");
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

  context("8 Edit Tax invoice in Merchant Detail", () => {
    it("TS02-2TC56-TC68_Edit Tax invoice ", () => {
      goToSubMenuMerchantManagement();
      cy.get("#TF_MID_NAME")
        .type(merchantNameUpDateLimiPerTransaction)
        .should("be.visible");
      cy.get("#BT_SEARCH").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.wait(2000);
      cy.get("#IB_TABLE_MENU_undefined").click();
      cy.intercept("POST", "/company/api/company/city").as(
        "goToEditMerchantPage",
      );
      cy.contains("View Details").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(
        ".css-11h9ze7 > .MuiGrid-grid-xs-1 > #IB_MENU_GENERNAL_undefined",
      ).click();
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#MENU_BUTTON_MERCHANT_EDIT").click();
      cy.wait("@goToEditMerchantPage");
      cy.contains(merchantNameUpDateLimiPerTransaction).should("be.visible");
      cy.takeScreenshotSimple(5, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.intercept(
        "POST",
        "/company/api/company/ttb/inquiry/accountNameAndNumber",
      ).as("updateAccountNumber");
      cy.get(".MuiGrid-grid-xs-2 > #BT_CONFIRM_EDIT_COMPANY").click();
      cy.wait("@updateAccountNumber");
      cy.takeScreenshotSimple(6, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("อัพเดท Account name และ Account number เรียบร้อย").should(
        "be.visible",
      );
      cy.get("#BT_CENTER").click();
      cy.takeScreenshotSimple(7, Cypress.ScreenshotCaptureEnum.VIEWPORT);

      //Start check radio button
      cy.get('input[type="radio"]:not([disabled]):not(:checked)')
        .first()
        .check();
      //End check radio button

      cy.get("#TF_SETTLEMENT_PER_DAY").clear();
      cy.get("#TF_SETTLEMENT_PER_MONTH").clear();
      cy.wait(2000);
      cy.get("#TF_SETTLEMENT_PER_DAY").type("1").should("be.visible");
      cy.get("#TF_SETTLEMENT_PER_MONTH").type("30").should("be.visible");
      cy.get("#TF_ADDRESS1").clear();
      cy.get(
        ":nth-child(8) > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #TF_ZIP",
      ).clear();
      cy.get("#TF_PHONE").clear();
      cy.get("#TF_ADDRESS_1").clear();
      cy.get(
        ":nth-child(5) > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #TF_ZIP",
      ).clear();
      cy.get("#TF_TAX_BRANCH_NAME").clear();
      cy.get("#TF_TAX_BRANCH_NO").clear();
      cy.get(".css-1vj6niw > .MuiGrid-root > #BT_CONFIRM_EDIT_COMPANY").click();

      cy.takeScreenshotSimple(8, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.genAddressText().then((address) => {
        cy.get("#TF_ADDRESS1").type(address).should("be.visible");
      });
      cy.genZipCode().then((zip) => {
        cy.get(
          ":nth-child(8) > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #TF_ZIP",
        )
          .type(zip)
          .should("be.visible");
      });
      cy.genThaiPhoneNumber().then((phone) => {
        cy.get("#TF_PHONE").type(phone).should("be.visible");
      });
      cy.getRandomNickname().then((nickname) => {
        cy.get("#TF_TAX_BRANCH_NAME").type(nickname);
      });
      cy.genZipCode().then((zip) => {
        cy.get("#TF_TAX_BRANCH_NO").type(zip).should("be.visible");
      });
      cy.genAddressText().then((address) => {
        cy.get("#TF_ADDRESS_1").type(address).should("be.visible");
      });
      cy.genZipCode().then((zip) => {
        cy.get(
          ":nth-child(5) > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #TF_ZIP",
        )
          .type(zip)
          .should("be.visible");
      });
      cy.takeScreenshotSimple(9, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".css-1vj6niw > .MuiGrid-root > #BT_CONFIRM_EDIT_COMPANY").click();
      cy.takeScreenshotSimple(10, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("Confirm Edit Merchant?").should("be.visible");
      cy.takeScreenshotSimple(11, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_RIGHT").click();
      cy.takeScreenshotSimple(12, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".css-1vj6niw > .MuiGrid-root > #BT_CONFIRM_EDIT_COMPANY").click();
      cy.takeScreenshotSimple(13, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("Confirm Edit Merchant?").should("be.visible");
      cy.intercept("POST", "/company/api/web/merchant/ttb/edit").as(
        "goToSuccessPopup",
      );
      cy.get("#BT_LEFT").click();
      cy.takeScreenshotSimple(14, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.wait("@goToSuccessPopup");
      cy.contains("Success").should("be.visible");
      cy.intercept("POST", "/company/api/company/province").as(
        "goToMerchantPage",
      );
      cy.get("#BT_CENTER").click();
      cy.wait("@goToMerchantPage");
      cy.takeScreenshotSimple(15, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
  });

  context(
    "9 Update QRCS Type Merchant Ju เงื่อนไขที่ไม่มี Owner อยู่ในร้าน",
    () => {
      it("TS02-2TC69-TC71_Update QRCS Type Merchant Ju", () => {
        goToSubMenuMerchantManagement();
        cy.get("#TF_MID_NAME")
          .type(EditQRCSCaseNoHaveOwner)
          .should("be.visible");
        cy.get("#BT_SEARCH").click();
        cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.wait(2000);
        cy.intercept("POST", "/company/api/company/province").as(
          "goToMerchantPage",
        );
        cy.get("#IB_TABLE_MENU_undefined").click();
        cy.contains("View Details").click();
        cy.wait("@goToMerchantPage");
        cy.get(
          ":nth-child(4) > .MuiGrid-grid-xs-1 > #IB_MENU_GENERNAL_undefined",
        ).click();
        cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get(".MuiPaper-root > .MuiList-root").click();
        cy.get("#limit-per-transaction").clear();
        cy.takeScreenshotSimple(7, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.genZipCode().then((zip) => {
          cy.get("#limit-per-transaction").type(zip).should("be.visible");
        });
        cy.get(":nth-child(3) > .MuiFormControl-root > .MuiInputBase-root")
          .type("Update Limit Per Transaction")
          .should("be.visible");
        cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get("#BT_CONFIRM_CHANGE_STATUS").click();
        cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.contains("Success").should("be.visible");
        cy.get("#BT_CENTER").click();
        cy.contains(EditQRCSCaseNoHaveOwner).should("be.visible");
        cy.takeScreenshotSimple(5, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      });
    },
  );

  context(
    "10 Update QRCS Type Merchant Ju เงื่อนไขที่ไม่มี Owner อยู่ในร้าน status suspended",
    () => {
      it("TS02-2_TC72_Update QRCS Type Merchant Ju", () => {
        goToSubMenuMerchantManagement();
        cy.get("#TF_MID_NAME")
          .type(EditQRCSCaseNoHaveOwner)
          .should("be.visible");
        cy.get("#BT_SEARCH").click();
        cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.wait(2000);
        cy.intercept("POST", "/company/api/company/province").as(
          "goToMerchantPage",
        );
        cy.get("#IB_TABLE_MENU_undefined").click();
        cy.contains("View Details").click();
        cy.wait("@goToMerchantPage");
        cy.get(
          ":nth-child(4) > .MuiGrid-grid-xs-1 > #IB_MENU_GENERNAL_undefined",
        ).click();
        cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get(".MuiPaper-root > .MuiList-root").click();
        cy.get("#limit-per-transaction").clear();
        cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.genZipCode().then((zip) => {
          cy.get("#limit-per-transaction").type(zip).should("be.visible");
        });
        cy.get(":nth-child(3) > .MuiFormControl-root > .MuiInputBase-root")
          .type("Update Limit Per Transaction and Suspended")
          .should("be.visible");
        cy.get("#DD_SELECT_STATUS").click();
        cy.wait(1000);
        cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get("#DD_STATUS_3").click();
        cy.wait(1000);
        cy.takeScreenshotSimple(5, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get("#BT_CONFIRM_CHANGE_STATUS").click();
        cy.takeScreenshotSimple(6, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.contains("Success").should("be.visible");
        cy.get("#BT_CENTER").click();
        cy.contains(EditQRCSCaseNoHaveOwner).should("be.visible");
        cy.takeScreenshotSimple(7, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      });
    },
  );

  context(
    "11 Update QRCS Type Merchant Ju เงื่อนไขที่ไม่มี Owner อยู่ในร้าน status Active",
    () => {
      it("TS02-2_TC73_Update QRCS Type Merchant Ju", () => {
        goToSubMenuMerchantManagement();
        cy.get("#TF_MID_NAME")
          .type(EditQRCSCaseNoHaveOwner)
          .should("be.visible");
        cy.get("#BT_SEARCH").click();
        cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.wait(2000);
        cy.intercept("POST", "/company/api/company/province").as(
          "goToMerchantPage",
        );
        cy.get("#IB_TABLE_MENU_undefined").click();
        cy.contains("View Details").click();
        cy.wait("@goToMerchantPage");
        cy.get(
          ":nth-child(4) > .MuiGrid-grid-xs-1 > #IB_MENU_GENERNAL_undefined",
        ).click();
        cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get(".MuiPaper-root > .MuiList-root").click();
        cy.get("#limit-per-transaction").clear();
        cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.genZipCode().then((zip) => {
          cy.get("#limit-per-transaction").type(zip).should("be.visible");
        });
        cy.get(":nth-child(3) > .MuiFormControl-root > .MuiInputBase-root")
          .type("Update Limit Per Transaction and Active")
          .should("be.visible");
        cy.get("#DD_SELECT_STATUS").click();
        cy.wait(1000);
        cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get("#DD_STATUS_2").click();
        cy.wait(1000);
        cy.takeScreenshotSimple(5, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get("#BT_CONFIRM_CHANGE_STATUS").click();
        cy.takeScreenshotSimple(6, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.contains("Success").should("be.visible");
        cy.get("#BT_CENTER").click();
        cy.contains(EditQRCSCaseNoHaveOwner).should("be.visible");
        cy.takeScreenshotSimple(7, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      });
    },
  );
});
