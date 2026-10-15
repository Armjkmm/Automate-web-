function goToSubMenuReport() {
  cy.get(
    '.main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(7) > [href="/report"]'
  ).click();
  cy.get(
    ".main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(7) > .nav-second-level > :nth-child(4) > #report > div"
  ).click();
}

describe("Test Scenario: 04 Report", () => {
  let data;

  beforeEach(() => {
    // request from fixtures
    cy.fixture("data_searchReport").then((dataMain) => {
      data = dataMain;
    });

    // auto login to enter portal page
    cy.smartShopWebPortal(
      Cypress.env("OPERATOR_USERNAME"),
      Cypress.env("OPERATOR_PASSWORD")
    );

    // auto enter report menu
    // cy.get('a#report[href="/report"]').first().click({ force: true });
  });

  context("1 Report", () => {
    it("TS06 TC01 Click Report sub-menu", () => {
      cy.wait(5000);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.get(
        '.main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(7) > [href="/report"]'
      ).click();
      cy.get(
        ".main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(7) > .nav-second-level > :nth-child(4) > #report > div"
      ).click();
      cy.wait(2000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.RUNNER); // taskScreenshot
    });
    it("TS06 TC02 Not Select Date and None selected report", () => {
      cy.wait(5000);
      cy.get(
        '.main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(7) > [href="/report"]'
      ).click();
      cy.get(
        ".main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(7) > .nav-second-level > :nth-child(4) > #report > div"
      ).click();
      cy.wait(2000);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.get("#reconcileZip").click();
      cy.wait(5000);
      cy.contains("กรุณาเลือก report");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.RUNNER); // taskScreenshot
    });
    it("TS06 TC03 Not Select Date and select report", () => {
      cy.wait(5000);
      cy.get(
        '.main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(7) > [href="/report"]'
      ).click();
      cy.get(
        ".main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(7) > .nav-second-level > :nth-child(4) > #report > div"
      ).click();
      cy.wait(2000);
      cy.get("#id__button__button").click();
      cy.wait(2000);
      cy.get("#id-option-0 > input").check(); // Change select file report
      cy.wait(2000);
      cy.get(".mg-bt-30 > :nth-child(2)").click();
      cy.wait(2000);
      cy.get("#reconcileZip").click();
      cy.get(".text-center > .btn").click({ force: true });
      cy.wait(3000);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.get("#reconcileZip").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.get(".text-center > .btn").click({ force: true });
      cy.wait(3000);
      cy.contains("กรุณาเลือกวันที่");
      cy.wait(5000);
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.RUNNER); // taskScreenshot
    });
    it("TS06 TC04 Select Date and report data not found", () => {
      cy.wait(5000);
      cy.get(
        '.main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(7) > [href="/report"]'
      ).click();
      cy.get(
        ".main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(7) > .nav-second-level > :nth-child(4) > #report > div"
      ).click();
      cy.wait(2000);
      cy.get("#start").type("02/11/2024");
      cy.get("#end").type("02/11/2024");
      cy.wait(3000);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.get("#id__button__button").click();
      cy.wait(2000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.get("#id-option-0 > input").check(); // Change select file report
      cy.wait(2000);
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.get(".mg-bt-30 > :nth-child(2)").click();
      cy.wait(2000);
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.get("#reconcileZip").click();
      cy.takeScreenshotSimple(5, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
    });
    it("TS06 TC05 Click OK in pop-up Finished Report successfully.", () => {
      cy.wait(5000);
      cy.get(
        '.main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(7) > [href="/report"]'
      ).click();
      cy.get(
        ".main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(7) > .nav-second-level > :nth-child(4) > #report > div"
      ).click();
      cy.wait(2000);
      cy.get("#start").type("02/11/2024");
      cy.get("#end").type("02/11/2024");
      cy.wait(3000);
      cy.get("#id__button__button").click();
      cy.wait(2000);
      cy.get("#id-option-0 > input").check(); // Change select file report
      cy.wait(2000);
      cy.get(".mg-bt-30 > :nth-child(2)").click();
      cy.wait(2000);
      cy.get("#reconcileZip").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.get(".swal2-confirm").click();
      cy.wait(3000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      // สร้างชื่อไฟล์ใหม่
      cy.renameNewfile("Sale Transaction_01-03-2025", "xlsx"); //Today
      // เข้าถึงค่า "filename" ที่เก็บไว้
      cy.get("@filename").then((filename) => {
        cy.takeScreenshotSimple("3", Cypress.ScreenshotCaptureEnum.RUNNER);
        cy.validateFile(filename, 1);
      });
    });
    it("TS06 TC06 Select Date and report then Click Download", () => {
      cy.wait(5000);
      cy.get(
        '.main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(7) > [href="/report"]'
      ).click();
      cy.get(
        ".main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(7) > .nav-second-level > :nth-child(4) > #report > div"
      ).click();
      cy.wait(2000);
      cy.get("#start").type("01/11/2024");
      cy.get("#end").type("10/11/2024");
      cy.wait(3000);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.get("#id__button__button").click();
      cy.wait(2000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.get("#id-option-0 > input").check(); // Change select file report
      cy.wait(2000);
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.get(".mg-bt-30 > :nth-child(2)").click();
      cy.wait(2000);
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.get("#reconcileZip").click();
      cy.takeScreenshotSimple(5, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
    });
    it("TS06 TC07 Click OK in pop-up Finished Report successfully.", () => {
      cy.wait(5000);
      cy.get(
        '.main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(7) > [href="/report"]'
      ).click();
      cy.get(
        ".main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(7) > .nav-second-level > :nth-child(4) > #report > div"
      ).click();
      cy.wait(2000);
      cy.get("#start").type("01/11/2024");
      cy.get("#end").type("10/11/2024");
      cy.wait(3000);
      cy.get("#id__button__button").click();
      cy.wait(2000);
      cy.get("#id-option-0 > input").check(); // Change select file report
      cy.wait(2000);
      cy.get(".mg-bt-30 > :nth-child(2)").click();
      cy.wait(2000);
      cy.get("#reconcileZip").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.get(".swal2-confirm").click();
      cy.wait(3000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.get(".swal2-confirm").click();
      cy.wait(3000);
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      // cy.get(
      //   ".reportunmatch > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(7) > .nav-second-level > :nth-child(5) > #requestProcess > div"
      // ).click();
      // cy.get(
      //   "#download_ca603bb4-23ec-45f7-9fbc-b3b7c77010ab-a6f61a1c-470a-441b-aef1-b7f26a882f5d > #download > .fas"
      // ).click();
      // // สร้างชื่อไฟล์ใหม่
      // cy.renameNewfile("Sale Transaction_01-03-2025", "xlsx"); //Today
      // // เข้าถึงค่า "filename" ที่เก็บไว้
      // cy.get("@filename").then((filename) => {
      //   cy.takeScreenshotSimple("3", Cypress.ScreenshotCaptureEnum.RUNNER);
      //   cy.validateFile(filename, 1);
      // });
    });
  });
  context("2 Search Report Request Status", () => {
    it("TS06 TC08 Click Report Request Status sub-menu", () => {
      cy.wait(5000);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPOST); // taskScreenshot
      cy.get(
        '.main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(7) > [href="/report"]'
      ).click({ force: true });
      cy.get(
        ".main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(7) > .nav-second-level > :nth-child(5) > #requestProcess > div"
      ).click({ force: true });
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.FULLPAGE); // taskScreenshot
    });
    it("TS06 TC09 Search by Request Date data not found", () => {
      cy.wait(5000);
      cy.get(
        '.main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(7) > [href="/report"]'
      ).click({ force: true });
      cy.get(
        ".main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(7) > .nav-second-level > :nth-child(5) > #requestProcess > div"
      ).click({ force: true });
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.FULLPAGE); // taskScreenshot
      cy.get("#start").type("02/11/2024");
      cy.get("#end").type("02/11/2024");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.FULLPAGE); // taskScreenshot
      cy.get(".btn").click();
      cy.wait(5000);
      cy.contains("Data Not Found.");
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.RUNNER); // taskScreenshot
    });
    it("TS06 TC10 Search by Select Report and Date data not found", () => {
      cy.wait(5000);
      cy.get(
        '.main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(7) > [href="/report"]'
      ).click({ force: true });
      cy.get(
        ".main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(7) > .nav-second-level > :nth-child(5) > #requestProcess > div"
      ).click({ force: true });
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.FULLPAGE); // taskScreenshot
      cy.get("#start").type("02/11/2024");
      cy.get("#end").type("02/11/2024");
      cy.get(
        ":nth-child(2) > .search-ref > #devicetype-transactionalipay"
      ).select("QR Request");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.FULLPAGE); // taskScreenshot
      cy.get(".btn").click();
      cy.wait(5000);
      cy.contains("Data Not Found.");
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.RUNNER); // taskScreenshot
    });
    it("TS06 TC11 Search by status and Date data not found", () => {
      cy.wait(5000);
      cy.get(
        '.main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(7) > [href="/report"]'
      ).click({ force: true });
      cy.get(
        ".main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(7) > .nav-second-level > :nth-child(5) > #requestProcess > div"
      ).click({ force: true });
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.FULLPAGE); // taskScreenshot
      cy.get("#start").type("02/11/2024");
      cy.get("#end").type("02/11/2024");
      cy.get(
        ":nth-child(2) > .search-ref > #devicetype-transactionalipay"
      ).select("All Report");
      cy.get(
        ":nth-child(3) > .search-ref > #devicetype-transactionalipay"
      ).select("Fail");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.FULLPAGE); // taskScreenshot
      cy.get(".btn").click();
      cy.wait(5000);
      cy.contains("Data Not Found.");
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.RUNNER); // taskScreenshot
    });
    it("TS06 TC14 Search by Request Date", () => {
      cy.wait(5000);
      cy.get(
        '.main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(7) > [href="/report"]'
      ).click({ force: true });
      cy.get(
        ".main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(7) > .nav-second-level > :nth-child(5) > #requestProcess > div"
      ).click({ force: true });
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.FULLPAGE); // taskScreenshot
      cy.get("#start").type("01/09/2024");
      cy.get("#end").type("28/02/2025");
      cy.wait(5000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.FULLPAGE); // taskScreenshot
      cy.get(".btn").click();
      cy.wait(5000);
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.FULLPAGE); // taskScreenshot
    });
    it("TS06 TC15 Search by Request Date  and Select Report", () => {
      cy.wait(5000);
      cy.get(
        '.main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(7) > [href="/report"]'
      ).click({ force: true });
      cy.get(
        ".main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(7) > .nav-second-level > :nth-child(5) > #requestProcess > div"
      ).click({ force: true });
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.FULLPAGE); // taskScreenshot
      cy.get("#start").type("01/09/2024");
      cy.get("#end").type("28/02/2025");
      cy.wait(5000);
      cy.get(
        ":nth-child(2) > .search-ref > #devicetype-transactionalipay"
      ).select("Sale Transaction");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.FULLPAGE); // taskScreenshot
      cy.get(".btn").click();
      cy.wait(5000);
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.FULLPAGE); // taskScreenshot
    });
    it("TS06 TC16 Search by Request Date and status", () => {
      cy.wait(5000);
      cy.get(
        '.main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(7) > [href="/report"]'
      ).click({ force: true });
      cy.get(
        ".main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(7) > .nav-second-level > :nth-child(5) > #requestProcess > div"
      ).click({ force: true });
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.FULLPAGE); // taskScreenshot
      cy.get("#start").type("01/09/2024");
      cy.get("#end").type("28/02/2025");
      cy.wait(5000);
      cy.get(
        ":nth-child(3) > .search-ref > #devicetype-transactionalipay"
      ).select("Expired");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.FULLPAGE); // taskScreenshot
      cy.get(".btn").click();
      cy.wait(5000);
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.FULLPAGE); // taskScreenshot
    });
  });

  context("3 Transaction summary report", () => {
    it("TS06 TC19 Click Transaction summary report sub-menu", () => {
      cy.wait(5000);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(
        '.main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(7) > [href="/report"]'
      ).click();
      cy.get(
        ".main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(7) > .nav-second-level > :nth-child(6) > #summaryTransaction > div"
      ).click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.FULLPAGE); // taskScreenshot
    });

    it("TS06 TC20 Select year data not found", () => {
      cy.wait(5000);
      cy.get(
        '.main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(7) > [href="/report"]'
      ).click();
      cy.get(
        ".main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(7) > .nav-second-level > :nth-child(6) > #summaryTransaction > div"
      ).click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.FULLPAGE); // taskScreenshot
      cy.get("#dropdown_report_year__button__button").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.get("#dropdown_report_year-option-9").click();
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.get("#btn_submit_download_summary_transactionn").click();
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.get(".swal2-confirm");
      cy.contains("ไม่พบรายงานสรุปรายการประจำปี");
      cy.takeScreenshotSimple(5, Cypress.ScreenshotCaptureEnum.RUNNER); // taskScreenshot
    });

    it("TS06 TC21 Click OK in pop-up alert Unsuccessful ไม่พบรายงานรายการประจำปี", () => {
      cy.wait(5000);
      cy.get(
        '.main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(7) > [href="/report"]'
      ).click();
      cy.get(
        ".main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(7) > .nav-second-level > :nth-child(6) > #summaryTransaction > div"
      ).click();
      cy.get("#dropdown_report_year__button__button").click();
      cy.get("#dropdown_report_year-option-9").click();
      cy.get("#btn_submit_download_summary_transactionn").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.get(".swal2-confirm").click();
      cy.contains("ไม่พบรายงานสรุปรายการประจำปี");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.RUNNER); // taskScreenshot
    });

    it("TS06 TC22 Select year ", () => {
      cy.wait(5000);
      cy.get(
        '.main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(7) > [href="/report"]'
      ).click();
      cy.get(
        ".main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(7) > .nav-second-level > :nth-child(6) > #summaryTransaction > div"
      ).click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.FULLPAGE); // taskScreenshot
      cy.get("#dropdown_report_year__button__button").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.get("#dropdown_report_year-option-1").click();
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.get("#btn_submit_download_summary_transactionn").click();
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.get(".swal2-confirm");
      cy.contains("Finished Successfully");
      cy.takeScreenshotSimple(5, Cypress.ScreenshotCaptureEnum.RUNNER); // taskScreenshot
    });

    it("TS06 TC23 Click OK in pop-up  Success Finished Successfully", () => {
      cy.wait(5000);
      cy.get(
        '.main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(7) > [href="/report"]'
      ).click();
      cy.get(
        ".main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(7) > .nav-second-level > :nth-child(6) > #summaryTransaction > div"
      ).click();
      cy.get("#dropdown_report_year__button__button").click();
      cy.get("#dropdown_report_year-option-1").click();
      cy.get("#btn_submit_download_summary_transactionn").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.get(".swal2-confirm").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      // สร้างชื่อไฟล์ใหม่
      cy.renameNewfile("transaction summary report 2024", "xlsx");

      // เข้าถึงค่า "filename" ที่เก็บไว้
      cy.get("@filename").then((filename) => {
        cy.takeScreenshotSimple("4", Cypress.ScreenshotCaptureEnum.RUNNER);
        cy.validateFile(filename, 1);
      });
    });
  });

  context("4 Download report", () => {
    it("TS06 TC24 Download of Sale Trasaction report  in Report page and go to download at Report Request Status page", () => {
      cy.wait(5000);
      cy.get(
        '.main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(7) > [href="/report"]'
      ).click();
      cy.get(
        ".main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(7) > .nav-second-level > :nth-child(4) > #report > div"
      ).click();
      cy.get("#start").type("08/02/2025");
      cy.get("#end").type("08/02/2025");
      cy.get("#id__button__button").click();
      cy.get("#id-option-0 > input").check(); // Change select file report
      cy.get(".mg-bt-30 > :nth-child(2)").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPOST); // taskScreenshot
      cy.get("#reconcileZip").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPOST); // taskScreenshot
      cy.get(".swal2-confirm").click();
      cy.wait(3000);
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPOST); // taskScreenshot
      // สร้างชื่อไฟล์ใหม่
      cy.renameNewfile("Sale Transaction_01-03-2025", "xlsx"); //Today

      // เข้าถึงค่า "filename" ที่เก็บไว้
      cy.get("@filename").then((filename) => {
        cy.takeScreenshotSimple("4", Cypress.ScreenshotCaptureEnum.RUNNER);
        cy.validateFile(filename, 1);
      });
    });

    it("TS06 TC25 Download of Merchant Registration report in Report page", () => {
      cy.wait(5000);
      cy.get(
        '.main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(7) > [href="/report"]'
      ).click();
      cy.get(
        ".main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(7) > .nav-second-level > :nth-child(4) > #report > div"
      ).click();
      cy.get("#start").type("01/09/2024");
      cy.get("#end").type("05/09/2024");
      cy.get("#id__button__button").click();
      cy.get("#id-option-1 > input").check(); // Change select file report
      cy.get(".main-content").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPOST); // taskScreenshot
      cy.get("#reconcileZip").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPOST); // taskScreenshot
      cy.get(".swal2-confirm").click();
      cy.wait(3000);
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPOST); // taskScreenshot
      // สร้างชื่อไฟล์ใหม่
      cy.renameNewfile("Merchant Register_01-03-2025", "xlsx"); //Today

      // เข้าถึงค่า "filename" ที่เก็บไว้
      cy.get("@filename").then((filename) => {
        cy.takeScreenshotSimple("4", Cypress.ScreenshotCaptureEnum.RUNNER);
        cy.validateFile(filename, 1);
      });
    });

    it("TS06 TC26 Download of QR Requrest Report  in Report page", () => {
      cy.wait(5000);
      cy.get(
        '.main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(7) > [href="/report"]'
      ).click();
      cy.get(
        ".main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(7) > .nav-second-level > :nth-child(4) > #report > div"
      ).click();
      cy.get("#start").type("01/09/2024");
      cy.get("#end").type("05/09/2024");
      cy.get("#id__button__button").click();
      cy.get("#id-option-2 > input").check(); // Change select file report
      cy.get(".main-content").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPOST); // taskScreenshot
      cy.get("#reconcileZip").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPOST); // taskScreenshot
      cy.get(".swal2-confirm").click();
      cy.wait(3000);
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPOST); // taskScreenshot
      // สร้างชื่อไฟล์ใหม่
      cy.renameNewfile("QR Request_01-03-2025", "xlsx"); //Today

      // เข้าถึงค่า "filename" ที่เก็บไว้
      cy.get("@filename").then((filename) => {
        cy.takeScreenshotSimple("4", Cypress.ScreenshotCaptureEnum.RUNNER);
        cy.validateFile(filename, 1);
      });
    });

    it("TS06 TC27 Download of Staff Report  in Report page", () => {
      cy.wait(5000);
      cy.get(
        '.main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(7) > [href="/report"]'
      ).click();
      cy.get(
        ".main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(7) > .nav-second-level > :nth-child(4) > #report > div"
      ).click();
      cy.get("#start").type("01/09/2024");
      cy.get("#end").type("05/09/2024");
      cy.get("#id__button__button").click();
      cy.get("#id-option-3 > input").check(); // Change select file report
      cy.get(".main-content").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPOST); // taskScreenshot
      cy.get("#reconcileZip").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPOST); // taskScreenshot
      cy.get(".swal2-confirm").click();
      cy.wait(3000);
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPOST); // taskScreenshot
      // สร้างชื่อไฟล์ใหม่
      cy.renameNewfile("Staff Report_01-03-2025", "xlsx"); //Today

      // เข้าถึงค่า "filename" ที่เก็บไว้
      cy.get("@filename").then((filename) => {
        cy.takeScreenshotSimple("4", Cypress.ScreenshotCaptureEnum.RUNNER);
        cy.validateFile(filename, 1);
      });
    });

    it("TS06 TC28 Download of Report Request Status in Report Request Status page", () => {
      cy.get(
        '.main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(7) > [href="/report"]'
      ).click();
      cy.get(
        ".main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(7) > .nav-second-level > :nth-child(5) > #requestProcess > div"
      ).click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPOST); // taskScreenshot
      cy.get(".fas.fa-download").eq(2).click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPOST); // taskScreenshot
      // สร้างชื่อไฟล์ใหม่
      cy.renameNewfile("sale transaction_01-03-2025", "xlsx"); //Today

      // เข้าถึงค่า "filename" ที่เก็บไว้
      cy.get("@filename").then((filename) => {
        cy.takeScreenshotSimple("3", Cypress.ScreenshotCaptureEnum.RUNNER);
        cy.validateFile(filename, 1);
      });
    });
  });
});
