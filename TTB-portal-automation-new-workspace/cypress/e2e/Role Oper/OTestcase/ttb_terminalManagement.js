// const { cy } = require("date-fns/locale");

function goToSubMenuTerminalManagement() {
  cy.get(
    ".css-1mvsuhg > .MuiDrawer-root > .MuiPaper-root > .css-1jd25az > .MuiList-root > :nth-child(2) > #MAINMENU_6 > .MuiListItemText-root > .MuiTypography-root",
  ).click();
  cy.wait(3000);
  let terminalManagementPageBtn = cy.get("#SUB_MENU_6_1_4", { timeout: 20000 });
  terminalManagementPageBtn.should("be.visible");
  terminalManagementPageBtn.click();
}

let TID = "86297953";
let storeName = "play 48";
let MID = "862846989483927";
let companyID = "a0534189-fa09-4768-8212-95bdbab0a276";
let startDateNotFound = "31/08/2025";
let endDateNotFound = "31/08/2025";
let startHaveData = "01/09/2021";
let endHaveData = "03/09/2025";

let eDitTerminal = "86297953";
let editStroreName = "Tuna shop";
let editAddress = "BBK";
let editZip = "30130";
let eDitStatusTerminalActiveAndSuspended = "86297953";
let eDitStatusTerminalTerminate = "86229232";

