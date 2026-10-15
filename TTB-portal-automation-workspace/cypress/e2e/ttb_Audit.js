describe("Test_Scenario_07_Audit Log page", () => {
  context("1_Search Audit log", () => {
    it("TS07__TC01 Click Audit log sub-menu", () => {
      cy.loginBankPortalPage();
      cy.wait(5000);
      // cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.goGoToMenuAuditLog();
      cy.wait(5000);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.FULLPAGE); // taskScreenshot
    });

    it("TS07__TC02 Search by Username data not found", () => {
      cy.loginBankPortalPage();
      cy.wait(5000);
      cy.goGoToMenuAuditLog();
      cy.wait(5000);
      // cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.get(".form-group > .form-control").type("lipit.");
      // cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.get(".btn").click();
      cy.wait(5000);
      // cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.takeScreenshotSimple();
    });

    it("TS07__TC03 Search by Date data not found", () => {
      cy.loginBankPortalPage();
      cy.wait(5000);
      cy.goGoToMenuAuditLog();
      cy.wait(5000);
      // cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.get("#start").type("03/11/2024");
      cy.get("#end").type("03/11/2024");
      // cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.get(".btn").click();
      cy.wait(5000);
      // cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.takeScreenshotSimple();
    });

    it("TS07__TC04 Search by Role and Date data not found", () => {
      cy.loginBankPortalPage();
      cy.wait(5000);
      cy.goGoToMenuAuditLog();
      cy.wait(5000);
      // cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.get("#start").type("03/11/2024");
      cy.get("#end").type("03/11/2024");
      cy.get(
        ":nth-child(3) > .search-ref > #devicetype-transactionalipay"
      ).select("ADMIN");
      // cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.get(".btn").click();
      cy.wait(5000);
      // cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.takeScreenshotSimple();
    });

    it("TS07__TC05 Search by Module and Date data not found", () => {
      cy.loginBankPortalPage();
      cy.wait(5000);
      cy.goGoToMenuAuditLog();
      cy.wait(5000);
      // cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.get("#start").type("03/11/2024");
      cy.get("#end").type("03/11/2024");
      cy.get(
        ":nth-child(4) > .search-ref > #devicetype-transactionalipay"
      ).select("COMPANY");
      // cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.get(".btn").click();
      cy.wait(5000);
      // cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.takeScreenshotSimple();
    });

    it("TS07__TC06 Search by Username", () => {
      cy.loginBankPortalPage();
      cy.wait(5000);
      cy.goGoToMenuAuditLog();
      cy.wait(5000);
      // cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.get(".form-group > .form-control").type("TESTMERCDGOAD4");
      // cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.get(".btn").click();
      cy.wait(5000);
      // cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.takeScreenshotSimple();
    });

    it("TS07__TC07 Search by Date", () => {
      cy.loginBankPortalPage();
      cy.wait(5000);
      cy.goGoToMenuAuditLog();
      cy.wait(5000);
      // cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.get("#start").click();
      cy.get(".CalendarDay__today").click();
      cy.get(".CalendarDay__today").click();
      // cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.get(".btn").click();
      cy.wait(5000);
      // cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.takeScreenshotSimple();
    });

    it("TS07__TC08 Search by Role and Date", () => {
      cy.loginBankPortalPage();
      cy.wait(5000);
      cy.goGoToMenuAuditLog();
      cy.wait(5000);
      // cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.get("#start").click();
      cy.get(".CalendarDay__today").click();
      cy.get(".CalendarDay__today").click();
      cy.get(
        ":nth-child(3) > .search-ref > #devicetype-transactionalipay"
      ).select("ADMIN");
      // cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.get(".btn").click();
      cy.wait(5000);
      // cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.takeScreenshotSimple();
    });

    it("TS07__TC09 Search by Module and Date", () => {
      cy.loginBankPortalPage();
      cy.wait(5000);
      cy.goGoToMenuAuditLog();
      cy.wait(5000);
      // cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.get("#start").click();
      cy.get(".CalendarDay__today").click();
      cy.get(".CalendarDay__today").click();
      cy.get(
        ":nth-child(4) > .search-ref > #devicetype-transactionalipay"
      ).select("COMPANY");
      // cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.get(".btn").click();
      cy.wait(5000);
      // cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.takeScreenshotSimple();
    });
  });

  context("2 Export Audit Log", () => {
    //Start download file excel
    it("TS07_TC10 Export of Audit Log Report in Audit log page", () => {
      cy.loginBankPortalPage();
      cy.wait(5000);
      cy.goGoToMenuAuditLog();
      cy.wait(3000);
      cy.takeScreenshotSimple();
      cy.get("#exportexcel").click();

      // สร้างชื่อไฟล์ใหม่
      cy.renameNewfile("audit", "xlsx");

      // เข้าถึงค่า "filename" ที่เก็บไว้
      cy.get("@filename").then((filename) => {
        cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.RUNNER);
        cy.validateFile(filename);
      });
    });

    it("TS07_TC11	Search by Username then Export of Audit Log Report", () => {
      cy.loginBankPortalPage();
      cy.wait(5000);
      cy.goGoToMenuAuditLog();

      cy.get(".form-group > .form-control").type("TESTMERCDGOAD4");
      cy.get(".btn").click();
      cy.wait(3000);
      cy.takeScreenshotSimple();
      cy.get("#exportexcel").click();

      // สร้างชื่อไฟล์ใหม่
      cy.renameNewfile("audit", "xlsx");

      // เข้าถึงค่า "filename" ที่เก็บไว้
      cy.get("@filename").then((filename) => {
        cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.RUNNER);
        cy.validateFile(filename);
      });
    });

    it("TS07_TC12	Search by Date then Export of Audit Log Report", () => {
      cy.loginBankPortalPage();
      cy.wait(5000);
      cy.goGoToMenuAuditLog();

      cy.get("#start").click();
      cy.get(".CalendarDay__today").click();
      cy.get(".CalendarDay__today").click();
      cy.get(".btn").click();
      cy.wait(3000);
      cy.takeScreenshotSimple();
      cy.get("#exportexcel").click();

      // สร้างชื่อไฟล์ใหม่
      cy.renameNewfile("audit", "xlsx");

      // เข้าถึงค่า "filename" ที่เก็บไว้
      cy.get("@filename").then((filename) => {
        cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.RUNNER);
        cy.validateFile(filename);
      });
    });

    it("TS07_TC13	Search by Role and Date then Export of Audit Log Report", () => {
      cy.loginBankPortalPage();
      cy.wait(5000);
      cy.goGoToMenuAuditLog();

      cy.get("#start").click();
      cy.get(".CalendarDay__today").click();
      cy.get(".CalendarDay__today").click();
      cy.get(
        ":nth-child(3) > .search-ref > #devicetype-transactionalipay"
      ).select("ADMIN");
      cy.get(".btn").click();
      cy.wait(3000);
      cy.takeScreenshotSimple();
      cy.get("#exportexcel").click();

      // สร้างชื่อไฟล์ใหม่
      cy.renameNewfile("audit", "xlsx");

      // เข้าถึงค่า "filename" ที่เก็บไว้
      cy.get("@filename").then((filename) => {
        cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.RUNNER);
        cy.validateFile(filename);
      });
    });

    it("TS07_TC14 Search by Module and Date then Export of Audit Log Report", () => {
      cy.loginBankPortalPage();
      cy.wait(5000);
      cy.goGoToMenuAuditLog();

      cy.get("#start").click();
      cy.get(".CalendarDay__today").click();
      cy.get(".CalendarDay__today").click();
      cy.get(
        ":nth-child(4) > .search-ref > #devicetype-transactionalipay"
      ).select("COMPANY");
      cy.get(".btn").click();
      cy.wait(3000);
      cy.takeScreenshotSimple(); // taskScreenshot

      cy.get("#exportexcel").click();
      cy.wait(5000); // รอ 5 วินาที เพื่อให้ไฟล์ดาวน์โหลดเสร็จ

      // สร้างชื่อไฟล์ใหม่
      cy.renameNewfile("audit", "xlsx");

      // เข้าถึงค่า "filename" ที่เก็บไว้
      cy.get("@filename").then((filename) => {
        cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.RUNNER);
        cy.validateFile(filename);
      });
    });
  });
});
