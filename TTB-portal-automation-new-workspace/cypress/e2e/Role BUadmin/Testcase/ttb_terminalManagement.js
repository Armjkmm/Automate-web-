// const { cy } = require("date-fns/locale");

function goToSubMenuTerminalManagement() {
  cy.get(
    ".css-1mvsuhg > .MuiDrawer-root > .MuiPaper-root > .css-1jd25az > .MuiList-root > :nth-child(2) > #MAINMENU_6 > .MuiListItemText-root > .MuiTypography-root",
  ).click();
  cy.wait(2000);
  cy.intercept("POST", "/company/api/web/terminal/summary").as(
    "terminalManagementPage",
  );
  cy.get("#SUB_MENU_6_1_4").click();
  cy.wait("@terminalManagementPage");
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

describe("Test Scenario: 02-4 Company Terminal Management", () => {
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
    it("TS02-3_TC01-TC02_Merchant Management page", () => {
      goToSubMenuTerminalManagement();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS02-3_TC03_Search by TID data not found", () => {
      goToSubMenuTerminalManagement();
      cy.get("#TF_TID").type("12345343").should("be.visible");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains("Data Not Found").should("be.visible");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS02-3_TC04_Search by Store Name data not found", () => {
      goToSubMenuTerminalManagement();
      cy.get("#TF_STORE_NAME").type("77Papashop").should("be.visible");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains("Data Not Found").should("be.visible");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS02-3_TC05_Search by MID data not found", () => {
      goToSubMenuTerminalManagement();
      cy.get("#TF_MID").type("124356789019283").should("be.visible");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains("Data Not Found").should("be.visible");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS02-3_TC06_Search by Company ID data not found", () => {
      goToSubMenuTerminalManagement();
      cy.get("#TF_COMPANY")
        .type("ftyghujklkjjhj-4554-7678-ERTYJGJJ")
        .should("be.visible");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains("Data Not Found").should("be.visible");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS02-3_TC07_Search by Date not found", () => {
      goToSubMenuTerminalManagement();
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
    it("TS02-3_TC08_Search by Date and Status not found", () => {
      goToSubMenuTerminalManagement();
      cy.get("#TF_DATERANGEPICKER_START")
        .type(startDateNotFound)
        .should("be.visible");
      cy.get("#TF_DATERANGEPICKER_END")
        .type(endDateNotFound)
        .should("be.visible");
      cy.get("#DD_STATUS").click();
      cy.wait(1000);
      cy.get("#DD_STATUS_3").click();
      cy.wait(1000);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains("Data Not Found").should("be.visible");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS02-3_TC09_Search by Date invaild", () => {
      goToSubMenuTerminalManagement();
      cy.get("#TF_DATERANGEPICKER_START").type("2020").should("be.visible");
      cy.get("#TF_DATERANGEPICKER_END").type("2020202").should("be.visible");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains("Data Not Found").should("be.visible");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS02-3_TC10_Search by TID", () => {
      goToSubMenuTerminalManagement();
      cy.get("#TF_TID").type(TID).should("be.visible");
      cy.get("#BT_SEARCH").click();
      cy.contains(TID).should("be.visible");
    });
    it("TS02-3_TC11_Search by Store Name", () => {
      goToSubMenuTerminalManagement();
      cy.get("#TF_STORE_NAME").type(storeName).should("be.visible");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS02-3_TC12_Search by MID", () => {
      goToSubMenuTerminalManagement();
      cy.get("#TF_MID").type(MID).should("be.visible");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(
        ":nth-child(1) > :nth-child(7) > #IB_TABLE_MENU_undefined",
      ).click();
      cy.get(".MuiPaper-root > .MuiList-root").click();
      cy.contains(MID).should("be.visible");
    });
    it("TS02-3_TC13_Search by Company ID", () => {
      goToSubMenuTerminalManagement();
      cy.get("#TF_COMPANY").type(companyID).should("be.visible");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains(companyID).should("be.visible");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS02-3_TC14_Search by Date", () => {
      goToSubMenuTerminalManagement();
      cy.get("#TF_DATERANGEPICKER_START")
        .type(startHaveData)
        .should("be.visible");
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData).should("be.visible");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains("Active").should("be.visible");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS02-3_TC15_Search by Date and Status", () => {
      goToSubMenuTerminalManagement();
      cy.get("#TF_DATERANGEPICKER_START")
        .type(startHaveData)
        .should("be.visible");
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData).should("be.visible");
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

  context("2 View Terminal Detail", () => {
    it("TS02-3_TC16-TC18_Terminal Detail page", () => {
      goToSubMenuTerminalManagement();
      cy.get("#TF_TID").type(TID).should("be.visible");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(
        ":nth-child(1) > :nth-child(7) > #IB_TABLE_MENU_undefined",
      ).click();
      cy.get(".MuiPaper-root > .MuiList-root").click();
      cy.contains(TID).should("be.visible");
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
  });

  context("3 Edit Terminal in Terminal Detail", () => {
    it("TS02-3_TC19-TC26_Edit Terminal in Terminal Detail", () => {
      goToSubMenuTerminalManagement();
      cy.get("#TF_TID").type(TID).should("be.visible");
      cy.get("#BT_SEARCH").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(
        ":nth-child(1) > :nth-child(7) > #IB_TABLE_MENU_undefined",
      ).click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".MuiPaper-root > .MuiList-root").click();
      cy.contains(TID).should("be.visible");
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#IB_MENU_GENERNAL_undefined").click();
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("Edit Terminal").should("be.visible");
      cy.get("#MENU_BUTTON_TERMINAL_EDIT").click();
      cy.takeScreenshotSimple(5, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#TF_Store\\ Name").clear();
      cy.get("#TF_ADDRESS1").clear();
      cy.get("#TF_ZIP").clear();
      cy.wait(2000);
      cy.getRandomNickname().then((nickname) => {
        cy.get("#TF_Store\\ Name").type(nickname);
      });
      cy.genAddressText().then((address) => {
        cy.get("#TF_ADDRESS1").type(address).should("be.visible");
      });
      cy.genZipCode().then((zip) => {
        cy.get("#TF_ZIP").type(zip).should("be.visible");
      });
      cy.takeScreenshotSimple(6, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CONFIRM_EDIT_COMPANY").click();
      cy.contains("Confirm Edit Terminal?").should("be.visible");
      cy.takeScreenshotSimple(7, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_RIGHT").click();
      cy.get("#BT_CONFIRM_EDIT_COMPANY").click();
      cy.get("#BT_LEFT").click();
      cy.contains("Success").should("be.visible");
      cy.takeScreenshotSimple(8, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
      cy.takeScreenshotSimple(9, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
  });

  context("4 Edit Terminal Suspended in Terminal Detail", () => {
    it("TS02-3_TC27-TC30_TEdit Terminal Suspended in Terminal Detail", () => {
      goToSubMenuTerminalManagement();
      cy.get("#TF_TID")
        .type(eDitStatusTerminalActiveAndSuspended)
        .should("be.visible");
      cy.get("#BT_SEARCH").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#IB_TABLE_MENU_undefined").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".MuiPaper-root > .MuiList-root").click();
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#IB_MENU_GENERNAL_undefined").click();
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#MENU_BUTTON_EDIT_TERMINAL_STATUS").click();
      cy.contains(eDitStatusTerminalActiveAndSuspended).should("be.visible");
      cy.takeScreenshotSimple(5, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#DD_SELECT_STATUS").click();
      cy.wait(1000);
      cy.get("#DD_STATUS_3").click();
      cy.wait(1000);
      cy.get("#DD_NOTE").type("Test Suspended terminal").should("be.visible");
      cy.takeScreenshotSimple(6, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CONFIRM_CHANGE_STATUS").click();
      cy.contains("Success").should("be.visible");
      cy.takeScreenshotSimple(7, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
      cy.contains(eDitStatusTerminalActiveAndSuspended).should("be.visible");
      cy.contains("Suspended").should("be.visible");
      cy.takeScreenshotSimple(8, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
  });

  context("5 Edit Terminal Active in Terminal Detail", () => {
    it("TS02-3_TC31-TC34_Edit Terminal Active in Terminal Detail", () => {
      goToSubMenuTerminalManagement();
      cy.get("#TF_TID")
        .type(eDitStatusTerminalActiveAndSuspended)
        .should("be.visible");
      cy.get("#BT_SEARCH").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#IB_TABLE_MENU_undefined").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".MuiPaper-root > .MuiList-root").click();
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#IB_MENU_GENERNAL_undefined").click();
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#MENU_BUTTON_EDIT_TERMINAL_STATUS").click();
      cy.contains(eDitStatusTerminalActiveAndSuspended).should("be.visible");
      cy.takeScreenshotSimple(5, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#DD_SELECT_STATUS").click();
      cy.wait(1000);
      cy.get("#DD_STATUS_2").click();
      cy.wait(1000);
      cy.get("#DD_NOTE").type("Test Active terminal").should("be.visible");
      cy.takeScreenshotSimple(6, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CONFIRM_CHANGE_STATUS").click();
      cy.contains("Success").should("be.visible");
      cy.takeScreenshotSimple(7, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
      cy.contains(eDitStatusTerminalActiveAndSuspended).should("be.visible");
      cy.contains("Active").should("be.visible");
      cy.takeScreenshotSimple(8, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
  });

  context("6 Edit Terminal (Terminate) in Terminal Detail", () => {
    it("TS02-3_TC35-TC38_Edit Terminal (Terminate) in Terminal Detail", () => {
      goToSubMenuTerminalManagement();
      cy.get("#TF_TID").type(eDitStatusTerminalTerminate).should("be.visible");
      cy.get("#BT_SEARCH").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#IB_TABLE_MENU_undefined").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".MuiPaper-root > .MuiList-root").click();
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#IB_MENU_GENERNAL_undefined").click();
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#MENU_BUTTON_EDIT_TERMINAL_STATUS").click();
      cy.contains(eDitStatusTerminalTerminate).should("be.visible");
      cy.takeScreenshotSimple(5, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#DD_SELECT_STATUS").click();
      cy.wait(1000);
      cy.get("#DD_STATUS_4").click();
      cy.wait(1000);
      cy.get("#DD_NOTE").type("Test terminate terminal").should("be.visible");
      cy.takeScreenshotSimple(6, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CONFIRM_CHANGE_STATUS").click();
      cy.contains("Success").should("be.visible");
      cy.takeScreenshotSimple(7, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
      cy.contains(eDitStatusTerminalTerminate).should("be.visible");
      cy.contains("Terminate").should("be.visible");
      cy.takeScreenshotSimple(8, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
  });
});
