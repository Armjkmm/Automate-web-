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
let citizenID = "1-5099-01049-11-7";
let userCompanyID = "907d4db9-1a9e-4b19-bcbc-71131e4d680a";
let startDateNotFound = "28/06/2025";
let endDateNotFound = "28/06/2025";
let startHaveData = "01/09/2021";
let endHaveData = "03/09/2025";
//#endregion

//#region Data edit user
let editName = "Kaiju Owner";
let editEmail = "test.test@mail.com";
let editTle = "092-267-2832";
let editCitizenID = "1-3098-00120-39-5";
//#endregion

let editStatusUserName = "Play14@mail.com";

describe("Test Scenario: 03 Manage User", () => {
  beforeEach(() => {
    // auto login to enter portal page
    cy.loginBankPortalPageUAT(
      Cypress.env("ADMIN_USERNAME"),
      Cypress.env("ADMIN_PASSWORD"),
    );
    // // Startเปลี่ยนภาษา Web ให้เป็นภาษา English
    // cy.get("#BT_CHANGE_LANG").click();
    // cy.get("#MENU_LANG_EN > .MuiTypography-root").click();
    // // End เปลี่ยนภาษา Web ให้เป็นภาษา English
  });
  context("1 Search Manage User", () => {
    it("TS03_TC01_Manage User page", () => {
      goToSubMenuManageUser();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS03_TC02_Search by Name data not found", () => {
      goToSubMenuManageUser();
      cy.get("#TF_NAME").type("kaipap").should("be.visible");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains("Data Not Found").should("be.visible");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS03_TC03_Search by Email data not found", () => {
      goToSubMenuManageUser();
      cy.get(
        ":nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > #TF_NAME",
      )
        .type("pap@mail.com")
        .should("be.visible");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains("Data Not Found").should("be.visible");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS03_TC04_Search by Mobile no. data not found", () => {
      goToSubMenuManageUser();
      cy.get(
        ":nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > #TF_NAME",
      )
        .type("0922222222")
        .should("be.visible");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains("Data Not Found").should("be.visible");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS03_TC05_Search by Company ID and Date data not found", () => {
      goToSubMenuManageUser();
      cy.get(
        ":nth-child(4) > .MuiFormControl-root > .MuiInputBase-root > #TF_NAME",
      )
        .type("ftyghujklkjjhj-4554-7678-ERTYJGJJ")
        .should("be.visible");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains("Data Not Found").should("be.visible");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS03_TC06 Search by Citizen data not found", () => {
      goToSubMenuManageUser();
      cy.get(
        ":nth-child(5) > .MuiFormControl-root > .MuiInputBase-root > #TF_NAME",
      )
        .type("0928364758394")
        .should("be.visible");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains("Data Not Found").should("be.visible");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS03_TC07_Search by Date data not found", () => {
      goToSubMenuManageUser();
      cy.wait(2000);
      searchDateDataNotFound();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains("Data Not Found").should("be.visible");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS03_TC08_Search by status and Date data not found", () => {
      goToSubMenuManageUser();
      cy.wait(2000);
      searchDateDataNotFound();
      cy.get("#DD_STATUS").click();
      cy.wait(1000);
      cy.get("#DD_STATUS_3").click();
      cy.wait(100);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains("Data Not Found").should("be.visible");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS03_TC09_Search by Date invalid", () => {
      goToSubMenuManageUser();
      cy.get("#TF_DATERANGEPICKER_START").type("10/10/20").should("be.visible");
      cy.get("#TF_DATERANGEPICKER_END").type("10/10/20").should("be.visible");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains("Data Not Found").should("be.visible");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS03_TC10_Search by Name", () => {
      goToSubMenuManageUser();
      cy.get("#TF_NAME").type(userName).should("be.visible");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains(userName).should("be.visible");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS03_TC11_Search by Email", () => {
      goToSubMenuManageUser();
      cy.get(
        ":nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > #TF_NAME",
      )
        .type(userEmail)
        .should("be.visible");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains(userEmail).should("be.visible");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS03_TC12_Search by Mobile no.", () => {
      goToSubMenuManageUser();
      cy.get(
        ":nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > #TF_NAME",
      )
        .type(userMobileNo)
        .should("be.visible");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains(userMobileNo).should("be.visible");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS03_TC13_Search by Company ID", () => {
      goToSubMenuManageUser();
      cy.get(
        ":nth-child(4) > .MuiFormControl-root > .MuiInputBase-root > #TF_NAME",
      )
        .type(userCompanyID)
        .should("be.visible");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#IB_TABLE_MENU_undefined").click();
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#MENU_BUTTON_DETAIL").click();
      cy.contains(userCompanyID).should("be.visible");
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS03_TC14 Search by Citizen", () => {
      goToSubMenuManageUser();
      cy.get(
        ":nth-child(5) > .MuiFormControl-root > .MuiInputBase-root > #TF_NAME",
      )
        .type(citizenID)
        .should("be.visible");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#IB_TABLE_MENU_undefined").click();
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#MENU_BUTTON_DETAIL").click();
      cy.contains(citizenID).should("be.visible");
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS03_TC15_Search by Date", () => {
      goToSubMenuManageUser();
      cy.wait(2000);
      searchDateHaveData();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains("Active").should("be.visible");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS03_TC16_Search by status and Date", () => {
      goToSubMenuManageUser();
      cy.wait(2000);
      searchStatusAndDate();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains("Active").should("be.visible");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
  });

  context("2 View Detail", () => {
    it("TS03_TC17-TC18_User Detail page", () => {
      goToSubMenuManageUser();
      cy.get("#TF_NAME").type(userName).should("be.visible");
      cy.get("#BT_SEARCH").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#IB_TABLE_MENU_undefined").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#MENU_BUTTON_DETAIL").click();
      cy.contains("User Detail").should("be.visible");
      cy.contains("Access To Company").should("be.visible");
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
  });

  context("3 Edit User Click kebab in User Detail", () => {
    it("TS03_TC19-TC26_Edit User", () => {
      goToSubMenuManageUser();
      cy.get("#TF_NAME").type(editName).should("be.visible");
      cy.get("#BT_SEARCH").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#IB_TABLE_MENU_undefined").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#MENU_BUTTON_DETAIL").click();
      cy.wait(1000);
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#IB_TABLE_MENU_undefined").click();
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#MENU_BUTTON_EDIT_UER").click();
      cy.takeScreenshotSimple(5, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      // cy.get("#TF_NAME").clear();
      cy.get("#TF_EMAIL").clear();
      cy.get("#TF_MOBILE").clear();
      cy.get("#TF_CITIZEN_ID").clear();
      cy.wait(2000);
      cy.takeScreenshotSimple(6, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SAVE").click();
      cy.takeScreenshotSimple(7, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.generateRandomEmail().then((email) => {
        cy.get("#TF_EMAIL").type(email).should("be.visible");
      });
      cy.genThaiPhoneNumber().then((phone) => {
        cy.get("#TF_MOBILE").type(phone).should("be.visible");
      });

      cy.generateThaiNationalId().then((idNumber) => {
        cy.get("#TF_CITIZEN_ID").type(idNumber).should("be.visible");
      });

      cy.takeScreenshotSimple(8, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SAVE").click();
      cy.takeScreenshotSimple(9, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_RIGHT").click();
      cy.get("#BT_SAVE").click();
      cy.get("#BT_LEFT").click();
      cy.takeScreenshotSimple(10, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
      cy.takeScreenshotSimple(11, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
  });

  context("4 Edit User in Manage User page", () => {
    it("TS03_TC27-TC34_Edit User", () => {
      goToSubMenuManageUser();
      cy.get("#TF_NAME").type(editName);
      cy.get("#BT_SEARCH").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#IB_TABLE_MENU_undefined").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#MENU_BUTTON_EDIT_UER").click();
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#TF_EMAIL").clear();
      cy.get("#TF_MOBILE").clear();
      cy.get("#TF_CITIZEN_ID").clear();
      cy.wait(2000);
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SAVE").click();
      cy.takeScreenshotSimple(5, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.generateRandomEmail().then((email) => {
        cy.get("#TF_EMAIL").type(email).should("be.visible");
      });
      cy.genThaiPhoneNumber().then((phone) => {
        cy.get("#TF_MOBILE").type(phone).should("be.visible");
      });

      cy.generateThaiNationalId().then((idNumber) => {
        cy.get("#TF_CITIZEN_ID").type(idNumber).should("be.visible");
      });

      cy.takeScreenshotSimple(6, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SAVE").click();
      cy.takeScreenshotSimple(7, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_RIGHT").click();
      cy.get("#BT_SAVE").click();
      cy.get("#BT_LEFT").click();
      cy.takeScreenshotSimple(8, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
      cy.takeScreenshotSimple(9, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
  });

  context("5 Suspend User in Manage User page", () => {
    it("TS03_TC35-TC39_User to Suspend", () => {
      goToSubMenuManageUser();
      cy.get(
        ":nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > #TF_NAME",
      )
        .type(editStatusUserName)
        .should("be.visible");
      cy.get("#BT_SEARCH").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#IB_TABLE_MENU_undefined").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#MENU_BUTTON_EDIT_STATUS").click();

      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#DD_SELECT_STATUS").click();
      cy.wait(1000);
      cy.get("#DD_STATUS_3").click();
      cy.wait(1000);
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CONFIRM_CHANGE_STATUS").click();
      cy.contains("Success").should("be.visible");
      cy.takeScreenshotSimple(5, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
      cy.contains(editStatusUserName).should("be.visible");
      cy.contains("Suspended").should("be.visible");
      cy.takeScreenshotSimple(6, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#TF_NAME").type(editStatusUserName).should("be.visible");
      cy.get("#IB_TABLE_MENU_undefined").click();
      cy.takeScreenshotSimple(7, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#MENU_BUTTON_DETAIL").click();
      cy.contains(editStatusUserName).should("be.visible");
      cy.contains("Suspended").should("be.visible");
      cy.takeScreenshotSimple(8, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
  });

  context("6 Active User in Manage User page", () => {
    it("TS03_TC40-TC44_User to Active", () => {
      goToSubMenuManageUser();
      cy.get(
        ":nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > #TF_NAME",
      )
        .type(editStatusUserName)
        .should("be.visible");
      cy.get("#BT_SEARCH").click();
      cy.wait(1000);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#IB_TABLE_MENU_undefined").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#MENU_BUTTON_EDIT_STATUS").click();
      cy.wait(1000);
      cy.get("#DD_SELECT_STATUS").click();
      cy.wait(1000);
      cy.get("#DD_STATUS_2").click();
      cy.wait(1000);
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CONFIRM_CHANGE_STATUS").click();
      cy.contains("Success").should("be.visible");
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
      cy.contains(editStatusUserName).should("be.visible");
      cy.contains("Active").should("be.visible");
      cy.takeScreenshotSimple(5, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#TF_NAME").type(editStatusUserName).should("be.visible");
      cy.get("#IB_TABLE_MENU_undefined").click();
      cy.takeScreenshotSimple(6, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#MENU_BUTTON_DETAIL").click();
      cy.contains(editStatusUserName).should("be.visible");
      cy.contains("Active").should("be.visible");
      cy.takeScreenshotSimple(7, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
  });

  context("7 Suspend User in User detail page", () => {
    it("TS03_TC45-TC51_Select User to Suspend", () => {
      goToSubMenuManageUser();
      cy.get(
        ":nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > #TF_NAME",
      )
        .type(editStatusUserName)
        .should("be.visible");
      cy.get("#BT_SEARCH").click();
      cy.contains(editStatusUserName).should("be.visible");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#IB_TABLE_MENU_undefined").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#MENU_BUTTON_DETAIL").click();
      cy.contains(editStatusUserName).should("be.visible");
      cy.get("#IB_TABLE_MENU_undefined").click();
      cy.wait(1000);
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#MENU_BUTTON_EDIT_STATUS").click();
      cy.wait(1000);
      cy.get("#DD_SELECT_STATUS").click();
      cy.wait(1000);
      cy.get("#DD_STATUS_3").click();
      cy.wait(1000);
      cy.get("#DD_NOTE").type("Suspended User").should("be.visible");
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CONFIRM_CHANGE_STATUS").click();
      cy.contains("Success");
      cy.takeScreenshotSimple(5, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
      cy.contains(editStatusUserName).should("be.visible");
      cy.contains("Suspended").should("be.visible");
      cy.takeScreenshotSimple(6, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
  });

  context("8 Active User in User detail page", () => {
    it("TS03_TC52-TC58_Select User to Active", () => {
      goToSubMenuManageUser();
      cy.get(
        ":nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > #TF_NAME",
      )
        .type(editStatusUserName)
        .should("be.visible");
      cy.get("#BT_SEARCH").click();
      cy.contains(editStatusUserName).should("be.visible");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#IB_TABLE_MENU_undefined").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#MENU_BUTTON_DETAIL").click();
      cy.contains(editStatusUserName).should("be.visible");
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#IB_TABLE_MENU_undefined").click();
      cy.wait(1000);
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#MENU_BUTTON_EDIT_STATUS").click();
      cy.wait(1000);
      cy.get("#DD_SELECT_STATUS").click();
      cy.wait(1000);
      cy.get("#DD_STATUS_2").click();
      cy.wait(1000);
      cy.get("#DD_NOTE").type("Active User").should("be.visible");
      cy.takeScreenshotSimple(5, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CONFIRM_CHANGE_STATUS").click();
      cy.contains("Success").should("be.visible");
      cy.takeScreenshotSimple(6, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
      cy.contains(editStatusUserName).should("be.visible");
      cy.contains("Active").should("be.visible");
      cy.takeScreenshotSimple(7, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
  });

  context("9 Export Excel", () => {
    it("TS03_TC59 Export of User in Manage User page", () => {
      goToSubMenuManageUser();
      cy.intercept("POST", "/company-user/api/companyUser/export/excel").as(
        "exportExcel",
      );
      cy.get("#BT_EXPORT_EXCEL").click();
      cy.wait("@exportExcel");
      // cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.renameNewfile("xlsx"); // ไม่ต้องระบุชื่อไฟล์, มันจะหาตัวล่าสุดให้เอง
      cy.get("@filename").then((newFileName) => {
        cy.log("ชื่อไฟล์ใหม่ล่าสุด:", newFileName);
        cy.validateFile(newFileName, 1);
      });
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.RUNNER);
    });
    it("TS03_TC60 Search by Name then Export of User", () => {
      goToSubMenuManageUser();
      cy.get("#TF_NAME").type(userName).should("be.visible");
      cy.get("#BT_SEARCH").click();
      cy.contains(userName).should("be.visible");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.intercept("POST", "/company-user/api/companyUser/export/excel").as(
        "exportExcel",
      );
      cy.get("#BT_EXPORT_EXCEL").click();
      cy.wait("@exportExcel");
      cy.renameNewfile("xlsx"); // ไม่ต้องระบุชื่อไฟล์, มันจะหาตัวล่าสุดให้เอง
      cy.get("@filename").then((newFileName) => {
        cy.log("ชื่อไฟล์ใหม่ล่าสุด:", newFileName);
        cy.validateFile(newFileName, 1);
      });
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.RUNNER);
    });
    it("TS03_TC61 Search by Email then Export of User", () => {
      goToSubMenuManageUser();
      cy.get(
        ":nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > #TF_NAME",
      )
        .type(userEmail)
        .should("be.visible");
      cy.get("#BT_SEARCH").click();
      cy.contains(userEmail).should("be.visible");
      cy.get("#BT_EXPORT_EXCEL").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.renameNewfile("xlsx"); // ไม่ต้องระบุชื่อไฟล์, มันจะหาตัวล่าสุดให้เอง
      cy.get("@filename").then((newFileName) => {
        cy.log("ชื่อไฟล์ใหม่ล่าสุด:", newFileName);
        cy.validateFile(newFileName, 1);
      });
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.RUNNER);
    });
    it("TS03_TC62 Search by Mobile no. then Export of User", () => {
      goToSubMenuManageUser();
      cy.get(
        ":nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > #TF_NAME",
      )
        .type(userMobileNo)
        .should("be.visible");
      cy.get("#BT_SEARCH").click();
      cy.contains(userMobileNo).should("be.visible");
      cy.intercept("POST", "/company-user/api/companyUser/export/excel").as(
        "exportExcel",
      );
      cy.get("#BT_EXPORT_EXCEL").click();
      cy.wait("@exportExcel");

      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.renameNewfile("xlsx"); // ไม่ต้องระบุชื่อไฟล์, มันจะหาตัวล่าสุดให้เอง
      cy.get("@filename").then((newFileName) => {
        cy.log("ชื่อไฟล์ใหม่ล่าสุด:", newFileName);
        cy.validateFile(newFileName, 1);
      });
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.RUNNER);
    });
    it("TS03_TC63 Search by Company ID then Export of User", () => {
      goToSubMenuManageUser();
      cy.get(
        ":nth-child(4) > .MuiFormControl-root > .MuiInputBase-root > #TF_NAME",
      )
        .type(userCompanyID)
        .should("be.visible");
      cy.get("#BT_SEARCH").click();
      cy.intercept("POST", "/company-user/api/companyUser/export/excel").as(
        "exportExcel",
      );
      cy.get("#BT_EXPORT_EXCEL").click();
      cy.wait("@exportExcel");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.renameNewfile("xlsx"); // ไม่ต้องระบุชื่อไฟล์, มันจะหาตัวล่าสุดให้เอง
      cy.get("@filename").then((newFileName) => {
        cy.log("ชื่อไฟล์ใหม่ล่าสุด:", newFileName);
        cy.validateFile(newFileName, 1);
      });
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.RUNNER);
    });
    it("TS03_TC64 Search by Citizen ID then Export of User", () => {
      goToSubMenuManageUser();
      cy.get(
        ":nth-child(5) > .MuiFormControl-root > .MuiInputBase-root > #TF_NAME",
      )
        .type(citizenID)
        .should("be.visible");
      cy.get("#BT_SEARCH").click();
      cy.intercept("POST", "/company-user/api/companyUser/export/excel").as(
        "exportExcel",
      );
      cy.get("#BT_EXPORT_EXCEL").click();
      cy.wait("@exportExcel");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.renameNewfile("xlsx"); // ไม่ต้องระบุชื่อไฟล์, มันจะหาตัวล่าสุดให้เอง
      cy.get("@filename").then((newFileName) => {
        cy.log("ชื่อไฟล์ใหม่ล่าสุด:", newFileName);
        cy.validateFile(newFileName, 1);
      });
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.RUNNER);
    });
    it("TS03_TC65 Search by Date then Export of User", () => {
      goToSubMenuManageUser();
      cy.get("#TF_DATERANGEPICKER_START")
        .type(startHaveData)
        .should("be.visible");
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData).should("be.visible");
      cy.get("#BT_SEARCH").click();
      cy.contains("Active").should("be.visible");
      cy.intercept("POST", "/company-user/api/companyUser/export/excel").as(
        "exportExcel",
      );
      cy.get("#BT_EXPORT_EXCEL").click();
      cy.wait("@exportExcel");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.renameNewfile("xlsx"); // ไม่ต้องระบุชื่อไฟล์, มันจะหาตัวล่าสุดให้เอง
      cy.get("@filename").then((newFileName) => {
        cy.log("ชื่อไฟล์ใหม่ล่าสุด:", newFileName);
        cy.validateFile(newFileName, 1);
      });
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.RUNNER);
    });
    it("TS03_TC66 Search by status and Date then Export of User", () => {
      goToSubMenuManageUser();
      cy.get("#TF_DATERANGEPICKER_START")
        .type(startHaveData)
        .should("be.visible");
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData).should("be.visible");
      cy.get("#DD_STATUS").click();
      cy.wait(1000);
      cy.get("#DD_STATUS_3").click();
      cy.get("#BT_SEARCH").click();
      cy.contains("Suspended").should("be.visible");
      cy.intercept("POST", "/company-user/api/companyUser/export/excel").as(
        "exportExcel",
      );
      cy.get("#BT_EXPORT_EXCEL").click();
      cy.wait("@exportExcel");
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
