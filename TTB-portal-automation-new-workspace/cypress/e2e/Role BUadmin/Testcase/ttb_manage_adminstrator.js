function goToManuManageAdmin() {
  cy.intercept("POST", "/admin/api/admin/search").as("manageAdminPage");
  cy.get(
    ".css-1mvsuhg > .MuiDrawer-root > .MuiPaper-root > .css-1jd25az > .MuiList-padding > :nth-child(8) > #MAINMENU_2",
  ).click();
  cy.wait("@manageAdminPage");
}

let startHaveData = "18/08/2025";
let endHaveData = "28/08/2025";
let startNotHaveData = "31/08/2025";
let endNotHaveData = "31/08/2025";
let userName = "TESTMERCUAT3";

describe("Test Scenario: 07 Management Administrator", () => {
  beforeEach(() => {
    //  auto login to enter portal page
    cy.loginBankPortalPageUAT(
      Cypress.env("ADMIN_USERNAME"),
      Cypress.env("ADMIN_PASSWORD"),
    );
    //   // Startเปลี่ยนภาษา Web ให้เป็นภาษา English
    //  cy.get("#BT_CHANGE_LANG").click();
    //  cy.get("#MENU_LANG_EN > .MuiTypography-root").click();
    //   // End เปลี่ยนภาษา Web ให้เป็นภาษา English
  });
  context("1_Search Administrator", () => {
    it("TS07_TC01_Click Main menu Management Administrator", () => {
      goToManuManageAdmin();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.wait(3000);
    });

    it("TS07_TC02_Search by Username data not found", () => {
      goToManuManageAdmin();
      cy.get("#TF_USERNAME").type("Kaipaparm");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains("Data Not Found");
      cy.wait(3000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });

    it("TS07_TC03_Search by Date data not found", () => {
      goToManuManageAdmin();
      cy.get("#TF_DATERANGEPICKER_START").type(startNotHaveData);
      cy.get("#TF_DATERANGEPICKER_END").type(endNotHaveData);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains("Data Not Found");
      cy.wait(3000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS07_TC04_Search by Date and Department data not found", () => {
      goToManuManageAdmin();
      cy.get("#TF_DATERANGEPICKER_START").type(startNotHaveData);
      cy.get("#TF_DATERANGEPICKER_END").type(endNotHaveData);
      cy.get("#DD_DEPARTMENT").click();
      cy.wait(1000);
      cy.get("#LIST_DEPARTMENT_Smartshop").click();
      cy.wait(1000);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains("Data Not Found");
      cy.wait(3000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS07_TC05_Search by Date and Department and Role data not found", () => {
      goToManuManageAdmin();
      cy.get("#TF_DATERANGEPICKER_START").type(startNotHaveData);
      cy.get("#TF_DATERANGEPICKER_END").type(endNotHaveData);
      cy.get("#DD_DEPARTMENT").click();
      cy.wait(1000);
      cy.get("#LIST_DEPARTMENT_Smartshop").click();
      cy.wait(1000);
      cy.get("#DD_ROLE").click();
      cy.wait(1000);
      cy.get('[data-value="Smartshop_Digio"]').click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains("Data Not Found");
      cy.wait(3000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS07_TC06_Search by Date and Department and Role and status data not found", () => {
      goToManuManageAdmin();
      cy.get("#TF_DATERANGEPICKER_START").type(startNotHaveData);
      cy.get("#TF_DATERANGEPICKER_END").type(endNotHaveData);
      cy.get("#DD_DEPARTMENT").click();
      cy.wait(1000);
      cy.get("#LIST_DEPARTMENT_Smartshop").click();
      cy.wait(1000);
      cy.get("#DD_ROLE").click();
      cy.wait(1000);
      cy.get('[data-value="Smartshop_Digio"]').click();
      cy.wait(1000);
      cy.get("#DD_ROLE_STATUS").click();
      cy.wait(1000);
      cy.get("#DD_STATUS_1").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains("Data Not Found");
      cy.wait(3000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });

    it("TS07_TC07_Search by Username data not found", () => {
      goToManuManageAdmin();
      cy.get("#TF_USERNAME").type(userName);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.wait(3000);
      cy.contains(userName);
      cy.contains("Active");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });

    it("TS07_TC08_Search by Date", () => {
      goToManuManageAdmin();
      cy.get("#TF_DATERANGEPICKER_START").type(startHaveData);
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.wait(3000);
      cy.contains(userName);
      cy.contains("Active");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS07_TC09_Search by Date and Department", () => {
      goToManuManageAdmin();
      cy.get("#TF_DATERANGEPICKER_START").type(startHaveData);
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData);
      cy.get("#DD_DEPARTMENT").click();
      cy.wait(1000);
      cy.get("#LIST_DEPARTMENT_Smartshop").click();
      cy.wait(1000);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.wait(3000);
      cy.contains(userName);
      cy.contains("Active");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS07_TC10_Search by Date and Department and Role", () => {
      goToManuManageAdmin();
      cy.get("#TF_DATERANGEPICKER_START").type(startHaveData);
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData);
      cy.get("#DD_DEPARTMENT").click();
      cy.wait(1000);
      cy.get("#LIST_DEPARTMENT_Smartshop").click();
      cy.wait(1000);
      cy.get("#DD_ROLE").click();
      cy.wait(1000);
      cy.get('[data-value="Smartshop_Buadmin"]').click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.wait(3000);
      cy.contains("Active");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS07_TC11_Search by Date and Department and Role and status", () => {
      goToManuManageAdmin();
      cy.get("#TF_DATERANGEPICKER_START").type(startHaveData);
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData);
      cy.get("#DD_DEPARTMENT").click();
      cy.wait(1000);
      cy.get("#LIST_DEPARTMENT_Smartshop").click();
      cy.wait(1000);
      cy.get("#DD_ROLE").click();
      cy.wait(1000);
      cy.get('[data-value="Smartshop_Buadmin"]').click();
      cy.wait(1000);
      cy.get("#DD_ROLE_STATUS").click();
      cy.wait(1000);
      cy.get("#DD_STATUS_1").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.wait(3000);
      cy.contains("Active");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
  });

  context("2_Administrator", () => {
    it("TS07_TC12-TC17_Administrator Datail", () => {
      goToManuManageAdmin();
      cy.get("#TF_USERNAME").type(userName);
      cy.get("#BT_SEARCH").click();
      cy.wait(3000);
      cy.contains(userName);
      cy.contains("Active");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#IB_TABLE_MENU_undefined").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#MENU_BUTTON_DETAIL").click();
      cy.contains(userName);
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
  });
});
