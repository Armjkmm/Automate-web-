// const { cy } = require("date-fns/locale");
function goToSubMenuAllCompany() {
  cy.get(
    ".css-1mvsuhg > .MuiDrawer-root > .MuiPaper-root > .css-1jd25az > .MuiList-root > :nth-child(2) > #MAINMENU_6 > .MuiListItemText-root > .MuiTypography-root",
  ).click();
  cy.contains("Company Management").should("be.visible");
  let companyListBtn = cy.get(
    "#SUB_MENU_6_1_1 > .MuiListItemText-root > .MuiTypography-root",
    { timeout: 20000 },
  );
  companyListBtn.should("be.visible");
  companyListBtn.click();
}

function clearSearch() {
  cy.get(".MuiGrid-grid-xs-3 > .MuiGrid-root > #BT_RESET_VALUE").click();
}

let startDateNotFound = "05/07/2025";
let endDateNotFound = "05/07/2025";
let startHaveData = "19/07/2025";
let endHaveData = "25/07/2025";

//#region Search in icon eye
let companyNameIConEye = "CMU56";
let midIConEye = "862846318025752";
//#endregion

//#region Search in Company
let companyName = "CMU56";
let taxID = "0115531101766";
let midCompany = "862846318025752";
let accountNo = "0541056438";
//#endregion

//#region Edit Company
let editCompany = "Kitty kids";
let editStatusCompany = "CMU53";
let editStatusTerminateCompany1 = "Play 1920";
let editStatusTerminateCompany2 = "Play 15";
//#endregion

//#region Search in Terminal
let TID = "86272594";
let storeName = "0115531101766";
let midCompanyTerminal = "862841846973312";
let companyID = "1111088132";
//#endregion

let inviteUserInCompany = "Play16 2";
let mobile = "0922692832";
let sentEMail = "thanongsak@digio.asia";
let merchantAddPaymentServiceQRCS = "Play 33";
let upDateLimiPerTransaction = "3,000";

let actionTerminateBy = "Terminated By : DGO_oper2 (DGO_oper2)";
let actionSuspendedBy = "Suspended By : DGO_oper2 (DGO_oper2)";
let actionActivateBy = "Activate By : DGO_oper2 (DGO_oper2)";

