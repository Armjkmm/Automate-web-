function goToSubMenuTransactionCash() {
  cy.get(
    ".css-1mvsuhg > .MuiDrawer-root > .MuiPaper-root > .css-1jd25az > .MuiList-root > :nth-child(4) > #MAINMENU_8",
  ).click();
  cy.wait(3000);
  let transactionCashPageBtn = cy.get("#SUB_MENU_8_3_1", { timeout: 20000 });
  transactionCashPageBtn.should("be.visible");
  transactionCashPageBtn.click();
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
function goToSubMenuTransactionQRCreditCard() {
  cy.get(
    ".css-1mvsuhg > .MuiDrawer-root > .MuiPaper-root > .css-1jd25az > .MuiList-root > :nth-child(4) > #MAINMENU_8",
  ).click();
  cy.wait(3000);
  let transactionQRCSPageBtn = cy.get("#SUB_MENU_8_7_1", { timeout: 20000 });
  transactionQRCSPageBtn.should("be.visible");
  transactionQRCSPageBtn.click();
}
let startDateNotFound = "31/08/2025";
let endDateNotFound = "31/08/2025";
let startHaveData = "14/07/2026";
let endHaveData = "14/07/2026";

let tranIDCash = "26071410190786280677"; //Cash = Transaction Cash
let midCash = "862846318025752";
let tidCash = "86229015";
let companyIDCash = "907d4db9-1a9e-4b19-bcbc-71131e4d680a";

let tranIDQRPP = "SDGO862849996672545"; //QRPP = QR Pormptpay
let billerIDQRPP = "010753700001716";
let preFixNoQRPP = "T896";
let midQRPP = "862849996672545";
let tidQRPP = "86261399";
let companyIDQRPP = "907d4db9-1a9e-4b19-bcbc-71131e4d680a";

let tranIDQRCS = "ZDGOE260715134915Y6F"; //QRCS = QR Credit Card
let billerIDQRCS = "010753700001716";
let preFixNoQRCS = "T896";
let midQRCS = "862846318025752";
let tidQRCS = "86229015";
let companyIDQRCS = "907d4db9-1a9e-4b19-bcbc-71131e4d680a";

function clearSearchValues() {
  cy.get("#BT_RESET_VALUE").click();
}

describe("Test Scenario: 02 Transaction", () => {
  beforeEach(() => {
    //  auto login to enter portal page
    cy.loginBankPortalPageUAT(
      Cypress.env("VIEWER_USERNAME2"),
      Cypress.env("VIEWER_PASSWORD2"),
    );
    //   // Startเปลี่ยนภาษา Web ให้เป็นภาษา English
    //  cy.get("#BT_CHANGE_LANG").click();
    //  cy.get("#MENU_LANG_EN > .MuiTypography-root").click();
    //   // End เปลี่ยนภาษา Web ให้เป็นภาษา English
  });
  //#region Transaction Cash
  context("1 Search Cash", () => {
    it("TS03_TC01-TC02_Transaction Cash page", () => {
      goToSubMenuTransactionCash();
      //cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.wait(3000);
    });
    it("TS03_TC03_Search by Transaction ID and Date data not found", () => {
      goToSubMenuTransactionCash();
      cy.get("#TF_TRANSACTION_ID").type("23091208112186292165");
      cy.wait(1000);
      //cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.wait(1000);
      cy.contains("Data Not Found");
      cy.wait(3000);
      //cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS03_TC04_Search by MID and Date data not found", () => {
      goToSubMenuTransactionCash();
      cy.get("#TF_MID").type("123456789101213");
      cy.wait(1000);
      //cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.wait(1000);
      cy.contains("Data Not Found");
      cy.wait(3000);
      //cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS03_TC05_Search by TID and Date data not found", () => {
      goToSubMenuTransactionCash();
      cy.get("#TF_TID").type("86292844");
      cy.wait(1000);
      //cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.wait(1000);
      cy.contains("Data Not Found");
      cy.wait(3000);
      //cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });

    it("TS03_TC06_Search by Company ID and Date data not found", () => {
      goToSubMenuTransactionCash();
      cy.contains("Cash").should("be.visible");
      cy.get("#TF_COM_ID").type("ftyghujklkjjhj-4554-7678-ERTYJGJJ");
      cy.wait(1000);
      cy.get("#TF_DATERANGEPICKER_START").type(startDateNotFound);
      cy.get("#TF_DATERANGEPICKER_END").type(endDateNotFound);
      cy.wait(1000);
      //cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.wait(1000);
      cy.contains("Data Not Found");
      cy.wait(3000);
      //cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS03_TC07_Search by Date data not found", () => {
      goToSubMenuTransactionCash();
      cy.contains("Cash").should("be.visible");
      cy.get("#TF_DATERANGEPICKER_START").type(startDateNotFound);
      cy.get("#TF_DATERANGEPICKER_END").type(endDateNotFound);
      cy.wait(1000);
      //cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.wait(1000);
      cy.contains("Data Not Found");
      cy.wait(3000);
      //cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS03_TC08_Search by Status and Date data not found", () => {
      goToSubMenuTransactionCash();
      cy.contains("Cash").should("be.visible");
      cy.wait(1000);
      cy.get("#TF_DATERANGEPICKER_START").type(startDateNotFound);
      cy.get("#TF_DATERANGEPICKER_END").type(endDateNotFound);
      cy.get("#DD_STATUS").click();
      cy.wait(1000);
      cy.get('[data-value="VOIDED"]').click();
      cy.wait(1000);
      //cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.wait(1000);
      cy.contains("Data Not Found");
      cy.wait(3000);
      //cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS03_TC09_Search by invalid Date", () => {
      goToSubMenuTransactionCash();
      cy.contains("Cash").should("be.visible");
      cy.wait(1000);
      cy.get("#TF_DATERANGEPICKER_START").type("010120");
      cy.get("#TF_DATERANGEPICKER_END").type("010120");
      cy.wait(1000);
      //cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.wait(1000);
      cy.contains("Data Not Found");
      cy.wait(3000);
      //cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS03_TC10_Search by Transaction ID and Date", () => {
      goToSubMenuTransactionCash();
      cy.contains("Cash").should("be.visible");
      cy.get("#TF_TRANSACTION_ID").type(tranIDCash);
      cy.get("#TF_DATERANGEPICKER_START").type(startHaveData);
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData);
      cy.wait(1000);
      //cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains(tranIDCash);
      cy.wait(3000);
      //cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS03_TC11_Search by MID and Date", () => {
      goToSubMenuTransactionCash();
      cy.contains("Cash").should("be.visible");
      cy.get("#TF_MID").type(midCash);
      cy.get("#TF_DATERANGEPICKER_START").type(startHaveData);
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData);
      cy.wait(1000);
      //cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains(midCash);
      cy.wait(3000);
      //cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS03_TC12_Search by TID and Date", () => {
      goToSubMenuTransactionCash();
      cy.contains("Cash").should("be.visible");
      cy.get("#TF_TID").type(tidCash);
      cy.wait(1000);
      cy.get("#TF_DATERANGEPICKER_START").type(startHaveData);
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData);
      cy.wait(1000);
      //cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      //cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#IB_TABLE_MENU_undefined").click();
      cy.get("#MENU_BUTTON_DETAIL").click();
      cy.contains(tidCash);
      cy.wait(3000);
    });
    it("TS03_TC13_Search by Company ID and Date", () => {
      goToSubMenuTransactionCash();
      cy.contains("Cash").should("be.visible");
      cy.get("#TF_COM_ID").type(companyIDCash);
      cy.get("#TF_DATERANGEPICKER_START").type(startHaveData);
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData);
      cy.wait(1000);
      //cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      //cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#IB_TABLE_MENU_undefined").click();
      cy.get("#MENU_BUTTON_DETAIL").click();
      cy.wait(2000);
      cy.get(
        ':nth-child(5) > [style="margin-top: 30px; background-color: white; box-shadow: rgb(196, 196, 196) 3px 3px 3px; border-radius: 10px; max-width: 1000px;"] > .MuiPaper-root > #panel1a-header',
      ).click();
      cy.contains(companyIDCash);
      cy.wait(3000);
    });
    it("TS03_TC14_Search by Date", () => {
      goToSubMenuTransactionCash();
      cy.contains("Cash").should("be.visible");
      cy.get("#TF_DATERANGEPICKER_START").type(startHaveData);
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData);
      cy.wait(1000);
      //cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.wait(3000);
      //cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS03_TC15_Search by Status and Date", () => {
      goToSubMenuTransactionCash();
      cy.contains("Cash").should("be.visible");
      cy.get("#TF_DATERANGEPICKER_START").type(startHaveData);
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData);
      cy.wait(1000);
      cy.get("#DD_STATUS").click();
      cy.wait(1000);
      cy.get('[data-value="APPROVED"]').click();
      cy.wait(1000);
      //cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      //cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#IB_TABLE_MENU_undefined").click();
      cy.get("#MENU_BUTTON_DETAIL").click();
      cy.wait(2000);
    });
  });

  context("2 Transaction Cash Detail", () => {
    it("TS03_TC16-TC18_View Details Cash page", () => {
      goToSubMenuTransactionCash();
      cy.contains("Cash").should("be.visible");
      //cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#IB_TABLE_MENU_undefined").click();
      //cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#MENU_BUTTON_DETAIL").click();
      //cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(
        ':nth-child(4) > [style="margin-top: 30px; background-color: white; box-shadow: rgb(196, 196, 196) 3px 3px 3px; border-radius: 10px; max-width: 1000px;"] > .MuiPaper-root > #panel1a-header',
      ).click();
      cy.get(
        ':nth-child(5) > [style="margin-top: 30px; background-color: white; box-shadow: rgb(196, 196, 196) 3px 3px 3px; border-radius: 10px; max-width: 1000px;"] > .MuiPaper-root > #panel1a-header',
      ).click();
      cy.get(
        ':nth-child(6) > [style="margin-top: 30px; background-color: white; box-shadow: rgb(196, 196, 196) 3px 3px 3px; border-radius: 10px; max-width: 1000px;"] > .MuiPaper-root > #panel1a-header',
      ).click();
      //cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_BACK").click();
    });
  });

  //   #endregion

  //   #region Transaction QR Pormptpay
  context("3 Search QR Promptpay", () => {
    it("TS03_TC20 Click QR Promptpay page", () => {
      goToSubMenuTransactionPromptPay();
      cy.wait(3000);
      //cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS03_TC21_Search by Transaction ID data not found", () => {
      goToSubMenuTransactionPromptPay();
      cy.get("#TF_TRANSACTION_ID").type("SqqO862844819186820");
      cy.wait(1000);
      //cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.wait(1000);
      cy.contains("Data Not Found");
      cy.wait(3000);
      //cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS03_TC22_Search by Biller ID data not found", () => {
      goToSubMenuTransactionPromptPay();
      cy.get("#TF_BILLER_ID").type("000754700001716");
      cy.wait(1000);
      //cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.wait(1000);
      cy.contains("Data Not Found");
      cy.wait(3000);
      //cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS03_TC23_Search by Prefix No data not found", () => {
      goToSubMenuTransactionPromptPay();
      cy.get("#TF_PREFIX_NO").type("Z123");
      cy.wait(1000);
      //cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.wait(1000);
      cy.contains("Data Not Found");
      cy.wait(3000);
      //cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS03_TC24_Search by MID data not found", () => {
      goToSubMenuTransactionPromptPay();
      cy.get("#TF_MID").type("123456789011234");
      cy.wait(1000);
      //cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.wait(1000);
      cy.contains("Data Not Found");
      cy.wait(3000);
      //cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS03_TC25_Search by TID data not found", () => {
      goToSubMenuTransactionPromptPay();
      cy.get("#TF_TID").type("1232233");
      cy.wait(1000);
      //cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.wait(1000);
      cy.contains("Data Not Found");
      cy.wait(3000);
      //cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS03_TC26_Search by Company ID data not found", () => {
      goToSubMenuTransactionPromptPay();
      cy.get("#TF_COM_REF_ID").type("35eb20e3-122s-9999-b99d-de5715a64fb5	");
      cy.wait(1000);
      //cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.wait(1000);
      cy.contains("Data Not Found");
      cy.wait(3000);
      //cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS03_TC27_Search by Date data not found", () => {
      goToSubMenuTransactionPromptPay();
      cy.get("#TF_DATERANGEPICKER_START").type(startDateNotFound);
      cy.get("#TF_DATERANGEPICKER_END").type(endDateNotFound);
      cy.wait(1000);
      //cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.wait(1000);
      cy.contains("Data Not Found");
      cy.wait(3000);
      //cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS03_TC28_Search by Status and Date data not found", () => {
      goToSubMenuTransactionPromptPay();
      cy.get("#TF_DATERANGEPICKER_START").type(startDateNotFound);
      cy.get("#TF_DATERANGEPICKER_END").type(endDateNotFound);
      cy.wait(1000);
      cy.get("#DD_STATUS").click();
      cy.wait(1000);
      cy.get("#DD_STATUS_2").click();
      cy.wait(1000);
      //cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.wait(1000);
      cy.contains("Data Not Found");
      cy.wait(3000);
      //cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS03_TC29_Search by invalid Date", () => {
      goToSubMenuTransactionPromptPay();
      cy.get("#TF_DATERANGEPICKER_START").type("111220");
      cy.get("#TF_DATERANGEPICKER_END").type("111220");
      cy.wait(1000);
      //cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.wait(1000);
      cy.contains("Data Not Found");
      cy.wait(3000);
      //cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS03_TC30_Search by Transaction ID and Date", () => {
      goToSubMenuTransactionPromptPay();
      cy.wait(2000);
      cy.get("#TF_TRANSACTION_ID").type(tranIDQRPP);
      cy.wait(1000);
      cy.get("#TF_DATERANGEPICKER_START").type(startHaveData);
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData);
      cy.wait(1000);
      //cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains(tranIDQRPP);
      cy.wait(3000);
      //cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS03_TC31_Search by Biller ID Date", () => {
      goToSubMenuTransactionPromptPay();
      cy.wait(2000);
      cy.get("#TF_BILLER_ID").type(billerIDQRPP);
      cy.wait(2000);
      cy.get("#TF_DATERANGEPICKER_START").type(startHaveData);
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData);
      cy.wait(1000);
      //cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains(billerIDQRPP);
      cy.wait(3000);
      //cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS03_TC32_Search by Prefix No Date", () => {
      goToSubMenuTransactionPromptPay();
      cy.get("#TF_PREFIX_NO").type(preFixNoQRPP);
      cy.wait(2000);
      cy.get("#TF_DATERANGEPICKER_START").type(startHaveData);
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData);
      cy.wait(1000);
      //cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      //cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#IB_TABLE_MENU_undefined").click();
      //cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#MENU_BUTTON_DETAIL").click();
      cy.wait(2000);
      //cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(
        ':nth-child(5) > [style="margin-top: 30px; background-color: white; box-shadow: rgb(196, 196, 196) 3px 3px 3px; border-radius: 10px; max-width: 1000px;"] > .MuiPaper-root > #panel1a-header',
      ).click();
      cy.contains(preFixNoQRPP);
      cy.wait(3000);
      //cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS03_TC33_Search by MID and Date", () => {
      goToSubMenuTransactionPromptPay();
      cy.get("#TF_MID").type(midQRPP);
      cy.wait(2000);
      cy.get("#TF_DATERANGEPICKER_START").type(startHaveData);
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData);
      cy.wait(1000);
      //cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains(midQRPP);
      cy.wait(3000);
      //cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS03_TC34_Search by TID and Date", () => {
      goToSubMenuTransactionPromptPay();
      cy.get("#TF_TID").type(tidQRPP);
      cy.wait(2000);
      cy.get("#TF_DATERANGEPICKER_START").type(startHaveData);
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData);
      cy.wait(1000);
      //cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains(tidQRPP);
      cy.wait(3000);
      //cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS03_TC35_Search by Company ID and Date", () => {
      goToSubMenuTransactionPromptPay();
      cy.get("#TF_COM_REF_ID").type(companyIDQRPP);
      cy.wait(5000);
      cy.get("#TF_DATERANGEPICKER_START").type(startHaveData);
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData);
      cy.wait(1000);
      //cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      //cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#IB_TABLE_MENU_undefined").click();
      //cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#MENU_BUTTON_DETAIL").click();
      cy.wait(2000);
      //cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(
        ':nth-child(5) > [style="margin-top: 30px; background-color: white; box-shadow: rgb(196, 196, 196) 3px 3px 3px; border-radius: 10px; max-width: 1000px;"] > .MuiPaper-root > #panel1a-header',
      ).click();
      cy.contains(companyIDQRPP);
      cy.wait(3000);
      //cy.takeScreenshotSimple(5, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS03_TC36_Search by Date", () => {
      goToSubMenuTransactionPromptPay();
      cy.get("#TF_DATERANGEPICKER_START").type(startHaveData);
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData);
      cy.wait(1000);
      //cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.wait(3000);
      //cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS03_TC37_Search by Status and Date", () => {
      goToSubMenuTransactionPromptPay();
      cy.wait(2000);
      cy.get("#TF_DATERANGEPICKER_START").type(startHaveData);
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData);
      cy.wait(1000);
      cy.get("#DD_STATUS").click();
      cy.wait(1000);
      cy.get("#DD_STATUS_2").click();
      cy.wait(1000);
      //cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.get("#IB_TABLE_MENU_undefined").click();
      cy.get("#MENU_BUTTON_DETAIL").click();
      cy.wait(2000);
      // cy.contains("Success");
      cy.wait(3000);
      //cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
  });

  context("4 Transaction QR Pormptpay Detail", () => {
    it("TS03_TC38-TC40_View Details (QR Promptpay) page", () => {
      goToSubMenuTransactionPromptPay();
      cy.get("#TF_DATERANGEPICKER_START").type(startHaveData);
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData);
      cy.get("#BT_SEARCH").click();
      //cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#IB_TABLE_MENU_undefined").click();
      //cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#MENU_BUTTON_DETAIL").click();
      //cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(
        ':nth-child(4) > [style="margin-top: 30px; background-color: white; box-shadow: rgb(196, 196, 196) 3px 3px 3px; border-radius: 10px; max-width: 1000px;"] > .MuiPaper-root > #panel1a-header',
      ).click();
      cy.get(
        ':nth-child(5) > [style="margin-top: 30px; background-color: white; box-shadow: rgb(196, 196, 196) 3px 3px 3px; border-radius: 10px; max-width: 1000px;"] > .MuiPaper-root > #panel1a-header',
      ).click();
      cy.get(
        ':nth-child(6) > [style="margin-top: 30px; background-color: white; box-shadow: rgb(196, 196, 196) 3px 3px 3px; border-radius: 10px; max-width: 1000px;"] > .MuiPaper-root > #panel1a-header',
      ).click();
      //cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_BACK").click();
    });
  });
  //#endregion

  //#region Transaction QR Credit Card
  context("5 Search QR Credit Caed", () => {
    it("TS03_TC41 Click QR Promptpay page", () => {
      goToSubMenuTransactionQRCreditCard();
      //cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.wait(3000);
    });
    it("TS03_TC42_Search by Transaction ID data not found", () => {
      goToSubMenuTransactionQRCreditCard();
      cy.get("#TF_TRANSACTION_ID").type("SqqO862844819186820");
      cy.wait(1000);
      //cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.wait(2000);
      cy.contains("Data Not Found");
      cy.wait(3000);
      //cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS03_TC43_Search by Biller ID data not found", () => {
      goToSubMenuTransactionQRCreditCard();
      cy.get("#TF_BILLER_ID").type("000754700001716");
      cy.wait(1000);
      //cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.wait(2000);
      cy.contains("Data Not Found");
      cy.wait(3000);
      //cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS03_TC44_Search by Prefix No data not found", () => {
      goToSubMenuTransactionQRCreditCard();
      cy.get("#TF_PREFIX_NO").type("Z123");
      cy.wait(1000);
      //cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.wait(1000);
      cy.contains("Data Not Found");
      cy.wait(3000);
      //cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS03_TC45_Search by MID data not found", () => {
      goToSubMenuTransactionQRCreditCard();
      cy.get("#TF_MID").type("123456789011234");
      cy.wait(1000);
      //cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.wait(1000);
      cy.contains("Data Not Found");
      cy.wait(3000);
      //cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS03_TC46_Search by TID data not found", () => {
      goToSubMenuTransactionQRCreditCard();
      cy.get("#TF_TID").type("1232233");
      cy.wait(1000);
      //cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.wait(1000);
      cy.contains("Data Not Found");
      cy.wait(3000);
      //cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS03_TC47_Search by Company ID data not found", () => {
      goToSubMenuTransactionQRCreditCard();
      cy.get("#TF_COM_REF_ID").type("35eb20e3-122s-9999-b99d-de5715a64fb5	");
      cy.wait(1000);
      //cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.wait(1000);
      cy.contains("Data Not Found");
      cy.wait(3000);
      //cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS03_TC48_Search by Date data not found", () => {
      goToSubMenuTransactionQRCreditCard();
      cy.get("#TF_DATERANGEPICKER_START").type(startDateNotFound);
      cy.get("#TF_DATERANGEPICKER_END").type(endDateNotFound);
      cy.wait(1000);
      //cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.wait(1000);
      cy.contains("Data Not Found");
      cy.wait(3000);
      //cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS03_TC49_Search by Status and Date data not found", () => {
      goToSubMenuTransactionQRCreditCard();
      cy.get("#TF_DATERANGEPICKER_START").type(startDateNotFound);
      cy.get("#TF_DATERANGEPICKER_END").type(endDateNotFound);
      cy.wait(1000);
      cy.get("#DD_STATUS").click();
      cy.wait(1000);
      cy.get('[data-value="REJECTED"]').click();
      cy.wait(1000);
      //cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.wait(1000);
      cy.contains("Data Not Found");
      cy.wait(3000);
      //cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS03_TC50_Search by Transaction ID and Date", () => {
      goToSubMenuTransactionQRCreditCard();
      cy.wait(2000);
      cy.get("#TF_TRANSACTION_ID").type(tranIDQRCS);
      cy.wait(1000);
      cy.get("#TF_DATERANGEPICKER_START").type(startHaveData);
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData);
      cy.wait(1000);
      //cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains(tranIDQRCS);
      cy.wait(3000);
      //cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS03_TC51_Search by Biller ID Date", () => {
      goToSubMenuTransactionQRCreditCard();
      cy.wait(2000);
      cy.get("#TF_BILLER_ID").type(billerIDQRCS);
      cy.wait(2000);
      cy.get("#TF_DATERANGEPICKER_START").type(startHaveData);
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData);
      cy.wait(1000);
      //cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains(billerIDQRCS);
      cy.wait(3000);
      //cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS03_TC52_Search by Prefix No Date", () => {
      goToSubMenuTransactionQRCreditCard();
      cy.get("#TF_PREFIX_NO").type(preFixNoQRCS);
      cy.wait(2000);
      cy.get("#TF_DATERANGEPICKER_START").type(startHaveData);
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData);
      cy.wait(1000);
      //cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      //cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#IB_TABLE_MENU_undefined").click();
      //cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#MENU_BUTTON_DETAIL").click();
      //cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.wait(2000);
      cy.get(
        ':nth-child(5) > [style="margin-top: 30px; background-color: white; box-shadow: rgb(196, 196, 196) 3px 3px 3px; border-radius: 10px; max-width: 1000px;"] > .MuiPaper-root > #panel1a-header',
      ).click();
      cy.contains(preFixNoQRCS);
      cy.wait(3000);
      //cy.takeScreenshotSimple(5, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS03_TC53_Search by MID and Date", () => {
      goToSubMenuTransactionQRCreditCard();
      cy.get("#TF_MID").type(midQRCS);
      cy.wait(2000);
      cy.get("#TF_DATERANGEPICKER_START").type(startHaveData);
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData);
      cy.wait(1000);
      //cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains(midQRCS);
      cy.wait(3000);
      //cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS03_TC54_Search by TID and Date", () => {
      goToSubMenuTransactionQRCreditCard();
      cy.get("#TF_TID").type(tidQRCS);
      cy.wait(2000);
      cy.get("#TF_DATERANGEPICKER_START").type(startHaveData);
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData);
      cy.wait(1000);
      //cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains(tidQRCS);
      cy.wait(3000);
      //cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS03_TC55_Search by Company ID and Date", () => {
      goToSubMenuTransactionQRCreditCard();
      cy.get("#TF_COM_REF_ID").type(companyIDQRCS);
      cy.wait(5000);
      cy.get("#TF_DATERANGEPICKER_START").type(startHaveData);
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData);
      cy.wait(1000);
      //cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      //cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#IB_TABLE_MENU_undefined").click();
      //cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#MENU_BUTTON_DETAIL").click();
      cy.wait(2000);
      //cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(
        ':nth-child(5) > [style="margin-top: 30px; background-color: white; box-shadow: rgb(196, 196, 196) 3px 3px 3px; border-radius: 10px; max-width: 1000px;"] > .MuiPaper-root > #panel1a-header',
      ).click();
      cy.contains(companyIDQRCS);
      cy.wait(3000);
      //cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS03_TC56_Search by Date", () => {
      goToSubMenuTransactionQRCreditCard();
      cy.get("#TF_DATERANGEPICKER_START").type(startHaveData);
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData);
      cy.wait(1000);
      //cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.wait(3000);
      //cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS03_TC57_Search by Status and Date", () => {
      goToSubMenuTransactionQRCreditCard();
      cy.wait(2000);
      cy.get("#TF_DATERANGEPICKER_START").type(startHaveData);
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData);
      cy.wait(1000);
      cy.get("#DD_STATUS").click();
      cy.wait(1000);
      cy.get('[data-value="APPROVED"]').click();
      cy.wait(1000);
      //cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      //cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#IB_TABLE_MENU_undefined").click();
      //cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#MENU_BUTTON_DETAIL").click();
      cy.wait(2000);
      cy.contains("Success");
      cy.wait(3000);
      //cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
  });

  context("6 Transaction QRCS Detail", () => {
    it("TS03_TC58-TC60_View Details (QRCS) page", () => {
      goToSubMenuTransactionQRCreditCard();
      cy.get("#TF_DATERANGEPICKER_START").type(startHaveData);
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData);
      cy.get("#BT_SEARCH").click();
      //cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(
        ":nth-child(4) > :nth-child(8) > #IB_TABLE_MENU_undefined",
      ).click();
      //cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#MENU_BUTTON_DETAIL").click();
      //cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(
        ':nth-child(4) > [style="margin-top: 30px; background-color: white; box-shadow: rgb(196, 196, 196) 3px 3px 3px; border-radius: 10px; max-width: 1000px;"] > .MuiPaper-root > #panel1a-header',
      ).click();
      cy.get(
        ':nth-child(5) > [style="margin-top: 30px; background-color: white; box-shadow: rgb(196, 196, 196) 3px 3px 3px; border-radius: 10px; max-width: 1000px;"] > .MuiPaper-root > #panel1a-header',
      ).click();
      cy.get(
        ':nth-child(6) > [style="margin-top: 30px; background-color: white; box-shadow: rgb(196, 196, 196) 3px 3px 3px; border-radius: 10px; max-width: 1000px;"] > .MuiPaper-root > #panel1a-header',
      ).click();
      //cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_BACK").click();
    });
  });
  //#endregion
});
