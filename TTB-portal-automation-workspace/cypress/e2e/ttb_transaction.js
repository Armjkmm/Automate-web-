describe("Test_Scenario_03_Transaction", () => {
  let data;

  beforeEach(() => {
    // request data from fixtures
    cy.fixture("data_searchTxn").then((dataMain) => {
      data = dataMain;
    });
  });

  context("1 Search Cash", () => {
    it("TS03_TC01 Click Cash sub-menu", () => {
      cy.loginBankPortalPage();
      cy.gotomenucash();
      cy.wait(5000);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
    });
    it("TS03_TC02 Search by transaction ID data not found", () => {
      cy.loginBankPortalPage();
      cy.gotomenucash();
      cy.get(":nth-child(1) > .search-ref > .form-group > .form-control").type(
        "567265665766"
      );
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.get(".btn.btn-primary.mt-4").click();
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.contains("Data Not Found.");
    });
    it("TS03_TC03 Search by MID data not found", () => {
      cy.loginBankPortalPage();
      cy.gotomenucash();
      cy.get(":nth-child(2) > .search-ref > .form-group > .form-control").type(
        "00000000000000000000"
      );
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.get(".btn.btn-primary.mt-4").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.contains("Data Not Found.");
      cy.wait(5000);
    });
    it("TS03_TC04 Search by TID data not found", () => {
      cy.loginBankPortalPage();
      cy.gotomenucash();
      cy.get(":nth-child(3) > .search-ref > .form-group > .form-control").type(
        "00000000"
      );
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.get(".btn.btn-primary.mt-4").click();
      cy.wait(5000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.contains("Data Not Found.");
    });
    it("TS03_TC05 Search by Date data not found", () => {
      cy.loginBankPortalPage();
      cy.gotomenucash();
      cy.get(".marginImg").click();
      cy.get("#start").click();
      cy.get(
        ":nth-child(2) > .CalendarMonth > .CalendarMonth_table > tbody > :nth-child(1) > .CalendarDay__lastDayOfWeek"
      ).click();
      cy.get(
        ":nth-child(2) > .CalendarMonth > .CalendarMonth_table > tbody > :nth-child(1) > .CalendarDay__lastDayOfWeek"
      ).click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.get(".btn").click();
      cy.wait(5000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.contains("Data Not Found.");
    });
    it("TS03_TC06 Search by Satus and Date data not found", () => {
      cy.loginBankPortalPage();
      cy.gotomenucash();
      cy.get(".marginImg").click();
      cy.get("#start").click();
      cy.get(
        ":nth-child(2) > .CalendarMonth > .CalendarMonth_table > tbody > :nth-child(1) > .CalendarDay__lastDayOfWeek"
      ).click();
      cy.get(
        ":nth-child(2) > .CalendarMonth > .CalendarMonth_table > tbody > :nth-child(1) > .CalendarDay__lastDayOfWeek"
      ).click();
      cy.get("#status-transactionalipay").select("APPROVED");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.get(".btn").click();
      cy.wait(5000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.contains("Data Not Found.");
    });
    it("TS03_TC07 Search by transaction ID and Date", () => {
      cy.loginBankPortalPage();
      cy.gotomenucash();
      cy.get(":nth-child(1) > .search-ref > .form-group > .form-control").type(
        "25030304115586284939"
      );
      cy.get("#start").type("03/03/2025");
      cy.get("#end").type("03/03/2025");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.get(".btn").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
    });
    it("TS03_TC08 Search by MID and Date", () => {
      cy.loginBankPortalPage();
      cy.gotomenucash();
      cy.get(":nth-child(2) > .search-ref > .form-group > .form-control").type(
        "862840718602774"
      );
      cy.get("#start").type("03/03/2025");
      cy.get("#end").type("03/03/2025");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.get(".btn").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
    });
    it("TS03_TC09 Search by TID and Date", () => {
      cy.loginBankPortalPage();
      cy.gotomenucash();
      cy.get(":nth-child(3) > .search-ref > .form-group > .form-control").type(
        "86284939"
      );
      cy.get("#start").type("03/03/2025");
      cy.get("#end").type("03/03/2025");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.get(".btn").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
    });
    it("TS03_TC10 Search by Date", () => {
      cy.loginBankPortalPage();
      cy.gotomenucash();
      cy.get("#start").type("03/03/2025");
      cy.get("#end").type("03/03/2025");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.get(".btn").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
    });
    it("TS03_TC11 Search by Satus and Date", () => {
      cy.loginBankPortalPage();
      cy.gotomenucash();
      cy.get("#start").type("03/03/2025");
      cy.get("#end").type("03/03/2025");
      cy.get("#status-transactionalipay").select("APPROVED");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.get(".btn").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
    });
  });

  context("2 Transaction Cash Detail", () => {
    it("TS03_TC12 Select transaction then Click at transaction", () => {
      cy.loginBankPortalPage();
      cy.gotomenucash();
      cy.get("#start").type("03/03/2025");
      cy.get("#end").type("03/03/2025");
      cy.get("#status-transactionalipay").select("APPROVED");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.get(".wg-body > .wg-row > :nth-child(8)").eq(0).click();
      cy.wait(6000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.get(".btn").click();
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
    });
  });

  context("3 Export Transaction Report", () => {
    it("TS03_TC13 Export of Transaction Report in Transaction Cash page", () => {
      cy.loginBankPortalPage();
      cy.gotomenucash();
      cy.get("#start").type("23/01/2025");
      cy.get("#end").type("23/01/2025");
      cy.wait(3000);
      cy.get(".btn").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.RUNNER);
      cy.get("#exportexcel").click();

      // สร้างชื่อไฟล์ใหม่
      cy.renameNewfile("CashTransaction", "xlsx");

      // เข้าถึงค่า "filename" ที่เก็บไว้
      cy.get("@filename").then((filename) => {
        cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.RUNNER);
        cy.validateFile(filename, 1);
      });
    });

    it("TS03_TC14	Search by transaction ID and Date then Export of Transaction Report", () => {
      cy.loginBankPortalPage();
      cy.gotomenucash();
      cy.searchWithDate(
        "transaction_id",
        data.txnIDCash,
        data.startDate,
        data.endDate
      );
      cy.contains(data.txnIDCash);
      cy.getText("#alipaytransaction_date");
      cy.validateDate("#alipaytransaction_date", data.startDate, data.endDate);

      cy.takeScreenshotSimple();
      cy.get("#exportexcel").click();

      cy.renameNewfile("CashTransaction", "xlsx"); // สร้างชื่อไฟล์ใหม่
      cy.get("@filename").then((filename) => {
        // เข้าถึงค่า "filename" ที่เก็บไว้
        cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.RUNNER);
        cy.validateFile(filename, 1);
      });
    });

    it("TS03_TC15	Search by MID and Date then Export of Transaction Report", () => {
      cy.loginBankPortalPage();
      cy.gotomenucash();
      cy.searchWithDate("mid", data.MID, data.startDate, data.endDate);
      cy.getText("#alipaytransaction_date");
      cy.validateDate("#alipaytransaction_date", data.startDate, data.endDate);
      cy.wait(1000);
      cy.get("#alipaytransaction_date").click();
      cy.contains(data.MID);

      cy.takeScreenshotSimple();
      cy.get("#exportexcel").click();

      cy.renameNewfile("CashTransaction", "xlsx"); // สร้างชื่อไฟล์ใหม่
      cy.get("@filename").then((filename) => {
        // เข้าถึงค่า "filename" ที่เก็บไว้
        cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.RUNNER);
        cy.validateFile(filename, 1);
      });
    });

    it("TS03_TC16	Search by TID and Date then Export of Transaction Report", () => {
      cy.loginBankPortalPage();
      cy.gotomenucash();
      cy.searchWithDate("tid", data.TID, data.startDate, data.endDate);
      cy.getText("#alipaytransaction_date");
      cy.validateDate("#alipaytransaction_date", data.startDate, data.endDate);
      cy.wait(1000);
      cy.get("#alipaytransaction_date").click();
      cy.contains(data.TID);

      cy.takeScreenshotSimple();
      cy.get("#exportexcel").click();

      cy.renameNewfile("CashTransaction", "xlsx"); // สร้างชื่อไฟล์ใหม่
      cy.get("@filename").then((filename) => {
        // เข้าถึงค่า "filename" ที่เก็บไว้
        cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.RUNNER);
        cy.validateFile(filename, 1);
      });
    });

    it("TS03_TC17	Search by Date then Export of Transaction Report", () => {
      cy.loginBankPortalPage();
      cy.gotomenucash();
      cy.searchDate(data.startDate, data.endDate);
      cy.validateDate("#alipaytransaction_date", data.startDate, data.endDate);

      cy.takeScreenshotSimple();
      cy.get("#exportexcel").click();

      cy.renameNewfile("CashTransaction", "xlsx"); // สร้างชื่อไฟล์ใหม่
      cy.get("@filename").then((filename) => {
        // เข้าถึงค่า "filename" ที่เก็บไว้
        cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.RUNNER);
        cy.validateFile(filename, 1);
      });
    });

    it("TS03_TC18	Search by Satus and Date then Export of Transaction Report", () => {
      cy.loginBankPortalPage();
      cy.gotomenucash();
      cy.searchDateStatus(
        "#status-transactionalipay",
        data.statusCash,
        data.startDate,
        data.endDate
      );
      cy.validateDate("#alipaytransaction_date", data.startDate, data.endDate);
      cy.validateText(":nth-child(4) > #alipaystatus", data.statusCash);

      cy.takeScreenshotSimple();
      cy.get("#exportexcel").click();

      cy.renameNewfile("CashTransaction", "xlsx"); // สร้างชื่อไฟล์ใหม่
      cy.get("@filename").then((filename) => {
        // เข้าถึงค่า "filename" ที่เก็บไว้
        cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.RUNNER);
        cy.validateFile(filename, 1);
      });
    });
  });

  context("4 Search PromptPay", () => {
    it("TS03_TC14 Click Promptpay sub-menu ", () => {
      cy.loginBankPortalPage();
      cy.gotomenupromptpay();
      cy.wait(5000);
      cy.takeScreenshotSimple("", Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
    });

    it("TS03_TC15 Search by transaction ID data not found", () => {
      cy.loginBankPortalPage();
      cy.gotomenupromptpay();
      cy.get(":nth-child(1) > .search-ref > .form-group > .form-control").type(
        "567265665766"
      );
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.get(".btn.btn-primary.mt-4").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.contains("Data Not Found.");
      cy.wait(2000);
    });

    it("TS03_TC16 Search by Biller ID. data not found", () => {
      cy.loginBankPortalPage();
      cy.gotomenupromptpay();
      cy.get(":nth-child(2) > .search-ref > .form-group > .form-control").type(
        "00000000000000000000"
      );
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.get(".btn.btn-primary.mt-4").click();
      cy.wait(2000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.contains("Data Not Found.");
    });

    it("TS03_TC17 Search by Prefix NO. data not found", () => {
      cy.loginBankPortalPage();
      cy.gotomenupromptpay();
      cy.get(":nth-child(3) > .search-ref > .form-group > .form-control").type(
        "PPP21"
      );
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.get(".btn.btn-primary.mt-4").click();
      cy.wait(2000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.contains("Data Not Found.");
    });

    it("TS03_TC18 Search by MID data not found", () => {
      cy.loginBankPortalPage();
      cy.gotomenupromptpay();
      cy.get(":nth-child(4) > .search-ref > .form-group > .form-control").type(
        "00000000"
      );
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.get(".btn.btn-primary.mt-4").click();
      cy.wait(5000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.contains("Data Not Found.");
    });

    it("TS03_TC19 Search by TID  data not found", () => {
      cy.loginBankPortalPage();
      cy.gotomenupromptpay();
      cy.get(":nth-child(5) > .search-ref > .form-group > .form-control").type(
        "00000000"
      );
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.get(".btn.btn-primary.mt-4").click();
      cy.wait(5000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.contains("Data Not Found.");
    });

    it("TS03_TC20 Search by Date  data not found", () => {
      cy.loginBankPortalPage();
      cy.gotomenupromptpay();
      cy.get(".marginImg").click();
      cy.get("#start").click();
      cy.get(
        ":nth-child(2) > .CalendarMonth > .CalendarMonth_table > tbody > :nth-child(1) > .CalendarDay__lastDayOfWeek"
      ).click();
      cy.get(
        ":nth-child(2) > .CalendarMonth > .CalendarMonth_table > tbody > :nth-child(1) > .CalendarDay__lastDayOfWeek"
      ).click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.get(".btn").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.contains("Data Not Found.");
    });

    it("TS03_TC21 Search by Status and Date data not found", () => {
      cy.loginBankPortalPage();
      cy.gotomenupromptpay();
      cy.get(".marginImg").click();
      cy.get("#start").click();
      cy.get(
        ":nth-child(2) > .CalendarMonth > .CalendarMonth_table > tbody > :nth-child(1) > .CalendarDay__lastDayOfWeek"
      ).click();
      cy.get(
        ":nth-child(2) > .CalendarMonth > .CalendarMonth_table > tbody > :nth-child(1) > .CalendarDay__lastDayOfWeek"
      ).click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.get("#status-tqrc").select("Cancelled");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.get(".btn").click();
      cy.wait(5000);
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.contains("Data Not Found.");
    });

    it("TS03_TC22 Search by transaction ID and Date", () => {
      cy.loginBankPortalPage();
      cy.gotomenupromptpay();
      cy.get(":nth-child(2) > .search-ref > .form-group > .form-control").type(
        "ZDGOE250118131775HQ9"
      );
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.get("#start").type("17/01/2025");
      cy.get("#end").type("17/01/2025");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.get(".btn.btn-primary.mt-4").click();
      cy.wait(2000);
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
    });

    it("TS03_TC23 Search by Biller ID. and Date", () => {
      cy.loginBankPortalPage();
      cy.gotomenupromptpay();
      cy.get(":nth-child(2) > .search-ref > .form-group > .form-control").type(
        "010753700001716"
      );
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.get("#start").type("17/01/2025");
      cy.get("#end").type("17/01/2025");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.get(".btn.btn-primary.mt-4").click();
      cy.wait(2000);
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
    });

    it("TS03_TC24 Search by Prefix NO. and Date", () => {
      cy.loginBankPortalPage();
      cy.gotomenupromptpay();
      cy.get(":nth-child(3) > .search-ref > .form-group > .form-control").type(
        "A105"
      );
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.get("#start").type("17/01/2025");
      cy.get("#end").type("17/01/2025");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.get(".btn.btn-primary.mt-4").click();
      cy.wait(2000);
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
    });

    it("TS03_TC25 Search by MID and Date", () => {
      cy.loginBankPortalPage();
      cy.gotomenupromptpay();
      cy.get(":nth-child(4) > .search-ref > .form-group > .form-control").type(
        "862849996672545"
      );
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.get("#start").type("17/01/2025");
      cy.get("#end").type("17/01/2025");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.get(".btn.btn-primary.mt-4").click();
      cy.wait(2000);
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
    });

    it("TS03_TC26 Search by TID and Date", () => {
      cy.loginBankPortalPage();
      cy.gotomenupromptpay();
      cy.get(":nth-child(5) > .search-ref > .form-group > .form-control").type(
        "86204775"
      );
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.get("#start").type("17/01/2025");
      cy.get("#end").type("17/01/2025");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.get(".btn.btn-primary.mt-4").click();
      cy.wait(2000);
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
    });

    it("TS03_TC27 Search by Date", () => {
      cy.loginBankPortalPage();
      cy.gotomenupromptpay();
      cy.get("#start").type("17/01/2025");
      cy.get("#end").type("17/01/2025");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.get(".btn.btn-primary.mt-4").click();
      cy.wait(2000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
    });

    it("TS03_TC28 Search by Status and Date", () => {
      cy.loginBankPortalPage();
      cy.gotomenupromptpay();
      cy.get("#start").type("17/01/2025");
      cy.get("#end").type("17/01/2025");
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.get("#status-tqrc").select("Success");
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.get(".btn.btn-primary.mt-4").click();
      cy.wait(2000);
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
    });
  });

  context("5 Transaction Thai QR Pormptpay Detail", () => {
    it("TS03_TC29 Select transaction then Click at transaction", () => {
      cy.loginBankPortalPage();
      cy.gotomenupromptpay();
      cy.get("#start").type("17/01/2025");
      cy.get("#end").type("17/01/2025");
      cy.get("#status-tqrc").select("Success");
      cy.get(".btn.btn-primary.mt-4").click();
      cy.wait(2000);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.get(".wg-body > .wg-row > :nth-child(8)").eq(0).click();
      cy.wait(6000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
    });
  });

  context("6 Export Transaction Report", () => {
    it("TS03_TC35	Export of Transaction Report in Transaction Thai QR Promptpay page", () => {
      cy.loginBankPortalPage();
      cy.gotomenupromptpay();
      cy.takeScreenshotSimple();
      cy.get("#exportexcel").click();

      cy.renameNewfile("PromptPayTransaction", "xlsx"); // สร้างชื่อไฟล์ใหม่
      cy.get("@filename").then((filename) => {
        // เข้าถึงค่า "filename" ที่เก็บไว้
        cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.RUNNER);
        cy.validateFile(filename, 1);
      });
    });

    it("TS03_TC36	Search by transaction ID and date then Export of Transaction Report", () => {
      cy.loginBankPortalPage();
      cy.gotomenupromptpay();
      cy.searchWithDate(
        "transaction_id",
        data.txnID,
        data.startDate,
        data.endDate
      );
      cy.contains(data.txnID);
      cy.getText("#wechattransaction_date");
      cy.validateDate("#wechattransaction_date", data.startDate, data.endDate);

      cy.takeScreenshotSimple();
      cy.get("#exportexcel").click();

      cy.renameNewfile("PromptPayTransaction", "xlsx"); // สร้างชื่อไฟล์ใหม่
      cy.get("@filename").then((filename) => {
        // เข้าถึงค่า "filename" ที่เก็บไว้
        cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.RUNNER);
        cy.validateFile(filename, 1);
      });
    });

    it("TS03_TC37	Search by Biller ID. and date then Export of Transaction Report", () => {
      cy.loginBankPortalPage();
      cy.gotomenupromptpay();
      cy.searchWithDate(
        "biller_no",
        data.billerID,
        data.startDate,
        data.endDate
      );
      cy.contains(data.billerID);
      cy.getText("#wechattransaction_date");
      cy.validateDate("#wechattransaction_date", data.startDate, data.endDate);

      cy.takeScreenshotSimple();
      cy.get("#exportexcel").click();

      cy.renameNewfile("PromptPayTransaction", "xlsx"); // สร้างชื่อไฟล์ใหม่
      cy.get("@filename").then((filename) => {
        // เข้าถึงค่า "filename" ที่เก็บไว้
        cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.RUNNER);
        cy.validateFile(filename, 1);
      });
    });

    it("TS03_TC38	Search by Prefix NO. and date then Export of Transaction Report", () => {
      cy.loginBankPortalPage();
      cy.gotomenupromptpay();
      cy.searchWithDate(
        "prefix_no",
        data.prefixNo,
        data.startDate,
        data.endDate
      );
      cy.getText("#wechattransaction_date");
      cy.validateDate("#wechattransaction_date", data.startDate, data.endDate);
      cy.wait(1000);
      cy.get("#wechattransaction_date").click();
      cy.contains(data.prefixNo);

      cy.takeScreenshotSimple();
      cy.get("#exportexcel").click();

      cy.renameNewfile("PromptPayTransaction", "xlsx"); // สร้างชื่อไฟล์ใหม่
      cy.get("@filename").then((filename) => {
        // เข้าถึงค่า "filename" ที่เก็บไว้
        cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.RUNNER);
        cy.validateFile(filename, 1);
      });
    });

    it("TS03_TC39	Search by MID and date then Export of Transaction Report", () => {
      cy.loginBankPortalPage();
      cy.gotomenupromptpay();
      cy.searchWithDate("mid", data.MID, data.startDate, data.endDate);
      cy.getText("#wechattransaction_date");
      cy.validateDate("#wechattransaction_date", data.startDate, data.endDate);
      cy.wait(1000);
      cy.get("#wechattransaction_date").click();
      cy.contains(data.MID);

      cy.takeScreenshotSimple();
      cy.get("#exportexcel").click();

      cy.renameNewfile("PromptPayTransaction", "xlsx"); // สร้างชื่อไฟล์ใหม่
      cy.get("@filename").then((filename) => {
        // เข้าถึงค่า "filename" ที่เก็บไว้
        cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.RUNNER);
        cy.validateFile(filename, 1);
      });
    });

    it("TS03_TC40	Search by TID and date then Export of Transaction Report", () => {
      cy.loginBankPortalPage();
      cy.gotomenupromptpay();
      cy.searchWithDate("tid", data.TID, data.startDate, data.endDate);
      cy.getText("#wechattransaction_date");
      cy.validateDate("#wechattransaction_date", data.startDate, data.endDate);
      cy.wait(1000);
      cy.get("#wechattransaction_date").click();
      cy.contains(data.TID);

      cy.takeScreenshotSimple();
      cy.get("#exportexcel").click();

      cy.renameNewfile("PromptPayTransaction", "xlsx"); // สร้างชื่อไฟล์ใหม่
      cy.get("@filename").then((filename) => {
        // เข้าถึงค่า "filename" ที่เก็บไว้
        cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.RUNNER);
        cy.validateFile(filename, 1);
      });
    });

    it("TS03_TC41	Search by Date then Export of Transaction Report", () => {
      cy.loginBankPortalPage();
      cy.gotomenupromptpay();
      cy.searchDate(data.startDate, data.endDate);
      cy.validateDate("#wechattransaction_date", data.startDate, data.endDate);

      cy.takeScreenshotSimple();
      cy.get("#exportexcel").click();

      cy.renameNewfile("PromptPayTransaction", "xlsx"); // สร้างชื่อไฟล์ใหม่
      cy.get("@filename").then((filename) => {
        // เข้าถึงค่า "filename" ที่เก็บไว้
        cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.RUNNER);
        cy.validateFile(filename, 1);
      });
    });

    it("TS03_TC42	Search by Status and Date then Export of Transaction Report", () => {
      cy.loginBankPortalPage();
      cy.gotomenupromptpay();
      cy.searchDateStatus(
        "#status-tqrc",
        data.status,
        data.startDate,
        data.endDate
      );
      cy.validateDate("#wechattransaction_date", data.startDate, data.endDate);
      cy.validateText(":nth-child(4) > #wechatstatus", data.status);

      cy.takeScreenshotSimple();
      cy.get("#exportexcel").click();

      cy.renameNewfile("PromptPayTransaction", "xlsx"); // สร้างชื่อไฟล์ใหม่
      cy.get("@filename").then((filename) => {
        // เข้าถึงค่า "filename" ที่เก็บไว้
        cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.RUNNER);
        cy.validateFile(filename, 1);
      });
    });
  });
});
