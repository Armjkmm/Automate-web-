describe("Test_Scenario_04_Manage User", () => {
  // context("1 Search Manage User", () => {
  //   it("TS04 TC01 Click Manage User main-menu", () => {
  //     cy.loginBankPortalPage();
  //     cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
  //     cy.gotomenumanageuser();
  //     cy.wait(3000);
  //     cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
  //   });

  //   it("TS04 TC02 Search by Name data not found", () => {
  //     cy.loginBankPortalPage();
  //     cy.gotomenumanageuser();
  //     cy.wait(3000);
  //     cy.get(".form-group > .form-control").type("ไก่กุ๊ก ๆ ");
  //     cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
  //     cy.get(".btn").click();
  //     cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
  //   });

  //   it("TS04 TC03 Search by Email data not found", () => {
  //     cy.loginBankPortalPage();
  //     cy.gotomenumanageuser();
  //     cy.wait(3000);
  //     cy.get(".form-group > .form-control").type("kaikuk@mail.com");
  //     cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
  //     cy.get(".btn").click();
  //     cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
  //   });

  //   it("TS04 TC04 Search by Mobile no. data not found", () => {
  //     cy.loginBankPortalPage();
  //     cy.gotomenumanageuser();
  //     cy.wait(3000);
  //     cy.get(".form-group > .form-control").type("0212111212");
  //     cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
  //     cy.get(".btn").click();
  //     cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
  //   });

  //   it("TS04 TC05 Search by Date data not found", () => {
  //     cy.loginBankPortalPage();
  //     cy.gotomenumanageuser();
  //     cy.wait(3000);
  //     cy.get("#start").type("01/01/2025");
  //     cy.get("#end").type("01/01/2025");
  //     cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
  //     cy.get(".btn").click();
  //     cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
  //   });

  //   it("TS04 TC06 Search by status and Date data not found", () => {
  //     cy.loginBankPortalPage();
  //     cy.gotomenumanageuser();
  //     cy.wait(3000);
  //     cy.get("#start").type("01/01/2025");
  //     cy.get("#end").type("01/01/2025");
  //     cy.get("#status-terminal").select("ACTIVE");
  //     cy.wait(4000);
  //     cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
  //     cy.get(".btn").click();
  //     cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
  //   });

  //   it("TS04 TC07 Search by Name", () => {
  //     cy.loginBankPortalPage();
  //     cy.gotomenumanageuser();
  //     cy.wait(3000);
  //     cy.get(".form-group > .form-control").type("Stom Staff1");
  //     cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
  //     cy.get(".btn").click();
  //     cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
  //   });

  //   it("TS04 TC08 Search by Email", () => {
  //     cy.loginBankPortalPage();
  //     cy.gotomenumanageuser();
  //     cy.wait(3000);
  //     cy.get(".form-group > .form-control").type("thanongsak@digio.co.th");
  //     cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
  //     cy.get(".btn").click();
  //     cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
  //   });

  //   it("TS04 TC09 Search by Mobile no.", () => {
  //     cy.loginBankPortalPage();
  //     cy.gotomenumanageuser();
  //     cy.wait(3000);
  //     cy.get(".form-group > .form-control").type("0922692832");
  //     cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
  //     cy.get(".btn").click();
  //     cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
  //   });

  //   it("TS04 TC10 Search by Date", () => {
  //     cy.loginBankPortalPage();
  //     cy.gotomenumanageuser();
  //     cy.wait(3000);
  //     cy.get("#start").type("02/11/2024");
  //     cy.get("#end").type("02/12/2024");
  //     cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
  //     cy.get(".btn").click();
  //     cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
  //   });

  //   it("TS04 TC11 Search by status and Date", () => {
  //     cy.loginBankPortalPage();
  //     cy.gotomenumanageuser();
  //     cy.wait(3000);
  //     cy.get("#start").type("02/11/2024");
  //     cy.get("#end").type("02/12/2024");
  //     cy.get("#status-terminal").select("ACTIVE");
  //     cy.wait(4000);
  //     cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
  //     cy.get(".btn").click();
  //     cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
  //   });
  // });

  // context("2 View Detail Select User to View Detail", () => {
  //   it("TS04 TC12 Select User to View Detail", () => {
  //     cy.loginBankPortalPage();
  //     cy.gotomenumanageuser();
  //     cy.get(".dropdown-content1").first().invoke("show");
  //     cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
  //     cy.get(".dropdown-content1").contains("View Detail").click();
  //     cy.wait(3000);
  //     cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
  //   });
  // });

  // context("3 Edit User", () => {
  //   it("TS04 TC13 Select User to Edit", () => {
  //     cy.loginBankPortalPage();
  //     cy.gotomenumanageuser();
  //     cy.wait(3000);
  //     cy.get(".dropdown-content1").first().invoke("show");
  //     cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
  //     cy.get(".dropdown-content1").contains("View Detail").click();
  //     cy.wait(3000);
  //     cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
  //     cy.get(".col-md-4 > a > .fas").click();
  //     cy.wait(5000);
  //     cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
  //     //End case Select User to Edit
  //   });

  //   it("TS04 TC14 not input User detail and Click Save", () => {
  //     cy.loginBankPortalPage();
  //     cy.gotomenumanageuser();
  //     cy.wait(3000);
  //     cy.get(".dropdown-content1").first().invoke("show");
  //     cy.get(".dropdown-content1").contains("View Detail").click();
  //     cy.wait(3000);
  //     cy.get(".col-md-4 > a > .fas").click();
  //     cy.wait(5000);
  //     cy.get("#name-user").clear();
  //     cy.get("#email-user").clear();
  //     cy.get("#phone-user").clear();
  //     cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
  //     cy.get("#submit").click();
  //     cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
  //   });

  //   it("TS04 TC15 Edit User with input new data user and Click Save", () => {
  //     cy.loginBankPortalPage();
  //     cy.gotomenumanageuser();
  //     cy.wait(3000);
  //     cy.get(".dropdown-content1").first().invoke("show");
  //     cy.get(".dropdown-content1").contains("View Detail").click();
  //     cy.wait(3000);
  //     cy.get(".col-md-4 > a > .fas").click();
  //     cy.wait(5000);
  //     cy.get("#name-user").clear();
  //     cy.get("#email-user").clear();
  //     cy.get("#phone-user").clear();
  //     cy.wait(3000);
  //     cy.get("#name-user").type("test test");
  //     cy.get("#email-user").type("testwq@mail.comm");
  //     cy.get("#phone-user").type("0922692832");
  //     cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
  //     cy.get("#submit").click();
  //     cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
  //   });

  //   it("TS04 TC16 Click Comfirm in pop-up คุณต้องการยืนยันการแก้ไขข้อมูลหรือไม่", () => {
  //     cy.loginBankPortalPage();
  //     cy.gotomenumanageuser();
  //     cy.wait(3000);
  //     cy.get(".dropdown-content1").first().invoke("show");
  //     cy.get(".dropdown-content1").contains("View Detail").click();
  //     cy.wait(3000);
  //     cy.get(".col-md-4 > a > .fas").click();
  //     cy.wait(5000);
  //     cy.get("#name-user").clear();
  //     cy.get("#email-user").clear();
  //     cy.get("#phone-user").clear();
  //     cy.wait(3000);
  //     cy.get("#name-user").type("test test");
  //     cy.get("#email-user").type("testwq@mail.comm");
  //     cy.get("#phone-user").type("0922692832");
  //     cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
  //     cy.get("#submit").click();
  //     cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
  //   });

  //   it("TS04 TC17 Click Ok in pop-up แก้ไขข้อมูลสำเร็จ", () => {
  //     cy.loginBankPortalPage();
  //     cy.gotomenumanageuser();
  //     cy.wait(3000);
  //     cy.get(".dropdown-content1").first().invoke("show");
  //     cy.get(".dropdown-content1").contains("View Detail").click();
  //     cy.wait(3000);
  //     cy.get(".col-md-4 > a > .fas").click();
  //     cy.wait(5000);
  //     cy.get("#name-user").clear();
  //     cy.get("#email-user").clear();
  //     cy.get("#phone-user").clear();
  //     cy.wait(3000);
  //     cy.get("#name-user").type("test test");
  //     cy.get("#email-user").type("testwq@mail.comm");
  //     cy.get("#phone-user").type("0922692832");
  //     cy.get("#submit").click();
  //     cy.get(".swal2-confirm").click();
  //     cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
  //     cy.get(".swal2-confirm").click();
  //     cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
  //   });
  // });

  // context("4 Suspend User", () => {
  //   it("TS04 TC18 Select User to Suspend", () => {
  //     cy.loginBankPortalPage();
  //     cy.gotomenumanageuser();
  //     cy.wait(3000);
  //     cy.get(".search-ref > .form-group > .form-control").type("Bee Owner"); //เปลี่ยนชื่อ
  //     cy.get(".btn").click();
  //     cy.wait(5000);
  //     cy.get(".dropdown-content1").first().invoke("show");
  //     cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
  //     cy.get(".dropdown-content1").contains("Suspend").click();
  //     cy.wait(3000);
  //     cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
  //   });

  //   it("TS04 TC19 select reason and Input information or Not input information then Click Ok", () => {
  //     cy.loginBankPortalPage();
  //     cy.gotomenumanageuser();
  //     cy.wait(3000);
  //     cy.get(".search-ref > .form-group > .form-control").type("Bee Owner"); //เปลี่ยนชื่อ
  //     cy.get(".btn").click();
  //     cy.wait(5000);
  //     cy.get(".dropdown-content1").first().invoke("show");
  //     cy.get(".dropdown-content1").contains("Suspend").click();
  //     cy.wait(3000);
  //     cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
  //   });

  //   it("TS04 TC20 select reason and Input information then Click Ok", () => {
  //     cy.loginBankPortalPage();
  //     cy.gotomenumanageuser();
  //     cy.wait(3000);
  //     cy.get(".search-ref > .form-group > .form-control").type("Bee Owner"); //เปลี่ยนชื่อ
  //     cy.get(".btn").click();
  //     cy.wait(5000);
  //     cy.get(".dropdown-content1").first().invoke("show");
  //     cy.get(".dropdown-content1").contains("Suspend").click();
  //     cy.wait(3000);
  //     cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
  //     cy.get("#text-reason").type("Test");
  //     cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
  //     cy.get("#ok").click();
  //     cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
  //   });

  //   it("TS04 TC21 Click Ok in pop-up Suspend User Success", () => {
  //     cy.loginBankPortalPage();
  //     cy.gotomenumanageuser();
  //     cy.wait(3000);
  //     cy.get(".search-ref > .form-group > .form-control").type("Bee Owner"); //เปลี่ยนชื่อ
  //     cy.get(".btn").click();
  //     cy.wait(5000);
  //     cy.get(".dropdown-content1").first().invoke("show");
  //     cy.get(".dropdown-content1").contains("Suspend").click();
  //     cy.wait(3000);
  //     cy.get("#text-reason").type("Test");

  //     cy.get("#ok").click();
  //     cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
  //     cy.get(".swal2-confirm").click();
  //     cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
  //   });
  // });

  // context("5 Reinstate User", () => {
  //   it("TS04 TC22 Select User to Reinstate", () => {
  //     cy.loginBankPortalPage();
  //     cy.gotomenumanageuser();
  //     cy.wait(3000);
  //     cy.get(".search-ref > .form-group > .form-control").type("Bee Owner"); //เปลี่ยนชื่อ
  //     cy.get(".btn").click();
  //     cy.wait(5000);
  //     cy.get(".dropdown-content1").first().invoke("show");
  //     cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
  //     cy.get(".dropdown-content1").contains("Reinstate").click();
  //     cy.wait(3000);
  //     cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
  //   });

  //   it("TS04 TC23 Select reason and Input information or Not input information then Click Ok", () => {
  //     cy.loginBankPortalPage();
  //     cy.gotomenumanageuser();
  //     cy.wait(3000);
  //     cy.get(".search-ref > .form-group > .form-control").type("Bee Owner"); //เปลี่ยนชื่อ
  //     cy.get(".btn").click();
  //     cy.wait(5000);
  //     cy.get(".dropdown-content1").first().invoke("show");
  //     cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
  //     cy.get(".dropdown-content1").contains("Reinstate").click();
  //     cy.wait(3000);
  //     cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
  //   });

  //   it("TS04 TC24 Select reason and Input information then Click Ok", () => {
  //     cy.loginBankPortalPage();
  //     cy.gotomenumanageuser();
  //     cy.wait(3000);
  //     cy.get(".search-ref > .form-group > .form-control").type("Bee Owner"); //เปลี่ยนชื่อ
  //     cy.get(".btn").click();
  //     cy.wait(5000);
  //     cy.get(".dropdown-content1").first().invoke("show");
  //     cy.get(".dropdown-content1").contains("Reinstate").click();
  //     cy.wait(3000);
  //     cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
  //     cy.get("#text-reason").type("Test");
  //     cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
  //     cy.get("#ok").click();
  //     cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
  //   });

  //   it("TS04 TC25 Click Ok in pop-up Reinstate User Success", () => {
  //     cy.loginBankPortalPage();
  //     cy.gotomenumanageuser();
  //     cy.wait(3000);
  //     cy.get(".search-ref > .form-group > .form-control").type("Bee Owner"); //เปลี่ยนชื่อ
  //     cy.get(".btn").click();
  //     cy.wait(5000);
  //     cy.get(".dropdown-content1").first().invoke("show");
  //     cy.get(".dropdown-content1").contains("Reinstate").click();
  //     cy.wait(3000);
  //     cy.get("#text-reason").type("Test");
  //     cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
  //     cy.get("#ok").click();
  //     cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
  //     cy.get(".swal2-confirm").click();
  //     cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
  //   });
  // });

  // context("5 Terminate User", () => {
  //   it("TS04 TC26 Select User to Terminate", () => {
  //     cy.loginBankPortalPage();
  //     cy.gotomenumanageuser();
  //     cy.wait(3000);
  //     cy.get(".search-ref > .form-group > .form-control").type("Bee Owner"); //เปลี่ยนชื่อ
  //     cy.get(".btn").click();
  //     cy.wait(5000);
  //     cy.get(".dropdown-content1").first().invoke("show");
  //     cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
  //     cy.get(".dropdown-content1").contains("Terminate").click({ force: true });
  //     cy.wait(3000);
  //     cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
  //   });

  //   it("TS04 TC27 Select reason and Input information or Not input information then Click Ok", () => {
  //     cy.loginBankPortalPage();
  //     cy.gotomenumanageuser();
  //     cy.wait(3000);
  //     cy.get(".search-ref > .form-group > .form-control").type("Bee Owner"); //เปลี่ยนชื่อ
  //     cy.get(".btn").click();
  //     cy.wait(5000);
  //     cy.get(".dropdown-content1").first().invoke("show");
  //     cy.get(".dropdown-content1").contains("Terminate").click();
  //     cy.wait(3000);
  //     cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
  //   });

  //   it("TS04 TC28 Select reason and Input information then Click Ok", () => {
  //     cy.loginBankPortalPage();
  //     cy.gotomenumanageuser();
  //     cy.wait(3000);
  //     cy.get(".search-ref > .form-group > .form-control").type("Bee Owner"); //เปลี่ยนชื่อ
  //     cy.get(".btn").click();
  //     cy.wait(5000);
  //     cy.get(".dropdown-content1").first().invoke("show");
  //     cy.get(".dropdown-content1").contains("Terminate").click();
  //     cy.wait(3000);
  //     cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
  //     cy.get("#text-reason").type("Test");
  //     cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
  //     cy.get("#ok").click();
  //     cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
  //   });

  //   it("TS04 TC29 Click Ok in pop-up Terminate User Success", () => {
  //     cy.loginBankPortalPage();
  //     cy.gotomenumanageuser();
  //     cy.wait(3000);
  //     cy.get(".search-ref > .form-group > .form-control").type("Bee Owner"); //เปลี่ยนชื่อ
  //     cy.get(".btn").click();
  //     cy.wait(5000);
  //     cy.get(".dropdown-content1").first().invoke("show");
  //     cy.get(".dropdown-content1").contains("Terminate").click();
  //     cy.wait(3000);
  //     cy.get("#text-reason").type("Test");
  //     cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
  //     cy.get("#ok").click();
  //     cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
  //     cy.get(".swal2-confirm").click();
  //     cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
  //   });
  // });

  context("7 Export Excel", () => {
    // it("TS04 TC30 case Export of User in Manage User page", () => {
    //   cy.loginBankPortalPage();
    //   cy.gotomenumanageuser();
    //   cy.wait(3000);
    //   //Start case Export of User in Manage User page
    //   cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
    //   cy.get("#exportcsv").click();

    //   cy.renameNewfile("Merchantuser", "xlsx"); // สร้างชื่อไฟล์ใหม่
    //   cy.get("@filename").then((filename) => {
    //     // เข้าถึงค่า "filename" ที่เก็บไว้
    //     cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.RUNNER);
    //     cy.validateFile(filename, 1);
    //   });
    // });

    // it("TS04 TC31 Search by Name then Export of User", () => {
    //   cy.loginBankPortalPage();
    //   cy.gotomenumanageuser();
    //   cy.wait(3000);
    //   //Start case Export of User in Manage User page
    //   cy.get(".search-ref > .form-group > .form-control").type("seashop owner");
    //   cy.wait(5000);
    //   cy.get(".btn").click();
    //   cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
    //   cy.get("#exportcsv").click();
    //   cy.renameNewfile("Merchantuser", "xlsx"); // สร้างชื่อไฟล์ใหม่
    //   cy.get("@filename").then((filename) => {
    //     // เข้าถึงค่า "filename" ที่เก็บไว้
    //     cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.RUNNER);
    //     cy.validateFile(filename, 1);
    //   });
    // });

    // it("TS04 TC32 Search by Email then Export of User", () => {
    //   cy.loginBankPortalPage();
    //   cy.gotomenumanageuser();
    //   cy.wait(3000);
    //   //Start case Export of User in Manage User page
    //   cy.get(".search-ref > .form-group > .form-control").type(
    //     "thanongsak@digio.co.th"
    //   );
    //   cy.wait(5000);
    //   cy.get(".btn").click();
    //   cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
    //   cy.get("#exportcsv").click();
    //   cy.renameNewfile("Merchantuser", "xlsx"); // สร้างชื่อไฟล์ใหม่
    //   cy.get("@filename").then((filename) => {
    //     // เข้าถึงค่า "filename" ที่เก็บไว้
    //     cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.RUNNER);
    //     cy.validateFile(filename, 1);
    //   });
    // });

    // it("TS04 TC33 Search by Mobile no. then Export of User", () => {
    //   cy.loginBankPortalPage();
    //   cy.gotomenumanageuser();
    //   cy.wait(3000);
    //   //Start case Export of User in Manage User page
    //   cy.get(".search-ref > .form-group > .form-control").type("0922692832");
    //   cy.wait(5000);
    //   cy.get(".btn").click();
    //   cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
    //   cy.get("#exportcsv").click();
    //   cy.renameNewfile("Merchantuser", "xlsx"); // สร้างชื่อไฟล์ใหม่
    //   cy.get("@filename").then((filename) => {
    //     // เข้าถึงค่า "filename" ที่เก็บไว้
    //     cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.RUNNER);
    //     cy.validateFile(filename, 1);
    //   });
    // });

    // it("TS04 TC34 Search by Date then Export of User", () => {
    //   cy.loginBankPortalPage();
    //   cy.gotomenumanageuser();
    //   cy.wait(3000);
    //   //Start case Export of User in Manage User page
    //   cy.get("#start").type("25/02/2025");
    //   cy.get("#end").type("25/02/2025");
    //   cy.wait(5000);
    //   cy.get(".btn").click();
    //   cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
    //   cy.get("#exportcsv").click();
    //   cy.renameNewfile("Merchantuser", "xlsx"); // สร้างชื่อไฟล์ใหม่
    //   cy.get("@filename").then((filename) => {
    //     // เข้าถึงค่า "filename" ที่เก็บไว้
    //     cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.RUNNER);
    //     cy.validateFile(filename, 1);
    //   });
    // });

    it("TS04 TC34 Search by Date then Export of User", () => {
      cy.loginBankPortalPage();
      cy.gotomenumanageuser();
      cy.wait(3000);
      //Start case Export of User in Manage User page
      cy.get("#start").type("25/02/2025");
      cy.get("#end").type("25/02/2025");
      cy.wait(5000);
      cy.get("#status-terminal").select(1);
      cy.wait(5000);
      cy.get(".btn").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT); // taskScreenshot
      cy.get("#exportcsv").click();
      cy.renameNewfile("Merchantuser", "xlsx"); // สร้างชื่อไฟล์ใหม่
      cy.get("@filename").then((filename) => {
        // เข้าถึงค่า "filename" ที่เก็บไว้
        cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.RUNNER);
        cy.validateFile(filename, 1);
      });
    });
  });
});