describe("Test Scenario: 02 Company", () => {
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

  context("1 Company Management", () => {
    it("TS02_TC01-TC02_Company page", () => {
      goToSubMenuAllCompany();
      cy.contains("Company").should("be.visible");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
  });

  context("2 Search Company", () => {
    it("TS02_TC03_Search by Company Name data not found", () => {
      goToSubMenuAllCompany();
      cy.get("#TF_COMPANY_NAME").type("PapJuaaaa");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.wait(2000);
      cy.contains("Data Not Found").should("be.visible");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS02_TC04_Search by Tax ID data not found", () => {
      goToSubMenuAllCompany();
      cy.get("#TF_TAX_ID").type("0111111111111");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.wait(2000);
      cy.contains("Data Not Found").should("be.visible");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS02_TC05_Search by MID data not found", () => {
      goToSubMenuAllCompany();
      cy.get("#TF_MID").type("111111111110923");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains("Data Not Found").should("be.visible");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS02_TC06_Search by Account Number No data not found", () => {
      goToSubMenuAllCompany();
      cy.get("#TF_ACCOUNT_NUMBER").type("0111111111");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains("Data Not Found").should("be.visible");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS02_TC07_Search by Date not found", () => {
      goToSubMenuAllCompany();
      cy.get("#TF_DATERANGEPICKER_START").type(startDateNotFound);
      cy.get("#TF_DATERANGEPICKER_END").type(endDateNotFound);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains("Data Not Found").should("be.visible");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS02_TC08_Search by Status and Date not found", () => {
      goToSubMenuAllCompany();
      cy.get("#TF_DATERANGEPICKER_START").type(startDateNotFound);
      cy.get("#TF_DATERANGEPICKER_END").type(endDateNotFound);
      cy.get("#DD_STATUS").click();
      cy.get("#DD_STATUS_6").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.wait(1000);
      cy.get("#BT_SEARCH").click();
      cy.contains("Data Not Found").should("be.visible");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS02_TC09_Search by Date invalid", () => {
      goToSubMenuAllCompany();
      cy.get("#TF_DATERANGEPICKER_START").type("10/12/21");
      cy.get("#TF_DATERANGEPICKER_END").type("10/12/21");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains("Data Not Found").should("be.visible");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS02_TC10_Search by Company Name ", () => {
      goToSubMenuAllCompany();
      cy.get("#TF_COMPANY_NAME").type(companyName);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains(companyName).should("be.visible");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS02_TC11_Search by Tax ID", () => {
      goToSubMenuAllCompany();
      cy.get("#TF_TAX_ID").type(taxID);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(
        ":nth-child(1) > :nth-child(7) > #IB_TABLE_MENU_undefined",
      ).click();
      //cy.takeScreenshotSimple1(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("View Details").click();
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains(taxID).should("be.visible");
    });
    it("TS02_TC12_Search by MID", () => {
      goToSubMenuAllCompany();
      cy.get("#TF_MID").type(midCompany);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(
        ":nth-child(1) > :nth-child(7) > #IB_TABLE_MENU_undefined",
      ).click();
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("View Details").click();
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains(midCompany).should("be.visible");
    });
    it("TS02_TC13_Search by Account Number ", () => {
      goToSubMenuAllCompany();
      cy.get("#TF_ACCOUNT_NUMBER").type(accountNo);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(
        ":nth-child(1) > :nth-child(7) > #IB_TABLE_MENU_undefined",
      ).click();
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("View Details").click();
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".css-fb8w0w > #IB_MENU_GENERNAL_undefined").click();
      cy.takeScreenshotSimple(5, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#MENU_BUTTON_MERCHANT_LIST").click();
      cy.takeScreenshotSimple(6, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains(accountNo).should("be.visible");
    });
    it("TS02_TC14_Search by Date", () => {
      goToSubMenuAllCompany();
      cy.get("#TF_DATERANGEPICKER_START").type(startHaveData);
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("Active").should("be.visible");
    });
    it("TS02_TC15_Search by Status and Date", () => {
      goToSubMenuAllCompany();
      cy.get("#TF_DATERANGEPICKER_START").type(startHaveData);
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.wait(1000);
      cy.get("#DD_STATUS").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.wait(1000);
      cy.get("#DD_STATUS_1").click();
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("Active").should("be.visible");
    });
  });

  context("3 View Company Detail", () => {
    it("TS02_TC16-TC18_Company Detail page", () => {
      goToSubMenuAllCompany();
      cy.get("#TF_COMPANY_NAME").type(companyName);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.get(
        ":nth-child(1) > :nth-child(7) > #IB_TABLE_MENU_undefined",
      ).click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("View Details").click();
      cy.contains(taxID).should("be.visible");
      cy.contains("Cash").should("be.visible");
      cy.contains("QR Promptpay").should("be.visible");
      cy.contains("QR Crossborder").should("be.visible");
      cy.contains("QR Credit Card").should("be.visible");
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
  });

  context("3 View Company Detail", () => {
    it("TS02_TC16-TC18_Company Detail page", () => {
      goToSubMenuAllCompany();
      cy.get("#TF_COMPANY_NAME").type(companyName);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.get(
        ":nth-child(1) > :nth-child(7) > #IB_TABLE_MENU_undefined",
      ).click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("View Details").click();
      cy.contains(taxID).should("be.visible");
      cy.contains("Cash").should("be.visible");
      cy.contains("QR Promptpay").should("be.visible");
      cy.contains("QR Crossborder").should("be.visible");
      cy.contains("QR Credit Card").should("be.visible");
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
  });

  context("4 Edit Company in Compamy Detail page", () => {
    it("TS02_TC19-TC25_Edit Company", () => {
      goToSubMenuAllCompany();
      cy.get("#TF_COMPANY_NAME").type(companyName);
      cy.get("#BT_SEARCH").click();
      cy.get(
        ":nth-child(1) > :nth-child(7) > #IB_TABLE_MENU_undefined",
      ).click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.intercept("POST", "/company/api/company/mcc").as("showMCC");
      cy.contains("View Details").click();
      cy.contains("Company Detail").should("be.visible");
      cy.wait("@showMCC");
      cy.get(
        ".css-11h9ze7 > .MuiGrid-grid-xs-1 > #IB_MENU_GENERNAL_undefined",
      ).click();
      cy.contains("Edit Company").should("be.visible");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#MENU_BUTTON_EDIT_COMPANY").click();
      cy.contains("Edit Company").should("be.visible");
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#TF_ADDRESS_1").clear();
      cy.get("#TF_ZIP").clear();
      cy.get("#BT_CONFIRM_EDIT_COMPANY").click();
      cy.contains("Alphanumeric characters").should("be.visible");
      cy.contains("(Only 5 Numeric characters)").should("be.visible");
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#TF_ADDRESS_1").type("BBK").should("be.visible");
      cy.get("#TF_ZIP").type("20220").should("be.visible");
      cy.get("#TF_PHONE").type(mobile).should("be.visible");

      //logic select dropdown MCC
      cy.get("#AUTO_MERCHANT_CATEGORY")
        .invoke("val") // อ่านค่าจาก attribute value ของ input
        .then((value) => {
          const currentText = value.trim();
          cy.log("ค่าปัจจุบันคือ:", currentText);

          const TEXT_A = "0001 อาหารและเครื่องดื่ม";
          const TEXT_B = "0002 แฟชั่น เครื่องแต่งกายและเครื่องประดับ";
          const targetText = currentText === TEXT_A ? TEXT_B : TEXT_A;

          cy.get("#AUTO_MERCHANT_CATEGORY").click(); // เปิด dropdown

          cy.get('[role="listbox"]') // ค้นหาใน listbox ที่แยกออกมา ไม่ใช่ใน input
            .contains(targetText)
            .click();
        });

      cy.takeScreenshotSimple(5, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CONFIRM_EDIT_COMPANY").click();
      cy.contains("Confirm Edit Company?").should("be.visible");
      cy.takeScreenshotSimple(6, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_RIGHT").click();
      cy.takeScreenshotSimple(7, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("Edit Company").should("be.visible");
      cy.get("#BT_CONFIRM_EDIT_COMPANY").click();
      cy.contains("Confirm Edit Company?").should("be.visible");
      cy.takeScreenshotSimple(8, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.intercept("POST", "/company/api/company/ttb/detail").as(
        "companyDetailPage",
      );
      cy.wait(4000);
      cy.get("#BT_LEFT").click();
      cy.wait(4000);
      cy.contains("Success").should("be.visible");
      cy.wait("@companyDetailPage");
      cy.takeScreenshotSimple(9, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
      cy.contains("BBK").should("be.visible");
      cy.contains("20220").should("be.visible");
      cy.takeScreenshotSimple(10, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
  });

  context("5 Edit Status Sespended in Compamy Detail page", () => {
    it("TS02_TC26-TC30_Edit Status Compamy Sespended", () => {
      goToSubMenuAllCompany();
      cy.get("#TF_COMPANY_NAME").type(editStatusCompany);
      cy.wait(1000);
      cy.get("#BT_SEARCH").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.wait(2000);
      cy.get(
        ":nth-child(1) > :nth-child(7) > #IB_TABLE_MENU_undefined",
      ).click();
      cy.contains("View Details").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(
        ".css-11h9ze7 > .MuiGrid-grid-xs-1 > #IB_MENU_GENERNAL_undefined",
      ).click();
      cy.contains("Edit Status").click();
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#DD_SELECT_STATUS").click();
      cy.wait(1000);
      cy.get("#DD_STATUS_3").click();
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.wait(1000);
      cy.get(":nth-child(2) > .MuiFormControl-root > .MuiInputBase-root").type(
        "Test status suspend",
      );
      cy.takeScreenshotSimple(5, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.wait(1000);
      cy.get("#BT_CONFIRM_CHANGE_STATUS").click();
      cy.wait(1000);
      cy.takeScreenshotSimple(6, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("Success").should("be.visible");
      cy.get("#BT_CENTER").click();
      cy.wait(1000);
      cy.contains("Suspended").should("be.visible");
      cy.contains(actionSuspendedBy).should("be.visible");
      cy.takeScreenshotSimple(7, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
  });

  context("6 Edit Status Active in Compamy Detail page", () => {
    it("TS02_TC31-TC35_Edit Status Compamy Active", () => {
      goToSubMenuAllCompany();
      cy.get("#TF_COMPANY_NAME").type(editStatusCompany);
      cy.wait(1000);
      cy.get("#BT_SEARCH").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.wait(2000);
      cy.get(
        ":nth-child(1) > :nth-child(7) > #IB_TABLE_MENU_undefined",
      ).click();
      cy.contains("View Details").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(
        ".css-11h9ze7 > .MuiGrid-grid-xs-1 > #IB_MENU_GENERNAL_undefined",
      ).click();
      cy.contains("Edit Status").click();
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#DD_SELECT_STATUS").click();
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.wait(1000);
      cy.get("#DD_STATUS_2").click();
      cy.wait(1000);
      cy.get(":nth-child(2) > .MuiFormControl-root > .MuiInputBase-root").type(
        "Test status Active",
      );
      cy.takeScreenshotSimple(5, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.wait(1000);
      cy.get("#BT_CONFIRM_CHANGE_STATUS").click();
      cy.takeScreenshotSimple(6, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.wait(1000);
      cy.contains("Success").should("be.visible");
      cy.get("#BT_CENTER").click();
      cy.wait(1000);
      cy.contains("Active").should("be.visible");
      cy.contains(actionActivateBy).should("be.visible");
      cy.takeScreenshotSimple(7, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
  });

  context("7 Edit Status Terminate in Compamy Detail page", () => {
    it("TS02_TC36-TC40_Edit Status Compamy Terminate", () => {
      goToSubMenuAllCompany();
      cy.get("#TF_COMPANY_NAME").type(editStatusCompany);
      cy.wait(1000);
      cy.get("#BT_SEARCH").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.wait(2000);
      cy.get(
        ":nth-child(1) > :nth-child(7) > #IB_TABLE_MENU_undefined",
      ).click();
      cy.contains("View Details").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(
        ".css-11h9ze7 > .MuiGrid-grid-xs-1 > #IB_MENU_GENERNAL_undefined",
      ).click();
      cy.wait(1000);
      cy.contains("Edit Status").click();
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.wait(3000);
      cy.get("#DD_SELECT_STATUS").click();
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.wait(1000);
      cy.get("#DD_STATUS_4").click();
      cy.wait(1000);
      cy.get(":nth-child(2) > .MuiFormControl-root > .MuiInputBase-root").type(
        "Test Status Terminate",
      );
      cy.takeScreenshotSimple(5, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.wait(1000);
      cy.get("#BT_CONFIRM_CHANGE_STATUS").click();
      cy.takeScreenshotSimple(6, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.wait(1000);
      cy.contains("Success").should("be.visible");
      cy.get("#BT_CENTER").click();
      cy.wait(1000);
      cy.contains("Terminated").should("be.visible");
      cy.contains(actionTerminateBy).should("be.visible");
      cy.takeScreenshotSimple(7, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
  });

  context("8 MID or TID View Detail Merchant in Company Detail ", () => {
    it("TS02_TC41-TC45_Merchant Detail page", () => {
      goToSubMenuAllCompany();
      cy.get("#TF_MID").type(midCompany);
      cy.wait(1000);
      cy.get("#BT_SEARCH").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.wait(2000);
      cy.get(
        ":nth-child(1) > :nth-child(7) > #IB_TABLE_MENU_undefined",
      ).click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("View Details").click();
      cy.get("#BT_TAB_3").click();
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains(midCompany).should("be.visible");
      cy.get(".MuiGrid-grid-xs-1 > #IB_MENU_GENERNAL_undefined").click();
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#MENU_BUTTON_MERCHANT_LIST").click();
      cy.takeScreenshotSimple(5, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains(midCompany).should("be.visible");
    });
  });

  context("9 MID or TID View Terminal in Company Detail", () => {
    it("TS02_TC46-TC51_Terminal Management page", () => {
      goToSubMenuAllCompany();
      cy.get("#TF_MID").type(midCompany);
      cy.wait(1000);
      cy.get("#BT_SEARCH").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.wait(2000);
      cy.get(
        ":nth-child(1) > :nth-child(7) > #IB_TABLE_MENU_undefined",
      ).click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("View Details").click();
      cy.get("#BT_TAB_3").click();
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.wait(3000);
      cy.contains(midCompany).should("be.visible");
      cy.get(".MuiGrid-grid-xs-1 > #IB_MENU_GENERNAL_undefined").click();
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#MENU_BUTTON_VIEW_TERMINAL").click();
      cy.takeScreenshotSimple(5, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains(TID).should("be.visible");
    });
  });

  context("10 MID or TID View Terminal Detail in Company Detail", () => {
    it("TS02_TC52-TC57_Terminal Detail page", () => {
      goToSubMenuAllCompany();
      cy.get("#TF_MID").type(midCompany);
      cy.wait(1000);
      cy.get("#BT_SEARCH").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.wait(2000);
      cy.get(
        ":nth-child(1) > :nth-child(7) > #IB_TABLE_MENU_undefined",
      ).click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("View Details").click();
      cy.get("#BT_TAB_3").click();
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.wait(3000);
      cy.contains(midCompany).should("be.visible");
      cy.contains(TID).should("be.visible");
      cy.get(
        ":nth-child(1) > :nth-child(5) > .MuiGrid-root > #IB_MENU_GENERNAL_undefined",
      ).click();
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#MENU_BUTTON_VIEW_TERMINAL_DETAIL").click();
      cy.takeScreenshotSimple(5, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains(TID).should("be.visible");
    });
  });

  context("11 Invite User in Company Detail", () => {
    it("TS02_TC58-TC68_Invite User", () => {
      goToSubMenuAllCompany();
      cy.get("#TF_COMPANY_NAME").type(inviteUserInCompany);
      cy.wait(1000);
      cy.get("#BT_SEARCH").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.wait(2000);
      cy.get(
        ":nth-child(1) > :nth-child(7) > #IB_TABLE_MENU_undefined",
      ).click();
      cy.wait(3000);
      cy.contains("View Details").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.wait(2000);
      cy.get(".css-1l2zjop > #IB_MENU_GENERNAL_undefined").click();
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.wait(1000);
      cy.get("#MENU_BUTTON_INVITE").click();
      cy.contains("Invite owner");
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.wait(1000);
      cy.get("#IB_CLOSE_MODAL").click();
      cy.takeScreenshotSimple(5, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".css-1l2zjop > #IB_MENU_GENERNAL_undefined").click();
      cy.get("#MENU_BUTTON_INVITE").click();
      cy.get("#BT_CONFIRM_CHANGE_STATUS").click();
      cy.contains("Incorrect information");
      cy.takeScreenshotSimple(6, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.wait(2000);
      cy.get("#TF_EMAIL").type("Play16mail.com");
      cy.get(".MuiInputBase-root > #TF_PHONE").type("0922692832");
      cy.takeScreenshotSimple(7, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.wait(1000);
      cy.get("#BT_CONFIRM_CHANGE_STATUS").click();
      cy.takeScreenshotSimple(8, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("Incorrect information").should("be.visible");
      cy.get("#TF_EMAIL").clear();
      cy.get(".MuiInputBase-root > #TF_PHONE").clear();
      cy.wait(1000);
      cy.get("#TF_EMAIL").type("thanonsak@digio.co.th");
      cy.get(".MuiInputBase-root > #TF_PHONE").type("092-269-2832");
      cy.takeScreenshotSimple(9, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.wait(1000);
      cy.get("#BT_CONFIRM_CHANGE_STATUS").click();
      cy.takeScreenshotSimple(10, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("Incorrect information").should("be.visible");
      cy.get("#TF_EMAIL").clear();
      cy.get(".MuiInputBase-root > #TF_PHONE").clear();
      cy.wait(1000);
      cy.get("#TF_EMAIL").type("thanonsgakdigio.co.th");
      cy.get(".MuiInputBase-root > #TF_PHONE").type("0922692832");
      cy.takeScreenshotSimple(11, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.wait(1000);
      cy.get("#BT_CONFIRM_CHANGE_STATUS").click();
      cy.takeScreenshotSimple(12, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("Incorrect information").should("be.visible");
      cy.get("#TF_EMAIL").clear();
      cy.get(".MuiInputBase-root > #TF_PHONE").clear();
      cy.wait(1000);
      cy.get("#TF_EMAIL").type("thanonsak@digio.co.th");
      cy.get(".MuiInputBase-root > #TF_PHONE").type("092-269-2832");
      cy.takeScreenshotSimple(13, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.wait(1000);
      cy.get("#BT_CONFIRM_CHANGE_STATUS").click();
      cy.takeScreenshotSimple(14, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("Incorrect information").should("be.visible");
      cy.get("#TF_EMAIL").clear();
      cy.get(".MuiInputBase-root > #TF_PHONE").clear();
      cy.wait(1000);
      cy.get("#TF_EMAIL").type(sentEMail);
      cy.get(".MuiInputBase-root > #TF_PHONE").type(mobile);
      cy.takeScreenshotSimple(15, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.wait(1000);
      cy.get("#BT_CONFIRM_CHANGE_STATUS").click();
      cy.wait(5000);
      cy.contains("Confirm Invite Owner?");
      cy.takeScreenshotSimple(16, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_LEFT").click();
      cy.wait(3000);
      cy.takeScreenshotSimple(17, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
      cy.wait(3000);
      cy.takeScreenshotSimple(18, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
  });

  context("14 View Terminal in Company Detail", () => {
    it("TS02_TC78-TC81_Terminal Management page", () => {
      goToSubMenuAllCompany();
      cy.get("#TF_MID").type(midCompany).should("be.visible");
      cy.get("#BT_SEARCH").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.wait(2000);
      cy.get(
        ":nth-child(1) > :nth-child(7) > #IB_TABLE_MENU_undefined",
      ).click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("View Details").click();
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".css-fb8w0w > #IB_MENU_GENERNAL_undefined").click();
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#MENU_BUTTON_VIEW_TERMINAL").click();
      cy.contains(TID).should("be.visible");
      cy.takeScreenshotSimple(5, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
  });

  context("15 View Detail Merchant in Company Detail", () => {
    it("TS02_TC82-TC85_Merchant Detail page", () => {
      goToSubMenuAllCompany();
      cy.get("#TF_MID").type(midCompany).should("be.visible");
      cy.get("#BT_SEARCH").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.wait(2000);
      cy.get(
        ":nth-child(1) > :nth-child(7) > #IB_TABLE_MENU_undefined",
      ).click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("View Details").click();
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".css-fb8w0w > #IB_MENU_GENERNAL_undefined").click();
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#MENU_BUTTON_MERCHANT_LIST").click();
      cy.contains(midCompany).should("be.visible");
      cy.takeScreenshotSimple(5, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
  });

  context("16 Edit Merchant in Merchant Detail", () => {
    it("TS02_TC86-TC94_Edit Merchant", () => {
      goToSubMenuAllCompany();
      cy.get("#TF_MID").type(midCompany).should("be.visible");
      cy.get("#BT_SEARCH").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.wait(2000);
      cy.get(
        ":nth-child(1) > :nth-child(7) > #IB_TABLE_MENU_undefined",
      ).click();
      cy.contains("View Details").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".css-fb8w0w > #IB_MENU_GENERNAL_undefined").click();
      cy.get("#MENU_BUTTON_MERCHANT_LIST").click();
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains(midCompany).should("be.visible");
      cy.get(
        ".css-11h9ze7 > .MuiGrid-grid-xs-1 > #IB_MENU_GENERNAL_undefined",
      ).click();
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.intercept("POST", "/company/api/company/city").as(
        "goToEditMerchantPage",
      );
      cy.get("#MENU_BUTTON_MERCHANT_EDIT").click();
      cy.wait("@goToEditMerchantPage");
      cy.contains(midCompany).should("be.visible");
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
      cy.get("#BT_LEFT").click();
      cy.takeScreenshotSimple(14, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("Success").should("be.visible");
      cy.intercept("POST", "/company/api/company/province").as(
        "goToMerchantPage",
      );
      cy.get("#BT_CENTER").click();
      cy.wait("@goToMerchantPage");
      cy.takeScreenshotSimple(15, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
  });

  context("17 Edit Payment Service QR Credit Card in Merchant Detail", () => {
    it("TS02_TC95-TC103_Edit Limit Per Transaction", () => {
      goToSubMenuAllCompany();
      cy.get("#TF_MID").type(midCompany).should("be.visible");
      cy.get("#BT_SEARCH").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.wait(2000);
      cy.get(
        ":nth-child(1) > :nth-child(7) > #IB_TABLE_MENU_undefined",
      ).click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("View Details").click();
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".css-fb8w0w > #IB_MENU_GENERNAL_undefined").click();
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#MENU_BUTTON_MERCHANT_LIST").click();
      cy.takeScreenshotSimple(5, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains(midCompany).should("be.visible");
      cy.wait(1000);
      cy.get(
        ":nth-child(4) > .MuiGrid-grid-xs-1 > #IB_MENU_GENERNAL_undefined",
      ).click();
      cy.takeScreenshotSimple(6, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".MuiPaper-root > .MuiList-root").click();
      cy.get("#limit-per-transaction").clear();
      cy.takeScreenshotSimple(7, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.wait(1000);
      cy.get("#limit-per-transaction").type(upDateLimiPerTransaction);
      cy.get(":nth-child(3) > .MuiFormControl-root > .MuiInputBase-root")
        .type("Update Limit Per Transaction")
        .should("be.visible");
      cy.takeScreenshotSimple(8, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CONFIRM_CHANGE_STATUS").click();
      cy.takeScreenshotSimple(9, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("Success").should("be.visible");
      cy.get("#BT_CENTER").click();
      cy.contains(upDateLimiPerTransaction).should("be.visible");
      cy.takeScreenshotSimple(10, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
  });

  context(
    "18 Edit Payment Service QR Credit Card status Suspended in Company Detail",
    () => {
      it("TS02_TC104-TC112_Update Staus Payment Suspended", () => {
        goToSubMenuAllCompany();
        cy.get("#TF_MID").type(midCompany).should("be.visible");
        cy.get("#BT_SEARCH").click();
        cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.wait(2000);
        cy.get(
          ":nth-child(1) > :nth-child(7) > #IB_TABLE_MENU_undefined",
        ).click();
        cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.contains("View Details").click();
        cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get(".css-fb8w0w > #IB_MENU_GENERNAL_undefined").click();
        cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get("#MENU_BUTTON_MERCHANT_LIST").click();
        cy.contains(midCompany).should("be.visible");
        cy.takeScreenshotSimple(5, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get(
          ":nth-child(4) > .MuiGrid-grid-xs-1 > #IB_MENU_GENERNAL_undefined",
        ).click();
        cy.takeScreenshotSimple(6, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get(".MuiPaper-root > .MuiList-root").click();
        cy.wait(1000);
        cy.get("#DD_SELECT_STATUS").click();
        cy.wait(1000);
        cy.takeScreenshotSimple(7, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get("#DD_STATUS_3").click();
        cy.wait(1000);
        cy.get(":nth-child(3) > .MuiFormControl-root > .MuiInputBase-root")
          .type("Update Status Payment Suspend")
          .should("be.visible");
        cy.takeScreenshotSimple(8, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get("#BT_CONFIRM_CHANGE_STATUS").click();
        cy.takeScreenshotSimple(9, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.contains("Success").should("be.visible");
        cy.get("#BT_CENTER").click();
        cy.contains("Suspended").should("be.visible");
        cy.takeScreenshotSimple(10, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      });
    },
  );

  context(
    "19 Edit Payment Service QR Credit Card status Active in Company Detail",
    () => {
      it("TS02_TC113-TC121_Update Staus Payment Active", () => {
        goToSubMenuAllCompany();
        cy.get("#TF_MID").type(midCompany).should("be.visible");
        cy.get("#BT_SEARCH").click();
        cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.wait(2000);
        cy.get(
          ":nth-child(1) > :nth-child(7) > #IB_TABLE_MENU_undefined",
        ).click();
        cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.contains("View Details").click();
        cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get(".css-fb8w0w > #IB_MENU_GENERNAL_undefined").click();
        cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get("#MENU_BUTTON_MERCHANT_LIST").click();
        cy.contains(midCompany).should("be.visible");
        cy.takeScreenshotSimple(5, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get(
          ":nth-child(4) > .MuiGrid-grid-xs-1 > #IB_MENU_GENERNAL_undefined",
        ).click();
        cy.takeScreenshotSimple(6, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get(".MuiPaper-root > .MuiList-root").click();
        cy.wait(1000);
        cy.takeScreenshotSimple(7, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get("#DD_SELECT_STATUS").click();
        cy.wait(1000);
        cy.get("#DD_STATUS_2").click();
        cy.wait(1000);
        cy.get(":nth-child(3) > .MuiFormControl-root > .MuiInputBase-root")
          .type("Update Status Payment Active")
          .should("be.visible");
        cy.takeScreenshotSimple(8, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get("#BT_CONFIRM_CHANGE_STATUS").click();
        cy.wait(3000);
        cy.takeScreenshotSimple(9, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.contains("Success").should("be.visible");
        cy.get("#BT_CENTER").click();
        cy.contains("Active").should("be.visible");
        cy.takeScreenshotSimple(10, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      });
    },
  );

  context("20 Edit Company in Company page", () => {
    it("TS02_TC122-TC128_Edit Company", () => {
      goToSubMenuAllCompany();
      cy.get("#TF_COMPANY_NAME").type(companyName).should("be.visible");
      cy.get("#BT_SEARCH").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.wait(1000);
      cy.get("#IB_TABLE_MENU_undefined").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.intercept("POST", "/company/api/company/city").as(
        "goToEditMerchantPage",
      );
      cy.contains("Edit Company").click();
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.wait("@goToEditMerchantPage");
      cy.get("#TF_ADDRESS_1").clear();
      cy.get("#TF_ZIP").clear();
      cy.get("#TF_PHONE").clear();
      cy.genAddressText().then((address) => {
        cy.get("#TF_ADDRESS_1").type(address).should("be.visible");
      });
      cy.genZipCode().then((zip) => {
        cy.get("#TF_ZIP").type(zip).should("be.visible");
      });
      cy.genThaiPhoneNumber().then((phone) => {
        cy.get("#TF_PHONE").type(phone).should("be.visible");
      });
      //logic select dropdown MCC
      cy.get("#AUTO_MERCHANT_CATEGORY")
        .invoke("val") // อ่านค่าจาก attribute value ของ input
        .then((value) => {
          const currentText = value.trim();
          cy.log("ค่าปัจจุบันคือ:", currentText);

          const TEXT_A = "0001 อาหารและเครื่องดื่ม";
          const TEXT_B = "0002 แฟชั่น เครื่องแต่งกายและเครื่องประดับ";
          const targetText = currentText === TEXT_A ? TEXT_B : TEXT_A;

          cy.get("#AUTO_MERCHANT_CATEGORY").click(); // เปิด dropdown

          cy.get('[role="listbox"]') // ค้นหาใน listbox ที่แยกออกมา ไม่ใช่ใน input
            .contains(targetText)
            .click();
        });
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CONFIRM_EDIT_COMPANY").click();
      cy.takeScreenshotSimple(5, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.wait(2000);
      cy.get("#BT_RIGHT").click();
      cy.takeScreenshotSimple(6, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CONFIRM_EDIT_COMPANY").click();
      cy.contains("Confirm Edit Company?").should("be.visible");
      cy.takeScreenshotSimple(7, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_LEFT").click();
      cy.contains("Success").should("be.visible");
      cy.takeScreenshotSimple(8, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
      cy.takeScreenshotSimple(9, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
  });

  context("21 Edit Status Suspended in Company page", () => {
    it("TS02_TC129-TC133_Edit status Company suspended", () => {
      goToSubMenuAllCompany();
      cy.get("#TF_COMPANY_NAME").type(editStatusCompany);
      cy.get("#BT_SEARCH").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#IB_TABLE_MENU_undefined").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("Edit Status").click();
      cy.contains("Status").should("be.visible");
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#DD_SELECT_STATUS").click();
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("Suspended").should("be.visible");
      cy.get("#DD_STATUS_2").click();
      cy.get(
        ".MuiGrid-direction-xs-column > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root",
      ).type("Update status company suspended");
      cy.takeScreenshotSimple(5, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CONFIRM_CHANGE_STATUS").click();
      cy.contains("Success").should("be.visible");
      cy.takeScreenshotSimple(6, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
      cy.takeScreenshotSimple(7, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#IB_TABLE_MENU_undefined").click();
      cy.takeScreenshotSimple(8, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.intercept("POST", "/company/api/company/ttb/detail").as(
        "companyDetailPage",
      );
      cy.contains("View Details").click();
      cy.wait("@companyDetailPage");
      cy.contains("Suspended").should("be.visible");
      cy.contains(actionSuspendedBy).should("be.visible");
      cy.takeScreenshotSimple(9, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
  });

  context("22 Edit Status Active in Company page", () => {
    it("TS02_TC134-TC138_Edit status Company Active", () => {
      goToSubMenuAllCompany();
      cy.get("#TF_COMPANY_NAME").type(editStatusCompany);
      cy.get("#BT_SEARCH").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#IB_TABLE_MENU_undefined").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("Edit Status").click();
      cy.contains("Status").should("be.visible");
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#DD_SELECT_STATUS").click();
      cy.contains("Active").should("be.visible");
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#DD_STATUS_1").click();
      cy.get(
        ".MuiGrid-direction-xs-column > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root",
      ).type("Update status company Active");
      cy.takeScreenshotSimple(5, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CONFIRM_CHANGE_STATUS").click();
      cy.contains("Success").should("be.visible");
      cy.takeScreenshotSimple(6, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
      cy.takeScreenshotSimple(7, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#IB_TABLE_MENU_undefined").click();
      cy.takeScreenshotSimple(8, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.intercept("POST", "/company/api/company/ttb/detail").as(
        "companyDetailPage",
      );
      cy.contains("View Details").click();
      cy.wait("@companyDetailPage");
      cy.contains("Active").should("be.visible");
      cy.contains(actionActivateBy).should("be.visible");
      cy.takeScreenshotSimple(9, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
  });

  context("23 Edit Status Terminate in Company page", () => {
    it("TS02_TC139-TC143_Edit status Company Terminate", () => {
      goToSubMenuAllCompany();
      cy.get("#TF_COMPANY_NAME").type(editStatusCompany);
      cy.get("#BT_SEARCH").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#IB_TABLE_MENU_undefined").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("Edit Status").click();
      cy.contains("Status").should("be.visible");
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#DD_SELECT_STATUS").click();
      cy.contains("Terminate").should("be.visible");
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#DD_STATUS_3").click();
      cy.get(
        ".MuiGrid-direction-xs-column > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root",
      ).type("Update status company Terminate");
      cy.takeScreenshotSimple(5, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CONFIRM_CHANGE_STATUS").click();
      cy.contains("Success").should("be.visible");
      cy.takeScreenshotSimple(6, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
      cy.takeScreenshotSimple(7, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#IB_TABLE_MENU_undefined").click();
      cy.takeScreenshotSimple(8, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.intercept("POST", "/company/api/company/ttb/detail").as(
        "companyDetailPage",
      );
      cy.contains("View Details").click();
      cy.wait("@companyDetailPage");
      cy.contains("Terminate").should("be.visible");
      cy.contains(actionTerminateBy);
      cy.takeScreenshotSimple(9, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
  });
});
