function goToRequesrQR() {
  cy.intercept("POST", "/tqrc-standee/api/tqrc-standee/req/search").as(
    "requestQRPage",
  );
  cy.get(
    ".css-1mvsuhg > .MuiDrawer-root > .MuiPaper-root > .css-1jd25az > .MuiList-root > :nth-child(6) > #MAINMENU_11 > .MuiListItemText-root > .MuiTypography-root",
  ).click();
  cy.wait("@requestQRPage");
}

function searchDateDataNotFound() {
  cy.get("#TF_DATERANGEPICKER_START").type(startDateNotFound);
  cy.get("#TF_DATERANGEPICKER_END").type(endDateNotFound);
}

function searchDateHaveData() {
  cy.get("#TF_DATERANGEPICKER_START").type(startHaveData);
  cy.get("#TF_DATERANGEPICKER_END").type(endHaveData);
}

let startDateNotFound = "31/08/2025";
let endDateNotFound = "31/08/2025";
let startHaveData = "01/08/2025";
let endHaveData = "13/08/2025";

let shopName = "CMU56XD";
let requestCode = "000476";

describe("Test Scenario: 04 Request QR", () => {
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

  context("1 Search Request QR", () => {
    it("TS05_TC01_Click Request QR main-menu", () => {
      goToRequesrQR();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS05_TC02_Search by Shop name data not found", () => {
      goToRequesrQR();
      cy.get("#TF_SEARCH").type("Pap Shop");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.wait(2000);
      cy.contains("Data Not Found");
      cy.wait(3000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS05_TC03_Search by Request Code data not found", () => {
      goToRequesrQR();
      cy.get(
        ":nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > #TF_SEARCH",
      ).type("100102");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.wait(2000);
      cy.contains("Data Not Found");
      cy.wait(3000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS05_TC04_Search by Date data not found", () => {
      goToRequesrQR();
      searchDateDataNotFound();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.wait(2000);
      cy.contains("Data Not Found");
      cy.wait(3000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS05_TC05_Search by Status and Date data not found", () => {
      goToRequesrQR();
      searchDateDataNotFound();
      cy.wait(1000);
      cy.get("#DD_STATUS").click();
      cy.wait(1000);
      cy.get('[data-value="REJECTED"]').click();
      cy.wait(1000);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.wait(2000);
      cy.contains("Data Not Found");
      cy.wait(3000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS05_TC06_Search by Shop name", () => {
      goToRequesrQR();
      cy.get("#TF_SEARCH").type(shopName);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains(shopName);
      cy.wait(3000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS05_TC07_Search by Request Code and date", () => {
      goToRequesrQR();
      cy.get(
        ":nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > #TF_SEARCH",
      ).type(requestCode);
      cy.wait(1000);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains(requestCode);
      cy.wait(3000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS05_TC08_Search by Date", () => {
      goToRequesrQR();
      searchDateHaveData();
      cy.wait(1000);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.wait(1000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS05_TC09_Search by Status and Date", () => {
      goToRequesrQR();
      searchDateHaveData();
      cy.wait(1000);
      cy.get("#DD_STATUS").click();
      cy.wait(1000);
      cy.get("#DD_STATUS_2").click();
      cy.wait(1000);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.wait(1000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
  });

  context("2 View QR Details", () => {
    it("TS05_TC10-TC11Select Request QR then Click at icon print", () => {
      goToRequesrQR();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(
        ":nth-child(1) > :nth-child(8) > #IB_TABLE_MENU_undefined",
      ).click();
      cy.wait(1000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#MENU_BUTTON_DETAIL").click();
      cy.wait(3000);
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
  });

  context("3 Export Request QR Report", () => {
    it("TS05_TC12 Export of QR Report in Request QR page", () => {
      goToRequesrQR();
      cy.get("#BT_EXPORT_EXCEL").click();
      cy.wait(2000);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.renameNewfile("xlsx"); // ไม่ต้องระบุชื่อไฟล์, มันจะหาตัวล่าสุดให้เอง
      cy.get("@filename").then((newFileName) => {
        cy.log("ชื่อไฟล์ใหม่ล่าสุด:", newFileName);
        cy.validateFile(newFileName, 1);
      });
      cy.wait(3000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.RUNNER);
    });
    it("TS05_TC13 Search by Shop name then Export of QR Report", () => {
      goToRequesrQR();
      cy.get("#TF_SEARCH").type(shopName);
      cy.get("#BT_SEARCH").click();
      cy.contains(shopName);
      cy.wait(1000);
      cy.get("#BT_EXPORT_EXCEL").click();
      cy.wait(2000);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.renameNewfile("xlsx"); // ไม่ต้องระบุชื่อไฟล์, มันจะหาตัวล่าสุดให้เอง
      cy.get("@filename").then((newFileName) => {
        cy.log("ชื่อไฟล์ใหม่ล่าสุด:", newFileName);
        cy.validateFile(newFileName, 1);
      });
      cy.wait(3000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.RUNNER);
    });
    it("TS05_TC14 Search by Request Code and date then Export of QR Report", () => {
      goToRequesrQR();
      cy.get(
        ":nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > #TF_SEARCH",
      ).type(requestCode);
      searchDateHaveData();
      cy.wait(1000);
      cy.get("#BT_SEARCH").click();
      cy.contains(requestCode);
      cy.wait(1000);
      cy.get("#BT_EXPORT_EXCEL").click();
      cy.wait(2000);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.renameNewfile("xlsx"); // ไม่ต้องระบุชื่อไฟล์, มันจะหาตัวล่าสุดให้เอง
      cy.get("@filename").then((newFileName) => {
        cy.log("ชื่อไฟล์ใหม่ล่าสุด:", newFileName);
        cy.validateFile(newFileName, 1);
      });
      cy.wait(3000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.RUNNER);
    });
    it("TS05_TC15 Search by Date then Export of QR Report", () => {
      goToRequesrQR();
      searchDateHaveData();
      cy.wait(1000);
      cy.get("#BT_SEARCH").click();
      cy.wait(1000);
      cy.get("#BT_EXPORT_EXCEL").click();
      cy.wait(2000);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.renameNewfile("xlsx"); // ไม่ต้องระบุชื่อไฟล์, มันจะหาตัวล่าสุดให้เอง
      cy.get("@filename").then((newFileName) => {
        cy.log("ชื่อไฟล์ใหม่ล่าสุด:", newFileName);
        cy.validateFile(newFileName, 1);
      });
      cy.wait(3000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.RUNNER);
    });
    it("TS05_TC16 Search by Status and Date then Export of QR Report", () => {
      goToRequesrQR();
      searchDateHaveData();
      cy.wait(1000);
      cy.get("#DD_STATUS").click();
      cy.wait(1000);
      cy.get("#DD_STATUS_2").click();
      cy.wait(1000);
      cy.get("#BT_SEARCH").click();
      cy.wait(1000);
      cy.get("#BT_EXPORT_EXCEL").click();
      cy.wait(2000);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.renameNewfile("xlsx"); // ไม่ต้องระบุชื่อไฟล์, มันจะหาตัวล่าสุดให้เอง
      cy.get("@filename").then((newFileName) => {
        cy.log("ชื่อไฟล์ใหม่ล่าสุด:", newFileName);
        cy.validateFile(newFileName, 1);
      });
      cy.wait(3000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.RUNNER);
    });
  });
});
