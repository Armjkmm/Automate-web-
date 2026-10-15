function goToSubMenuTransactionCash() {
  cy.get(
    ".css-1mvsuhg > .MuiDrawer-root > .MuiPaper-root > .css-1jd25az > .MuiList-root > :nth-child(4) > #MAINMENU_8",
  ).click();
  cy.wait(3000);
  cy.intercept("POST", "/transaction-cash/api/transaction/cash/search").as(
    "goToCashPage",
  );
  let transactionCashPageBtn = cy.get("#SUB_MENU_8_3_1", { timeout: 20000 });
  transactionCashPageBtn.should("be.visible");
  transactionCashPageBtn.click();
  cy.wait("@goToCashPage");
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

describe("Test Scenario: 04 Transaction", () => {
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
  // #region Transaction Cash
  context("1 Search Cash", () => {
    it("TS04_TC01-TC02_Transaction Cash page", () => {
      goToSubMenuTransactionCash();
      cy.wait(3000);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS04_TC03_Search by Transaction ID and Date data not found", () => {
      goToSubMenuTransactionCash();
      cy.get("#TF_TRANSACTION_ID")
        .type("23091208112186292165")
        .should("be.visible");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains("Data Not Found").should("be.visible");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS04_TC04_Search by MID and Date data not found", () => {
      goToSubMenuTransactionCash();
      cy.get("#TF_MID").type("123456789101213").should("be.visible");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains("Data Not Found").should("be.visible");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS04_TC05_Search by TID and Date data not found", () => {
      goToSubMenuTransactionCash();
      cy.get("#TF_TID").type("86292844").should("be.visible");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains("Data Not Found").should("be.visible");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS04_TC06_Search by Company ID and Date data not found", () => {
      goToSubMenuTransactionCash();
      cy.get("#TF_COM_ID")
        .type("ftyghujklkjjhj-4554-7678-ERTYJGJJ")
        .should("be.visible");
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
    it("TS04_TC07_Search by Date data not found", () => {
      goToSubMenuTransactionCash();
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
    it("TS04_TC08_Search by Status and Date data not found", () => {
      goToSubMenuTransactionCash();
      cy.get("#TF_DATERANGEPICKER_START")
        .type(startDateNotFound)
        .should("be.visible");
      cy.get("#TF_DATERANGEPICKER_END")
        .type(endDateNotFound)
        .should("be.visible");
      cy.get("#DD_STATUS").click();
      cy.wait(1000);
      cy.get('[data-value="VOIDED"]').click();
      cy.wait(1000);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains("Data Not Found").should("be.visible");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS04_TC09_Search by invalid Date", () => {
      goToSubMenuTransactionCash();
      cy.get("#TF_DATERANGEPICKER_START").type("010120").should("be.visible");
      cy.get("#TF_DATERANGEPICKER_END").type("010120").should("be.visible");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains("Data Not Found").should("be.visible");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS04_TC10_Search by Transaction ID and Date", () => {
      goToSubMenuTransactionCash();
      cy.get("#TF_TRANSACTION_ID").type(tranIDCash).should("be.visible");
      cy.get("#TF_DATERANGEPICKER_START")
        .type(startHaveData)
        .should("be.visible");
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData).should("be.visible");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains(tranIDCash).should("be.visible");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS04_TC11_Search by MID and Date", () => {
      goToSubMenuTransactionCash();
      cy.get("#TF_MID").type(midCash);
      cy.get("#TF_DATERANGEPICKER_START")
        .type(startHaveData)
        .should("be.visible");
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData).should("be.visible");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains(midCash).should("be.visible");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS04_TC12_Search by TID and Date", () => {
      goToSubMenuTransactionCash();
      cy.get("#TF_TID").type(tidCash).should("be.visible");
      cy.get("#TF_DATERANGEPICKER_START")
        .type(startHaveData)
        .should("be.visible");
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData).should("be.visible");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#IB_TABLE_MENU_undefined").click();
      cy.get("#MENU_BUTTON_DETAIL").click();
      cy.contains(tidCash).should("be.visible");
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS04_TC13_Search by Company ID and Date", () => {
      goToSubMenuTransactionCash();
      cy.get("#TF_COM_ID").type(companyIDCash).should("be.visible");
      cy.get("#TF_DATERANGEPICKER_START")
        .type(startHaveData)
        .should("be.visible");
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData).should("be.visible");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#IB_TABLE_MENU_undefined").click();
      cy.get("#MENU_BUTTON_DETAIL").click();
      cy.wait(2000);
      cy.get(
        ':nth-child(5) > [style="margin-top: 30px; background-color: white; box-shadow: rgb(196, 196, 196) 3px 3px 3px; border-radius: 10px; max-width: 1000px;"] > .MuiPaper-root > #panel1a-header',
      ).click();
      cy.contains(companyIDCash);
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS04_TC14_Search by Date", () => {
      goToSubMenuTransactionCash();
      cy.get("#TF_DATERANGEPICKER_START")
        .type(startHaveData)
        .should("be.visible");
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData).should("be.visible");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS04_TC15_Search by Status and Date", () => {
      goToSubMenuTransactionCash();
      cy.get("#TF_DATERANGEPICKER_START")
        .type(startHaveData)
        .should("be.visible");
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData).should("be.visible");
      cy.wait(1000);
      cy.get("#DD_STATUS").click();
      cy.wait(1000);
      cy.get('[data-value="APPROVED"]').click();
      cy.wait(1000);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#IB_TABLE_MENU_undefined").click();
      cy.get("#MENU_BUTTON_DETAIL").click();
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
  });

  context("2 Transaction Cash Detail", () => {
    it("TS03_TC16-TC18_View Details Cash page", () => {
      goToSubMenuTransactionCash();
      cy.get("#TF_MID").type(midCash);
      cy.get("#TF_DATERANGEPICKER_START")
        .type(startHaveData)
        .should("be.visible");
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData).should("be.visible");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#IB_TABLE_MENU_undefined").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#MENU_BUTTON_DETAIL").click();
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(
        ':nth-child(4) > [style="margin-top: 30px; background-color: white; box-shadow: rgb(196, 196, 196) 3px 3px 3px; border-radius: 10px; max-width: 1000px;"] > .MuiPaper-root > #panel1a-header',
      ).click();
      cy.get(
        ':nth-child(5) > [style="margin-top: 30px; background-color: white; box-shadow: rgb(196, 196, 196) 3px 3px 3px; border-radius: 10px; max-width: 1000px;"] > .MuiPaper-root > #panel1a-header',
      ).click();
      cy.get(
        ':nth-child(6) > [style="margin-top: 30px; background-color: white; box-shadow: rgb(196, 196, 196) 3px 3px 3px; border-radius: 10px; max-width: 1000px;"] > .MuiPaper-root > #panel1a-header',
      ).click();
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_BACK").click();
    });
  });

  context("3 Export Transaction Cash Report", () => {
    it("TS04_TC19_Click Export Excel in Transaction Cash page", () => {
      goToSubMenuTransactionCash();
      cy.intercept("POST", "/transaction-cash/api/transaction/cash/export").as(
        "exportExcelTrancash",
      );
      cy.get("#BT_EXPORT_EXCEL").click();
      cy.wait("@exportExcelTrancash");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.renameNewfile("xlsx"); // ไม่ต้องระบุชื่อไฟล์, มันจะหาตัวล่าสุดให้เอง
      cy.get("@filename").then((newFileName) => {
        cy.log("ชื่อไฟล์ใหม่ล่าสุด:", newFileName);
        cy.validateFile(newFileName, 1);
      });
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.RUNNER);
    });
    it("TS04_TC20_Search by Transaction ID and Date then Click Export Excel", () => {
      goToSubMenuTransactionCash();
      cy.get("#TF_TRANSACTION_ID").type(tranIDCash).should("be.visible");
      cy.get("#TF_DATERANGEPICKER_START")
        .type(startHaveData)
        .should("be.visible");
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData).should("be.visible");
      cy.get("#BT_SEARCH").click();
      cy.contains(tranIDCash).should("be.visible");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.intercept("POST", "/transaction-cash/api/transaction/cash/export").as(
        "exportExcelTrancash",
      );
      cy.get("#BT_EXPORT_EXCEL").click();
      cy.wait("@exportExcelTrancash");
      cy.renameNewfile("xlsx"); // ไม่ต้องระบุชื่อไฟล์, มันจะหาตัวล่าสุดให้เอง
      cy.get("@filename").then((newFileName) => {
        cy.log("ชื่อไฟล์ใหม่ล่าสุด:", newFileName);
        cy.validateFile(newFileName, 1);
      });
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.RUNNER);
    });
    it("TS04_TC21_Search by MID and Date then Click Export Excel", () => {
      goToSubMenuTransactionCash();
      cy.get("#TF_MID").type(midCash).should("be.visible");
      cy.get("#TF_DATERANGEPICKER_START")
        .type(startHaveData)
        .should("be.visible");
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData).should("be.visible");
      cy.get("#BT_SEARCH").click();
      cy.contains(midCash).should("be.visible");
      cy.intercept("POST", "/transaction-cash/api/transaction/cash/export").as(
        "exportExcelTrancash",
      );
      cy.get("#BT_EXPORT_EXCEL").click();
      cy.wait("@exportExcelTrancash");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.renameNewfile("xlsx"); // ไม่ต้องระบุชื่อไฟล์, มันจะหาตัวล่าสุดให้เอง
      cy.get("@filename").then((newFileName) => {
        cy.log("ชื่อไฟล์ใหม่ล่าสุด:", newFileName);
        cy.validateFile(newFileName, 1);
      });
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.RUNNER);
    });
    it("TS04_TC22_Search by TID and Date then Click Export Excel", () => {
      goToSubMenuTransactionCash();
      cy.get("#TF_TID").type(tidCash).should("be.visible");
      cy.get("#TF_DATERANGEPICKER_START")
        .type(startHaveData)
        .should("be.visible");
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData).should("be.visible");
      cy.get("#BT_SEARCH").click();
      cy.contains(tidCash);
      cy.intercept("POST", "/transaction-cash/api/transaction/cash/export").as(
        "exportExcelTrancash",
      );
      cy.get("#BT_EXPORT_EXCEL").click();
      cy.wait("@exportExcelTrancash");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.renameNewfile("xlsx"); // ไม่ต้องระบุชื่อไฟล์, มันจะหาตัวล่าสุดให้เอง
      cy.get("@filename").then((newFileName) => {
        cy.log("ชื่อไฟล์ใหม่ล่าสุด:", newFileName);
        cy.validateFile(newFileName, 1);
      });
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.RUNNER);
    });
    it("TS04_TC23_Search by Company ID and Date Click Export Excel", () => {
      goToSubMenuTransactionCash();
      cy.get("#TF_COM_ID").type(companyIDCash).should("be.visible");
      cy.get("#TF_DATERANGEPICKER_START")
        .type(startHaveData)
        .should("be.visible");
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData).should("be.visible");
      cy.get("#BT_SEARCH").click();
      cy.intercept("POST", "/transaction-cash/api/transaction/cash/export").as(
        "exportExcelTrancash",
      );
      cy.get("#BT_EXPORT_EXCEL").click();
      cy.wait("@exportExcelTrancash");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.renameNewfile("xlsx"); // ไม่ต้องระบุชื่อไฟล์, มันจะหาตัวล่าสุดให้เอง
      cy.get("@filename").then((newFileName) => {
        cy.log("ชื่อไฟล์ใหม่ล่าสุด:", newFileName);
        cy.validateFile(newFileName, 1);
      });
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.RUNNER);
    });
    it("TS04_TC24_Search by Date then Click Export Excel", () => {
      goToSubMenuTransactionCash();
      cy.get("#TF_DATERANGEPICKER_START")
        .type(startHaveData)
        .should("be.visible");
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData).should("be.visible");
      cy.get("#BT_SEARCH").click();
      cy.contains("Success");
      cy.intercept("POST", "/transaction-cash/api/transaction/cash/export").as(
        "exportExcelTrancash",
      );
      cy.get("#BT_EXPORT_EXCEL").click();
      cy.wait("@exportExcelTrancash");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.renameNewfile("xlsx"); // ไม่ต้องระบุชื่อไฟล์, มันจะหาตัวล่าสุดให้เอง
      cy.get("@filename").then((newFileName) => {
        cy.log("ชื่อไฟล์ใหม่ล่าสุด:", newFileName);
        cy.validateFile(newFileName, 1);
      });
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.RUNNER);
    });
    it("TS04_TC25_Search by Status and Date then Click Export Excel", () => {
      goToSubMenuTransactionCash();
      cy.get("#TF_DATERANGEPICKER_START")
        .type(startHaveData)
        .should("be.visible");
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData).should("be.visible");
      cy.get("#DD_STATUS").click();
      cy.wait(1000);
      cy.get('[data-value="APPROVED"]').click();
      cy.wait(1000);
      cy.get("#BT_SEARCH").click();
      cy.contains("Success").should("be.visible");
      cy.intercept("POST", "/transaction-cash/api/transaction/cash/export").as(
        "exportExcelTrancash",
      );
      cy.get("#BT_EXPORT_EXCEL").click();
      cy.wait("@exportExcelTrancash");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.renameNewfile("xlsx"); // ไม่ต้องระบุชื่อไฟล์, มันจะหาตัวล่าสุดให้เอง
      cy.get("@filename").then((newFileName) => {
        cy.log("ชื่อไฟล์ใหม่ล่าสุด:", newFileName);
        cy.validateFile(newFileName, 1);
      });
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.RUNNER);
    });
  });
  //#endregion

  // #region Transaction QR Pormptpay
  context("4 Search QR Promptpay", () => {
    it("TS04_TC26 Click QR Promptpay page", () => {
      goToSubMenuTransactionPromptPay();
      cy.wait(3000);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS04_TC27_Search by Transaction ID data not found", () => {
      goToSubMenuTransactionPromptPay();
      cy.get("#TF_TRANSACTION_ID")
        .type("SqqO862844819186820")
        .should("be.visible");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains("Data Not Found").should("be.visible");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS04_TC28_Search by Biller ID data not found", () => {
      goToSubMenuTransactionPromptPay();
      cy.get("#TF_BILLER_ID").type("000754700001716").should("be.visible");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains("Data Not Found").should("be.visible");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS04_TC29_Search by Prefix No data not found", () => {
      goToSubMenuTransactionPromptPay();
      cy.get("#TF_PREFIX_NO").type("Z123").should("be.visible");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains("Data Not Found").should("be.visible");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS04_TC30_Search by MID data not found", () => {
      goToSubMenuTransactionPromptPay();
      cy.get("#TF_MID").type("123456789011234").should("be.visible");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains("Data Not Found").should("be.visible");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS04_TC31_Search by TID data not found", () => {
      goToSubMenuTransactionPromptPay();
      cy.get("#TF_TID").type("1232233").should("be.visible");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains("Data Not Found").should("be.visible");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS04_TC32_Search by Company ID data not found", () => {
      goToSubMenuTransactionPromptPay();
      cy.get("#TF_COM_REF_ID")
        .type("35eb20e3-122s-9999-b99d-de5715a64fb5	")
        .should("be.visible");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains("Data Not Found").should("be.visible");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS04_TC33_Search by Date data not found", () => {
      goToSubMenuTransactionPromptPay();
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
    it("TS04_TC34_Search by Status and Date data not found", () => {
      goToSubMenuTransactionPromptPay();
      cy.get("#TF_DATERANGEPICKER_START")
        .type(startDateNotFound)
        .should("be.visible");
      cy.get("#TF_DATERANGEPICKER_END")
        .type(endDateNotFound)
        .should("be.visible");
      cy.get("#DD_STATUS").click();
      cy.wait(1000);
      cy.get("#DD_STATUS_2").click();
      cy.wait(1000);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains("Data Not Found").should("be.visible");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS04_TC35_Search by invalid Date", () => {
      goToSubMenuTransactionPromptPay();
      cy.get("#TF_DATERANGEPICKER_START").type("111220").should("be.visible");
      cy.get("#TF_DATERANGEPICKER_END").type("111220").should("be.visible");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains("Data Not Found").should("be.visible");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS04_TC36_Search by Transaction ID and Date", () => {
      goToSubMenuTransactionPromptPay();
      cy.get("#TF_TRANSACTION_ID").type(tranIDQRPP).should("be.visible");
      cy.get("#TF_DATERANGEPICKER_START")
        .type(startHaveData)
        .should("be.visible");
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData).should("be.visible");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains(tranIDQRPP).should("be.visible");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS04_TC37_Search by Biller ID Date", () => {
      goToSubMenuTransactionPromptPay();
      cy.get("#TF_BILLER_ID").type(billerIDQRPP).should("be.visible");
      cy.get("#TF_DATERANGEPICKER_START")
        .type(startHaveData)
        .should("be.visible");
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData).should("be.visible");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains(billerIDQRPP).should("be.visible");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS04_TC38_Search by Prefix No Date", () => {
      goToSubMenuTransactionPromptPay();
      cy.get("#TF_PREFIX_NO").type(preFixNoQRPP).should("be.visible");
      cy.get("#TF_DATERANGEPICKER_START")
        .type(startHaveData)
        .should("be.visible");
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData).should("be.visible");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#IB_TABLE_MENU_undefined").click();
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#MENU_BUTTON_DETAIL").click();
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(
        ':nth-child(5) > [style="margin-top: 30px; background-color: white; box-shadow: rgb(196, 196, 196) 3px 3px 3px; border-radius: 10px; max-width: 1000px;"] > .MuiPaper-root > #panel1a-header',
      ).click();
      cy.contains(preFixNoQRPP).should("be.visible");
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS04_TC39_Search by MID and Date", () => {
      goToSubMenuTransactionPromptPay();
      cy.get("#TF_MID").type(midQRPP).should("be.visible");
      cy.get("#TF_DATERANGEPICKER_START")
        .type(startHaveData)
        .should("be.visible");
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData).should("be.visible");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains(midQRPP).should("be.visible");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS04_TC40_Search by TID and Date", () => {
      goToSubMenuTransactionPromptPay();
      cy.get("#TF_TID").type(tidQRPP).should("be.visible");
      cy.get("#TF_DATERANGEPICKER_START")
        .type(startHaveData)
        .should("be.visible");
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData).should("be.visible");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains(tidQRPP).should("be.visible");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS04_TC41_Search by Company ID and Date", () => {
      goToSubMenuTransactionPromptPay();
      cy.get("#TF_COM_REF_ID").type(companyIDQRPP).should("be.visible");
      cy.get("#TF_DATERANGEPICKER_START")
        .type(startHaveData)
        .should("be.visible");
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData).should("be.visible");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#IB_TABLE_MENU_undefined").click();
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#MENU_BUTTON_DETAIL").click();
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(
        ':nth-child(5) > [style="margin-top: 30px; background-color: white; box-shadow: rgb(196, 196, 196) 3px 3px 3px; border-radius: 10px; max-width: 1000px;"] > .MuiPaper-root > #panel1a-header',
      ).click();
      cy.contains(companyIDQRPP).should("be.visible");
      cy.takeScreenshotSimple(5, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS04_TC42_Search by Date", () => {
      goToSubMenuTransactionPromptPay();
      cy.get("#TF_DATERANGEPICKER_START")
        .type(startHaveData)
        .should("be.visible");
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData).should("be.visible");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS04_TC43_Search by Status and Date", () => {
      goToSubMenuTransactionPromptPay();
      cy.get("#TF_DATERANGEPICKER_START")
        .type(startHaveData)
        .should("be.visible");
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData).should("be.visible");
      cy.get("#DD_STATUS").click();
      cy.wait(1000);
      cy.get("#DD_STATUS_2").click();
      cy.wait(1000);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.get("#IB_TABLE_MENU_undefined").click();
      cy.get("#MENU_BUTTON_DETAIL").click();
      cy.contains("Success").should("be.visible");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
  });

  context("5 Transaction QR Pormptpay Detail", () => {
    it("TS04_TC44-TC46_View Details (QR Promptpay) page", () => {
      goToSubMenuTransactionPromptPay();
      cy.get("#TF_DATERANGEPICKER_START")
        .type(startHaveData)
        .should("be.visible");
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData).should("be.visible");
      cy.get("#BT_SEARCH").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#IB_TABLE_MENU_undefined").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#MENU_BUTTON_DETAIL").click();
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(
        ':nth-child(4) > [style="margin-top: 30px; background-color: white; box-shadow: rgb(196, 196, 196) 3px 3px 3px; border-radius: 10px; max-width: 1000px;"] > .MuiPaper-root > #panel1a-header',
      ).click();
      cy.get(
        ':nth-child(5) > [style="margin-top: 30px; background-color: white; box-shadow: rgb(196, 196, 196) 3px 3px 3px; border-radius: 10px; max-width: 1000px;"] > .MuiPaper-root > #panel1a-header',
      ).click();
      cy.get(
        ':nth-child(6) > [style="margin-top: 30px; background-color: white; box-shadow: rgb(196, 196, 196) 3px 3px 3px; border-radius: 10px; max-width: 1000px;"] > .MuiPaper-root > #panel1a-header',
      ).click();
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_BACK").click();
    });
  });

  context("6 Export Transaction Report", () => {
    it("TS04_TC47_Click Export Excel in Transaction QR Promptpay page", () => {
      goToSubMenuTransactionPromptPay();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_EXPORT_EXCEL").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("Confirm Export Report").should("be.visible");
      cy.contains("Do you want to request Request process?").should(
        "be.visible",
      );
      cy.get("#BT_RIGHT").click();
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_EXPORT_EXCEL").click();
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("Confirm Export Report").should("be.visible");
      cy.contains("Do you want to request Request process?").should(
        "be.visible",
      );
      cy.get("#BT_LEFT").click();
      cy.takeScreenshotSimple(5, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("System is currently in progress.").should("be.visible");
      cy.contains("Can check the status and download the report from").should(
        "be.visible",
      );
      cy.intercept("POST", "/report/api/report/request").as(
        "waitReportRequestStatusPage",
      );
      cy.get("#BT_LEFT").click();
      cy.wait("@waitReportRequestStatusPage");
      cy.takeScreenshotSimple(6, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.reloadUntilVisibleWithTimeout(
        ":nth-child(2) > :nth-child(6) > #BT_DOWNLOAD_REPORT",
        60000,
        3000,
      ); // รอสูงสุด 1 นาที
      cy.renameNewfile("xlsx"); // ไม่ต้องระบุชื่อไฟล์, มันจะหาตัวล่าสุดให้เอง
      cy.get("@filename").then((newFileName) => {
        cy.log("ชื่อไฟล์ใหม่ล่าสุด:", newFileName);
        cy.validateFile(newFileName, 1);
      });
      cy.takeScreenshotSimple(7, Cypress.ScreenshotCaptureEnum.RUNNER);
    });
    it("TS04_TC48_Search by Transaction ID and Date then Click Export Excel", () => {
      goToSubMenuTransactionPromptPay();
      cy.get("#TF_TRANSACTION_ID").type(tranIDQRPP).should("be.visible");
      cy.get("#TF_DATERANGEPICKER_START")
        .type(startHaveData)
        .should("be.visible");
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData).should("be.visible");
      cy.get("#BT_SEARCH").click();
      cy.wait(3000);
      cy.get("#BT_EXPORT_EXCEL").click();
      cy.wait(3000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("Confirm Export Report").should("be.visible");
      cy.contains("Do you want to request Request process?").should(
        "be.visible",
      );
      cy.get("#BT_RIGHT").click();
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_EXPORT_EXCEL").click();
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("Confirm Export Report").should("be.visible");
      cy.contains("Do you want to request Request process?").should(
        "be.visible",
      );
      cy.get("#BT_LEFT").click();
      cy.takeScreenshotSimple(5, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("System is currently in progress.").should("be.visible");
      cy.contains("Can check the status and download the report from").should(
        "be.visible",
      );
      cy.intercept("POST", "/report/api/report/request").as(
        "waitReportRequestStatusPage",
      );
      cy.get("#BT_LEFT").click();
      cy.wait("@waitReportRequestStatusPage");
      cy.takeScreenshotSimple(6, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.reloadUntilVisibleWithTimeout(
        ":nth-child(2) > :nth-child(6) > #BT_DOWNLOAD_REPORT",
        60000,
        3000,
      ); // รอสูงสุด 1 นาที
      cy.renameNewfile("xlsx"); // ไม่ต้องระบุชื่อไฟล์, มันจะหาตัวล่าสุดให้เอง
      cy.get("@filename").then((newFileName) => {
        cy.log("ชื่อไฟล์ใหม่ล่าสุด:", newFileName);
        cy.validateFile(newFileName, 1);
      });
      cy.takeScreenshotSimple(7, Cypress.ScreenshotCaptureEnum.RUNNER);
    });
    it("TS04_TC49_Search by Biller ID. and Date then Click Export Excel", () => {
      goToSubMenuTransactionPromptPay();
      cy.get("#TF_BILLER_ID").type(billerIDQRPP).should("be.visible");
      cy.get("#TF_DATERANGEPICKER_START")
        .type(startHaveData)
        .should("be.visible");
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData).should("be.visible");
      cy.get("#BT_SEARCH").click();
      cy.contains(billerIDQRPP).should("be.visible");
      cy.wait(3000);
      cy.get("#BT_EXPORT_EXCEL").click();
      cy.wait(3000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("Confirm Export Report").should("be.visible");
      cy.contains("Do you want to request Request process?").should(
        "be.visible",
      );
      cy.get("#BT_RIGHT").click();
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_EXPORT_EXCEL").click();
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("Confirm Export Report").should("be.visible");
      cy.contains("Do you want to request Request process?").should(
        "be.visible",
      );
      cy.get("#BT_LEFT").click();
      cy.takeScreenshotSimple(5, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("System is currently in progress.").should("be.visible");
      cy.contains("Can check the status and download the report from").should(
        "be.visible",
      );
      cy.intercept("POST", "/report/api/report/request").as(
        "waitReportRequestStatusPage",
      );
      cy.get("#BT_LEFT").click();
      cy.wait("@waitReportRequestStatusPage");
      cy.takeScreenshotSimple(6, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.reloadUntilVisibleWithTimeout(
        ":nth-child(2) > :nth-child(6) > #BT_DOWNLOAD_REPORT",
        60000,
        3000,
      ); // รอสูงสุด 1 นาที
      cy.renameNewfile("xlsx"); // ไม่ต้องระบุชื่อไฟล์, มันจะหาตัวล่าสุดให้เอง
      cy.get("@filename").then((newFileName) => {
        cy.log("ชื่อไฟล์ใหม่ล่าสุด:", newFileName);
        cy.validateFile(newFileName, 1);
      });
      cy.takeScreenshotSimple(7, Cypress.ScreenshotCaptureEnum.RUNNER);
    });
    it("TS04_TC50_Search by Prefix NO. and Date then Click Export Excel", () => {
      goToSubMenuTransactionPromptPay();
      cy.get("#TF_PREFIX_NO").type(preFixNoQRPP).should("be.visible");
      cy.get("#TF_DATERANGEPICKER_START")
        .type(startHaveData)
        .should("be.visible");
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData).should("be.visible");
      cy.get("#BT_SEARCH").click();
      cy.get("#BT_EXPORT_EXCEL").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("Confirm Export Report").should("be.visible");
      cy.contains("Do you want to request Request process?").should(
        "be.visible",
      );
      cy.get("#BT_RIGHT").click();
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_EXPORT_EXCEL").click();
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("Confirm Export Report").should("be.visible");
      cy.contains("Do you want to request Request process?").should(
        "be.visible",
      );
      cy.get("#BT_LEFT").click();
      cy.takeScreenshotSimple(5, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("System is currently in progress.").should("be.visible");
      cy.contains("Can check the status and download the report from").should(
        "be.visible",
      );
      cy.intercept("POST", "/report/api/report/request").as(
        "waitReportRequestStatusPage",
      );
      cy.get("#BT_LEFT").click();
      cy.wait("@waitReportRequestStatusPage");
      cy.takeScreenshotSimple(6, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.reloadUntilVisibleWithTimeout(
        ":nth-child(2) > :nth-child(6) > #BT_DOWNLOAD_REPORT",
        60000,
        3000,
      ); // รอสูงสุด 1 นาที
      cy.renameNewfile("xlsx"); // ไม่ต้องระบุชื่อไฟล์, มันจะหาตัวล่าสุดให้เอง
      cy.get("@filename").then((newFileName) => {
        cy.log("ชื่อไฟล์ใหม่ล่าสุด:", newFileName);
        cy.validateFile(newFileName, 1);
      });
      cy.takeScreenshotSimple(7, Cypress.ScreenshotCaptureEnum.RUNNER);
    });
    it("TS04_TC51_Search by MID and Date then Click Export Excel", () => {
      goToSubMenuTransactionPromptPay();
      cy.get("#TF_MID").type(midQRPP).should("be.visible");
      cy.get("#TF_DATERANGEPICKER_START")
        .type(startHaveData)
        .should("be.visible");
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData).should("be.visible");
      cy.get("#BT_SEARCH").click();
      cy.contains(midQRPP).should("be.visible");
      cy.get("#BT_EXPORT_EXCEL").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("Confirm Export Report").should("be.visible");
      cy.contains("Do you want to request Request process?").should(
        "be.visible",
      );
      cy.get("#BT_RIGHT").click();
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_EXPORT_EXCEL").click();
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("Confirm Export Report").should("be.visible");
      cy.contains("Do you want to request Request process?").should(
        "be.visible",
      );
      cy.get("#BT_LEFT").click();
      cy.takeScreenshotSimple(5, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("System is currently in progress.").should("be.visible");
      cy.contains("Can check the status and download the report from").should(
        "be.visible",
      );
      cy.intercept("POST", "/report/api/report/request").as(
        "waitReportRequestStatusPage",
      );
      cy.get("#BT_LEFT").click();
      cy.wait("@waitReportRequestStatusPage");
      cy.takeScreenshotSimple(6, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.reloadUntilVisibleWithTimeout(
        ":nth-child(2) > :nth-child(6) > #BT_DOWNLOAD_REPORT",
        60000,
        3000,
      ); // รอสูงสุด 1 นาที
      cy.renameNewfile("xlsx"); // ไม่ต้องระบุชื่อไฟล์, มันจะหาตัวล่าสุดให้เอง
      cy.get("@filename").then((newFileName) => {
        cy.log("ชื่อไฟล์ใหม่ล่าสุด:", newFileName);
        cy.validateFile(newFileName, 1);
      });
      cy.takeScreenshotSimple(7, Cypress.ScreenshotCaptureEnum.RUNNER);
    });
    it("TS04_TC52_Search by TID and Date then Click Export Excel", () => {
      goToSubMenuTransactionPromptPay();
      cy.get("#TF_TID").type(tidQRPP).should("be.visible");
      cy.get("#TF_DATERANGEPICKER_START")
        .type(startHaveData)
        .should("be.visible");
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData).should("be.visible");
      cy.get("#BT_SEARCH").click();
      cy.contains(tidQRPP).should("be.visible");
      cy.get("#BT_EXPORT_EXCEL").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("Confirm Export Report");
      cy.contains("Do you want to request Request process?");
      cy.get("#BT_RIGHT").click();
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_EXPORT_EXCEL").click();
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("Confirm Export Report");
      cy.contains("Do you want to request Request process?");
      cy.get("#BT_LEFT").click();
      cy.takeScreenshotSimple(5, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("System is currently in progress.");
      cy.contains("Can check the status and download the report from");
      cy.intercept("POST", "/report/api/report/request").as(
        "waitReportRequestStatusPage",
      );
      cy.get("#BT_LEFT").click();
      cy.wait("@waitReportRequestStatusPage");
      cy.takeScreenshotSimple(6, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.reloadUntilVisibleWithTimeout(
        ":nth-child(2) > :nth-child(6) > #BT_DOWNLOAD_REPORT",
        60000,
        3000,
      ); // รอสูงสุด 1 นาที
      cy.renameNewfile("xlsx"); // ไม่ต้องระบุชื่อไฟล์, มันจะหาตัวล่าสุดให้เอง
      cy.get("@filename").then((newFileName) => {
        cy.log("ชื่อไฟล์ใหม่ล่าสุด:", newFileName);
        cy.validateFile(newFileName, 1);
      });
      cy.takeScreenshotSimple(7, Cypress.ScreenshotCaptureEnum.RUNNER);
    });
    it("TS04_TC53_Search by Company ID and Date then Click Export Excel", () => {
      goToSubMenuTransactionPromptPay();
      cy.get("#TF_COM_REF_ID").type(companyIDQRPP).should("be.visible");
      cy.get("#TF_DATERANGEPICKER_START")
        .type(startHaveData)
        .should("be.visible");
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData).should("be.visible");
      cy.get("#BT_SEARCH").click();
      cy.get("#BT_EXPORT_EXCEL").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("Confirm Export Report").should("be.visible");
      cy.contains("Do you want to request Request process?").should(
        "be.visible",
      );
      cy.get("#BT_RIGHT").click();
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_EXPORT_EXCEL").click();
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("Confirm Export Report").should("be.visible");
      cy.contains("Do you want to request Request process?").should(
        "be.visible",
      );
      cy.get("#BT_LEFT").click();
      cy.takeScreenshotSimple(5, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("System is currently in progress.").should("be.visible");
      cy.contains("Can check the status and download the report from").should(
        "be.visible",
      );
      cy.intercept("POST", "/report/api/report/request").as(
        "waitReportRequestStatusPage",
      );
      cy.get("#BT_LEFT").click();
      cy.wait("@waitReportRequestStatusPage");
      cy.takeScreenshotSimple(6, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.reloadUntilVisibleWithTimeout(
        ":nth-child(2) > :nth-child(6) > #BT_DOWNLOAD_REPORT",
        60000,
        3000,
      ); // รอสูงสุด 1 นาที
      cy.renameNewfile("xlsx"); // ไม่ต้องระบุชื่อไฟล์, มันจะหาตัวล่าสุดให้เอง
      cy.get("@filename").then((newFileName) => {
        cy.log("ชื่อไฟล์ใหม่ล่าสุด:", newFileName);
        cy.validateFile(newFileName, 1);
      });
      cy.takeScreenshotSimple(7, Cypress.ScreenshotCaptureEnum.RUNNER);
    });
    it("TS04_TC54_Search by Date then Click Export Excel", () => {
      goToSubMenuTransactionPromptPay();
      cy.get("#TF_DATERANGEPICKER_START")
        .type(startHaveData)
        .should("be.visible");
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData).should("be.visible");
      cy.get("#BT_SEARCH").click();
      cy.contains("Success").should("be.visible");
      cy.get("#BT_EXPORT_EXCEL").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("Confirm Export Report").should("be.visible");
      cy.contains("Do you want to request Request process?").should(
        "be.visible",
      );
      cy.get("#BT_RIGHT").click();
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_EXPORT_EXCEL").click();
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("Confirm Export Report").should("be.visible");
      cy.contains("Do you want to request Request process?").should(
        "be.visible",
      );
      cy.get("#BT_LEFT").click();
      cy.takeScreenshotSimple(5, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("System is currently in progress.").should("be.visible");
      cy.contains("Can check the status and download the report from").should(
        "be.visible",
      );
      cy.intercept("POST", "/report/api/report/request").as(
        "waitReportRequestStatusPage",
      );
      cy.get("#BT_LEFT").click();
      cy.wait("@waitReportRequestStatusPage");
      cy.takeScreenshotSimple(6, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.reloadUntilVisibleWithTimeout(
        ":nth-child(2) > :nth-child(6) > #BT_DOWNLOAD_REPORT",
        60000,
        3000,
      ); // รอสูงสุด 1 นาที
      cy.renameNewfile("xlsx"); // ไม่ต้องระบุชื่อไฟล์, มันจะหาตัวล่าสุดให้เอง
      cy.get("@filename").then((newFileName) => {
        cy.log("ชื่อไฟล์ใหม่ล่าสุด:", newFileName);
        cy.validateFile(newFileName, 1);
      });
      cy.takeScreenshotSimple(7, Cypress.ScreenshotCaptureEnum.RUNNER);
    });
    it("TTS04_TC55_Search by Status and Date then Click Export Excel", () => {
      goToSubMenuTransactionPromptPay();
      cy.get("#TF_DATERANGEPICKER_START")
        .type(startHaveData)
        .should("be.visible");
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData).should("be.visible");
      cy.get("#DD_STATUS").click();
      cy.wait(1000);
      cy.get("#DD_STATUS_2").click();
      cy.wait(1000);
      cy.get("#BT_SEARCH").click();
      cy.contains("Success").should("be.visible");
      cy.get("#BT_EXPORT_EXCEL").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("Confirm Export Report").should("be.visible");
      cy.contains("Do you want to request Request process?").should(
        "be.visible",
      );
      cy.get("#BT_RIGHT").click();
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_EXPORT_EXCEL").click();
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("Confirm Export Report").should("be.visible");
      cy.contains("Do you want to request Request process?").should(
        "be.visible",
      );
      cy.get("#BT_LEFT").click();
      cy.takeScreenshotSimple(5, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("System is currently in progress.").should("be.visible");
      cy.contains("Can check the status and download the report from").should(
        "be.visible",
      );
      cy.intercept("POST", "/report/api/report/request").as(
        "waitReportRequestStatusPage",
      );
      cy.get("#BT_LEFT").click();
      cy.wait("@waitReportRequestStatusPage");
      cy.takeScreenshotSimple(6, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.reloadUntilVisibleWithTimeout(
        ":nth-child(2) > :nth-child(6) > #BT_DOWNLOAD_REPORT",
        60000,
        3000,
      ); // รอสูงสุด 1 นาที
      cy.renameNewfile("xlsx"); // ไม่ต้องระบุชื่อไฟล์, มันจะหาตัวล่าสุดให้เอง
      cy.get("@filename").then((newFileName) => {
        cy.log("ชื่อไฟล์ใหม่ล่าสุด:", newFileName);
        cy.validateFile(newFileName, 1);
      });
      cy.takeScreenshotSimple(7, Cypress.ScreenshotCaptureEnum.RUNNER);
    });
  });
  //#endregion

  //#region Transaction QR Credit Card
  context("7 Search QR Credit Caed", () => {
    it("TS04_TC56 Click QR Credit Card", () => {
      goToSubMenuTransactionQRCreditCard();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.wait(3000);
    });
    it("TS04_TC57_Search by Transaction ID data not found", () => {
      goToSubMenuTransactionQRCreditCard();
      cy.get("#TF_TRANSACTION_ID").type("SqqO862844819186820");
      cy.wait(1000);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.wait(1000);
      cy.contains("Data Not Found");
      cy.wait(3000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS04_TC58_Search by Biller ID data not found", () => {
      goToSubMenuTransactionQRCreditCard();
      cy.get("#TF_BILLER_ID").type("000754700001716");
      cy.wait(1000);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.wait(1000);
      cy.contains("Data Not Found");
      cy.wait(3000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS04_TC59_Search by Prefix No data not found", () => {
      goToSubMenuTransactionQRCreditCard();
      cy.get("#TF_PREFIX_NO").type("Z123");
      cy.wait(1000);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.wait(1000);
      cy.contains("Data Not Found");
      cy.wait(3000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS04_TC60_Search by MID data not found", () => {
      goToSubMenuTransactionQRCreditCard();
      cy.get("#TF_MID").type("123456789011234");
      cy.wait(1000);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.wait(1000);
      cy.contains("Data Not Found");
      cy.wait(3000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS04_TC61_Search by TID data not found", () => {
      goToSubMenuTransactionQRCreditCard();
      cy.get("#TF_TID").type("1232233");
      cy.wait(1000);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.wait(1000);
      cy.contains("Data Not Found");
      cy.wait(3000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS04_TC62_Search by Company ID data not found", () => {
      goToSubMenuTransactionQRCreditCard();
      cy.get("#TF_COM_REF_ID").type("35eb20e3-122s-9999-b99d-de5715a64fb5	");
      cy.wait(1000);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.wait(1000);
      cy.contains("Data Not Found");
      cy.wait(3000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS04_TC63_Search by Date data not found", () => {
      goToSubMenuTransactionQRCreditCard();
      cy.get("#TF_DATERANGEPICKER_START").type(startDateNotFound);
      cy.get("#TF_DATERANGEPICKER_END").type(endDateNotFound);
      cy.wait(1000);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.wait(1000);
      cy.contains("Data Not Found");
      cy.wait(3000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS04_TC64_Search by Status and Date data not found", () => {
      goToSubMenuTransactionQRCreditCard();
      cy.get("#TF_DATERANGEPICKER_START").type(startDateNotFound);
      cy.get("#TF_DATERANGEPICKER_END").type(endDateNotFound);
      cy.wait(1000);
      cy.get("#DD_STATUS").click();
      cy.wait(1000);
      cy.get('[data-value="REJECTED"]').click();
      cy.wait(1000);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.wait(1000);
      cy.contains("Data Not Found");
      cy.wait(3000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
    });
    it("TS04_TC65_Search by Transaction ID and Date", () => {
      goToSubMenuTransactionQRCreditCard();
      cy.wait(2000);
      cy.get("#TF_TRANSACTION_ID").type(tranIDQRCS);
      cy.wait(1000);
      cy.get("#TF_DATERANGEPICKER_START").type(startHaveData);
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData);
      cy.wait(1000);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains(tranIDQRCS);
      cy.wait(3000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS04_TC66_Search by Biller ID Date", () => {
      goToSubMenuTransactionQRCreditCard();
      cy.wait(2000);
      cy.get("#TF_BILLER_ID").type(billerIDQRCS);
      cy.wait(2000);
      cy.get("#TF_DATERANGEPICKER_START").type(startHaveData);
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData);
      cy.wait(1000);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains(billerIDQRCS);
      cy.wait(3000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS04_TC67_Search by Prefix No Date", () => {
      goToSubMenuTransactionQRCreditCard();
      cy.get("#TF_PREFIX_NO").type(preFixNoQRCS);
      cy.wait(2000);
      cy.get("#TF_DATERANGEPICKER_START").type(startHaveData);
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData);
      cy.wait(1000);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#IB_TABLE_MENU_undefined").click();
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#MENU_BUTTON_DETAIL").click();
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.wait(2000);
      cy.get(
        ':nth-child(5) > [style="margin-top: 30px; background-color: white; box-shadow: rgb(196, 196, 196) 3px 3px 3px; border-radius: 10px; max-width: 1000px;"] > .MuiPaper-root > #panel1a-header',
      ).click();
      cy.contains(preFixNoQRCS);
      cy.wait(3000);
      cy.takeScreenshotSimple(5, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS04_TC68_Search by MID and Date", () => {
      goToSubMenuTransactionQRCreditCard();
      cy.get("#TF_MID").type(midQRCS);
      cy.wait(2000);
      cy.get("#TF_DATERANGEPICKER_START").type(startHaveData);
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData);
      cy.wait(1000);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains(midQRCS);
      cy.wait(3000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS04_TC69_Search by TID and Date", () => {
      goToSubMenuTransactionQRCreditCard();
      cy.get("#TF_TID").type(tidQRCS);
      cy.wait(2000);
      cy.get("#TF_DATERANGEPICKER_START").type(startHaveData);
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData);
      cy.wait(1000);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.contains(tidQRCS);
      cy.wait(3000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS04_TC70_Search by Company ID and Date", () => {
      goToSubMenuTransactionQRCreditCard();
      cy.get("#TF_COM_REF_ID").type(companyIDQRCS);
      cy.wait(5000);
      cy.get("#TF_DATERANGEPICKER_START").type(startHaveData);
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData);
      cy.wait(1000);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#IB_TABLE_MENU_undefined").click();
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#MENU_BUTTON_DETAIL").click();
      cy.wait(2000);
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(
        ':nth-child(5) > [style="margin-top: 30px; background-color: white; box-shadow: rgb(196, 196, 196) 3px 3px 3px; border-radius: 10px; max-width: 1000px;"] > .MuiPaper-root > #panel1a-header',
      ).click();
      cy.contains(companyIDQRCS);
      cy.wait(3000);
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS04_TC71_Search by Date", () => {
      goToSubMenuTransactionQRCreditCard();
      cy.get("#TF_DATERANGEPICKER_START").type(startHaveData);
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData);
      cy.wait(1000);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.wait(3000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS04_TC72_Search by Status and Date", () => {
      goToSubMenuTransactionQRCreditCard();
      cy.wait(2000);
      cy.get("#TF_DATERANGEPICKER_START").type(startHaveData);
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData);
      cy.wait(1000);
      cy.get("#DD_STATUS").click();
      cy.wait(1000);
      cy.get('[data-value="APPROVED"]').click();
      cy.wait(1000);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_SEARCH").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#IB_TABLE_MENU_undefined").click();
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#MENU_BUTTON_DETAIL").click();
      cy.wait(2000);
      cy.contains("Success");
      cy.wait(3000);
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
  });

  context("8 Transaction QRCS Detail", () => {
    it("TS04_TC73-TC75_View Details (QR Promptpay) page", () => {
      goToSubMenuTransactionQRCreditCard();
      cy.get("#TF_DATERANGEPICKER_START").type(startHaveData);
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData);
      cy.get("#BT_SEARCH").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(
        ":nth-child(4) > :nth-child(8) > #IB_TABLE_MENU_undefined",
      ).click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#MENU_BUTTON_DETAIL").click();
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(
        ':nth-child(4) > [style="margin-top: 30px; background-color: white; box-shadow: rgb(196, 196, 196) 3px 3px 3px; border-radius: 10px; max-width: 1000px;"] > .MuiPaper-root > #panel1a-header',
      ).click();
      cy.get(
        ':nth-child(5) > [style="margin-top: 30px; background-color: white; box-shadow: rgb(196, 196, 196) 3px 3px 3px; border-radius: 10px; max-width: 1000px;"] > .MuiPaper-root > #panel1a-header',
      ).click();
      cy.get(
        ':nth-child(6) > [style="margin-top: 30px; background-color: white; box-shadow: rgb(196, 196, 196) 3px 3px 3px; border-radius: 10px; max-width: 1000px;"] > .MuiPaper-root > #panel1a-header',
      ).click();
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_BACK").click();
    });
  });

  context("9 Export Transaction Report", () => {
    it("TS04_TC76_Click Export Excel in Transaction QRCS page", () => {
      goToSubMenuTransactionQRCreditCard();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_EXPORT_EXCEL").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("Confirm Export Report");
      cy.contains("Do you want to request Request process?");
      cy.get("#BT_RIGHT").click();
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_EXPORT_EXCEL").click();
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("Confirm Export Report");
      cy.contains("Do you want to request Request process?");
      cy.get("#BT_LEFT").click();
      cy.takeScreenshotSimple(5, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("System is currently in progress.");
      cy.contains("Can check the status and download the report from");
      cy.intercept("POST", "/report/api/report/request").as(
        "waitReportRequestStatusPage",
      );
      cy.get("#BT_LEFT").click();
      cy.wait("@waitReportRequestStatusPage");
      cy.reloadUntilVisibleWithTimeout(
        ":nth-child(2) > :nth-child(6) > #BT_DOWNLOAD_REPORT",
        60000,
        3000,
      ); // รอสูงสุด 1 นาที
      cy.takeScreenshotSimple(6, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(":nth-child(1) > :nth-child(6) > #BT_DOWNLOAD_REPORT").click();
      cy.renameNewfile("xlsx"); // ไม่ต้องระบุชื่อไฟล์, มันจะหาตัวล่าสุดให้เอง
      cy.get("@filename").then((newFileName) => {
        cy.log("ชื่อไฟล์ใหม่ล่าสุด:", newFileName);
        cy.validateFile(newFileName, 1);
      });
      cy.takeScreenshotSimple(7, Cypress.ScreenshotCaptureEnum.RUNNER);
    });
    it("TS04_TC77_Search by Transaction ID and Date then Click Export Excel", () => {
      goToSubMenuTransactionQRCreditCard();
      cy.wait(2000);
      cy.get("#TF_TRANSACTION_ID").type(tranIDQRCS);
      cy.wait(1000);
      cy.get("#TF_DATERANGEPICKER_START").type(startHaveData);
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData);
      cy.wait(1000);
      cy.get("#BT_SEARCH").click();
      cy.wait(3000);
      cy.contains(tranIDQRCS);
      cy.get("#BT_EXPORT_EXCEL").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("Confirm Export Report");
      cy.contains("Do you want to request Request process?");
      cy.get("#BT_RIGHT").click();
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_EXPORT_EXCEL").click();
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("Confirm Export Report");
      cy.contains("Do you want to request Request process?");
      cy.get("#BT_LEFT").click();
      cy.takeScreenshotSimple(5, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("System is currently in progress.");
      cy.contains("Can check the status and download the report from");
      cy.intercept("POST", "/report/api/report/request").as(
        "waitReportRequestStatusPage",
      );
      cy.get("#BT_LEFT").click();
      cy.wait("@waitReportRequestStatusPage");
      cy.reloadUntilVisibleWithTimeout(
        ":nth-child(2) > :nth-child(6) > #BT_DOWNLOAD_REPORT",
        60000,
        3000,
      ); // รอสูงสุด 1 นาที
      cy.takeScreenshotSimple(6, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(":nth-child(1) > :nth-child(6) > #BT_DOWNLOAD_REPORT").click();
      cy.renameNewfile("xlsx"); // ไม่ต้องระบุชื่อไฟล์, มันจะหาตัวล่าสุดให้เอง
      cy.get("@filename").then((newFileName) => {
        cy.log("ชื่อไฟล์ใหม่ล่าสุด:", newFileName);
        cy.validateFile(newFileName, 1);
      });
      cy.takeScreenshotSimple(7, Cypress.ScreenshotCaptureEnum.RUNNER);
    });
    it("TS04_TC78_Search by Biller ID. and Date then Click Export Excel", () => {
      goToSubMenuTransactionQRCreditCard();
      cy.get("#TF_BILLER_ID").type(billerIDQRCS);
      cy.get("#TF_DATERANGEPICKER_START").type(startHaveData);
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData);
      cy.wait(1000);
      cy.get("#BT_SEARCH").click();
      cy.wait(3000);
      cy.contains(billerIDQRCS);
      cy.get("#BT_EXPORT_EXCEL").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("Confirm Export Report");
      cy.contains("Do you want to request Request process?");
      cy.get("#BT_RIGHT").click();
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_EXPORT_EXCEL").click();
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("Confirm Export Report");
      cy.contains("Do you want to request Request process?");
      cy.get("#BT_LEFT").click();
      cy.takeScreenshotSimple(5, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("System is currently in progress.");
      cy.contains("Can check the status and download the report from");
      cy.intercept("POST", "/report/api/report/request").as(
        "waitReportRequestStatusPage",
      );
      cy.get("#BT_LEFT").click();
      cy.wait("@waitReportRequestStatusPage");
      cy.reloadUntilVisibleWithTimeout(
        ":nth-child(2) > :nth-child(6) > #BT_DOWNLOAD_REPORT",
        60000,
        3000,
      ); // รอสูงสุด 1 นาที
      cy.takeScreenshotSimple(6, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(":nth-child(2) > :nth-child(6) > #BT_DOWNLOAD_REPORT").click();
      cy.renameNewfile("xlsx"); // ไม่ต้องระบุชื่อไฟล์, มันจะหาตัวล่าสุดให้เอง
      cy.get("@filename").then((newFileName) => {
        cy.log("ชื่อไฟล์ใหม่ล่าสุด:", newFileName);
        cy.validateFile(newFileName, 1);
      });
      cy.takeScreenshotSimple(7, Cypress.ScreenshotCaptureEnum.RUNNER);
    });
    it("TS04_TC79_Search by Prefix NO. and Date then Click Export Excel", () => {
      goToSubMenuTransactionQRCreditCard();
      cy.get("#TF_PREFIX_NO").type(preFixNoQRCS);
      cy.get("#TF_DATERANGEPICKER_START").type(startHaveData);
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData);
      cy.wait(1000);
      cy.get("#BT_SEARCH").click();
      cy.wait(3000);
      cy.get("#BT_EXPORT_EXCEL").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("Confirm Export Report");
      cy.contains("Do you want to request Request process?");
      cy.get("#BT_RIGHT").click();
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_EXPORT_EXCEL").click();
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("Confirm Export Report");
      cy.contains("Do you want to request Request process?");
      cy.get("#BT_LEFT").click();
      cy.takeScreenshotSimple(5, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("System is currently in progress.");
      cy.contains("Can check the status and download the report from");
      cy.intercept("POST", "/report/api/report/request").as(
        "waitReportRequestStatusPage",
      );
      cy.get("#BT_LEFT").click();
      cy.wait("@waitReportRequestStatusPage");
      cy.reloadUntilVisibleWithTimeout(
        ":nth-child(2) > :nth-child(6) > #BT_DOWNLOAD_REPORT",
        60000,
        3000,
      ); // รอสูงสุด 1 นาที
      cy.takeScreenshotSimple(6, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(":nth-child(1) > :nth-child(6) > #BT_DOWNLOAD_REPORT").click();
      cy.renameNewfile("xlsx"); // ไม่ต้องระบุชื่อไฟล์, มันจะหาตัวล่าสุดให้เอง
      cy.get("@filename").then((newFileName) => {
        cy.log("ชื่อไฟล์ใหม่ล่าสุด:", newFileName);
        cy.validateFile(newFileName, 1);
      });
      cy.takeScreenshotSimple(7, Cypress.ScreenshotCaptureEnum.RUNNER);
    });
    it("TS04_TC80_Search by MID and Date then Click Export Excel", () => {
      goToSubMenuTransactionQRCreditCard();
      cy.get("#TF_MID").type(midQRCS);
      cy.get("#TF_DATERANGEPICKER_START").type(startHaveData);
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData);
      cy.wait(1000);
      cy.get("#BT_SEARCH").click();
      cy.wait(3000);
      cy.contains(midQRCS);
      cy.get("#BT_EXPORT_EXCEL").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("Confirm Export Report");
      cy.contains("Do you want to request Request process?");
      cy.get("#BT_RIGHT").click();
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_EXPORT_EXCEL").click();
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("Confirm Export Report");
      cy.contains("Do you want to request Request process?");
      cy.get("#BT_LEFT").click();
      cy.takeScreenshotSimple(5, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("System is currently in progress.");
      cy.contains("Can check the status and download the report from");
      cy.intercept("POST", "/report/api/report/request").as(
        "waitReportRequestStatusPage",
      );
      cy.get("#BT_LEFT").click();
      cy.wait("@waitReportRequestStatusPage");
      cy.reloadUntilVisibleWithTimeout(
        ":nth-child(2) > :nth-child(6) > #BT_DOWNLOAD_REPORT",
        60000,
        3000,
      ); // รอสูงสุด 1 นาที
      cy.takeScreenshotSimple(6, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(":nth-child(1) > :nth-child(6) > #BT_DOWNLOAD_REPORT").click();
      cy.renameNewfile("xlsx"); // ไม่ต้องระบุชื่อไฟล์, มันจะหาตัวล่าสุดให้เอง
      cy.get("@filename").then((newFileName) => {
        cy.log("ชื่อไฟล์ใหม่ล่าสุด:", newFileName);
        cy.validateFile(newFileName, 1);
      });
      cy.takeScreenshotSimple(7, Cypress.ScreenshotCaptureEnum.RUNNER);
    });
    it("TS04_TC81_Search by TID and Date then Click Export Excel", () => {
      goToSubMenuTransactionQRCreditCard();
      cy.get("#TF_TID").type(tidQRCS);
      cy.get("#TF_DATERANGEPICKER_START").type(startHaveData);
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData);
      cy.wait(1000);
      cy.get("#BT_SEARCH").click();
      cy.wait(3000);
      cy.contains(tidQRCS);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_EXPORT_EXCEL").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("Confirm Export Report");
      cy.contains("Do you want to request Request process?");
      cy.get("#BT_RIGHT").click();
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_EXPORT_EXCEL").click();
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("Confirm Export Report");
      cy.contains("Do you want to request Request process?");
      cy.get("#BT_LEFT").click();
      cy.takeScreenshotSimple(5, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("System is currently in progress.");
      cy.contains("Can check the status and download the report from");
      cy.intercept("POST", "/report/api/report/request").as(
        "waitReportRequestStatusPage",
      );
      cy.get("#BT_LEFT").click();
      cy.wait("@waitReportRequestStatusPage");
      cy.takeScreenshotSimple(6, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(":nth-child(1) > :nth-child(6) > #BT_DOWNLOAD_REPORT").click();
      cy.renameNewfile("xlsx"); // ไม่ต้องระบุชื่อไฟล์, มันจะหาตัวล่าสุดให้เอง
      cy.get("@filename").then((newFileName) => {
        cy.log("ชื่อไฟล์ใหม่ล่าสุด:", newFileName);
        cy.validateFile(newFileName, 1);
      });
      cy.takeScreenshotSimple(7, Cypress.ScreenshotCaptureEnum.RUNNER);
    });
    it("TS04_TC82_Search by Company ID and Date then Click Export Excel", () => {
      goToSubMenuTransactionQRCreditCard();
      cy.get("#TF_COM_REF_ID").type(companyIDQRCS);
      cy.get("#TF_DATERANGEPICKER_START").type(startHaveData);
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData);
      cy.wait(1000);
      cy.get("#BT_SEARCH").click();
      cy.wait(3000);
      cy.get("#BT_EXPORT_EXCEL").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("Confirm Export Report");
      cy.contains("Do you want to request Request process?");
      cy.get("#BT_RIGHT").click();
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_EXPORT_EXCEL").click();
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("Confirm Export Report");
      cy.contains("Do you want to request Request process?");
      cy.get("#BT_LEFT").click();
      cy.takeScreenshotSimple(5, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("System is currently in progress.");
      cy.contains("Can check the status and download the report from");
      cy.intercept("POST", "/report/api/report/request").as(
        "waitReportRequestStatusPage",
      );
      cy.get("#BT_LEFT").click();
      cy.wait("@waitReportRequestStatusPage");
      cy.reloadUntilVisibleWithTimeout(
        ":nth-child(2) > :nth-child(6) > #BT_DOWNLOAD_REPORT",
        60000,
        3000,
      ); // รอสูงสุด 1 นาที
      cy.takeScreenshotSimple(6, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(":nth-child(1) > :nth-child(6) > #BT_DOWNLOAD_REPORT").click();
      cy.renameNewfile("xlsx"); // ไม่ต้องระบุชื่อไฟล์, มันจะหาตัวล่าสุดให้เอง
      cy.get("@filename").then((newFileName) => {
        cy.log("ชื่อไฟล์ใหม่ล่าสุด:", newFileName);
        cy.validateFile(newFileName, 1);
      });
      cy.takeScreenshotSimple(7, Cypress.ScreenshotCaptureEnum.RUNNER);
    });
    it("TS04_TC83_Search by Date then Click Export Excel", () => {
      goToSubMenuTransactionQRCreditCard();
      cy.get("#TF_DATERANGEPICKER_START").type(startHaveData);
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData);
      cy.wait(1000);
      cy.get("#BT_SEARCH").click();
      cy.wait(3000);
      cy.contains("Success");
      cy.get("#BT_EXPORT_EXCEL").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("Confirm Export Report");
      cy.contains("Do you want to request Request process?");
      cy.get("#BT_RIGHT").click();
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_EXPORT_EXCEL").click();
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("Confirm Export Report");
      cy.contains("Do you want to request Request process?");
      cy.get("#BT_LEFT").click();
      cy.takeScreenshotSimple(5, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("System is currently in progress.");
      cy.contains("Can check the status and download the report from");
      cy.intercept("POST", "/report/api/report/request").as(
        "waitReportRequestStatusPage",
      );
      cy.get("#BT_LEFT").click();
      cy.wait("@waitReportRequestStatusPage");
      cy.reloadUntilVisibleWithTimeout(
        ":nth-child(2) > :nth-child(6) > #BT_DOWNLOAD_REPORT",
        60000,
        3000,
      ); // รอสูงสุด 1 นาที
      cy.takeScreenshotSimple(6, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(":nth-child(1) > :nth-child(6) > #BT_DOWNLOAD_REPORT").click();
      cy.renameNewfile("xlsx"); // ไม่ต้องระบุชื่อไฟล์, มันจะหาตัวล่าสุดให้เอง
      cy.get("@filename").then((newFileName) => {
        cy.log("ชื่อไฟล์ใหม่ล่าสุด:", newFileName);
        cy.validateFile(newFileName, 1);
      });
      cy.takeScreenshotSimple(7, Cypress.ScreenshotCaptureEnum.RUNNER);
    });
    it("TS04_TC84_Search by Status and Date then Click Export Excel", () => {
      goToSubMenuTransactionQRCreditCard();
      cy.wait(2000);
      cy.get("#TF_DATERANGEPICKER_START").type(startHaveData);
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData);
      cy.wait(1000);
      cy.get("#DD_STATUS").click();
      cy.wait(1000);
      cy.get('[data-value="APPROVED"]').click();
      cy.wait(1000);
      cy.get("#BT_SEARCH").click();
      cy.wait(3000);
      cy.contains("Success");
      cy.get("#BT_EXPORT_EXCEL").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("Confirm Export Report");
      cy.contains("Do you want to request Request process?");
      cy.get("#BT_RIGHT").click();
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_EXPORT_EXCEL").click();
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("Confirm Export Report");
      cy.contains("Do you want to request Request process?");
      cy.get("#BT_LEFT").click();
      cy.takeScreenshotSimple(5, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("System is currently in progress.");
      cy.contains("Can check the status and download the report from");
      cy.intercept("POST", "/report/api/report/request").as(
        "waitReportRequestStatusPage",
      );
      cy.get("#BT_LEFT").click();
      cy.wait("@waitReportRequestStatusPage");
      cy.reloadUntilVisibleWithTimeout(
        ":nth-child(2) > :nth-child(6) > #BT_DOWNLOAD_REPORT",
        60000,
        3000,
      ); // รอสูงสุด 1 นาที
      cy.takeScreenshotSimple(6, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(":nth-child(1) > :nth-child(6) > #BT_DOWNLOAD_REPORT").click();
      cy.renameNewfile("xlsx"); // ไม่ต้องระบุชื่อไฟล์, มันจะหาตัวล่าสุดให้เอง
      cy.get("@filename").then((newFileName) => {
        cy.log("ชื่อไฟล์ใหม่ล่าสุด:", newFileName);
        cy.validateFile(newFileName, 1);
      });
      cy.takeScreenshotSimple(7, Cypress.ScreenshotCaptureEnum.RUNNER);
    });
  });
  //#endregion
});