describe("Test Scenario: 02-3 Company (Terminal Management)", () => {
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
    it("TS02-3_TC01-TC02_Merchant Management page", () => {
      goToSubMenuTerminalManagement();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS02-3_TC03_Search by TID data not found", () => {
      goToSubMenuTerminalManagement();
      cy.get("#TF_TID").type("12345343");
      cy.wait(1000);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains("Data Not Found");
      cy.wait(3000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS02-3_TC04_Search by Store Name data not found", () => {
      goToSubMenuTerminalManagement();
      cy.get("#TF_STORE_NAME").type("77Papashop");
      cy.wait(1000);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains("Data Not Found");
      cy.wait(3000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS02-3_TC05_Search by MID data not found", () => {
      goToSubMenuTerminalManagement();
      cy.get("#TF_MID").type("124356789019283");
      cy.wait(1000);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains("Data Not Found");
      cy.wait(3000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS02-3_TC06_Search by Company ID data not found", () => {
      goToSubMenuTerminalManagement();
      cy.get("#TF_COMPANY").type("ftyghujklkjjhj-4554-7678-ERTYJGJJ");
      cy.wait(1000);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains("Data Not Found");
      cy.wait(3000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS02-3_TC07_Search by Date not found", () => {
      goToSubMenuTerminalManagement();
      cy.get("#TF_DATERANGEPICKER_START").type(startDateNotFound);
      cy.get("#TF_DATERANGEPICKER_END").type(endDateNotFound);
      cy.wait(1000);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains("Data Not Found");
      cy.wait(3000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS02-3_TC08_Search by Date and Status not found", () => {
      goToSubMenuTerminalManagement();
      cy.get("#TF_DATERANGEPICKER_START").type(startDateNotFound);
      cy.get("#TF_DATERANGEPICKER_END").type(endDateNotFound);
      cy.wait(1000);
      cy.get("#DD_STATUS").click();
      cy.wait(1000);
      cy.get("#DD_STATUS_3").click();
      cy.wait(1000);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains("Data Not Found");
      cy.wait(3000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS02-3_TC09_Search by Date invaild", () => {
      goToSubMenuTerminalManagement();
      cy.get("#TF_DATERANGEPICKER_START").type("2020");
      cy.get("#TF_DATERANGEPICKER_END").type("2020202");
      cy.wait(1000);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains("Data Not Found");
      cy.wait(3000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS02-3_TC10_Search by TID", () => {
      goToSubMenuTerminalManagement();
      cy.get("#TF_TID").type(TID);
      cy.wait(1000);
      cy.get("#BT_SEARCH").click();
      cy.contains(TID);
      cy.wait(3000);
    });
    it("TS02-3_TC11_Search by Store Name", () => {
      goToSubMenuTerminalManagement();
      cy.get("#TF_TID").type(eDitStatusTerminalTerminate);
      cy.wait(1000);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.wait(3000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS02-3_TC12_Search by MID", () => {
      goToSubMenuTerminalManagement();
      cy.get("#TF_MID").type(MID);
      cy.wait(1000);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(
        ":nth-child(1) > :nth-child(7) > #IB_TABLE_MENU_undefined",
      ).click();
      cy.get(".MuiPaper-root > .MuiList-root").click();
      cy.contains(MID);
      cy.wait(3000);
    });
    it("TS02-3_TC13_Search by Company ID", () => {
      goToSubMenuTerminalManagement();
      cy.get("#TF_COMPANY").type(companyID);
      cy.wait(1000);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains(companyID);
      cy.wait(3000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS02-3_TC14_Search by Date", () => {
      goToSubMenuTerminalManagement();
      cy.get("#TF_DATERANGEPICKER_START").type(startHaveData);
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData);
      cy.wait(1000);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains("Active");
      cy.wait(3000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS02-3_TC15_Search by Date and Status", () => {
      goToSubMenuTerminalManagement();
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

  context("2 View Terminal Detail", () => {
    it("TS02-3_TC16-TC18_Terminal Detail page", () => {
      goToSubMenuTerminalManagement();
      cy.get("#TF_TID").type(TID);
      cy.wait(1000);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(
        ":nth-child(1) > :nth-child(7) > #IB_TABLE_MENU_undefined",
      ).click();
      cy.get(".MuiPaper-root > .MuiList-root").click();
      cy.contains(TID);
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
  });

  context("3 Edit Terminal in Terminal Detail", () => {
    it("TS02-3_TC19-TC26_TEdit Terminal in Terminal Detail", () => {
      goToSubMenuTerminalManagement();
      cy.get("#TF_STORE_NAME").type(editStroreName);
      cy.wait(1000);
      cy.get("#BT_SEARCH").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(
        ":nth-child(1) > :nth-child(7) > #IB_TABLE_MENU_undefined",
      ).click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".MuiPaper-root > .MuiList-root").click();
      cy.contains(editStroreName);
      cy.wait(1000);
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#IB_MENU_GENERNAL_undefined").click();
      cy.wait(1000);
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#MENU_BUTTON_TERMINAL_EDIT").click();
      cy.wait(1000);
      cy.takeScreenshotSimple(5, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#TF_Store\\ Name").clear();
      cy.get("#TF_ADDRESS1").clear();
      cy.get("#TF_ZIP").clear();
      cy.wait(2000);
      cy.get("#TF_Store\\ Name").type(editStroreName);
      cy.get("#TF_ADDRESS1").type(editAddress);
      cy.get("#TF_ZIP").type(editZip);
      cy.wait(2000);
      cy.takeScreenshotSimple(6, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CONFIRM_EDIT_COMPANY").click();
      cy.contains("Confirm Edit Terminal?");
      cy.wait(1000);
      cy.takeScreenshotSimple(7, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_RIGHT").click();
      cy.get("#BT_CONFIRM_EDIT_COMPANY").click();
      cy.get("#BT_LEFT").click();
      cy.contains("Success");
      cy.wait(2000);
      cy.takeScreenshotSimple(8, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
      cy.contains(editStroreName);
      cy.contains(editAddress);
      cy.contains(editZip);
      cy.wait(3000);
      cy.takeScreenshotSimple(9, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
  });

  context("4 Edit Terminal (Suspended) in Terminal Detail", () => {
    it("TS02-3_TC27-TC30_TEdit Terminal (Suspended) in Terminal Detail", () => {
      goToSubMenuTerminalManagement();
      cy.get("#TF_TID").type(eDitStatusTerminalActiveAndSuspended);
      cy.wait(1000);
      cy.get("#BT_SEARCH").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#IB_TABLE_MENU_undefined").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".MuiPaper-root > .MuiList-root").click();
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#IB_MENU_GENERNAL_undefined").click();
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#MENU_BUTTON_EDIT_TERMINAL_STATUS").click();
      cy.contains(eDitStatusTerminalActiveAndSuspended);
      cy.wait(2000);
      cy.takeScreenshotSimple(5, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#DD_SELECT_STATUS").click();
      cy.wait(1000);
      cy.get("#DD_STATUS_3").click();
      cy.wait(1000);
      cy.get("#DD_NOTE").type("Test Suspended terminal");
      cy.wait(2000);
      cy.takeScreenshotSimple(6, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CONFIRM_CHANGE_STATUS").click();
      cy.contains("Success");
      cy.wait(2000);
      cy.takeScreenshotSimple(7, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
      cy.contains(eDitStatusTerminalActiveAndSuspended);
      cy.contains("Suspended");
      cy.wait(3000);
      cy.takeScreenshotSimple(8, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
  });
  context("5 Edit Terminal (Active) in Terminal Detail", () => {
    it("TS02-3_TC31-TC34_Edit Terminal (Active) in Terminal Detail", () => {
      goToSubMenuTerminalManagement();
      cy.get("#TF_TID").type(eDitStatusTerminalActiveAndSuspended);
      cy.wait(1000);
      cy.get("#BT_SEARCH").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#IB_TABLE_MENU_undefined").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".MuiPaper-root > .MuiList-root").click();
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#IB_MENU_GENERNAL_undefined").click();
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#MENU_BUTTON_EDIT_TERMINAL_STATUS").click();
      cy.contains(eDitStatusTerminalActiveAndSuspended);
      cy.wait(2000);
      cy.takeScreenshotSimple(5, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#DD_SELECT_STATUS").click();
      cy.wait(1000);
      cy.get("#DD_STATUS_2").click();
      cy.wait(1000);
      cy.get("#DD_NOTE").type("Test Active terminal");
      cy.wait(2000);
      cy.takeScreenshotSimple(6, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CONFIRM_CHANGE_STATUS").click();
      cy.contains("Success");
      cy.wait(2000);
      cy.takeScreenshotSimple(7, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
      cy.contains(eDitStatusTerminalActiveAndSuspended);
      cy.contains("Active");
      cy.wait(3000);
      cy.takeScreenshotSimple(8, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
  });

  context("6 Edit Terminal (Terminate) in Terminal Detail", () => {
    it("TS02-3_TC35-TC38_Edit Terminal (Terminate) in Terminal Detail", () => {
      goToSubMenuTerminalManagement();
      cy.get("#TF_TID").type(eDitStatusTerminalTerminate);
      cy.wait(1000);
      cy.get("#BT_SEARCH").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#IB_TABLE_MENU_undefined").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".MuiPaper-root > .MuiList-root").click();
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#IB_MENU_GENERNAL_undefined").click();
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#MENU_BUTTON_EDIT_TERMINAL_STATUS").click();
      cy.contains(eDitStatusTerminalTerminate);
      cy.wait(2000);
      cy.takeScreenshotSimple(5, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#DD_SELECT_STATUS").click();
      cy.wait(1000);
      cy.get("#DD_STATUS_4").click();
      cy.wait(1000);
      cy.get("#DD_NOTE").type("Test terminate terminal");
      cy.wait(2000);
      cy.takeScreenshotSimple(6, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CONFIRM_CHANGE_STATUS").click();
      cy.contains("Success");
      cy.wait(2000);
      cy.takeScreenshotSimple(7, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
      cy.contains(eDitStatusTerminalTerminate);
      cy.contains("Terminate");
      cy.wait(3000);
      cy.takeScreenshotSimple(8, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
  });
});
