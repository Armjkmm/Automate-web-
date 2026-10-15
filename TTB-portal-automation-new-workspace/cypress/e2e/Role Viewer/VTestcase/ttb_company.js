// const { cy } = require("date-fns/locale");

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
function clearSearch() {
  cy.get(".MuiGrid-grid-xs-3 > .MuiGrid-root > #BT_RESET_VALUE").click();
}

let startDateNotFound = "05/07/2025";
let endDateNotFound = "05/07/2025";
let startHaveData = "19/07/2025";
let endHaveData = "25/07/2025";

//#region Search in icon eye
let companyNameIConEye = "CMU56XD";
let midIConEye = "862846318025752";
//#endregion

//#region Search in Company
let companyName = "CMU56XD";
let taxID = "0115531101766";
let midCompany = "862846318025752";
let accountNo = "0541056438";
//#endregion

//#region Edit Company
let editCompany = "Kitty kids";
let editStatusCompany = "Kitty kids";
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
let merchantAddPaymentServiceQRCS = "Play 33";
let upDateLimiPerTransaction = "3,000";
let searchAtHaveAllTransactionCashPromptpayQRCS = "ซีเอ็มยู56";

describe("Test Scenario: 01 Company", () => {
  beforeEach(() => {
    //auto login to enter portal page
    cy.loginBankPortalPageUAT(
      Cypress.env("VIEWER_USERNAME2"),
      Cypress.env("VIEWER_PASSWORD2"),
    );

    //   Startเปลี่ยนภาษา Web ให้เป็นภาษา English
    //  cy.get("#BT_CHANGE_LANG").click();
    //  cy.get("#MENU_LANG_EN > .MuiTypography-root").click();
    //   End เปลี่ยนภาษา Web ให้เป็นภาษา English
  });

  context("1 Company Management", () => {
    it("TS02_TC01-TC02_Company page", () => {
      goToSubMenuAllCompany();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.wait(3000);
    });
  });

  context("2 Search Company", () => {
    it("TS02_TC93_Search by Company Name data not found", () => {
      goToSubMenuAllCompany();
      cy.get("#TF_COMPANY_NAME").type("PapJuaaaa");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.wait(2000);
      cy.contains("Data Not Found");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.wait(3000);
      cy.get("#BT_CENTER").click();
    });
    it("TS02_TC04_Search by Tax ID data not found", () => {
      goToSubMenuAllCompany();
      cy.get("#TF_TAX_ID").type("0111111111111");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.wait(2000);
      cy.contains("Data Not Found");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.wait(3000);
      cy.get("#BT_CENTER").click();
    });
    it("TS02_TC05_Search by MID data not found", () => {
      goToSubMenuAllCompany();
      cy.get("#TF_MID").type("111111111110923");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.wait(2000);
      cy.contains("Data Not Found");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.wait(3000);
      cy.get("#BT_CENTER").click();
    });
    it("TS02_TC06_Search by Account Number No data not found", () => {
      goToSubMenuAllCompany();
      cy.get("#TF_ACCOUNT_NUMBER").type("0111111111");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.wait(2000);
      cy.contains("Data Not Found");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.wait(3000);
      cy.get("#BT_CENTER").click();
    });
    it("TS02_TC07_Search by Date not found", () => {
      goToSubMenuAllCompany();
      cy.get("#TF_DATERANGEPICKER_START").type(startDateNotFound);
      cy.get("#TF_DATERANGEPICKER_END").type(endDateNotFound);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.wait(2000);
      cy.contains("Data Not Found");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.wait(3000);
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
      cy.wait(2000);
      cy.contains("Data Not Found");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.wait(3000);
      cy.get("#BT_CENTER").click();
    });
    it("TS02_TC09_Search by Date invalid", () => {
      goToSubMenuAllCompany();
      cy.get("#TF_DATERANGEPICKER_START").type("10/12/21");
      cy.get("#TF_DATERANGEPICKER_END").type("10/12/21");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.wait(2000);
      cy.contains("Data Not Found");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.wait(3000);
      cy.get("#BT_CENTER").click();
    });
    it("TS02_TC10_Search by Company Name ", () => {
      goToSubMenuAllCompany();
      cy.get("#TF_COMPANY_NAME").type(companyName);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains(companyName);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.wait(3000);
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
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#MENU_BUTTON_DETAIL").click();
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains(taxID);
      cy.wait(3000);
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
      cy.get("#MENU_BUTTON_DETAIL").click();
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains(midCompany);
      cy.wait(3000);
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
      cy.get("#MENU_BUTTON_DETAIL").click();
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS02_TC14_Search by Date", () => {
      goToSubMenuAllCompany();
      cy.get("#TF_DATERANGEPICKER_START").type(startHaveData);
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("Active");
      cy.wait(3000);
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
      cy.contains("Active");
      cy.wait(3000);
    });
  });

  context("3 View Company Detail", () => {
    it("TS02_TC16-TC17_Company Detail page", () => {
      goToSubMenuAllCompany();
      cy.get("#TF_TAX_ID").type(taxID);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(
        ":nth-child(1) > :nth-child(7) > #IB_TABLE_MENU_undefined",
      ).click();
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#MENU_BUTTON_DETAIL").click();
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains(taxID);
      cy.wait(3000);
    });
  });
});
