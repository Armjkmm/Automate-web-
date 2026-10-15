function goToSubMenuManageUser() {
  cy.intercept("POST", "/company-user/api/companyUser/status/count").as(
    "managementUserPage",
  );
  cy.get(
    ".css-1mvsuhg > .MuiDrawer-root > .MuiPaper-root > .css-1jd25az > .MuiList-root > :nth-child(3) > #MAINMENU_7 > .MuiListItemText-root > .MuiTypography-root",
  ).click();
  cy.wait("@managementUserPage");
}

function searchDateDataNotFound() {
  cy.get("#TF_DATERANGEPICKER_START").type(startDateNotFound);
  cy.get("#TF_DATERANGEPICKER_END").type(endDateNotFound);
}

function searchDateHaveData() {
  cy.get("#TF_DATERANGEPICKER_START").type(startHaveData);
  cy.get("#TF_DATERANGEPICKER_END").type(endHaveData);
}

function searchStatusAndDate() {
  searchDateHaveData();
  cy.get("#DD_STATUS").click();
  cy.wait(1000);
  //ถ้าต้องการเปลี่ยน Status สามารถเปิด Comment ได้
  // cy.get('#DD_STATUS_1').click() //Status "All Status"
  cy.get("#DD_STATUS_2").click(); //Status "Active"
  // cy.get("#DD_STATUS_3").click(); //Status "Suspend"
  // cy.get('#DD_STATUS_5').click() //Status "Lock"
  cy.wait(1000);
}

//#region Data search manage user
let userName = "Armyo Owner";
let userEmail = "play47@mail.com";
let userMobileNo = "0922692832";
let citizenID = "1-2000-00012-35-8";
let userCompanyID = "907d4db9-1a9e-4b19-bcbc-71131e4d680a";
let startDateNotFound = "28/06/2025";
let endDateNotFound = "28/06/2025";
let startHaveData = "01/09/2021";
let endHaveData = "03/09/2025";
//#endregion

//#region Data edit user
let editName = "Kaiju Owner";
let editEmail = "test.test@mail.com";
let editTle = "0922672832";
let editCitizenID = "1-3098-00120-39-5";
//#endregion

let editStatusUserName = "Play14@mail.com";

describe("Test Scenario: 03 Manage User", () => {
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
  context("1 Search Manage User", () => {
    it("TS04_TC01_Manage User page", () => {
      goToSubMenuManageUser();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.wait(3000);
    });
    it("TS04_TC02_Search by Name data not found", () => {
      goToSubMenuManageUser();
      cy.get("#TF_NAME").type("kaipap");
      cy.wait(1000);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains("Data Not Found");
      cy.wait(3000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS04_TC03_Search by Email data not found", () => {
      goToSubMenuManageUser();
      cy.get(
        ":nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > #TF_NAME",
      ).type("pap@mail.com");
      cy.wait(1000);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains("Data Not Found");
      cy.wait(3000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS04_TC04_Search by Mobile no. data not found", () => {
      goToSubMenuManageUser();
      cy.get(
        ":nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > #TF_NAME",
      ).type("0922222222");
      cy.wait(1000);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains("Data Not Found");
      cy.wait(3000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS04_TC05_Search by Company ID and Date data not found", () => {
      goToSubMenuManageUser();
      cy.wait(1000);
      cy.get(
        ":nth-child(4) > .MuiFormControl-root > .MuiInputBase-root > #TF_NAME",
      ).type("ftyghujklkjjhj-4554-7678-ERTYJGJJ");
      cy.wait(1000);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains("Data Not Found");
      cy.wait(3000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS04_TC06 Search by Citizen ID  data not found", () => {
      goToSubMenuManageUser();
      cy.get(
        ":nth-child(5) > .MuiFormControl-root > .MuiInputBase-root > #TF_NAME",
      ).type("0928364758394");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains("Data Not Found");
      cy.wait(3000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS04_TC07_Search by Date data not found", () => {
      goToSubMenuManageUser();
      cy.wait(1000);
      searchDateDataNotFound();
      cy.wait(1000);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.wait(3000);
      cy.contains("Data Not Found");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS04_TC08_Search by status and Date data not found", () => {
      goToSubMenuManageUser();
      cy.wait(1000);
      searchDateDataNotFound();
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
    it("TS04_TC09_Search by Date invalid", () => {
      goToSubMenuManageUser();
      cy.wait(1000);
      cy.get("#TF_DATERANGEPICKER_START").type("10/10/20");
      cy.get("#TF_DATERANGEPICKER_END").type("10/10/20");
      cy.wait(1000);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains("Data Not Found");
      cy.wait(3000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS04_TC10_Search by Name", () => {
      goToSubMenuManageUser();
      cy.get("#TF_NAME").type(userName);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.wait(3000);
      cy.contains(userName);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS04_TC11_Search by Email", () => {
      goToSubMenuManageUser();
      cy.get(
        ":nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > #TF_NAME",
      ).type(userEmail);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.wait(1000);
      cy.contains(userEmail);
      cy.wait(3000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS04_TC12_Search by Mobile no.", () => {
      goToSubMenuManageUser();
      cy.get(
        ":nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > #TF_NAME",
      ).type(userMobileNo);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains(userMobileNo);
      cy.wait(3000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS04_TC13_Search by Company ID", () => {
      goToSubMenuManageUser();
      cy.wait(1000);
      cy.get(
        ":nth-child(4) > .MuiFormControl-root > .MuiInputBase-root > #TF_NAME",
      ).type(userCompanyID);
      cy.wait(1000);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#IB_TABLE_MENU_undefined").click();
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#MENU_BUTTON_DETAIL").click();
      cy.contains(userCompanyID);
      cy.wait(3000);
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS04_TC14 Search by Citizen ID", () => {
      goToSubMenuManageUser();
      cy.get(
        ":nth-child(5) > .MuiFormControl-root > .MuiInputBase-root > #TF_NAME",
      ).type(citizenID);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#IB_TABLE_MENU_undefined").click();
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#MENU_BUTTON_DETAIL").click();
      cy.wait(3000);
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS04_TC15_Search by Date", () => {
      goToSubMenuManageUser();
      cy.wait(1000);
      searchDateHaveData();
      cy.wait(1000);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains("Active");
      cy.wait(3000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS04_TC16_Search by status and Date", () => {
      goToSubMenuManageUser();
      cy.wait(1000);
      searchStatusAndDate();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.wait(3000);
      cy.contains("Active");
      cy.wait(3000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
  });

  context("2 View Detail", () => {
    it("TS04_TC17-TC18_User Detail page", () => {
      goToSubMenuManageUser();
      cy.get("#TF_NAME").type(userName);
      cy.get("#BT_SEARCH").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#IB_TABLE_MENU_undefined").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#MENU_BUTTON_DETAIL").click();
      cy.contains("User Detail");
      cy.contains("Access To Company");
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
  });
});
