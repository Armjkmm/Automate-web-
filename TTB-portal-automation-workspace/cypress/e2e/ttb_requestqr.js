describe("Test_Scenario_05_Request QR", () => {
  let data;

  beforeEach(() => {
    // request from fixtures
    cy.fixture('data_searchQR').then((dataMain) => {
      data = dataMain;
    });
  });

  context("1 Search Request QR", () => {
    it("TS05_TC01 Click Request QR main-menu", () => {
      cy.loginBankPortalPage();
      cy.wait(5000);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.get(
        ".main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(6) > #qrcode > .toggle-none"
      ).click({ force: true });
      cy.wait(1000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
    });

    it("TS05_TC02 Search by Shop name data not found", () => {
      cy.loginBankPortalPage();
      cy.wait(5000);
      cy.get(
        ".main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(6) > #qrcode > .toggle-none"
      ).click({ force: true });
      cy.wait(1000);
      cy.get(".form-group > .form-control").type("kaishop");
      cy.get(".btn").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
    });

    it("TS05_TC03 Search by Request Code data not found", () => {
      cy.loginBankPortalPage();
      cy.wait(5000);
      cy.get(
        ".main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(6) > #qrcode > .toggle-none"
      ).click({ force: true });
      cy.wait(1000);
      cy.get(".form-group > .form-control").type("0011212121");
      cy.get(".btn").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
    });

    it("TS05_TC04 Search by Date data not found", () => {
      cy.loginBankPortalPage();
      cy.wait(5000);
      cy.get(
        ".main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(6) > #qrcode > .toggle-none"
      ).click({ force: true });
      cy.wait(1000);
      cy.get("#start").click();
      cy.get(
        ":nth-child(2) > .CalendarMonth > .CalendarMonth_table > tbody > :nth-child(2) > .CalendarDay__firstDayOfWeek"
      ).click();
      cy.get(
        ":nth-child(2) > .CalendarMonth > .CalendarMonth_table > tbody > :nth-child(2) > .CalendarDay__firstDayOfWeek"
      ).click();
      cy.get(".btn").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
    });

    it("TS05_TC05 Search by Status and Date data not found", () => {
      cy.loginBankPortalPage();
      cy.wait(5000);
      cy.get(
        ".main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(6) > #qrcode > .toggle-none"
      ).click({ force: true });
      cy.wait(1000);
      cy.get("#start").click();
      cy.get(
        ":nth-child(2) > .CalendarMonth > .CalendarMonth_table > tbody > :nth-child(2) > .CalendarDay__firstDayOfWeek"
      ).click();
      cy.get(
        ":nth-child(2) > .CalendarMonth > .CalendarMonth_table > tbody > :nth-child(2) > .CalendarDay__firstDayOfWeek"
      ).click();
      cy.get("#status-transactionalipay").select("CANCEL");
      cy.get(".btn").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
    });

    it("TS05_TC06 case Search by Shop name", () => {
      cy.loginBankPortalPage();
      cy.wait(5000);
      cy.get(
        ".main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(6) > #qrcode > .toggle-none"
      ).click({ force: true });
      cy.wait(1000);
      cy.get(".form-group > .form-control").type("ซีลัมซัม");
      cy.get(".btn").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
    });

    it("TS05_TC07 Search by Request Code and date", () => {
      cy.loginBankPortalPage();
      cy.wait(5000);
      cy.get(
        ".main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(6) > #qrcode > .toggle-none"
      ).click({ force: true });
      cy.wait(1000);
      cy.get(".form-group > .form-control").type("000396");
      cy.get("#start").type("07/11/2024");
      cy.get("#end").type("08/11/2024");
      cy.get(".btn").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
    });

    it("TS05_TC08 Search by Date", () => {
      cy.loginBankPortalPage();
      cy.wait(5000);
      cy.get(
        ".main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(6) > #qrcode > .toggle-none"
      ).click({ force: true });
      cy.wait(1000);
      cy.get("#start").type("07/11/2024");
      cy.get("#end").type("08/11/2024");
      cy.get(".btn").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
    });

    it("TS05_TC09 Search by Status and Date", () => {
      cy.loginBankPortalPage();
      cy.wait(5000);
      cy.get(
        ".main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(6) > #qrcode > .toggle-none"
      ).click({ force: true });
      cy.wait(1000);
      cy.get("#start").type("07/09/2024");
      cy.get("#end").type("05/02/2025");
      cy.get("#status-transactionalipay").select("CANCEL");
      cy.get(".btn").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
    });
  });

  context("2 View QR Details", () => {
    it("TS05_TC10 Select Request QR then Click at icon print", () => {
      cy.loginBankPortalPage();
      cy.wait(5000);
      cy.get(
        ".main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(6) > #qrcode > .toggle-none"
      ).click();
      cy.wait(2000);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.get(":nth-child(1) > :nth-child(7) > a > .fa").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
    });
  });

  context("3 Close Selected QR", () => {
    it("TS05_TC11 Close Selected QR with select Request QR then Click at Close Selected QR", () => {
      cy.loginBankPortalPage();
      cy.wait(5000);
      cy.get(
        ".main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(6) > #qrcode > .toggle-none"
      ).click();
      cy.wait(1000);
      cy.get("#status-transactionalipay").select("PENDING");
      cy.wait(5000);
      cy.get(".btn").click();
      cy.wait(2000);
      cy.get(".wg-body > :nth-child(1) > :nth-child(1) > input").click(); //Change position here (wg-body > :nth-child(2))
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.get(
        ".mg-bt-10 > :nth-child(2) > .form-control > :nth-child(1)"
      ).click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPOST); // taskScreenshot
    });

    it("TS05_TC12 Click Yes in pop-up คุณยืนยันการแก้ไขข้อมูลหรือไม่", () => {
      cy.loginBankPortalPage();
      cy.wait(5000);
      cy.get(
        ".main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(6) > #qrcode > .toggle-none"
      ).click();
      cy.wait(1000);
      cy.get("#status-transactionalipay").select("PENDING");
      cy.wait(5000);
      cy.get(".btn").click();
      cy.wait(2000);

      // ดึงข้อความและเก็บไว้
      cy.getText('.wg-body > :nth-child(1) > :nth-child(3)');

      cy.get(".wg-body > :nth-child(1) > :nth-child(1) > input").click(); //Change position here (wg-body > :nth-child(2))
      cy.get(
        ".mg-bt-10 > :nth-child(2) > .form-control > :nth-child(1)"
      ).click();
      cy.get(".ml-1 > .btn").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
    });

    it("TS05_TC13 Click Ok in pop-up แก้ไขข้อมูลสําเร็จ", () => {
      cy.loginBankPortalPage();
      cy.wait(5000);
      cy.get(
        ".main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(6) > #qrcode > .toggle-none"
      ).click();
      cy.wait(1000);
      // cy.get("#status-transactionalipay").select("PENDING");
      // cy.wait(5000);
      // cy.get(".btn").click();
      // cy.wait(2000);

      // cy.getText('.wg-body > :nth-child(1) > :nth-child(3)');
      // cy.get(".wg-body > :nth-child(1) > :nth-child(1) > input").click(); //Change position here (wg-body > :nth-child(2))
      // cy.get(
      //   ".mg-bt-10 > :nth-child(2) > .form-control > :nth-child(1)"
      // ).click();
      // cy.get(".ml-1 > .btn").click();
      // cy.get(".text-center > .btn").click();

      // ดึงค่าจาก Cypress.env() ที่เก็บไว้ในเคสก่อนหน้า
      const code = Cypress.env('myText');
      cy.log('responseCode:', code);

      cy.get('#qrcode').click({ force: true }); // enter Rquest QR menu
      cy.search('search_all', code);
      cy.wait(1000);
      cy.get(':nth-child(1) > :nth-child(5) > #qrstatus').contains('CLOSE');
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
  });

  context("4 Change QR Status", () => {
    it("TS05_TC14 Change QR Status with select Request QR then Click at icon print", () => {
      cy.loginBankPortalPage();
      cy.wait(5000);
      cy.get(
        ".main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(6) > #qrcode > .toggle-none"
      ).click();
      cy.wait(1000);
      cy.get("#status-transactionalipay").select("PENDING");
      cy.wait(5000);
      cy.get(".btn").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.get(":nth-child(1) > :nth-child(7) > a > .fa").click();
      cy.wait(5000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
    });

    it("TS05_TC15 Click icon pencil in Request Detail", () => {
      cy.loginBankPortalPage();
      cy.wait(5000);
      cy.get(
        ".main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(6) > #qrcode > .toggle-none"
      ).click();
      cy.wait(1000);
      cy.get("#status-transactionalipay").select("PENDING");
      cy.wait(5000);
      cy.get(".btn").click();
      cy.get(":nth-child(1) > :nth-child(7) > a > .fa").click();
      cy.wait(5000);
      cy.get(".text-center > .fas").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
    });

    it("TS05_TC16 Change QR Status with select change status then click button Save", () => {
      cy.loginBankPortalPage();
      cy.wait(5000);
      cy.get(
        ".main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(6) > #qrcode > .toggle-none"
      ).click();
      cy.wait(1000);
      cy.get("#status-transactionalipay").select("PENDING");
      cy.wait(5000);
      cy.get(".btn").click();
      cy.get(":nth-child(1) > :nth-child(7) > a > .fa").click();
      cy.wait(5000);
      cy.get(".text-center > .fas").click();
      cy.wait(3000);
      cy.status("CANCEL");
      cy.get(".btn").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
    });

    it("TS05_TC17 Click Yes in pop-up คุณยืนยันการแก้ไขข้อมูลหรือไม่", () => {
      cy.loginBankPortalPage();
      cy.wait(5000);
      cy.get(
        ".main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(6) > #qrcode > .toggle-none"
      ).click();
      cy.wait(1000);
      cy.get("#status-transactionalipay").select("PENDING");
      cy.wait(5000);
      cy.get(".btn").click();
      cy.get(":nth-child(1) > :nth-child(7) > a > .fa").click();
      cy.wait(5000);
      cy.get(".text-center > .fas").click();
      cy.wait(3000);
      cy.status("CANCEL");
      cy.get(".btn").click();
      cy.get(".ml-1 > .btn").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
    });

    it("TS05_TC18 Click Ok in pop-up แก้ไขข้อมูลสําเร็จ ", () => {
      cy.loginBankPortalPage();
      cy.wait(5000);
      cy.get(
        ".main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(6) > #qrcode > .toggle-none"
      ).click();
      cy.wait(1000);
      cy.get("#status-transactionalipay").select("PENDING");
      cy.wait(5000);
      cy.get(".btn").click();
      cy.get(":nth-child(1) > :nth-child(7) > a > .fa").click();
      cy.wait(5000);
      cy.get(".text-center > .fas").click();
      cy.wait(3000);
      cy.status("CANCEL");
      cy.get(".btn").click();
      cy.get(".ml-1 > .btn").click();
      cy.get(".text-center > .btn").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
    });
  });

  context("5 Print QR in Request QR Edit page", () => {
    it("TS05_TC19 Select Request QR then Click at icon print", () => {
      cy.loginBankPortalPage();
      cy.wait(5000);
      cy.get(
        ".main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(6) > #qrcode > .toggle-none"
      ).click();
      cy.wait(1000);
      cy.get("#status-transactionalipay").select("PENDING");
      cy.wait(5000);
      cy.get(".btn").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.get(":nth-child(1) > :nth-child(7) > a > .fa").click();
      cy.wait(5000);
      // cy.get(".btn").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
    });

    it("TS05_TC20 Click button Print in Request Detail page", () => {
      cy.loginBankPortalPage();
      cy.wait(5000);
      cy.get(
        ".main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(6) > #qrcode > .toggle-none"
      ).click();
      cy.wait(1000);
      cy.get("#status-transactionalipay").select("PENDING");
      cy.wait(5000);
      cy.get(".btn").click();
      cy.get(":nth-child(1) > :nth-child(7) > a > .fa").click();
      cy.wait(5000);
      cy.get(".btn").click();

      // สร้างชื่อไฟล์ใหม่
      cy.renameNewfile('printQr', 'pdf');
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.RUNNER); // taskScreenshot
    });
  });

  context("6 Print Selected QR", () => {
    it("TS05_TC21 Print QR with select Request QR then Click at Print Selected QR", () => {
      cy.loginBankPortalPage();
      cy.wait(5000);
      cy.get(
        ".main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(6) > #qrcode > .toggle-none"
      ).click();
      cy.wait(1000);
      cy.get(".wg-body > :nth-child(1) > :nth-child(1) > input").click();
      cy.get(".wg-body > :nth-child(2) > :nth-child(1) > input").click();
      cy.get(
        ".mg-bt-10 > :nth-child(2) > .form-control > :nth-child(2)"
      ).click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.RUNNER);

      // สร้างชื่อไฟล์ใหม่
      cy.renameNewfile('print-qr', 'pdf');
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.RUNNER); // taskScreenshot
    });
  });

  context("7 Export Request QR Report", () => {
    it("TS05_TC22 Export of QR Report in Request QR page", () => {
      cy.loginBankPortalPage();
      cy.wait(5000);
      cy.get(
        ".main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(6) > #qrcode > .toggle-none"
      ).click();
      cy.wait(1000);

      cy.get("#exportexcel").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.RUNNER);
      cy.wait(3000);

      // ตรวจสอบ ชื่อไฟล์ และข้อมูลภายในไฟล์ 
      cy.validateFile(
        data.fileName,
        ['Job No.', (value) => { expect(value).to.match(/TMB_QR_Standee_/); }],
        ['MID', (value) => { expect(value).to.not.empty(); }],
        ['จำนวน QR Code', (value) => { expect(value).to.be.gte(1); }]
      );
      cy.takeScreenshotSimple(2);
    });

    it("TS05_TC23 Search by Shop name then Export of QR Report", () => {
      cy.loginBankPortalPage();
      cy.wait(5000);

      // auto enter Rquest QR menu
      cy.get('#qrcode').click({ force: true });
      cy.wait(1000);

      cy.search('search_all', data.shop);
      cy.validateText(':nth-child(4)', data.shop);
      cy.validateDownload('#exportexcel');
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.RUNNER);

      cy.validateFile(
        data.fileName,
        ['Job No.', (value) => { expect(value).to.match(/TMB_QR_Standee_/); }],
        ['MID', (value) => { expect(value).to.not.empty(); }],
        ['จำนวน QR Code', (value) => { expect(value).to.be.gte(1); }]
      );
    });

    it("TS05_TC24 Search by Request Code and date then Export of QR Report", () => {
      cy.loginBankPortalPage();
      cy.wait(5000);

      // auto enter Rquest QR menu
      cy.get('#qrcode').click({ force: true });
      cy.wait(1000);

      cy.search('search_all', data.qr);
      cy.validateText(':nth-child(3)', data.qr);
      cy.validateDownload('#exportexcel');
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.RUNNER);

      cy.validateFile(
        data.fileName,
        ['Job No.', (value) => { expect(value).to.match(/TMB_QR_Standee_/); }],
        ['MID', (value) => { expect(value).to.not.empty(); }],
        ['จำนวน QR Code', (value) => { expect(value).to.be.gte(1); }]
      );
    });

    it("TS05_TC25 Search by Date then Export of QR Report", () => {
      cy.loginBankPortalPage();
      cy.wait(5000);

      // auto enter Rquest QR menu
      cy.get('#qrcode').click({ force: true });
      cy.wait(1000);

      cy.searchDate(
        data.startDate,
        data.endDate
      );
      cy.validateDate(
        '#qrrequeststandee_date',
        data.startDate,
        data.endDate,
      );
      cy.validateDownload('#exportexcel');
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.RUNNER);

      cy.validateFile(
        data.fileName,
        ['Job No.', (value) => { expect(value).to.match(/TMB_QR_Standee_/); }],
        ['MID', (value) => { expect(value).to.not.empty(); }],
        ['จำนวน QR Code', (value) => { expect(value).to.be.gte(1); }]
      );
      cy.takeScreenshotSimple(2);
    });

    it("TS05_TC26 Search by Status and Date then Export of QR Report", () => {
      cy.loginBankPortalPage();
      cy.wait(5000);

      // auto enter Rquest QR menu
      cy.get('#qrcode').click({ force: true });
      cy.wait(1000);

      cy.searchDateStatus(
        '#status-transactionalipay',
        data.status,
        data.startDate,
        data.endDate
      );
      cy.getText('#qrrequeststandee_date');
      cy.validateDate(
        '#qrrequeststandee_date',
        data.startDate,
        data.endDate,
      );
      cy.validateText(':nth-child(5) > #qrstatus', data.status);
      cy.validateDownload('#exportexcel');
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.RUNNER);

      cy.validateFile(
        data.fileName,
        ['Job No.', (value) => { expect(value).to.match(/TMB_QR_Standee_/); }],
        ['MID', (value) => { expect(value).to.not.empty(); }],
        ['จำนวน QR Code', (value) => { expect(value).to.be.gte(1); }]
      );
    });
  });
});
