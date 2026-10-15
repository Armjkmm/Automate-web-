describe("Test_Scenario_08_Setting", () => {
  //Start Test Ju
  // it("TS08_TC01 Click General main-menu", () => {
  //   cy.loginBankPortalPage();
  //   cy.wait(5000);
  //   cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
  //   cy.get(
  //     ".main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(10) > #setting"
  //   ).click();
  //   cy.get(
  //     ".main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(10) > .nav-second-level > :nth-child(1) > #settingGeneral > div"
  //   ).click();
  //   cy.wait(3000);
  //   cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
  // });

  // it("TS08_TC02 Select Radio button Juristic Corporate then click Submit", () => {
  //   cy.loginBankPortalPage();
  //   cy.wait(5000);
  //   cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
  //   cy.get(
  //     ".main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(10) > #setting"
  //   ).click();
  //   cy.get(
  //     ".main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(10) > .nav-second-level > :nth-child(1) > #settingGeneral > div"
  //   ).click();
  //   cy.wait(3000);
  //   cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
  //   cy.get("#juristic").check();
  //   cy.get(".btn").click();
  //   cy.wait(3000);
  //   cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
  // });

  //Start Set E-mail for Monthly Transaction Product Report (Juristic/Corporate) #1
  context(
    "1 Set Settlement Real time in general page (Juristic/Corporate)",
    () => {
      //       //Start case  TS08_TC03 - TS08_TC06
      //       it("TS08", () => {
      //         cy.loginBankPortalPage();
      //         cy.wait(5000);
      //         cy.get(
      //           ".main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(10) > #setting"
      //         ).click();
      //         cy.get(
      //           ".main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(10) > .nav-second-level > :nth-child(1) > #settingGeneral > div"
      //         ).click();
      //         cy.get("#juristic").check();
      //         cy.get(".btn").click();
      //         cy.wait(3000);
      //         cy.takeScreenshotSimple(
      //           "TC03 Set Settlement with Select Radio button Real time then click button submit (1)",
      //           Cypress.ScreenshotCaptureEnum.VIEWPORT
      //         ); // taskScreenshot
      //         cy.get("#realtime").check();
      //         cy.takeScreenshotSimple(
      //           "TC03 Set Settlement with Select Radio button Real time then click button submit (2)",
      //           Cypress.ScreenshotCaptureEnum.VIEWPORT
      //         ); // taskScreenshot
      //         cy.get(
      //           ":nth-child(1) > .card > .card-block > .col-sm-3 > .form-step-phase > .btn"
      //         ).click();
      //         cy.wait(3000);
      //         cy.takeScreenshotSimple(
      //           "TC04 Click button OK (1)",
      //           Cypress.ScreenshotCaptureEnum.VIEWPORT
      //         ); // taskScreenshot
      //         cy.get(".swal2-confirm").click();
      //         cy.takeScreenshotSimple(
      //           "TC05 Click button OK (1)",
      //           Cypress.ScreenshotCaptureEnum.VIEWPORT
      //         ); // taskScreenshot
      //         cy.get(".swal2-confirm").click();
      //         cy.takeScreenshotSimple(
      //           "TC05 Click button OK (2)",
      //           Cypress.ScreenshotCaptureEnum.VIEWPORT
      //         ); // taskScreenshot
      //       });
      //  //End case  TS08_TC03 - TS08_TC06

      //   //Start case  TS08_TC07 - TS08_TC09
      //       it("TS08", () => {
      //         cy.loginBankPortalPage();
      //         cy.wait(5000);
      //         cy.get(
      //           ".main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(10) > #setting"
      //         ).click();
      //         cy.get(
      //           ".main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(10) > .nav-second-level > :nth-child(1) > #settingGeneral > div"
      //         ).click();
      //         cy.get("#juristic").check();
      //         cy.get(".btn").click();
      //         cy.wait(3000);
      //         cy.takeScreenshotSimple(
      //           "TC07 Set Settlement with Select Radio button Lump sum in Processing status (1)",
      //           Cypress.ScreenshotCaptureEnum.VIEWPORT
      //         ); // taskScreenshot
      //         cy.get("#realtime").check();
      //         cy.takeScreenshotSimple(
      //           "TC07 Set Settlement with Select Radio button Lump sum in Processing status (2)",
      //           Cypress.ScreenshotCaptureEnum.VIEWPORT
      //         ); // taskScreenshot
      //         cy.get(
      //           ":nth-child(1) > .card > .card-block > .col-sm-3 > .form-step-phase > .btn"
      //         ).click();
      //         cy.wait(3000);
      //         cy.takeScreenshotSimple(
      //           "TC08 Click button OK (1)",
      //           Cypress.ScreenshotCaptureEnum.VIEWPORT
      //         ); // taskScreenshot
      //         cy.get(".swal2-confirm").click();
      //         cy.takeScreenshotSimple(
      //           "TC09 Click button OK (1)",
      //           Cypress.ScreenshotCaptureEnum.VIEWPORT
      //         ); // taskScreenshot
      //         cy.get(".swal2-confirm").click();
      //         cy.takeScreenshotSimple(
      //           "TC09 Click button OK (2)",
      //           Cypress.ScreenshotCaptureEnum.VIEWPORT
      //         ); // taskScreenshot
      //       });
      //       //End case  TS08_TC07 - TS08_TC09

      it("TS08 TC20 Verify Settlement on web Bank Portal with select Company to View Detail", () => {
        cy.loginBankPortalPage();
        cy.get(".form-control")
          .eq(0)
          .type("ttb33G(หน่วยงานราชการแห่งชาติที่ศูนย์ห้");
        cy.get(".btn.btn-primary.mt-4").click();
        cy.get("div.dropdown-content").first().invoke("show");
        cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
        cy.get(".dropdown-content").contains("View Detail").click();
        cy.wait(1000);
        cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      });

      it("TS08 TC21 Click button Merchant name : (namemerchant) in Compamy Detail page", () => {
        cy.loginBankPortalPage();
        cy.get(".form-control")
          .eq(0)
          .type("ttb33G(หน่วยงานราชการแห่งชาติที่ศูนย์ห้");
        cy.get(".btn.btn-primary.mt-4").click();
        cy.get("div.dropdown-content").first().invoke("show");
        cy.get(".dropdown-content").contains("View Detail").click();
        cy.wait(1000);
        cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
        cy.get(".col-md-12 > .group_user_img > .group_user").click();
        cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      });

      // it("TS08_TC07 Set Settlement with Select Radio button Real time then click button submit", () => {
      //   cy.loginBankPortalPage();
      //   cy.wait(5000);
      //   cy.get(
      //     ".main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(10) > #setting"
      //   ).click();
      //   cy.get(
      //     ".main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(10) > .nav-second-level > :nth-child(1) > #settingGeneral > div"
      //   ).click();
      //   cy.get("#juristic").check();
      //   cy.get(".btn").click();
      //   cy.wait(3000);
      //   cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      //   cy.get("#lumpsum").check();
      //   cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      //   cy.get(
      //     ":nth-child(1) > .card > .card-block > .col-sm-3 > .form-step-phase > .btn"
      //   ).click();
      //   cy.wait(3000);
      //   cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      // });

      // it("TS08_TC08 Click button OK", () => {
      //   cy.loginBankPortalPage();
      //   cy.wait(5000);
      //   cy.get(
      //     ".main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(10) > #setting"
      //   ).click();
      //   cy.get(
      //     ".main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(10) > .nav-second-level > :nth-child(1) > #settingGeneral > div"
      //   ).click();
      //   cy.get("#juristic").check();
      //   cy.get(".btn").click();
      //   cy.wait(3000);
      //   cy.get("#realtime").check();
      //   cy.get(
      //     ":nth-child(1) > .card > .card-block > .col-sm-3 > .form-step-phase > .btn"
      //   ).click();
      //   cy.wait(3000);
      //   cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      //   cy.get(".swal2-confirm").click()
      //   cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      // });

      // it("TS08_TC09 Click button OK", () => {
      //   cy.loginBankPortalPage();
      //   cy.wait(5000);
      //   cy.get(
      //     ".main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(10) > #setting"
      //   ).click();
      //   cy.get(
      //     ".main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(10) > .nav-second-level > :nth-child(1) > #settingGeneral > div"
      //   ).click();
      //   cy.get("#juristic").check();
      //   cy.get(".btn").click();
      //   cy.wait(3000);
      //   cy.get("#realtime").check();
      //   cy.get(
      //     ":nth-child(1) > .card > .card-block > .col-sm-3 > .form-step-phase > .btn"
      //   ).click();
      //   cy.wait(3000);
      //   cy.get(".swal2-confirm").click()
      //   cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      //   cy.get(".swal2-confirm").click()
      //   cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot

      // cy.takeScreenshotSimple("6", Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      // cy.contains(
      //   "กำลังทำรายการ settlement ร้านค้านิติบุคคล กรุณาทำรายการใหม่ภายหลัง"
      // );
      // cy.get(".swal2-confirm").click();
      // cy.takeScreenshotSimple("7", Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
    }
  );

  //End Set E-mail for Monthly Transaction Product Report (Juristic/Corporate) #1

  //     // //Start Set E-mail for Monthly Transaction Product Report (Juristic/Corporate) #2
  //     // it("TS08_", () => {
  //     //   cy.loginBankPortalPage();
  //     //   cy.wait(5000);
  //     //   cy.get(
  //     //     ".main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(10) > #setting"
  //     //   ).click();
  //     //   cy.get(
  //     //     ".main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(10) > .nav-second-level > :nth-child(1) > #settingGeneral > div"
  //     //   ).click();
  //     //   cy.get("#juristic").check();
  //     //   cy.get(".btn").click();
  //     //   cy.wait(3000);
  //     //   cy.get("#realtime").check();
  //     //   //   cy.get("#lumpsum").check();
  //     //   cy.get(
  //     //     ":nth-child(1) > .card > .card-block > .col-sm-3 > .form-step-phase > .btn"
  //     //   ).click();
  //     //   cy.get(".swal2-confirm").click();
  //     //   cy.contains(
  //     //     "กำลังทำรายการ settlement ร้านค้านิติบุคคล กรุณาทำรายการใหม่ภายหลัง"
  //     //   );
  //     //   cy.get(".swal2-confirm").click();
  //     // });
  //     // //End Set E-mail for Monthly Transaction Product Report (Juristic/Corporate)  #2

  //     // //Start set show free
  //     // it("TS08_", () => {
  //     //   cy.loginBankPortalPage();
  //     //   cy.wait(5000);
  //     //   cy.get(
  //     //     ".main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(10) > #setting"
  //     //   ).click();
  //     //   cy.get(
  //     //     ".main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(10) > .nav-second-level > :nth-child(1) > #settingGeneral > div"
  //     //   ).click();
  //     //   cy.get("#juristic").check();
  //     //   cy.get(".btn").click();
  //     //   cy.wait(3000);
  //     //   //   cy.get("#showFeeJuristic").check();
  //     //   cy.get("#hideFeeJuristic").check();
  //     //   cy.get(
  //     //     ":nth-child(2) > .card > .card-block > .col-sm-3 > .form-step-phase > .btn"
  //     //   ).click();
  //     //   cy.get(".swal2-confirm").click();
  //     //   cy.get(".swal2-confirm").click();
  //     //   cy.wait(5000);
  //     // });

  //     // //End set show free

  //     // //Start set mail
  //     // it("TS08_", () => {
  //     //   cy.loginBankPortalPage();
  //     //   cy.get(
  //     //     ".main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(10) > #setting"
  //     //   ).click();
  //     //   cy.get(
  //     //     ".main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(10) > .nav-second-level > :nth-child(1) > #settingGeneral > div"
  //     //   ).click();
  //     //   cy.get("#juristic").check();
  //     //   cy.get(".btn").click();
  //     //   cy.wait(4000);
  //     //   cy.get(
  //     //     ":nth-child(2) > .form-control > :nth-child(2) > .margintag"
  //     //   ).click();
  //     //   cy.get(
  //     //     ":nth-child(3) > .form-control > :nth-child(2) > .margintag"
  //     //   ).click();
  //     //   cy.get(
  //     //     ":nth-child(5) > .form-control > :nth-child(2) > .margintag"
  //     //   ).click();
  //     //   cy.get(
  //     //     ":nth-child(6) > .form-control > :nth-child(2) > .margintag"
  //     //   ).click();
  //     //   cy.get(
  //     //     ":nth-child(8) > .form-control > :nth-child(2) > .margintag"
  //     //   ).click();
  //     //   cy.get(
  //     //     ":nth-child(9) > .form-control > :nth-child(2) > .margintag"
  //     //   ).click();
  //     //   cy.wait(2000);
  //     //   cy.get("#email_1").type("thanongsak@mail.com{enter}");
  //     //   cy.get("#email_2").type("thanongsak@mail.com{enter}");
  //     //   cy.get("#email_3").type("thanongsak@mail.com{enter}");
  //     //   cy.get("#email_4").type("thanongsak@mail.com{enter}");
  //     //   cy.get("#email_5").type("thanongsak@mail.com{enter}");
  //     //   cy.get("#email_6").type("thanongsak@mail.com{enter}");
  //     //   cy.get(".col-sm-11 > .form-step-phase > .btn").click();
  //     //   cy.get(".swal2-confirm").click();
  //     //   cy.get(".swal2-confirm").click();
  //     //   cy.wait(5000);
  //     // });
  //     // //End set mail

  //     // //Start test non-ju

  //     // it("TS08_", () => {
  //     //   cy.loginBankPortalPage();
  //     //   cy.wait(5000);
  //     //   cy.get(
  //     //     ".main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(10) > #setting"
  //     //   ).click();
  //     //   cy.get(
  //     //     ".main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(10) > .nav-second-level > :nth-child(1) > #settingGeneral > div"
  //     //   ).click();
  //     //   cy.get("#non_juristic").check();
  //     //   cy.get(".btn").click();
  //     //   cy.wait(3000);
  //     //   cy.get("#realtime").check();
  //     //   //   cy.get("#lumpsum").check();
  //     //   cy.get(
  //     //     ":nth-child(1) > .card > .card-block > .col-sm-3 > .form-step-phase > .btn"
  //     //   ).click();
  //     //   cy.get(".swal2-confirm").click();
  //     //   cy.contains(
  //     //     "กำลังทำรายการ settlement ร้านค้าบุคคลธรรมดา กรุณาทำรายการใหม่ภายหลัง"
  //     //   );
  //     //   cy.get(".swal2-confirm").click();
  //     // });
  //     // // //End settlement

  //     // //Start set show free
  //     // it("TS08_", () => {
  //     //   cy.loginBankPortalPage();
  //     //   cy.wait(5000);
  //     //   cy.get(
  //     //     ".main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(10) > #setting"
  //     //   ).click();
  //     //   cy.get(
  //     //     ".main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(10) > .nav-second-level > :nth-child(1) > #settingGeneral > div"
  //     //   ).click();
  //     //   cy.get("#non_juristic").check();
  //     //   cy.get(".btn").click();
  //     //   cy.wait(3000);
  //     //   //   cy.get("#showFeeNonJuristic").check();
  //     //   cy.get("#hideFeeNonJuristic").check();
  //     //   cy.get(
  //     //     ":nth-child(2) > .card > .card-block > .col-sm-3 > .form-step-phase > .btn"
  //     //   ).click();
  //     //   cy.get(".swal2-confirm").click();
  //     //   cy.get(".swal2-confirm").click();
  //     //   cy.wait(5000);
  //     // });

  //     // //End set show free

  //     // //Start Set Maximum request QR (Non juristic/Retail)
  //     // it("TS08_", () => {
  //     //   cy.loginBankPortalPage();
  //     //   cy.wait(5000);
  //     //   cy.get(
  //     //     ".main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(10) > #setting"
  //     //   ).click();
  //     //   cy.get(
  //     //     ".main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(10) > .nav-second-level > :nth-child(1) > #settingGeneral > div"
  //     //   ).click();
  //     //   cy.get("#non_juristic").check();
  //     //   cy.get(".btn").click();
  //     //   cy.wait(3000);
  //     //   cy.get(":nth-child(2) > :nth-child(2) > .form-control").clear();
  //     //   cy.wait(2000);
  //     //   cy.get(":nth-child(2) > :nth-child(2) > .form-control").type(2);
  //     //   cy.wait(5000);
  //     //   cy.get(":nth-child(4) > .form-control").clear();
  //     //   cy.wait(2000);
  //     //   cy.get(":nth-child(4) > .form-control").type("10");
  //     //   cy.wait(5000);
  //     //   cy.get(
  //     //     ":nth-child(3) > .card > .card-block > .col-sm-3 > .form-step-phase > .btn"
  //     //   ).click();

  //     //   cy.get(".swal2-confirm").click();
  //     //   cy.get(".swal2-confirm").click();
  //     //   cy.wait(5000);
  //     //   // });

  //     //   //End Set Maximum request QR (Non juristic/Retail)

  //     //   //Start Set % SD (Standard deviation) in Monthly Transaction Report)

  //     //   it("TS08_", () => {
  //     //     cy.loginBankPortalPage();
  //     //     cy.wait(5000);
  //     //     cy.get(
  //     //       ".main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(10) > #setting"
  //     //     ).click();
  //     //     cy.get(
  //     //       ".main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(10) > .nav-second-level > :nth-child(1) > #settingGeneral > div"
  //     //     ).click();
  //     //     cy.get("#non_juristic").check();
  //     //     cy.get(".btn").click();
  //     //     cy.wait(3000);
  //     //     cy.get(
  //     //       ":nth-child(4) > .card > .card-block > .col-sm-9 > :nth-child(2) > .col-sm-12 > .form-control"
  //     //     ).clear();
  //     //     cy.wait(2000);
  //     //     cy.get(
  //     //       ":nth-child(4) > .card > .card-block > .col-sm-9 > :nth-child(2) > .col-sm-12 > .form-control"
  //     //     ).type("70");
  //     //     cy.wait(5000);
  //     //     cy.get(
  //     //       ":nth-child(4) > .card > .card-block > .col-sm-3 > .form-step-phase > .btn"
  //     //     ).click();
  //     //     cy.get(".swal2-confirm").click();
  //     //     cy.get(".swal2-confirm").click();
  //     //     cy.wait(5000);
  //     //   });
  //     //   //End Set % SD (Standard deviation) in Monthly Transaction Report

  //     //   //Start Set E-mail for Settlement Failed (Non Juristic/Retail)
  //     //   it("TS08_01-TS08_TC012", () => {
  //     //     cy.loginBankPortalPage();
  //     //     cy.wait(5000);
  //     //     cy.get(
  //     //       ".main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(10) > #setting"
  //     //     ).click();
  //     //     cy.get(
  //     //       ".main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(10) > .nav-second-level > :nth-child(1) > #settingGeneral > div"
  //     //     ).click();
  //     //     cy.get("#non_juristic").check();
  //     //     cy.get(".btn").click();
  //     //     cy.wait(4000);
  //     //     cy.get(
  //     //       ":nth-child(2) > .form-control > :nth-child(2) > .margintag"
  //     //     ).click();
  //     //     cy.get(
  //     //       ":nth-child(3) > .form-control > :nth-child(2) > .margintag"
  //     //     ).click();
  //     //     cy.get(
  //     //       ":nth-child(5) > .form-control > :nth-child(2) > .margintag"
  //     //     ).click();
  //     //     cy.get(
  //     //       ":nth-child(6) > .form-control > :nth-child(2) > .margintag"
  //     //     ).click();
  //     //     cy.get(
  //     //       ":nth-child(8) > .form-control > :nth-child(2) > .margintag"
  //     //     ).click();
  //     //     cy.get(
  //     //       ":nth-child(9) > .form-control > :nth-child(2) > .margintag"
  //     //     ).click();
  //     //     cy.get(
  //     //       ":nth-child(11) > .form-control > :nth-child(2) > .margintag"
  //     //     ).click();
  //     //     cy.get(
  //     //       ":nth-child(12) > .form-control > :nth-child(2) > .margintag"
  //     //     ).click();
  //     //     cy.get(
  //     //       ":nth-child(14) > .form-control > :nth-child(2) > .margintag"
  //     //     ).click();
  //     //     cy.get(
  //     //       ":nth-child(15) > .form-control > :nth-child(2) > .margintag"
  //     //     ).click();
  //     //     cy.get(
  //     //       ":nth-child(17) > .form-control > :nth-child(2) > .margintag"
  //     //     ).click();
  //     //     cy.get(
  //     //       ":nth-child(18) > .form-control > :nth-child(2) > .margintag"
  //     //     ).click();
  //     //     cy.wait(2000);

  //     //     cy.get("#email_1").type("thanongsak@mail.com{enter}");
  //     //     cy.get("#email_2").type("thanongsak@mail.com{enter}");
  //     //     cy.get("#email_3").type("thanongsak@mail.com{enter}");
  //     //     cy.get("#email_4").type("thanongsak@mail.com{enter}");
  //     //     cy.get("#email_5").type("thanongsak@mail.com{enter}");
  //     //     cy.get("#email_6").type("thanongsak@mail.com{enter}");
  //     //     cy.get("#email_7").type("thanongsak@mail.com{enter}");
  //     //     cy.get("#email_8").type("thanongsak@mail.com{enter}");
  //     //     cy.get("#email_9").type("thanongsak@mail.com{enter}");
  //     //     cy.get("#email_10").type("thanongsak@mail.com{enter}");
  //     //     cy.get(".col-sm-11 > .form-step-phase > .btn").click();
  //     //     cy.get(".swal2-confirm").click();
  //     //     cy.get(".swal2-confirm").click();
  //     //     cy.wait(5000);
  //     //   });
  //     //   //End Set E-mail for Settlement Failed (Non Juristic/Retail)
  //     // });
  //     // //End test non-ju
  //   });
});
