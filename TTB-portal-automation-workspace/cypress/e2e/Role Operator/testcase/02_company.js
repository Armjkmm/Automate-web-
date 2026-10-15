const { isThisHour } = require("date-fns");

describe("Company", () => {
  beforeEach(() => {
    // auto login to enter portal page
    cy.smartShopWebPortal(
      Cypress.env("OPERATOR_USERNAME"),
      Cypress.env("OPERATOR_PASSWORD")
    );
  });

  context("1 Search All Companies", () => {
    it("TS02_TC01 Click All Companies sub-menu", () => {
      cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS02_TC02 Search by Name data not found", () => {
      cy.get(".form-control").eq(0).type("nameeapppp");
      cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".btn.btn-primary.mt-4").click();
      cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("Data Not Found.");
    });
    it("TS02_03 Search by Tax ID data not found", () => {
      cy.get(".form-control").eq(0).type("Tax00000000");
      cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".btn.btn-primary.mt-4").click();
      cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("Data Not Found.");
    });
    it("TS02_04 Search by Ac No data not found", () => {
      cy.get(".form-control").eq(0).type("0000000000000000000");
      cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".btn.btn-primary.mt-4").click();
      cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("Data Not Found.");
    });
    it("TS02_05 Search by MID data not found", () => {
      cy.get(".form-control").eq(0).type("111111111111111");
      cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".btn.btn-primary.mt-4").click();
      cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("Data Not Found.");
    });
    it("TS02_06 Search by Start Date and End Date not found", () => {
      cy.get('input[id="start"]').type("12/10/2024");
      cy.get('input[id="end"]').type("12/10/2024");
      cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".btn.btn-primary.mt-4").click();
      cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("Data Not Found.");
    });
    it("TS02_07 Search by Status and Date not found", () => {
      cy.get('input[id="start"]').type("05/10/2024");
      cy.get('input[id="end"]').type("06/10/2024");
      cy.status("SUSPENDED");
      cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".btn.btn-primary.mt-4").click();
      cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("Data Not Found.");
    });
    it("TS02_08 Search by Name ", () => {
      cy.get(".form-control").eq(0).type("Cupcake and Daino");
      cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".btn.btn-primary.mt-4").click();
      cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS02_09 Search by Tax ID  ", () => {
      cy.get(".form-control").eq(0).type("2536378396487");
      cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".btn.btn-primary.mt-4").click();
      cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS02_10 Search by Ac No", () => {
      cy.get(".form-control").eq(0).type("1331000301");
      cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".btn.btn-primary.mt-4").click();
      cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS02_11 Search by MID  ", () => {
      cy.get(".form-control").eq(0).type("862849671217935");
      cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".btn.btn-primary.mt-4").click();
      cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS02_12 Search by Start Date and End Date ", () => {
      cy.get('input[id="start"]').type("01/10/2024");
      cy.get('input[id="end"]').type("10/10/2024");
      cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".btn.btn-primary.mt-4").click();
      cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.wait(2000);
    });
    it("TS02_13 Search by Status and Date ", () => {
      cy.get('input[id="start"]').type("01/10/2024");
      cy.get('input[id="end"]').type("10/10/2024");
      cy.status("ACTIVE");
      cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".btn.btn-primary.mt-4").click();
      cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.wait(2000);
    });
  });
  context("2 View Detail", () => {
    it("TS02_TC14 Select Company to View Detail ", () => {
      cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("div.dropdown-content").first().invoke("show");
      cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".dropdown-content").contains("View Detail").click();
      cy.takeScreenshotSimple("3", Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
  });

  context("3 Edit Company in Compamy Detail page", () => {
    let editNameCompay = "Testtttt";
    it("TS02_TC15 Click icon pencil in Compamy Detail page", () => {
      cy.get(".form-control").eq(0).type(editNameCompay);
      cy.wait(3000);
      cy.get(".btn.btn-primary.mt-4").click();
      cy.wait(3000);
      cy.get("div.dropdown-content").first().invoke("show");
      cy.wait(3000);
      cy.get(".dropdown-content").contains("View Detail").click();
      cy.wait(3000);
      cy.get(".text-center > .fas").click();
      cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.wait(3000);
    });
    it("TS02_TC16 Edit Company with input new data detail company", () => {
      cy.get(".form-control").eq(0).type(editNameCompay);
      cy.wait(3000);
      cy.get(".btn.btn-primary.mt-4").click();
      cy.wait(3000);
      cy.get("div.dropdown-content").first().invoke("show");
      cy.wait(3000);
      cy.get(".dropdown-content").contains("View Detail").click();
      cy.wait(3000);
      cy.get(".text-center > .fas").click();
      cy.wait(3000);
      cy.get("#edit_company_name").type("Testtttt");
      cy.wait(3000);
      ////Start clear ค่าในช่อง
      cy.get("#edit_company_name").clear();
      cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      //End clear ค่าในช่อง
      cy.wait(3000);
      cy.get("#edit_company_name").type("Test");
      cy.wait(5000);
      cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".btn").click();
      cy.takeScreenshotSimple("3", Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS02_TC17 Click Yes in pop-up คุณยืนยันการแก้ไขข้อมูลหรือไม่", () => {
      cy.get(".form-control").eq(0).type(editNameCompay);
      cy.wait(3000);
      cy.get(".btn.btn-primary.mt-4").click();
      cy.wait(3000);
      cy.get("div.dropdown-content").first().invoke("show");
      cy.wait(3000);
      cy.get(".dropdown-content").contains("View Detail").click();
      cy.wait(3000);
      cy.get(".text-center > .fas").click();
      cy.wait(3000);
      cy.get('input[id="edit_company_name"]').type("Testtt");
      cy.wait(3000);
      //Start clear ค่าในช่อง
      cy.get("#edit_company_name").clear();
      //End clear ค่าในช่อง
      cy.wait(3000);
      cy.get("#edit_company_name").type("Testtttt");
      cy.wait(5000);
      cy.get(".btn").click();
      cy.wait(3000);
      cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".ml-1 > .btn");
      cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS02_TC18 Click Ok in pop-up แก้ไขสำเร็จ", () => {
      cy.get(".form-control").eq(0).type(editNameCompay);
      cy.wait(3000);
      cy.get(".btn.btn-primary.mt-4").click();
      cy.wait(3000);
      cy.get("div.dropdown-content").first().invoke("show");
      cy.wait(3000);
      cy.get(".dropdown-content").contains("View Detail").click();
      cy.wait(3000);
      cy.get(".text-center > .fas").click();
      cy.wait(3000);
      cy.get('input[id="edit_company_name"]').type("Test by Arm");
      cy.wait(3000);
      //Start clear ค่าในช่อง
      cy.get("#edit_company_name").clear();
      //End clear ค่าในช่อง
      cy.wait(3000);
      cy.get("#edit_company_name").type("Testtttt");
      cy.wait(5000);
      cy.get(".btn").click();
      cy.wait(3000);
      cy.get(".ml-1 > .btn").click();
      cy.wait(3000);
      cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".text-center > .btn").click();
      cy.wait(3000);
      cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
  });

  context("4 Relationship in Compamy Detail page", () => {
    it("TS02_TC19 Press cilck Relationship in Compamy Detail page", () => {
      cy.get(".form-control").eq(0).type("Cupcake and Daino");
      cy.get(".btn.btn-primary.mt-4").click();
      cy.get("div.dropdown-content").first().invoke("show");
      cy.get(".dropdown-content").contains("View Detail").click();
      cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.wait(2000);
      cy.get(".tabs-main > .nav > :nth-child(2) > .nav-link").click();
      cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
  });

  context("5 Invite User in Compamy Detail page", () => {
    it("TS02_TC20 Cilck + Invite User in Compamy Detail page", () => {
      cy.get(".form-control").eq(0).type("Cupcake and Daino");
      cy.get(".btn.btn-primary.mt-4").click();
      cy.get("div.dropdown-content").first().invoke("show");
      cy.get(".dropdown-content").contains("View Detail").click();
      cy.get(".text-center > .fas").click();
      cy.wait(3000);
      cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".col-md-3 > a").contains("+ Invite User").click();
      cy.wait(1000);
      cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS02_TC21 Manage user with Not input email and not select role", () => {
      cy.get(".form-control").eq(0).type("Cupcake and Daino");
      cy.get(".btn.btn-primary.mt-4").click();
      cy.get("div.dropdown-content").first().invoke("show");
      cy.get(".dropdown-content").contains("View Detail").click();
      cy.get(".text-center > .fas").click();
      cy.wait(3000);
      cy.get(".col-md-3 > a").contains("+ Invite User").click();
      cy.wait(1000);
      cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".btn.btn-success").click();
      cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS02_TC22 Manage user with Input invalid email and not select role then click button OK", () => {
      cy.get(".form-control").eq(0).type("Cupcake and Daino");
      cy.get(".btn.btn-primary.mt-4").click();
      cy.get("div.dropdown-content").first().invoke("show");
      cy.get(".dropdown-content").contains("View Detail").click();
      cy.get(".text-center > .fas").click();
      cy.wait(3000);
      cy.get(".col-md-3 > a").contains("+ Invite User").click();
      cy.wait(1000);
      cy.get("#email").type("thanongsak");
      cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".btn.btn-success").click();
      cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS02_TC23 Manage user with Input valid email and not select role then click button OK", () => {
      cy.get(".form-control").eq(0).type("Cupcake and Daino");
      cy.get(".btn.btn-primary.mt-4").click();
      cy.get("div.dropdown-content").first().invoke("show");
      cy.get(".dropdown-content").contains("View Detail").click();
      cy.get(".text-center > .fas").click();
      cy.wait(3000);
      cy.get(".col-md-3 > a").contains("+ Invite User").click();
      cy.wait(1000);
      cy.get("#email").type("thanongsak@digio.co.th");
      cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".btn.btn-success").click();
      cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS02_TC24 Manage user with Select role and not input email then click button OK", () => {
      cy.get(".form-control").eq(0).type("Cupcake and Daino");
      cy.get(".btn.btn-primary.mt-4").click();
      cy.get("div.dropdown-content").first().invoke("show");
      cy.get(".dropdown-content").contains("View Detail").click();
      cy.get(".text-center > .fas").click();
      cy.wait(3000);
      cy.get(".col-md-3 > a").contains("+ Invite User").click();
      cy.wait(1000);
      cy.get(":nth-child(1) > .border-role2 > label.bank-user > img").click();
      cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".btn.btn-success").click();
      cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS02_TC25 Manage user with Input invalid email and select role Admin Staff then click button OK", () => {
      cy.get(".form-control").eq(0).type("Cupcake and Daino");
      cy.get(".btn.btn-primary.mt-4").click();
      cy.get("div.dropdown-content").first().invoke("show");
      cy.get(".dropdown-content").contains("View Detail").click();
      cy.get(".text-center > .fas").click();
      cy.wait(3000);
      cy.get(".col-md-3 > a").contains("+ Invite User").click();
      cy.wait(1000);
      cy.get("#email").type("thanongsak@digio.co.th");
      cy.get(":nth-child(2) > .border-role2 > label.bank-user").click();
      cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".btn.btn-success").click();
      cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS02_TC26 Manage user with Input valid email and select role Owner Duplicate data in system then click button OK **ในกรณีร้านค้ามี Owner อยู่ในร้านอยู่แล้ว", () => {
      cy.get(".form-control").eq(0).type("Cupcake and Daino");
      cy.get(".btn.btn-primary.mt-4").click();
      cy.get("div.dropdown-content").first().invoke("show");
      cy.get(".dropdown-content").contains("View Detail").click();
      cy.get(".text-center > .fas").click();
      cy.wait(3000);
      cy.get(".col-md-3 > a").contains("+ Invite User").click();
      cy.wait(1000);
      cy.get("#email").type("thanongsak@digio.co.th");
      cy.get(":nth-child(1) > .border-role2 > label.bank-user > img").click();
      cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".btn.btn-success").click();
      cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });

    let caseDupliCateMerChant = "mee shop"; //แก้ไขชื่อร้านเพื่อ เชิญ Owner เข้าร้านค้า
    it("TS02_TC27 Manage user with Input valid email and select role Owner then click button OK", () => {
      cy.get(".form-control").eq(0).type(caseDupliCateMerChant);
      cy.get(".btn.btn-primary.mt-4").click();
      cy.get("div.dropdown-content").first().invoke("show");
      cy.get(".dropdown-content").contains("View Detail").click();
      cy.get(".text-center > .fas").click();
      cy.wait(3000);
      cy.get(".col-md-4 > a").contains("+ Invite User").click();
      cy.wait(1000);
      cy.get("#email").type("thanongsak@digio.co.th");
      cy.get(":nth-child(1) > .border-role2 > label.bank-user > img").click();
      cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".btn.btn-success").click();
      cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS02_TC28 Click OK in pop-up ยืนยันการส่ง Activation Code ไปยังอีเมล์ของ Owner", () => {
      cy.get(".form-control").eq(0).type(caseDupliCateMerChant);
      cy.get(".btn.btn-primary.mt-4").click();
      cy.get("div.dropdown-content").first().invoke("show");
      cy.get(".dropdown-content").contains("View Detail").click();
      cy.get(".text-center > .fas").click();
      cy.wait(3000);
      cy.get(".col-md-4 > a").contains("+ Invite User").click();
      cy.wait(1000);
      cy.get("#email").type("thanongsak@digio.co.th");
      cy.get(":nth-child(1) > .border-role2 > label.bank-user > img").click();
      cy.get(".btn.btn-success").click();
      cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(
        ".modal-dialog > .modal-content > .modal-body > :nth-child(1) > .text-right > .row > :nth-child(3) > .btn"
      )
        .eq(1)
        .click({ multiple: true });
      cy.wait(5000);
      cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".text-center > .btn").click();
      cy.wait(5000);
    });
    it("TS02_TC29 Manage users by entering a valid duplicate email and selecting the Owner role, then click the OK button", () => {
      cy.get(".form-control").eq(0).type(caseDupliCateMerChant);
      cy.get(".btn.btn-primary.mt-4").click();
      cy.get("div.dropdown-content").first().invoke("show");
      cy.get(".dropdown-content").contains("View Detail").click();
      cy.get(".text-center > .fas").click();
      cy.wait(3000);
      cy.get(".col-md-4 > a").contains("+ Invite User").click();
      cy.wait(1000);
      cy.get("#email").type("thanongsak@digio.co.th");
      cy.get(":nth-child(1) > .border-role2 > label.bank-user > img").click();
      cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".btn.btn-success").click();
      cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.wait(5000);
    });
    it("TS02_TC30 Click OK in pop-up ส่งรหัสเปิดใช้งานให้ผู้ใช้สําเร็จ", () => {
      let newMerChantName = "tee shop";

      cy.get(".form-control").eq(0).type(newMerChantName); //New Mercahnt Name
      cy.get(".btn.btn-primary.mt-4").click();
      cy.get("div.dropdown-content").first().invoke("show");
      cy.get(".dropdown-content").contains("View Detail").click();
      cy.get(".text-center > .fas").click();
      cy.wait(3000);
      cy.get(".col-md-4 > a").contains("+ Invite User").click();
      cy.wait(1000);
      cy.get("#email").type("thanongsak@digio.co.th");
      cy.get(":nth-child(1) > .border-role2 > label.bank-user > img").click();
      cy.get(".btn.btn-success").click();
      cy.get(
        ".modal-dialog > .modal-content > .modal-body > :nth-child(1) > .text-right > .row > :nth-child(3) > .btn"
      ).click({ force: true });
      cy.get(".btn.btn-success").eq(1).click();
      cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".text-center > .btn").click();
      cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
  });

  context(
    "6 Change Owner in Compamy Detail page  Remove user from company ",
    () => {
      let searchCompanyCaseremoveUserFromCompany = "Cupcake and Daino";
      it("TS02_TC31 Click Change Owner in Compamy Detail page", () => {
        cy.get(".form-control")
          .eq(0)
          .type(searchCompanyCaseremoveUserFromCompany);
        cy.get(".btn.btn-primary.mt-4").click();
        cy.get("div.dropdown-content").first().invoke("show");
        cy.get(".dropdown-content").contains("View Detail").click();
        cy.wait(1000);
        cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get(".text-center-top_2 > :nth-child(4) > a").click();
        cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      });

      it("TS02_TC32 Change owner witn not input Email or Username and cilck button OK in pop-up Change owner", () => {
        cy.get(".form-control")
          .eq(0)
          .type(searchCompanyCaseremoveUserFromCompany);
        cy.get(".btn.btn-primary.mt-4").click();
        cy.get("div.dropdown-content").first().invoke("show");
        cy.get(".dropdown-content").contains("View Detail").click();
        cy.get(".text-center-top_2 > :nth-child(4) > a").click();
        cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get(":nth-child(3) > .btn").click();
        cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      });

      let removeUserFromCompany = "nnaphaschakorn@digio.co.th";
      it("TS02_TC33 Change owner witn input Email or Username and Select Remove from company then cilck button OK", () => {
        cy.get(".form-control")
          .eq(0)
          .type(searchCompanyCaseremoveUserFromCompany);
        cy.get(".btn.btn-primary.mt-4").click();
        cy.get("div.dropdown-content").first().invoke("show");
        cy.get(".dropdown-content").contains("View Detail").click();
        cy.get(".text-center-top_2 > :nth-child(4) > a").click();
        cy.get("#emailUsername").type(removeUserFromCompany);
        cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get(":nth-child(3) > .btn").click();
        cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      });

      it("TS02_TC34 Click Confirm in pop-up คุณต้องการยืนยันการแก้ไขข้อมูลหรือไม่ ?", () => {
        cy.get(".form-control")
          .eq(0)
          .type(searchCompanyCaseremoveUserFromCompany);
        cy.get(".btn.btn-primary.mt-4").click();
        cy.get("div.dropdown-content").first().invoke("show");
        cy.get(".dropdown-content").contains("View Detail").click();
        cy.get(".text-center-top_2 > :nth-child(4) > a").click();
        cy.get("#emailUsername").type(removeUserFromCompany);
        cy.get(":nth-child(3) > .btn").click();
        cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get(".swal2-confirm").click();
        cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      });
    }
  );

  context("7 Change Owner in Compamy Detail page ( Change role user )", () => {
    let searchCompanyCaseChangUserFromCompany = "Bever Shop";
    it("TS02_TC35 Click Change Owner in Compamy Detail page", () => {
      cy.get(".form-control").eq(0).type(searchCompanyCaseChangUserFromCompany);
      cy.get(".btn.btn-primary.mt-4").click();
      cy.get("div.dropdown-content").first().invoke("show");
      cy.get(".dropdown-content").contains("View Detail").click();
      cy.wait(1000);
      cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".text-center-top_2 > :nth-child(4) > a").click();
      cy.get(
        ":nth-child(5) > .row > .col-sm-12 > :nth-child(3) > input"
      ).click();
      cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS02_TC36 Change owner witn not input Email or Username and cilck button OK in pop-up Change owner", () => {
      cy.get(".form-control").eq(0).type(searchCompanyCaseChangUserFromCompany);
      cy.get(".btn.btn-primary.mt-4").click();
      cy.get("div.dropdown-content").first().invoke("show");
      cy.get(".dropdown-content").contains("View Detail").click();
      cy.get(".text-center-top_2 > :nth-child(4) > a").click();
      cy.get(
        ":nth-child(5) > .row > .col-sm-12 > :nth-child(3) > input"
      ).click();
      cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(":nth-child(3) > .btn").click();
      cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    let changeUserFromCompany1 = "Bever Owner";
    it("TS02_TC37 Change owner witn input Email or Username and Change role then cilck button OK", () => {
      cy.get(".form-control").eq(0).type(searchCompanyCaseChangUserFromCompany);
      cy.get(".btn.btn-primary.mt-4").click();
      cy.get("div.dropdown-content").first().invoke("show");
      cy.get(".dropdown-content").contains("View Detail").click();
      cy.get(".text-center-top_2 > :nth-child(4) > a").click();
      cy.get(
        ":nth-child(2) > .row > .col-sm-12 > :nth-child(3) > input"
      ).click();
      cy.get("#emailUsername").type(changeUserFromCompany1);
      cy.get(
        ":nth-child(5) > .row > .col-sm-12 > :nth-child(3) > input"
      ).click();
      cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(":nth-child(3) > .btn").click();
      cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS02_TC38 Change owner witn input Email or Username and Change role then cilck button OK", () => {
      cy.get(".form-control").eq(0).type(searchCompanyCaseChangUserFromCompany);
      cy.get(".btn.btn-primary.mt-4").click();
      cy.get("div.dropdown-content").first().invoke("show");
      cy.get(".dropdown-content").contains("View Detail").click();
      cy.get(".text-center-top_2 > :nth-child(4) > a").click();
      cy.get(
        ":nth-child(2) > .row > .col-sm-12 > :nth-child(3) > input"
      ).click();
      cy.get("#emailUsername").type(changeUserFromCompany1);
      cy.get(
        ":nth-child(5) > .row > .col-sm-12 > :nth-child(3) > input"
      ).click();
      cy.get(":nth-child(3) > .btn").click();
      cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".swal2-confirm").click();
      cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS02_TC39 Click OK in pop-up ทำรายการสำเร็จ", () => {
      let searchCompanyCaseChangUserFromCompany2 = "Cat Shop";
      let changeUserFromCompany2 = "Cat Owner";

      cy.get(".form-control")
        .eq(0)
        .type(searchCompanyCaseChangUserFromCompany2);
      cy.get(".btn.btn-primary.mt-4").click();
      cy.get("div.dropdown-content").first().invoke("show");
      cy.get(".dropdown-content").contains("View Detail").click();
      cy.get(".text-center-top_2 > :nth-child(4) > a").click();
      cy.get(
        ":nth-child(2) > .row > .col-sm-12 > :nth-child(3) > input"
      ).click();
      cy.get("#emailUsername").type(changeUserFromCompany2);
      cy.get(
        ":nth-child(5) > .row > .col-sm-12 > :nth-child(3) > input"
      ).click();
      cy.get(":nth-child(3) > .btn").click();
      cy.get(".swal2-confirm").click();
      cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".swal2-confirm").click();
      cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
  });

  context("Merchant list in Compamy Detail page", () => {
    it("TS02_TC40 Click button Merchant name : (namemerchant) in Compamy Detail page", () => {
      cy.get(".form-control").eq(0).type("Cupcake and Daino");
      cy.get(".btn.btn-primary.mt-4").click();
      cy.get("div.dropdown-content").first().invoke("show");
      cy.get(".dropdown-content").contains("View Detail").click();
      cy.wait(1000);
      cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".col-md-12 > .group_user_img > .group_user").click();
      cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
  });

  context("8 Merchant in Merchant Detail page", () => {
    let searchCompanyCaseInMerchantDetail = "mee shop";
    it("TS02_TC41 Click icon pencil in Merchant detail page", () => {
      cy.get(".form-control").eq(0).type(searchCompanyCaseInMerchantDetail);
      cy.get(".btn.btn-primary.mt-4").click();
      cy.get("div.dropdown-content").first().invoke("show");
      cy.get(".dropdown-content").contains("View Detail").click();
      cy.wait(3000);
      cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".col-md-12 > .group_user_img > .group_user").click();
      cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });

    it("TS02_TC42 Merchant Edit with click button Refresh in Merchant edit page", () => {
      cy.get(".form-control").eq(0).type(searchCompanyCaseInMerchantDetail);
      cy.get(".btn.btn-primary.mt-4").click();
      cy.get("div.dropdown-content").first().invoke("show");
      cy.get(".dropdown-content").contains("View Detail").click();
      cy.wait(3000);
      cy.get(".col-md-12 > .group_user_img > .group_user").click();
      cy.get(".text-center > .fas").click();
      cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".col-sm-4 > .btn").click();
      cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });

    it("TS02_TC43 Merchant Edit with not enter MID name then click bottom Save", () => {
      cy.get(".form-control").eq(0).type(searchCompanyCaseInMerchantDetail);
      cy.get(".btn.btn-primary.mt-4").click();
      cy.get("div.dropdown-content").first().invoke("show");
      cy.get(".dropdown-content").contains("View Detail").click();
      cy.wait(3000);
      cy.get(".col-md-12 > .group_user_img > .group_user").click();
      cy.get(".text-center > .fas").click();
      cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#midname").clear();
      cy.get("#accountamail").clear();
      cy.wait(3000);
      cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".text-right > .btn").click();
      cy.takeScreenshotSimple("3", Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });

    it("TS02_TC44 Merchant Edit with enter Detail Merchant then click bottom Save", () => {
      cy.get(".form-control").eq(0).type(searchCompanyCaseInMerchantDetail);
      cy.get(".btn.btn-primary.mt-4").click();
      cy.get("div.dropdown-content").first().invoke("show");
      cy.get(".dropdown-content").contains("View Detail").click();
      cy.wait(3000);
      cy.get(".col-md-12 > .group_user_img > .group_user").click();
      cy.get(".text-center > .fas").click();
      cy.get("#midname").clear();
      cy.get("#accountamail").clear();
      cy.wait(3000);
      cy.get("#midname").type("Testtttt");
      cy.get("#accountamail").type("test@mail.com");
      cy.wait(3000);
      cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".text-right > .btn").click();
      cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });

    it("TS02_TC45 Click OK in pop-up Edit Company SUCCESS", () => {
      cy.get(".form-control").eq(0).type(searchCompanyCaseInMerchantDetail);
      cy.get(".btn.btn-primary.mt-4").click();
      cy.get("div.dropdown-content").first().invoke("show");
      cy.get(".dropdown-content").contains("View Detail").click();
      cy.wait(3000);
      cy.get(".col-md-12 > .group_user_img > .group_user").click();
      cy.get(".text-center > .fas").click();
      cy.get(".text-right > .btn").click();
      cy.wait(5000);
      cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".swal2-confirm").click();
      cy.wait(5000);
      cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
  });

  context(
    "9 Set Settlement Real time or Lump sum in Merchant detail page",
    () => {
      it("TS02_TC46 Click button Merchant name : (namemerchant) in Compamy Detail page", () => {
        cy.get(".form-control").eq(0).type("Cupcake and Daino");
        cy.wait(5000);
        cy.get(".btn.btn-primary.mt-4").click();
        cy.get("div.dropdown-content").first().invoke("show");
        cy.get(".dropdown-content").contains("View Detail").click();
        cy.wait(3000);
        cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get(".col-md-12 > .group_user_img > .group_user").click();
        cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      });
      it("TS02_TC47 Set settlement Real time/Lump sum with Click icon pencil in  Merchant detail page", () => {
        cy.get(".form-control").eq(0).type("Cupcake and Daino");
        cy.wait(5000);
        cy.get(".btn.btn-primary.mt-4").click();
        cy.get("div.dropdown-content").first().invoke("show");
        cy.get(".dropdown-content").contains("View Detail").click();
        cy.wait(3000);
        cy.get(".col-md-12 > .group_user_img > .group_user").click();
        cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get(".text-center > .fas").click();
        cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      });
      it("TS02_TC48 Set settlement Real time or Lump sum with  Select Radio button Real time then Click button Save", () => {
        cy.get(".form-control").eq(0).type("Cupcake and Daino");
        cy.wait(5000);
        cy.get(".btn.btn-primary.mt-4").click();
        cy.get("div.dropdown-content").first().invoke("show");
        cy.get(".dropdown-content").contains("View Detail").click();
        cy.wait(3000);
        cy.get(".col-md-12 > .group_user_img > .group_user").click();
        cy.get(".text-center > .fas").click();
        cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
        //Start check radio button
        cy.get('input[name="NORMAL"], input[name="LUMPSUM"]').then(
          ($inputs) => {
            const normalInput = $inputs.filter("#NORMAL");
            const lumpsumInput = $inputs.filter("#LUMPSUM");
            if (normalInput.is(":checked")) {
              //Toggle to LUMPSUM if NORMAL is checked
              cy.wrap(lumpsumInput).check();
            } else if (lumpsumInput.is(":checked")) {
              //Toggle to NORMAL if LUMPSUM is checked
              cy.wrap(normalInput).check();
            }
          }
        );
        //End check radio button
        cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.wait(5000);
        cy.get(".text-right > .btn").click();
        cy.takeScreenshotSimple("3", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      });
      it("TS02_TC49 Click OK in pop-up Edit Company SUCCESS", () => {
        cy.get(".form-control").eq(0).type("Cupcake and Daino");
        cy.wait(5000);
        cy.get(".btn.btn-primary.mt-4").click();
        cy.get("div.dropdown-content").first().invoke("show");
        cy.get(".dropdown-content").contains("View Detail").click();
        cy.wait(3000);
        cy.get(".col-md-12 > .group_user_img > .group_user").click();
        cy.get(".text-center > .fas").click();
        //Start check radio button
        cy.get('input[name="NORMAL"], input[name="LUMPSUM"]').then(
          ($inputs) => {
            const normalInput = $inputs.filter("#NORMAL");
            const lumpsumInput = $inputs.filter("#LUMPSUM");
            if (normalInput.is(":checked")) {
              //Toggle to LUMPSUM if NORMAL is checked
              cy.wrap(lumpsumInput).check();
            } else if (lumpsumInput.is(":checked")) {
              //Toggle to NORMAL if LUMPSUM is checked
              cy.wrap(normalInput).check();
            }
          }
        );
        //End check radio button

        cy.wait(5000);
        cy.get(".text-right > .btn").click();
        cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get(".swal2-confirm").click();
        cy.wait(5000);
        cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      });
      it("TS02_TC50 Verify Settlement on web Bank Portal with select Company to View Detail ", () => {
        cy.get(".form-control").eq(0).type("Cupcake and Daino");
        cy.wait(5000);
        cy.get(".btn.btn-primary.mt-4").click();
        cy.get("div.dropdown-content").first().invoke("show");
        cy.get(".dropdown-content").contains("View Detail").click();
        cy.wait(3000);
        cy.get(".col-md-12 > .group_user_img > .group_user").click();
        cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get(".text-center > .fas").click();
        cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      });
    }
  );

  context("10 Payment Service in Merchant Detail page", () => {
    it("TS02_TC54 Click Payment Service in Merchant edit page", () => {
      cy.get(".form-control").eq(0).type("mee shop");
      cy.wait(5000);
      cy.get(".btn.btn-primary.mt-4").click();
      cy.get("div.dropdown-content").first().invoke("show");
      cy.wait(2000);
      cy.get(".dropdown-content").contains("View Detail").click();
      cy.wait(5000);
      cy.get(".col-md-12 > .group_user_img > .group_user").click();
      cy.get(".text-center > .fas").click();
      cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".tabs-main > .nav > :nth-child(3) > .nav-link").click();
      cy.wait(3000);
      cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS02_TC55 Click button Add Payment Service", () => {
      cy.get(".form-control").eq(0).type("mee shop");
      cy.wait(5000);
      cy.get(".btn.btn-primary.mt-4").click();
      cy.get("div.dropdown-content").first().invoke("show");
      cy.wait(2000);
      cy.get(".dropdown-content").contains("View Detail").click();
      cy.wait(5000);
      cy.get(".col-md-12 > .group_user_img > .group_user").click();
      cy.get(".text-center > .fas").click();
      cy.get(".tabs-main > .nav > :nth-child(3) > .nav-link").click();
      cy.wait(3000);
      cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#addpayment").click();
      cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS02_TC56 Click button Add in pop-up Add Payment Sercive", () => {
      cy.get(".form-control").eq(0).type("mee shop");
      cy.wait(5000);
      cy.get(".btn.btn-primary.mt-4").click();
      cy.get("div.dropdown-content").first().invoke("show");
      cy.wait(2000);
      cy.get(".dropdown-content").contains("View Detail").click();
      cy.wait(5000);
      cy.get(".col-md-12 > .group_user_img > .group_user").click();
      cy.get(".text-center > .fas").click();
      cy.get(".tabs-main > .nav > :nth-child(3) > .nav-link").click();
      cy.wait(3000);
      cy.get("#addpayment").click();
      cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#addalipay").click();
      cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS02_TC57 Not input payment method data", () => {
      cy.get(".form-control").eq(0).type("mee shop");
      cy.wait(5000);
      cy.get(".btn.btn-primary.mt-4").click();
      cy.get("div.dropdown-content").first().invoke("show");
      cy.wait(2000);
      cy.get(".dropdown-content").contains("View Detail").click();
      cy.wait(5000);
      cy.get(".col-md-12 > .group_user_img > .group_user").click();
      cy.get(".text-center > .fas").click();
      cy.get(".tabs-main > .nav > :nth-child(3) > .nav-link").click();
      cy.wait(3000);
      cy.get("#addpayment").click();
      cy.get("#addalipay").click();
      cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#ok").click();
      cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS02_TC58 input payment method data", () => {
      cy.get(".form-control").eq(0).type("mee shop");
      เปลี่ยนร้าน;
      cy.wait(5000);
      cy.get(".btn.btn-primary.mt-4").click();
      cy.get("div.dropdown-content").first().invoke("show");
      cy.wait(2000);
      cy.get(".dropdown-content").contains("View Detail").click();
      cy.wait(5000);
      cy.get(".col-md-12 > .group_user_img > .group_user").click();
      cy.get(".text-center > .fas").click();
      cy.get(".tabs-main > .nav > :nth-child(3) > .nav-link").click();
      cy.wait(3000);
      cy.get("#addpayment").click();
      cy.get("#addalipay").click();
      cy.get("#mirMID").select(1);
      cy.get("#mirLimitAmount").type("10000");
      cy.get("#mdrMIDValue").type("12");
      cy.wait(4000);
      cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#ok").click();
      cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS02_TC59 Click button OK in pop-up Success", () => {
      cy.get(".form-control").eq(0).type("fee shop");
      เปลี่ยนร้าน;
      cy.wait(5000);
      cy.get(".btn.btn-primary.mt-4").click();
      cy.get("div.dropdown-content").first().invoke("show");
      cy.wait(2000);
      cy.get(".dropdown-content").contains("View Detail").click();
      cy.wait(5000);
      cy.get(".col-md-12 > .group_user_img > .group_user").click();
      cy.get(".text-center > .fas").click();
      cy.get(".tabs-main > .nav > :nth-child(3) > .nav-link").click();
      cy.wait(3000);
      cy.get("#addpayment").click();
      cy.get("#addalipay").click();
      cy.get("#mirMID").select(1);
      cy.get("#mirLimitAmount").type("10000");
      cy.get("#mdrMIDValue").type("12");
      cy.wait(4000);
      cy.get("#ok").click();
      cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".swal2-confirm").click();
      cy.wait(5000);
      cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
  });

  context("11 Terminal in Merchant detail page", () => {
    it("TS02_TC60 Click Terminal in Merchant detail page", () => {
      cy.get(".form-control").eq(0).type("test noti web portal");
      cy.wait(5000);
      cy.get(".btn.btn-primary.mt-4").click();
      cy.get("div.dropdown-content").first().invoke("show");
      cy.wait(4000);
      cy.get(".dropdown-content").contains("View Detail").click();
      cy.wait(5000);
      cy.get(".col-md-12 > .group_user_img > .group_user").click();
      cy.wait(5000);
      cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".tabs-main > .nav > :nth-child(2) > .nav-link").click();
      cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS02_TC61 Search by TID data not found", () => {
      cy.get(".form-control").eq(0).type("test noti web portal");
      cy.wait(5000);
      cy.get(".btn.btn-primary.mt-4").click();
      cy.get("div.dropdown-content").first().invoke("show");
      cy.wait(4000);
      cy.get(".dropdown-content").contains("View Detail").click();
      cy.wait(5000);
      cy.get(".col-md-12 > .group_user_img > .group_user").click();
      cy.wait(5000);
      cy.get(".tabs-main > .nav > :nth-child(2) > .nav-link").click();
      cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".form-group > .form-control").clear();
      cy.get(".form-group > .form-control").type("12222");
      cy.get(".btn").click();
      cy.contains("Data Not Found. ");
      cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.RUNNER);
    });
    it("TS02_TC62 Search by Start Date and End Date not found", () => {
      cy.get(".form-control").eq(0).type("test noti web portal");
      cy.wait(5000);
      cy.get(".btn.btn-primary.mt-4").click();
      cy.get("div.dropdown-content").first().invoke("show");
      cy.wait(4000);
      cy.get(".dropdown-content").contains("View Detail").click();
      cy.wait(5000);
      cy.get(".col-md-12 > .group_user_img > .group_user").click();
      cy.wait(5000);
      cy.get(".tabs-main > .nav > :nth-child(2) > .nav-link").click();
      cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#start").type("02/11/2024");
      cy.get("#end").type("02/11/2024");
      cy.get(".btn").click();
      cy.contains("Data Not Found. ");
      cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.RUNNER);
    });
    it("TS02_TC63 Search by Status data not found", () => {
      cy.get(".form-control").eq(0).type("test noti web portal");
      cy.wait(5000);
      cy.get(".btn.btn-primary.mt-4").click();
      cy.get("div.dropdown-content").first().invoke("show");
      cy.wait(4000);
      cy.get(".dropdown-content").contains("View Detail").click();
      cy.wait(5000);
      cy.get(".col-md-12 > .group_user_img > .group_user").click();
      cy.wait(5000);
      cy.get(".tabs-main > .nav > :nth-child(2) > .nav-link").click();
      cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#status").select(2);
      cy.get(".btn").click();
      cy.contains("Data Not Found. ");
      cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.RUNNER);
    });
    it("TS02_TC64 Search by TID", () => {
      cy.get(".form-control").eq(0).type("test noti web portal");
      cy.wait(5000);
      cy.get(".btn.btn-primary.mt-4").click();
      cy.get("div.dropdown-content").first().invoke("show");
      cy.wait(4000);
      cy.get(".dropdown-content").contains("View Detail").click();
      cy.wait(5000);
      cy.get(".col-md-12 > .group_user_img > .group_user").click();
      cy.wait(5000);
      cy.get(".tabs-main > .nav > :nth-child(2) > .nav-link").click();
      cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".form-group > .form-control").clear();
      cy.get(".form-group > .form-control").type("86242969");
      cy.get(".btn").click();
      cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS02_TC65 Search by Start Date and End Date", () => {
      cy.get(".form-control").eq(0).type("test noti web portal");
      cy.wait(5000);
      cy.get(".btn.btn-primary.mt-4").click();
      cy.get("div.dropdown-content").first().invoke("show");
      cy.wait(4000);
      cy.get(".dropdown-content").contains("View Detail").click();
      cy.wait(5000);
      cy.get(".col-md-12 > .group_user_img > .group_user").click();
      cy.wait(5000);
      cy.get(".tabs-main > .nav > :nth-child(2) > .nav-link").click();
      cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#start").type("28/10/2024");
      cy.get("#end").type("02/11/2024");
      cy.get(".btn").click();
      cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS02_TC66 Search by Status", () => {
      cy.get(".form-control").eq(0).type("test noti web portal");
      cy.wait(5000);
      cy.get(".btn.btn-primary.mt-4").click();
      cy.get("div.dropdown-content").first().invoke("show");
      cy.wait(4000);
      cy.get(".dropdown-content").contains("View Detail").click();
      cy.wait(5000);
      cy.get(".col-md-12 > .group_user_img > .group_user").click();
      cy.wait(5000);
      cy.get(".tabs-main > .nav > :nth-child(2) > .nav-link").click();
      cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#status").select(1);
      cy.get(".btn").click();
      cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.RUNNER);
    });
  });

  let companySuspendAndReinstateAndTerminateAndTerminate = "Bever Shop"; //เปลี่ยนชื่อร้านในการเทส Suspend , Reinstate , Terminate
  context("12 Suspend  Company", () => {
    it("TS02_TC67 Select Company to Suspend", () => {
      cy.get(".form-control")
        .eq(0)
        .type(companySuspendAndReinstateAndTerminateAndTerminate);
      cy.wait(5000);
      cy.get(".btn.btn-primary.mt-4").click();
      cy.get("div.dropdown-content").first().invoke("show");
      cy.wait(3000);
      cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".dropdown-content").contains("Suspend").click({ force: true });
      cy.wait(3000);
      cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS02_TC68 Select reason and In put information or Not input information then Click Ok", () => {
      cy.get(".form-control")
        .eq(0)
        .type(companySuspendAndReinstateAndTerminateAndTerminate);
      cy.wait(5000);
      cy.get(".btn.btn-primary.mt-4").click();
      cy.get("div.dropdown-content").first().invoke("show");
      cy.wait(3000);
      cy.get(".dropdown-content").contains("Suspend").click({ force: true });
      cy.wait(3000);
      cy.get("#reason").select(2);
      cy.get("#text-reason").type("Test");
      cy.wait(5000);
      cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#ok").click();
      cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS02_TC69 Click Ok in pop-up alert Are you srue ? Do you want Suspend Company ?", () => {
      cy.get(".form-control")
        .eq(0)
        .type(companySuspendAndReinstateAndTerminateAndTerminate);
      cy.wait(5000);
      cy.get(".btn.btn-primary.mt-4").click();
      cy.get("div.dropdown-content").first().invoke("show");
      cy.wait(3000);
      cy.get(".dropdown-content").contains("Suspend").click({ force: true });
      cy.wait(3000);
      cy.get("#reason").select(2);
      cy.get("#text-reason").type("Test");
      cy.wait(5000);
      cy.get("#ok").click();
      cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".swal2-confirm").click();
      cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".swal2-confirm").click();
      cy.wait(5000);
      cy.get(".btn.btn-primary.mt-4").click();
      cy.get("div.dropdown-content").first().invoke("show");
      cy.wait(3000);
      cy.get(".dropdown-content").contains("Reinstate").click({ force: true });
      cy.wait(3000);
      cy.get("#text-reason").type("Test");
      cy.wait(3000);
      cy.get("#ok").click();
      cy.get(".swal2-confirm").click();
      cy.get(".swal2-confirm").click();
    });
    it("TS02_TC70 Click Ok in pop-up Suspend Company Success", () => {
      cy.get(".form-control")
        .eq(0)
        .type(companySuspendAndReinstateAndTerminateAndTerminate);
      cy.wait(5000);
      cy.get(".btn.btn-primary.mt-4").click();
      cy.get("div.dropdown-content").first().invoke("show");
      cy.wait(3000);
      cy.get(".dropdown-content").contains("Suspend").click({ force: true });
      cy.wait(3000);
      cy.get("#reason").select(2);
      cy.get("#text-reason").type("Test");
      cy.wait(5000);
      cy.get("#ok").click();
      cy.get(".swal2-confirm").click();
      cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".swal2-confirm").click();
      cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("div.dropdown-content").first().invoke("show");
      cy.wait(3000);
      cy.get(".dropdown-content")
        .contains("View Detail")
        .click({ force: true });
      cy.wait(3000);
    });
    it("TS02_TC71 Verify action by in view details page", () => {
      cy.get(".form-control")
        .eq(0)
        .type(companySuspendAndReinstateAndTerminateAndTerminate);
      cy.wait(5000);
      cy.get(".btn.btn-primary.mt-4").click();
      cy.get("div.dropdown-content").first().invoke("show");
      cy.wait(3000);
      cy.get(".dropdown-content")
        .contains("View Detail")
        .click({ force: true });
      cy.wait(3000);
      cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
  });

  context("Reinstate  Company", () => {
    it("TS02 TC72 Select Company to Reinstate", () => {
      cy.get(".form-control")
        .eq(0)
        .type(companySuspendAndReinstateAndTerminateAndTerminate);
      cy.wait(5000);
      cy.get(".btn.btn-primary.mt-4").click();
      cy.get("div.dropdown-content").first().invoke("show");
      cy.wait(3000);
      cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".dropdown-content").contains("Reinstate").click({ force: true });
      cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS02 TC73 Select reason and In put information or Not input information then Click Ok", () => {
      cy.get(".form-control")
        .eq(0)
        .type(companySuspendAndReinstateAndTerminateAndTerminate);
      cy.wait(5000);
      cy.get(".btn.btn-primary.mt-4").click();
      cy.get("div.dropdown-content").first().invoke("show");
      cy.wait(3000);
      cy.get(".dropdown-content").contains("Reinstate").click({ force: true });
      cy.get("#reason").select(2);
      cy.get("#text-reason").type("Test");
      cy.wait(2000);
      cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#ok").click();
      cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS02 TC74 Click Ok in pop-up alert Are you srue ? , Do you want Reinstate Company ?", () => {
      cy.get(".form-control")
        .eq(0)
        .type(companySuspendAndReinstateAndTerminateAndTerminate);
      cy.wait(5000);
      cy.get(".btn.btn-primary.mt-4").click();
      cy.get("div.dropdown-content").first().invoke("show");
      cy.wait(3000);
      cy.get(".dropdown-content").contains("Reinstate").click({ force: true });
      cy.get("#reason").select(2);
      cy.get("#text-reason").type("Test");
      cy.wait(2000);
      cy.get("#ok").click();
      cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".swal2-confirm").click();
      cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".swal2-confirm").click();
      cy.get("div.dropdown-content").first().invoke("show");
      cy.wait(3000);
      cy.get(".dropdown-content").contains("Suspend").click({ force: true });
      cy.get("#reason").select(2);
      cy.get("#text-reason").type("Test");
      cy.wait(2000);
      cy.get("#ok").click();
      cy.get(".swal2-confirm").click();
      cy.get(".swal2-confirm").click();
      cy.wait(5000);
    });
    it("TS02 TC75 Click Ok in pop-up Restate Company Success", () => {
      cy.get(".form-control")
        .eq(0)
        .type(companySuspendAndReinstateAndTerminateAndTerminate);
      cy.wait(5000);
      cy.get(".btn.btn-primary.mt-4").click();
      cy.get("div.dropdown-content").first().invoke("show");
      cy.wait(3000);
      cy.get(".dropdown-content").contains("Reinstate").click({ force: true });
      cy.get("#reason").select(2);
      cy.get("#text-reason").type("Test");
      cy.wait(2000);
      cy.get("#ok").click();
      cy.get(".swal2-confirm").click();
      cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".swal2-confirm").click();
      cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS02 TC76 Verify action by in view details page", () => {
      cy.get(".form-control")
        .eq(0)
        .type(companySuspendAndReinstateAndTerminateAndTerminate);
      cy.wait(5000);
      cy.get(".btn.btn-primary.mt-4").click();
      cy.get("div.dropdown-content").first().invoke("show");
      cy.wait(3000);
      cy.get(".dropdown-content")
        .contains("View Detail")
        .click({ force: true });
      cy.get(3000);
      cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
  });

  context("14 Terminate  Company", () => {
    it("TS02 TC77 Select Company to Terminate", () => {
      cy.get(".form-control")
        .eq(0)
        .type(companySuspendAndReinstateAndTerminateAndTerminate); //เปลี่ยนชื่อ Company
      cy.wait(5000);
      cy.get(".btn.btn-primary.mt-4").click();
      cy.get("div.dropdown-content").first().invoke("show");
      cy.wait(5000);
      cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".dropdown-content").contains("Terminate").click({ force: true });
      cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS02 TC78 Select reason and In put information or Not input information then Click Ok", () => {
      cy.get(".form-control")
        .eq(0)
        .type(companySuspendAndReinstateAndTerminateAndTerminate); //เปลี่ยนชื่อ Company
      cy.wait(5000);
      cy.get(".btn.btn-primary.mt-4").click();
      cy.get("div.dropdown-content").first().invoke("show");
      cy.wait(5000);
      cy.get(".dropdown-content").contains("Terminate").click({ force: true });
      cy.get("#reason").select(1);
      cy.get("#text-reason").type("Test");
      cy.wait(2000);
      cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#ok");
      cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS02 TC79 Click Ok in pop-up Terminate Company Success", () => {
      cy.get(".form-control")
        .eq(0)
        .type(companySuspendAndReinstateAndTerminateAndTerminate); //เปลี่ยนชื่อ Company
      cy.wait(5000);
      cy.get(".btn.btn-primary.mt-4").click();
      cy.get("div.dropdown-content").first().invoke("show");
      cy.wait(5000);
      cy.get(".dropdown-content").contains("Terminate").click({ force: true });
      cy.get("#reason").select(1);
      cy.get("#text-reason").type("Test");
      cy.wait(2000);
      cy.get("#ok").click();
      cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".swal2-confirm").click();
      cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS02 TC80 Verify action by in view details page", () => {
      cy.get(".form-control")
        .eq(0)
        .type(companySuspendAndReinstateAndTerminateAndTerminate); //เปลี่ยนชื่อ Company
      cy.wait(5000);
      cy.get(".btn.btn-primary.mt-4").click();
      cy.get("div.dropdown-content").first().invoke("show");
      cy.wait(5000);
      cy.get(".dropdown-content")
        .contains("View Detail")
        .click({ force: true });
      cy.wait(5000);
      cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
  });

  context("15 Export Company Report", () => {
    it("TS02 TC81 Export of Company Report in All Companies page", () => {
      cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#exportexcel").click();
      // สร้างชื่อไฟล์ใหม่
      cy.renameNewfile("company", "xlsx");

      // เข้าถึงค่า "filename" ที่เก็บไว้
      cy.get("@filename").then((filename) => {
        cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.RUNNER);
        cy.validateFile(filename, 1);
      });
    });

    it("TS02 TC82 Search by Name then Export of Company Report", () => {
      cy.get(".form-control").eq(0).type("gee shop"); //เปลี่ยนชื่อ Company
      cy.wait(5000);
      cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".btn.btn-primary.mt-4").click();
      cy.wait(3000);
      cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#exportexcel").click();
      // สร้างชื่อไฟล์ใหม่
      cy.renameNewfile("company", "xlsx");

      // เข้าถึงค่า "filename" ที่เก็บไว้
      cy.get("@filename").then((filename) => {
        cy.takeScreenshotSimple("3", Cypress.ScreenshotCaptureEnum.RUNNER);
        cy.validateFile(filename, 1);
      });
    });

    it("TS02 TC83 Search by Tax ID then Export of Company Report", () => {
      cy.get(".form-control").eq(0).type("3301298354856"); //เปลี่ยนชื่อ Company
      cy.wait(5000);
      cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".btn.btn-primary.mt-4").click();
      cy.wait(3000);
      cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#exportexcel").click();
      // สร้างชื่อไฟล์ใหม่
      cy.renameNewfile("company", "xlsx");

      // เข้าถึงค่า "filename" ที่เก็บไว้
      cy.get("@filename").then((filename) => {
        cy.takeScreenshotSimple("3", Cypress.ScreenshotCaptureEnum.RUNNER);
        cy.validateFile(filename, 1);
      });
    });

    it("TS02 TC84 Search by Ac No then Export of Company Report", () => {
      cy.get(".form-control").eq(0).type("2311009654"); //เปลี่ยนชื่อ Company
      cy.wait(5000);
      cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".btn.btn-primary.mt-4").click();
      cy.wait(3000);
      cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#exportexcel").click();
      // สร้างชื่อไฟล์ใหม่
      cy.renameNewfile("company", "xlsx");

      // เข้าถึงค่า "filename" ที่เก็บไว้
      cy.get("@filename").then((filename) => {
        cy.takeScreenshotSimple("3", Cypress.ScreenshotCaptureEnum.RUNNER);
        cy.validateFile(filename, 1);
      });
    });

    it("TS02 TC85 Search by MID then Export of Company Report", () => {
      cy.get(".form-control").eq(0).type("862843292381878"); //เปลี่ยนชื่อ Company
      cy.wait(5000);
      cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".btn.btn-primary.mt-4").click();
      cy.wait(3000);
      cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#exportexcel").click();
      cy.renameNewfile("company", "xlsx");

      // เข้าถึงค่า "filename" ที่เก็บไว้
      cy.get("@filename").then((filename) => {
        cy.takeScreenshotSimple("3", Cypress.ScreenshotCaptureEnum.RUNNER);
        cy.validateFile(filename, 1);
      });
    });

    it("TS02 TC86 Search by Start Date and End Date then Export of Company Report", () => {
      cy.get("#start").type("25/03/2025");
      cy.get("#end").type("28/03/2025");
      cy.wait(5000);
      cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".btn.btn-primary.mt-4").click();
      cy.wait(3000);
      cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#exportexcel").click();
      cy.renameNewfile("company", "xlsx");

      // เข้าถึงค่า "filename" ที่เก็บไว้
      cy.get("@filename").then((filename) => {
        cy.takeScreenshotSimple("3", Cypress.ScreenshotCaptureEnum.RUNNER);
        cy.validateFile(filename, 1);
      });
    });

    it("TS02 TC87 Search Search by Status and Date", () => {
      cy.get("#start").type("24/02/2025");
      cy.get("#end").type("26/02/2025");
      cy.wait(5000);
      cy.get("#status").select(1);
      cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".btn.btn-primary.mt-4").click();
      cy.wait(3000);
      cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#exportexcel").click();
      // สร้างชื่อไฟล์ใหม่
      cy.renameNewfile("company", "xlsx");

      // เข้าถึงค่า "filename" ที่เก็บไว้
      cy.get("@filename").then((filename) => {
        cy.takeScreenshotSimple("3", Cypress.ScreenshotCaptureEnum.RUNNER);
        cy.validateFile(filename, 1);
      });
    });

    function goToApprovalCompany() {
      cy.get(
        ".main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(2) > #company"
      ).click();
      cy.get(
        ".main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(2) > .nav-second-level > :nth-child(3) > #approvalCompany > div"
      ).click();
    }

    context("16 Create Company ttb", () => {
      function goTo_crateCompany() {
        cy.get("#company").click({ force: true });
        cy.get("#createCompanyTMB").click({ force: true });
        cy.wait(3000);
      }

      it("TS02_TC99 Click Create Company ttb sub-menu", () => {
        goTo_crateCompany();
        cy.url().should("include", "/company/tmb/create");
        cy.contains("Create Company");
        cy.takeScreenshotSimple();
      });

      it("TS02_TC100 Create Company with Search Biller ID and not input Prefix", () => {
        goTo_crateCompany();
        cy.get("#Next-create").click();
        cy.takeScreenshotSimple();
      });

      it("TS02_TC101 Create Company with Search invalid Biller ID and input Prefix", () => {
        goTo_crateCompany();
        cy.get("#provinces").select(data.billerID);
        cy.get("#prefixNo").type(data.prefix_dup);
        cy.get("#Next-create").click();
        cy.contains("Biller ID ร้านค้าไม่ถูกต้อง").should("be.visible");
        cy.takeScreenshotSimple();
      });

      it("TS02_TC102 Create Company with Search Biller ID and input invalid Prefix", () => {
        goTo_crateCompany();
        cy.get("#prefixNo").type(data.prefix_notFound);
        cy.get("#Next-create").click();
        cy.contains("Subbiller ID ร้านค้าไม่ถูกต้อง").should("be.visible");
        cy.takeScreenshotSimple();
      });

      it("TS02_TC103 Create Company with Search Biller ID and input Prefix Duplicate", () => {
        goTo_crateCompany();
        cy.get("#prefixNo").type(data.prefix_dup);
        cy.get("#Next-create").click();
        cy.contains("หมายเลขร้านค้าซ้ำ กรุณากรอกใหม่อีกครั้ง").should(
          "be.visible"
        );
        cy.takeScreenshotSimple();
      });

      it("TS02_TC104 Create Company with Search Biller ID and input valid Prefix", () => {
        goTo_crateCompany();
        cy.get("#provinces").select(data.billerID);
        cy.get("#prefixNo").type(data.prefix);
        cy.get("#Next-create").click();

        cy.contains("Company Profile").should("be.visible");
        cy.takeScreenshotSimple();
      });

      it("TS02_TC105 Not input Company Profile Detail", () => {
        goTo_crateCompany();

        cy.get("#provinces").select(data.billerID);
        cy.get("#prefixNo").type(data.prefix);
        cy.get("#Next-create").click();

        cy.contains("Company Profile").should("be.visible");
        cy.get(".btn").contains(/next/i).should("be.visible").click();
        cy.takeScreenshotSimple();
      });

      it("TS02_TC106 Input Company Profile Detail", () => {
        goTo_crateCompany();
        cy.get("#provinces").select(data.billerID);
        cy.get("#prefixNo").type(data.prefix);
        cy.get("#Next-create").click();

        cy.contains("Company Profile").should("be.visible");
        cy.get('[name="mcc"]').type(data.category);
        cy.get(".bank-user").contains(data.relation).click();
        cy.get(data.settlement).click();

        cy.contains("Company Address").should("be.visible");
        cy.genDateTime().then((timestampISOString) => {
          cy.get("#address1")
            .should("be.visible")
            .type(data.address + timestampISOString);
        });
        cy.get(":nth-child(5) > div > #provinces").select(data.province);
        cy.get("#cityEN").select(data.city);
        cy.get("#postcode").type(data.postcode);
        cy.get("#phone_no").type(data.phone);
        cy.get(".btn").contains(/next/i).should("be.visible").click();

        cy.contains("Invite user").should("be.visible");
        cy.takeScreenshotSimple();
      });

      it("TS02_TC107 Invite User with invalid input Email and Select role", () => {
        goTo_crateCompany();
        cy.get("#provinces").select(data.billerID);
        cy.get("#prefixNo").type(data.prefix);
        cy.get("#Next-create").click();

        cy.contains("Company Profile").should("be.visible");
        cy.get('[name="mcc"]').type(data.category);
        cy.get(".bank-user").contains(data.relation).click();
        cy.get(data.settlement).click();

        cy.contains("Company Address").should("be.visible");
        cy.genDateTime().then((timestampISOString) => {
          cy.get("#address1")
            .should("be.visible")
            .type(data.address + timestampISOString);
        });
        cy.get(":nth-child(5) > div > #provinces").select(data.province);
        cy.get("#cityEN").select(data.city);
        cy.get("#postcode").type(data.postcode);
        cy.get("#phone_no").type(data.phone);
        cy.get(".btn").contains(/next/i).should("be.visible").click();

        cy.contains("Invite user").should("be.visible");
        cy.get("#email").type(data.email_invalid);
        cy.get("#Finished2-create").click();
        cy.contains("กรุณาใส่ Email ของผู้ใช้งานให้ถูกต้อง").should(
          "be.visible"
        );
        cy.takeScreenshotSimple();
      });

      // สมัครจริงๆค่อยใช้
      // it("TS02_TC108 Invite User with valid input Email and Select role", () => {
      //   goTo_crateCompany();
      //   cy.get('#provinces').select(data.billerID);
      //   cy.get('#prefixNo').type(data.prefix);
      //   cy.get('#Next-create').click();

      //   cy.contains('Company Profile').should('be.visible');
      //   cy.getText('#company_name');  // getText

      //   cy.get('[name="mcc"]').type(data.category);
      //   cy.get('.bank-user').contains(data.relation).click();
      //   cy.get(data.settlement).click();

      //   cy.contains('Company Address').should('be.visible');
      //   cy.genDateTime().then((timestampISOString) => {
      //     cy.get('#address1').should('be.visible').type(data.address + timestampISOString);
      //   });
      //   cy.get(':nth-child(5) > div > #provinces').select(data.province);
      //   cy.get('#cityEN').select(data.city);
      //   cy.get('#postcode').type(data.postcode);
      //   cy.get('#phone_no').type(data.phone);
      //   cy.get('.btn').contains(/next/i).should('be.visible').click();

      //   cy.contains('Invite user').should('be.visible');
      //   cy.get('#email').type(data.email);
      //   cy.get('.bank-user').contains(data.role).click();
      //   cy.get('#Finished2-create').click();
      //   cy.url().should("include", "/company/all").should('be.visible');
      //   cy.takeScreenshotSimple(0);

      //   // เรียกใช้ตัวแปร myText ที่เก็บไว้
      //   cy.get('@myText').then((text) => {
      //     cy.gotoMID(text, cap);
      //   });
    });

    context("17 Search Approve Company ", () => {
      it("TS02_TC109 Click Approve Company ttb sub-menu", () => {
        cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
        goToApprovalCompany();
        cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      });
      it("TS02_TC110 Search by Company name data not found", () => {
        goToApprovalCompany();
        cy.get(".form-group > .form-control").type("kai");
        cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get(".btn").click();
        cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      });
      it("TS02_TC111 Search by Request Type and Status data not found", () => {
        goToApprovalCompany();
        cy.get("#request_type").select(2);
        cy.wait(2000);
        cy.get("#status").select(4);
        cy.wait(2000);
        cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get(".btn").click();
        cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      });
      it("TS02_TC112 Search by Company name", () => {
        goToApprovalCompany();
        cy.get(".form-group > .form-control").type("test logo new");
        cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get(".btn").click();
        cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      });
      it("TS02_TC113 Search by Request Type", () => {
        goToApprovalCompany();
        cy.get("#request_type").select(1);
        cy.wait(2000);
        cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get(".btn").click();
        cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      });
      it("TS02_TC114 Search by Status", () => {
        goToApprovalCompany();
        cy.get("#request_type").select(1);
        cy.wait(2000);
        cy.get("#status").select(2);
        cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get(".btn").click();
        cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      });
    });

    context("18 Approve Company Detail", () => {
      it("TS02_TC115 Select Company to View Detail", () => {
        goToApprovalCompany();
        cy.get(".form-group > .form-control").type("Fixed Shop");
        cy.get(".btn").click();
        cy.get(".btn.btn-primary.mt-4").click();
        cy.get("div.dropdown-content").first().invoke("show");
        cy.wait(5000);
        cy.get(".dropdown-content").contains("View Detail").click();
      });
    });

    context(
      "19 Approve Company (รอยืนยันการเข้าร่วมร้านค้าของ Owner อยู่)",
      () => {
        it("TS02_TC116 Select Company that is status PENDING Then cilck View Detail", () => {
          goToApprovalCompany();
          cy.get(".form-group > .form-control").type("mee shop");
          cy.get(".btn").click();
          cy.get(".btn.btn-primary.mt-4").click();
          cy.get("div.dropdown-content").first().invoke("show");
          cy.wait(5000);
          cy.get(".dropdown-content").contains("View Detail").click();
          cy.wait(5000);
          cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
          cy.get(".btn-success").click();
        });
        it("TS02_TC117 Cilck button Approve in View Detail page", () => {
          goToApprovalCompany();
          cy.get(".form-group > .form-control").type("mee shop");
          cy.get(".btn").click();
          cy.get(".btn.btn-primary.mt-4").click();
          cy.get("div.dropdown-content").first().invoke("show");
          cy.wait(5000);
          cy.get(".dropdown-content").contains("View Detail").click();
          cy.wait(5000);
          cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
          cy.get(".btn-success").click();
          cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
        });
        it("TS02_TC118 Click OK in pop-up alert Are you srue ? Do you want to Approve", () => {
          goToApprovalCompany();
          cy.get(".form-group > .form-control").type("mee shop");
          cy.get(".btn").click();
          cy.get(".btn.btn-primary.mt-4").click();
          cy.get("div.dropdown-content").first().invoke("show");
          cy.wait(5000);
          cy.get(".dropdown-content").contains("View Detail").click();
          cy.wait(5000);
          cy.get(".btn-success").click();
          cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
          cy.get(".swal2-confirm").click();
        });
      }
    );
  });

  let searchCompanyCaseApproveAndReJectAndReApprove = "Mos shop";

  context("20 Approve Company", () => {
    it("TS02_TC119 Select Company that is status PENDING Then cilck View Detail", () => {
      goToApprovalCompany();
      cy.get(".form-group > .form-control").type(
        searchCompanyCaseApproveAndReJectAndReApprove
      );
      cy.get(".btn").click();
      cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".btn.btn-primary.mt-4").click();
      cy.get("div.dropdown-content").first().invoke("show");
      cy.wait(5000);
      cy.get(".dropdown-content").contains("View Detail").click();
      cy.wait(5000);
      cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".btn-success").click();
    });
    it("TS02_TC120 Cilck button Approve in View Detail page", () => {
      goToApprovalCompany();
      cy.get(".form-group > .form-control").type(
        searchCompanyCaseApproveAndReJectAndReApprove
      );
      cy.get(".btn").click();
      cy.get(".btn.btn-primary.mt-4").click();
      cy.get("div.dropdown-content").first().invoke("show");
      cy.wait(5000);
      cy.get(".dropdown-content").contains("View Detail").click();
      cy.wait(5000);
      cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".btn-success").click();
      cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS02_TC121 Click OK in pop-up alert Are you srue ? Do you want to Approve", () => {
      goToApprovalCompany();
      cy.get(".form-group > .form-control").type(
        searchCompanyCaseApproveAndReJectAndReApprove
      );
      cy.get(".btn").click();
      cy.get(".btn.btn-primary.mt-4").click();
      cy.get("div.dropdown-content").first().invoke("show");
      cy.wait(5000);
      cy.get(".dropdown-content").contains("View Detail").click();
      cy.wait(5000);
      cy.get(".btn-success").click();
      cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".swal2-confirm");
    });
    it("TS02_TC122 Click OK in pop-up Successfully", () => {
      goToApprovalCompany();
      cy.get(".form-group > .form-control").type(
        searchCompanyCaseApproveAndReJectAndReApprove
      );
      cy.get(".btn").click();
      cy.get(".btn.btn-primary.mt-4").click();
      cy.get("div.dropdown-content").first().invoke("show");
      cy.wait(5000);
      cy.get(".dropdown-content").contains("View Detail").click();
      cy.wait(10000);
      cy.get(".btn-success").click();
      cy.get(".swal2-confirm").click();
      cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".swal2-confirm").click();
      cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
  });

  context("21 Reject Company", () => {
    it("TS02_TC123 Select Company that is status PENDING Then cilck View Detail", () => {
      goToApprovalCompany();
      cy.get("#status").select(1);
      cy.get(".btn").click();
      cy.get(".btn.btn-primary.mt-4").click();
      cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("div.dropdown-content").first().invoke("show");
      cy.wait(5000);
      cy.get(".dropdown-content").contains("View Detail").click();
      cy.wait(10000);
      cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS02_TC124 Not input Description then cilck button Reject in View Detail page", () => {
      goToApprovalCompany();
      cy.get("#status").select(1);
      cy.get(".btn").click();
      cy.get(".btn.btn-primary.mt-4").click();
      cy.get("div.dropdown-content").first().invoke("show");
      cy.wait(5000);
      cy.get(".dropdown-content").contains("View Detail").click();
      cy.wait(10000);
      cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".btn-danger").click();
      cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
    it("TS02_TC125 input Description then cilck button Reject in View Detail page", () => {
      goToApprovalCompany();
      cy.get("#status").select(1);
      cy.get(".btn").click();
      cy.get(".btn.btn-primary.mt-4").click();
      cy.get("div.dropdown-content").first().invoke("show");
      cy.wait(5000);
      cy.get(".dropdown-content").contains("View Detail").click();
      cy.wait(10000);
      cy.get("#textareaApprove").type("Testt");
      cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.wait(5000);
    });
    it("TS02_TC126 Click OK in pop-up alert Are you srue ? Do you want to Reject", () => {
      goToApprovalCompany();
      cy.get("#status").select(1);
      cy.get(".btn").click();
      cy.get(".btn.btn-primary.mt-4").click();
      cy.get("div.dropdown-content").first().invoke("show");
      cy.wait(5000);
      cy.get(".dropdown-content").contains("View Detail").click();
      cy.wait(10000);
      cy.get("#textareaApprove").type("Testt");
      cy.get(".btn-danger").click();
      cy.wait(5000);
      cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });

    it("TS02_TC127 Click OK in pop-up alert Are you srue ? Do you want to Reject", () => {
      goToApprovalCompany();
      cy.get("#status").select(1);
      cy.get(".btn").click();
      cy.get(".btn.btn-primary.mt-4").click();
      cy.get("div.dropdown-content").first().invoke("show");
      cy.wait(5000);
      cy.get(".dropdown-content").contains("View Detail").click();
      cy.wait(10000);
      cy.get("#textareaApprove").type("Testt");
      cy.get(".btn-danger").click();
      cy.wait(5000);
      cy.get(".swal2-confirm").click();
      cy.wait(6000);
      cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".swal2-confirm").click();
      cy.wait(6000);
      cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
  });

  context("22 Re-Approve Company", () => {
    it("TS02_TC128 Select Company that is status Reject or Auto-Reject Then cilck View Detail", () => {
      goToApprovalCompany();
      cy.get("#status").select(3);
      cy.get(".btn").click();
      cy.get(".btn.btn-primary.mt-4").click();
      cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("div.dropdown-content").first().invoke("show");
      cy.wait(5000);
      cy.get(".dropdown-content").contains("View Detail").click();
      cy.wait(10000);
      cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });

    it("TS02_TC129 Cilck button ReApprove in  View Detail page", () => {
      goToApprovalCompany();
      cy.get("#status").select(3);
      cy.get(".btn").click();
      cy.get(".btn.btn-primary.mt-4").click();
      cy.get("div.dropdown-content").first().invoke("show");
      cy.wait(5000);
      cy.get(".dropdown-content").contains("View Detail").click();
      cy.wait(10000);
      cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });

    it("TS02_TC130 Click OK in pop-up alert Are you srue ? ", () => {
      goToApprovalCompany();
      cy.get("#status").select(3);
      cy.get(".btn").click();
      cy.get(".btn.btn-primary.mt-4").click();
      cy.get("div.dropdown-content").first().invoke("show");
      cy.wait(5000);
      cy.get(".dropdown-content").contains("View Detail").click();
      cy.wait(10000);
      cy.get(".btn-success").click();
      cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });

    it("TS02_TC131 Click OK in pop-up Successfully", () => {
      goToApprovalCompany();
      cy.get("#status").select(3);
      cy.get(".btn").click();
      cy.get(".btn.btn-primary.mt-4").click();
      cy.get("div.dropdown-content").first().invoke("show");
      cy.wait(5000);
      cy.get(".dropdown-content").contains("View Detail").click();
      cy.wait(10000);
      cy.get(".btn-success").click();
      cy.wait(5000);
      cy.get(".swal2-confirm").click();
      cy.wait(6000);
      cy.takeScreenshotSimple("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".swal2-confirm").click();
      cy.wait(6000);
      cy.takeScreenshotSimple("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
  });
});
