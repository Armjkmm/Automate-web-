describe("Test Scenario: Administrator", () => {
  beforeEach(() => {
    // auto login to enter portal page
    cy.enterKasikornBankPortalPage(
      Cypress.env("KBANK_USERNAME"),
      Cypress.env("KBANK_PASSWORD")
    );

    // wait for 1 seconds
    cy.wait(1000);
  });

  context("1_Search Users", () => {
    it("M02-01", () => {
      let administratorMenuTab = ":nth-child(9) > a > span";
      cy.get(administratorMenuTab).should("be.visible").click();

      //check url must have /admin/list
      cy.url().should("include", "/admin/list");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });

    it("M02-02", () => {
      let administratorMenuTab = ":nth-child(9) > a > span";
      cy.get(administratorMenuTab).should("be.visible").click();

      // Find user by userId (Must be userId that not found in system)
      let searchField = "#search";
      cy.get(searchField).should("exist").type("9999999999");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);

      // Find search button then click it to search user following typed userId
      let searchBtn = "form > :nth-child(1) > .button";
      cy.get(searchBtn).should("exist").click();

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M02-03", () => {
      let administratorMenuTab = ":nth-child(9) > a > span";
      cy.get(administratorMenuTab).should("be.visible").click();

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);

      // Find role dropdown filter to find option "SV247"
      let roleDropdown = ":nth-child(2) > .styled";
      cy.get(roleDropdown)
        .should("exist")
        .select(9)
        .invoke("val")
        .should("eq", "SV247");

      // Define range from startFilterDate to endFilterDate
      let startFilterDate = "#fromdate";
      let endFilterDate = "#todate";

      // Click on start filter date
      cy.get(startFilterDate).click();
      // Select the year
      cy.get(".ui-datepicker-year").select("2021");
      // Select the month
      cy.get(".ui-datepicker-month").select("Oct");
      // Select the day
      cy.get(".ui-datepicker-calendar").contains("2").click();
      // Check start filter date must be like date-month-year that we selected
      cy.get(startFilterDate).should("have.value", "02 Oct 2021");

      // Click on start filter date
      cy.get(endFilterDate).click();
      // Select the year
      cy.get(".ui-datepicker-year").select("2021");
      // Select the month
      cy.get(".ui-datepicker-month").select("Dec");
      // Select the day
      cy.get(".ui-datepicker-calendar").contains("4").click();
      // Check start filter date must be like date-month-year that we selected
      cy.get(endFilterDate).should("have.value", "04 Dec 2021");

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      // Click filter search button
      let filterSearchBtn = ".formButton > .button";
      cy.get(filterSearchBtn).click();

      // Check have show message
      cy.contains("No record found. Please try again");

      cy.takeScreenshotSimplify("3", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M02-04", () => {
      let administratorMenuTab = ":nth-child(9) > a > span";
      cy.get(administratorMenuTab).should("be.visible").click();

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);

      // Find status dropdown filter to find option "Suspended"
      let statusDropdown = ":nth-child(5) > .styled";
      cy.get(statusDropdown)
        .should("exist")
        .select(2)
        .invoke("val")
        .should("eq", "Suspended");

      // Define range from startFilterDate to endFilterDate
      let startFilterDate = "#fromdate";
      let endFilterDate = "#todate";

      // Click on start filter date
      cy.get(startFilterDate).click();
      // Select the year
      cy.get(".ui-datepicker-year").select("2021");
      // Select the month
      cy.get(".ui-datepicker-month").select("Oct");
      // Select the day
      cy.get(".ui-datepicker-calendar").contains("2").click();
      // Check start filter date must be like date-month-year that we selected
      cy.get(startFilterDate).should("have.value", "02 Oct 2021");

      // Click on start filter date
      cy.get(endFilterDate).click();
      // Select the year
      cy.get(".ui-datepicker-year").select("2021");
      // Select the month
      cy.get(".ui-datepicker-month").select("Dec");
      // Select the day
      cy.get(".ui-datepicker-calendar").contains("4").click();
      // Check start filter date must be like date-month-year that we selected
      cy.get(endFilterDate).should("have.value", "04 Dec 2021");

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      // Click filter search button
      let filterSearchBtn = ".formButton > .button";
      cy.get(filterSearchBtn).click();

      // Check have show message
      cy.contains("No record found. Please try again");

      cy.takeScreenshotSimplify("3", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M02-05", () => {
      let administratorMenuTab = ":nth-child(9) > a > span";
      cy.get(administratorMenuTab).should("be.visible").click();

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);

      // Define range from startFilterDate to endFilterDate
      let startFilterDate = "#fromdate";
      let endFilterDate = "#todate";

      // Click on start filter date
      cy.get(startFilterDate).click();
      // Select the year
      cy.get(".ui-datepicker-year").select("2020");
      // Select the month
      cy.get(".ui-datepicker-month").select("Oct");
      // Select the day
      cy.get(".ui-datepicker-calendar").contains("2").click();
      // Check start filter date must be like date-month-year that we selected
      cy.get(startFilterDate).should("have.value", "02 Oct 2020");

      // Click on start filter date
      cy.get(endFilterDate).click();
      // Select the year
      cy.get(".ui-datepicker-year").select("2020");
      // Select the month
      cy.get(".ui-datepicker-month").select("Oct");
      // Select the day
      cy.get(".ui-datepicker-calendar").contains("4").click();
      // Check start filter date must be like date-month-year that we selected
      cy.get(endFilterDate).should("have.value", "04 Oct 2020");

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      // Click filter search button
      let filterSearchBtn = ".formButton > .button";
      cy.get(filterSearchBtn).click();

      // Check have show message
      cy.contains("No record found. Please try again");

      cy.takeScreenshotSimplify("3", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M02-06", () => {
      let administratorMenuTab = ":nth-child(9) > a > span";
      cy.get(administratorMenuTab).should("be.visible").click();

      // Find user by userId that exist in system
      let searchField = "#search";
      cy.get(searchField).should("exist").type("KS015256");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);

      // Find search button then click it to search user following typed userId
      let searchBtn = "form > :nth-child(1) > .button";
      cy.get(searchBtn).should("exist").click();

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M02-07", () => {
      let administratorMenuTab = ":nth-child(9) > a > span";
      cy.get(administratorMenuTab).should("be.visible").click();

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);

      // Find role dropdown filter to find option "SV247"
      let roleDropdown = ":nth-child(2) > .styled";
      cy.get(roleDropdown)
        .should("exist")
        .select(9)
        .invoke("val")
        .should("eq", "SV247");

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      // Click filter search button
      let filterSearchBtn = ".formButton > .button";
      cy.get(filterSearchBtn).click();

      cy.takeScreenshotSimplify("3", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M02-08", () => {
      let administratorMenuTab = ":nth-child(9) > a > span";
      cy.get(administratorMenuTab).should("be.visible").click();

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);

      // Find status dropdown filter to find option "Suspended"
      let statusDropdown = ":nth-child(5) > .styled";
      cy.get(statusDropdown)
        .should("exist")
        .select(2)
        .invoke("val")
        .should("eq", "Suspended");

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      // Click filter search button
      let filterSearchBtn = ".formButton > .button";
      cy.get(filterSearchBtn).click();

      cy.takeScreenshotSimplify("3", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M02-09", () => {
      let administratorMenuTab = ":nth-child(9) > a > span";
      cy.get(administratorMenuTab).should("be.visible").click();

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);

      // Define range from startFilterDate to endFilterDate
      let startFilterDate = "#fromdate";
      let endFilterDate = "#todate";

      // Click on start filter date
      cy.get(startFilterDate).click();
      // Select the year
      cy.get(".ui-datepicker-year").select("2023");
      // Select the month
      cy.get(".ui-datepicker-month").select("Jun");
      // Select the day
      cy.get(".ui-datepicker-calendar").contains("1").click();
      // Check start filter date must be like date-month-year that we selected
      cy.get(startFilterDate).should("have.value", "01 Jun 2023");

      // Click on start filter date
      cy.get(endFilterDate).click();
      // Select the year
      cy.get(".ui-datepicker-year").select("2024");
      // Select the month
      cy.get(".ui-datepicker-month").select("Oct");
      // Select the day
      cy.get(".ui-datepicker-calendar").contains("1").click();
      // Check start filter date must be like date-month-year that we selected
      cy.get(endFilterDate).should("have.value", "01 Oct 2024");

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      // Click filter search button
      let filterSearchBtn = ".formButton > .button";
      cy.get(filterSearchBtn).click();

      cy.takeScreenshotSimplify("3", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M02-10", () => {
      let administratorMenuTab = ":nth-child(9) > a > span";
      cy.get(administratorMenuTab).should("be.visible").click();

      // Define range from startFilterDate to endFilterDate
      let startFilterDate = "#fromdate";
      let endFilterDate = "#todate";

      // Click on start filter date
      cy.get(startFilterDate).click();
      // Select the year
      cy.get(".ui-datepicker-year").select("2023");
      // Select the month
      cy.get(".ui-datepicker-month").select("Jun");
      // Select the day
      cy.get(".ui-datepicker-calendar").contains("1").click();
      // Check start filter date must be like date-month-year that we selected
      cy.get(startFilterDate).should("have.value", "01 Jun 2023");

      // Click on start filter date
      cy.get(endFilterDate).click();
      // Select the year
      cy.get(".ui-datepicker-year").select("2024");
      // Select the month
      cy.get(".ui-datepicker-month").select("Oct");
      // Select the day
      cy.get(".ui-datepicker-calendar").contains("1").click();
      // Check start filter date must be like date-month-year that we selected
      cy.get(endFilterDate).should("have.value", "01 Oct 2024");

      // Click filter search button
      let filterSearchBtn = ".formButton > .button";
      cy.get(filterSearchBtn).click();

      let totalRecords;

      cy.get(".total_font")
        .invoke("text")
        .then((text) => {
          // Split by ': ' and get the second part
          totalRecords = parseInt(text.split(": ")[1]);
          cy.log(`total records: ${totalRecords}`);
        });

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      // find the nextPageBtn then click to go next page
      cy.get("#next > span").click();

      let newTotalRecords;

      cy.get(".total_font")
        .invoke("text")
        .then((text) => {
          // Split by ': ' and get the second part
          newTotalRecords = parseInt(text.split(": ")[1]);
          cy.log(`new total records: ${newTotalRecords}`);
        });

      // Assert to check total records must be the same value
      expect(newTotalRecords).to.equal(totalRecords);

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M02-11", () => {
      let administratorMenuTab = ":nth-child(9) > a > span";
      cy.get(administratorMenuTab).should("be.visible").click();

      // Define range from startFilterDate to endFilterDate
      let startFilterDate = "#fromdate";
      let endFilterDate = "#todate";

      // Click on start filter date
      cy.get(startFilterDate).click();
      // Select the year
      cy.get(".ui-datepicker-year").select("2023");
      // Select the month
      cy.get(".ui-datepicker-month").select("Jun");
      // Select the day
      cy.get(".ui-datepicker-calendar").contains("1").click();
      // Check start filter date must be like date-month-year that we selected
      cy.get(startFilterDate).should("have.value", "01 Jun 2023");

      // Click on start filter date
      cy.get(endFilterDate).click();
      // Select the year
      cy.get(".ui-datepicker-year").select("2024");
      // Select the month
      cy.get(".ui-datepicker-month").select("Oct");
      // Select the day
      cy.get(".ui-datepicker-calendar").contains("1").click();
      // Check start filter date must be like date-month-year that we selected
      cy.get(endFilterDate).should("have.value", "01 Oct 2024");

      // Click filter search button
      let filterSearchBtn = ".formButton > .button";
      cy.get(filterSearchBtn).click();

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      let totalRecords;

      cy.get(".total_font")
        .invoke("text")
        .then((text) => {
          // Split by ': ' and get the second part
          totalRecords = parseInt(text.split(": ")[1]);
          cy.log(`total records: ${totalRecords}`);
        });

      cy.get("#pageInfo")
        .invoke("text")
        .then((text) => {
          // Replace non-breaking spaces (&nbsp;) with regular spaces and split the text
          const cleanedText = text.replace(/\u00a0/g, " "); // Handle non-breaking spaces
          const parts = cleanedText.split(" "); // Split the cleaned text
          const lastPageNumber = parseInt(parts[3]); // Extract the 4th part (index 3)

          if (isNaN(lastPageNumber)) {
            cy.log("Invalid number extracted, handling NaN case");
          } else {
            cy.log(`The last page number is: ${lastPageNumber}`);
            const lastPageBtn = `[href="/admin/list?role=&status=&from=01+Jun+2023&to=01+Oct+2024&page=${lastPageNumber}"]`;
            cy.get(lastPageBtn).click();
          }
        });

      let newTotalRecords;

      cy.get(".total_font")
        .invoke("text")
        .then((text) => {
          // Split by ': ' and get the second part
          newTotalRecords = parseInt(text.split(": ")[1]);
          cy.log(`new total records: ${newTotalRecords}`);
        });

      // Assert to check total records must be the same value
      expect(newTotalRecords).to.equal(totalRecords);

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });
  });

  context("2_Edit Bank User Details", () => {
    beforeEach(() => {
      // click to administrator tab
      let administratorMenuTab = ":nth-child(9) > a > span";
      cy.get(administratorMenuTab).should("be.visible").click();

      //check url must have /admin/list
      cy.url().should("include", "/admin/list");
    });

    it("M02-12", () => {
      // get random user (in this case will select user that element id is #go916)
      let targetUserDropdown = "#go916 > .selectBoxInTable > .selectInTable";
      cy.get(targetUserDropdown)
        .should("exist")
        .select(1)
        .invoke("val")
        .should("eq", "details");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      let targetUserGoBtn = "#go916 > :nth-child(2) > #buttonGo";
      cy.get(targetUserGoBtn).should("exist").click();

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it('M02-13: Click "Edit Bank User Details" button', () => {
      // get random user (in this case will select user that element id is #go916)
      let targetUserDropdown = "#go916 > .selectBoxInTable > .selectInTable";
      cy.get(targetUserDropdown)
        .should("exist")
        .select(1)
        .invoke("val")
        .should("eq", "details");

      let targetUserGoBtn = "#go916 > :nth-child(2) > #buttonGo";
      cy.get(targetUserGoBtn).should("exist").click();

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      // click on edit bank user detail button
      let editBankUserDetailBtn = ".paddLR10 > form > .button";
      cy.get(editBankUserDetailBtn).should("exist").click();

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M02-14", () => {
      // get random user (in this case will select user that element id is #go916)
      let targetUserDropdown = "#go916 > .selectBoxInTable > .selectInTable";
      cy.get(targetUserDropdown)
        .should("exist")
        .select(1)
        .invoke("val")
        .should("eq", "details");

      let targetUserGoBtn = "#go916 > :nth-child(2) > #buttonGo";
      cy.get(targetUserGoBtn).should("exist").click();

      // click on edit bank user detail button
      let editBankUserDetailBtn = ".paddLR10 > form > .button";
      cy.get(editBankUserDetailBtn).should("exist").click();

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      // click on submit button then click it
      let submitEditBtn = "#\\31 ";
      cy.get(submitEditBtn).should("exist").click();

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M02-15", () => {
      // get random user (in this case will select user that element id is #go916)
      let targetUserDropdown = "#go916 > .selectBoxInTable > .selectInTable";
      cy.get(targetUserDropdown)
        .should("exist")
        .select(1)
        .invoke("val")
        .should("eq", "details");

      let targetUserGoBtn = "#go916 > :nth-child(2) > #buttonGo";
      cy.get(targetUserGoBtn).should("exist").click();

      // click on edit bank user detail button
      let editBankUserDetailBtn = ".paddLR10 > form > .button";
      cy.get(editBankUserDetailBtn).should("exist").click();

      // click on submit button then click it
      let submitEditBtn = "#\\31 ";
      cy.get(submitEditBtn).should("exist").click();

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      // click on submit button in review & confirm page
      cy.get("#submitThis").should("exist").click();

      // Check have show message
      cy.contains("Your request is successful");

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });
  });

  context("3_Suspend Bank User", () => {
    beforeEach(() => {
      // click to administrator tab
      let administratorMenuTab = ":nth-child(9) > a > span";
      cy.get(administratorMenuTab).should("be.visible").click();

      //check url must have /admin/list
      cy.url().should("include", "/admin/list");

      // get random user (in this case will select user that element id is #go916)
      let targetUserDropdown = "#go916 > .selectBoxInTable > .selectInTable";
      cy.get(targetUserDropdown)
        .should("exist")
        .select(1)
        .invoke("val")
        .should("eq", "details");

      let targetUserGoBtn = "#go916 > :nth-child(2) > #buttonGo";
      cy.get(targetUserGoBtn).should("exist").click();
    });

    it("M02-016", () => {
      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      // Check target user is active user
      cy.get(".highlightSuspended > span").should("not.exist");
      cy.contains("Suspended").should("not.exist");

      let suspendBankUserAccess = ".viewDetailsBtnEnd > div > form > .button";
      cy.get(suspendBankUserAccess)
        .should("contain.text", "Suspend Bank User Access")
        .click();

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M02-017", () => {
      // Check target user is active user
      cy.get(".highlightSuspended > span").should("not.exist");
      cy.contains("Suspended").should("not.exist");

      let suspendBankUserAccess = ".viewDetailsBtnEnd > div > form > .button";
      cy.get(suspendBankUserAccess)
        .should("contain.text", "Suspend Bank User Access")
        .click();

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      // Find suspend submit button then click it
      let suspendSubmitBtn = "#ctaMid > .button";
      cy.get(suspendSubmitBtn).should("exist").click();

      // System will show error message that you need to enter description
      cy.get("#descriptionError > span")
        .should("be.visible")
        .should("have.text", "Please enter a short description");

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M02-018", () => {
      // Check target user is active user
      cy.get(".highlightSuspended > span").should("not.exist");
      cy.contains("Suspended").should("not.exist");

      let suspendBankUserAccess = ".viewDetailsBtnEnd > div > form > .button";
      cy.get(suspendBankUserAccess)
        .should("contain.text", "Suspend Bank User Access")
        .click();

      // find description area and type reason to suspend
      cy.get("#description")
        .should("exist")
        .type("Automation regression test case M02-16");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      // Find suspend submit button then click it
      let suspendSubmitBtn = "#ctaMid > .button";
      cy.get(suspendSubmitBtn).should("exist").click();

      // System will show complete suspend message
      cy.contains("Your request is successful");

      // Take screenshot
      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });
  });

  context("4_Reinstate Bank User", () => {
    beforeEach(() => {
      // click to administrator tab
      let administratorMenuTab = ":nth-child(9) > a > span";
      cy.get(administratorMenuTab).should("be.visible").click();

      //check url must have /admin/list
      cy.url().should("include", "/admin/list");

      // get random user (in this case will select user that element id is #go916)
      let targetUserDropdown = "#go916 > .selectBoxInTable > .selectInTable";
      cy.get(targetUserDropdown)
        .should("exist")
        .select(1)
        .invoke("val")
        .should("eq", "details");

      let targetUserGoBtn = "#go916 > :nth-child(2) > #buttonGo";
      cy.get(targetUserGoBtn).should("exist").click();
    });

    it("M02-19", () => {
      // check user has tag is suspended
      cy.get(".highlightSuspended > span")
        .should("be.visible")
        .should("contain.text", "Suspended");

      // Find and check reinstate button
      let reinstateBankUserAccessBtn =
        ".viewDetailsBtnEnd > div > form > .button";
      cy.get(reinstateBankUserAccessBtn)
        .should("contain.text", "Reinstate Bank User Access")
        .click();

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M02-20", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(".viewDetailsBtnEnd > div > form > .button").click();

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.get("#ctaMid > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.contains("Please enter a short description");

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M02-21", () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(".viewDetailsBtnEnd > div > form > .button").click();
      cy.get("#description").type("Automation regression test case M02-19");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      cy.get("#ctaMid > .button").click();
      /* ==== End Cypress Studio ==== */

      // System will show complete suspend message
      cy.contains("Your request is successful");
      // Take screenshot
      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });
  });
});

//#region Super administrator account
describe("Test Scenario: Administrator", () => {
  beforeEach(() => {
    // auto login to enter portal page
    cy.enterKasikornBankPortalPage(
      Cypress.env("KBANK_SUPER_ADMIN_USERNAME"),
      Cypress.env("KBANK_SUPER_ADMIN_PASSWORD")
    );

    // wait for 1 seconds
    cy.wait(1000);
  });

  context("5_Add_A_Bank_User", () => {
    it('M03-01: click "Add a bank user" sub-menu', () => {
      const administratorTabBtn = ":nth-child(2) > a > span";
      cy.get(administratorTabBtn).click();

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);

      const addBankMenu = ":nth-child(2) > a > div";
      cy.get(addBankMenu).should("exist").click();

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });

    it('M03-02: Not input bank user details and Click "Submit"', () => {
      const administratorTabBtn = ":nth-child(2) > a > span";
      cy.get(administratorTabBtn).click();

      const addBankMenu = ":nth-child(2) > a > div";
      cy.get(addBankMenu).should("exist").click();

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);

      // click to submit button with inseart detail in field
      cy.get("#\\31").click();

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });

    it('M03-03: Input bank user details and Click "Submit"', () => {
      const administratorTabBtn = ":nth-child(2) > a > span";
      cy.get(administratorTabBtn).click();

      const addBankMenu = ":nth-child(2) > a > div";
      cy.get(addBankMenu).should("exist").click();

      const prefix = "AutomatedRegTest";
      let administratorSearchBankUserUrl =
        "https://mpostest1.kasikornbank.com:7443/admin/search?search=";

      cy.getNextIdFollowingPrefix(prefix, administratorSearchBankUserUrl).then(
        (nextId) => {
          cy.log(`The next ID is: ${nextId}`);

          // Ensure nextId is a string
          const nextIdString = String(nextId);
          const targetEmail = `${nextIdString}@example.com`;

          cy.get("#userId").type(nextIdString);
          cy.get("#name").type(`${prefix}`);
          cy.get("#role")
            .should("exist")
            .select(0)
            .invoke("val")
            .should("eq", "Admin");
          cy.get("#email").type(targetEmail);

          cy.takeScreenshotSimplify(
            "1",
            Cypress.ScreenshotCaptureEnum.VIEWPORT
          );
        }
      );

      // click to submit button with inseart detail in field
      cy.get("#\\31").should("exist").click();

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });

    it("M03-04", () => {
      const administratorTabBtn = ":nth-child(2) > a > span";
      cy.get(administratorTabBtn).click();

      const addBankMenu = ":nth-child(2) > a > div";
      cy.get(addBankMenu).should("exist").click();

      const prefix = "AutomatedRegTest";
      let administratorSearchBankUserUrl =
        "https://mpostest1.kasikornbank.com:7443/admin/search?search=";

      cy.getNextIdFollowingPrefix(prefix, administratorSearchBankUserUrl).then(
        (nextId) => {
          cy.log(`The next ID is: ${nextId}`);

          // Ensure nextId is a string
          const nextIdString = String(nextId);
          const targetEmail = `${nextIdString}@example.com`;

          cy.get("#userId").type(nextIdString);
          cy.get("#name").type(`${prefix}`);
          cy.get("#role")
            .should("exist")
            .select(0)
            .invoke("val")
            .should("eq", "Admin");
          cy.get("#email").type(targetEmail);
        }
      );

      cy.wait(500); // Adjust the wait time as necessary
      cy.get("#\\31").should("exist").click();

      cy.wait(2000);
      // click submit button in review & confirm page
      cy.get("#submitThis").should("exist").click();

      cy.contains("Your request is successful");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });
  });

  context("6_Audit_Trail", () => {
    beforeEach(() => {
      let administratorMenuTab = ":nth-child(2) > a > span";
      cy.get(administratorMenuTab).should("exist").click();
    });

    it('M04-01: Click "Audit Trail" sub-menu', () => {
      // Click to that side menu 'Audit trail'
      let auditTrailMenu = ":nth-child(3) > a > div";
      cy.get(auditTrailMenu).should("exist").click();

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });

    it("M04-02", () => {
      // Click to that side menu 'Audit trail'
      let auditTrailMenu = ":nth-child(3) > a > div";
      cy.get(auditTrailMenu).should("exist").click();

      // Search userId that cannot found
      cy.get("#search").type("SAMPLE000000");

      // Click on search button
      cy.get("form > :nth-child(1) > .button").click();
      cy.contains("No record found. Please try again");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M04-03", () => {
      // Click to that side menu 'Audit trail'
      let auditTrailMenu = ":nth-child(3) > a > div";
      cy.get(auditTrailMenu).should("exist").click();

      // Select action dropdown that should not found
      cy.get(".styled")
        .should("exist")
        .select(8)
        .invoke("val")
        .should("eq", "Reset company user password");

      // Click on user activity's search button
      cy.get(".formButton > .button").click();

      cy.contains("No record found. Please try again");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M04-04", () => {
      // Click to that side menu 'Audit trail'
      let auditTrailMenu = ":nth-child(3) > a > div";
      cy.get(auditTrailMenu).should("exist").click();

      // Select date that data not found
      // Define range from startFilterDate to endFilterDate
      let startFilterDate = "#fromdate";
      let endFilterDate = "#todate";

      // Click on start filter date
      cy.get(startFilterDate).click();
      // Select the year
      cy.get(".ui-datepicker-year").select("2014");
      // Select the month
      cy.get(".ui-datepicker-month").select("Oct");
      // Select the day
      cy.get(".ui-datepicker-calendar").contains("1").click();
      // Check start filter date must be like date-month-year that we selected
      cy.get(startFilterDate).should("have.value", "01 Oct 2014");

      // Click on start filter date
      cy.get(endFilterDate).click();
      // Select the year
      cy.get(".ui-datepicker-year").select("2014");
      // Select the month
      cy.get(".ui-datepicker-month").select("Oct");
      // Select the day
      cy.get(".ui-datepicker-calendar").contains("1").click();
      // Check start filter date must be like date-month-year that we selected
      cy.get(endFilterDate).should("have.value", "01 Oct 2014");

      // Click on user activity's search button
      cy.get(".formButton > .button").click();

      cy.contains("No record found. Please try again");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M04-05", () => {
      // Click to that side menu 'Audit trail'
      let auditTrailMenu = ":nth-child(3) > a > div";
      cy.get(auditTrailMenu).should("exist").click();

      // Search userId
      cy.get("#search").type("kd000023");

      // Click on search button
      cy.get("form > :nth-child(1) > .button").click();

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M04-06", () => {
      // Click to that side menu 'Audit trail'
      let auditTrailMenu = ":nth-child(3) > a > div";
      cy.get(auditTrailMenu).should("exist").click();

      // Select action dropdown
      cy.get(".styled")
        .should("exist")
        .select(2)
        .invoke("val")
        .should("eq", "Logout from System");

      // Click on user activity's search button
      cy.get(".formButton > .button").click();

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M04-07", () => {
      // Click to that side menu 'Audit trail'
      let auditTrailMenu = ":nth-child(3) > a > div";
      cy.get(auditTrailMenu).should("exist").click();

      // Select date that data not found
      // Define range from startFilterDate to endFilterDate
      let startFilterDate = "#fromdate";
      let endFilterDate = "#todate";

      // Click on start filter date
      cy.get(startFilterDate).click();
      // Select the year
      cy.get(".ui-datepicker-year").select("2020");
      // Select the month
      cy.get(".ui-datepicker-month").select("Oct");
      // Select the day
      cy.get(".ui-datepicker-calendar").contains("1").click();
      // Check start filter date must be like date-month-year that we selected
      cy.get(startFilterDate).should("have.value", "01 Oct 2020");

      // Click on start filter date
      cy.get(endFilterDate).click();
      // Select the year
      cy.get(".ui-datepicker-year").select("2024");
      // Select the month
      cy.get(".ui-datepicker-month").select("Oct");
      // Select the day
      cy.get(".ui-datepicker-calendar").contains("1").click();
      // Check start filter date must be like date-month-year that we selected
      cy.get(endFilterDate).should("have.value", "01 Oct 2024");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      // Click on user activity's search button
      cy.get(".formButton > .button").click();

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M04-08", () => {
      // Click to that side menu 'Audit trail'
      let auditTrailMenu = ":nth-child(3) > a > div";
      cy.get(auditTrailMenu).should("exist").click();

      // Define range from startFilterDate to endFilterDate
      let startFilterDate = "#fromdate";
      let endFilterDate = "#todate";

      // Click on start filter date
      cy.get(startFilterDate).click();
      // Select the year
      cy.get(".ui-datepicker-year").select("2023");
      // Select the month
      cy.get(".ui-datepicker-month").select("Jun");
      // Select the day
      cy.get(".ui-datepicker-calendar").contains("1").click();
      // Check start filter date must be like date-month-year that we selected
      cy.get(startFilterDate).should("have.value", "01 Jun 2023");

      // Click on start filter date
      cy.get(endFilterDate).click();
      // Select the year
      cy.get(".ui-datepicker-year").select("2024");
      // Select the month
      cy.get(".ui-datepicker-month").select("Oct");
      // Select the day
      cy.get(".ui-datepicker-calendar").contains("1").click();
      // Check start filter date must be like date-month-year that we selected
      cy.get(endFilterDate).should("have.value", "01 Oct 2024");

      // Click filter search button
      let filterSearchBtn = ".formButton > .button";
      cy.get(filterSearchBtn).click();

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      let nextPageBtn = "#next > span";
      let totalRecords = ".total_font";
      cy.goNextPage(nextPageBtn, totalRecords);

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M04-09", () => {
      // Click to that side menu 'Audit trail'
      let auditTrailMenu = ":nth-child(3) > a > div";
      cy.get(auditTrailMenu).should("exist").click();

      // Define range from startFilterDate to endFilterDate
      let startFilterDate = "#fromdate";
      let endFilterDate = "#todate";

      // Click on start filter date
      cy.get(startFilterDate).click();
      // Select the year
      cy.get(".ui-datepicker-year").select("2023");
      // Select the month
      cy.get(".ui-datepicker-month").select("Jun");
      // Select the day
      cy.get(".ui-datepicker-calendar").contains("1").click();
      // Check start filter date must be like date-month-year that we selected
      cy.get(startFilterDate).should("have.value", "01 Jun 2023");

      // Click on start filter date
      cy.get(endFilterDate).click();
      // Select the year
      cy.get(".ui-datepicker-year").select("2024");
      // Select the month
      cy.get(".ui-datepicker-month").select("Oct");
      // Select the day
      cy.get(".ui-datepicker-calendar").contains("1").click();
      // Check start filter date must be like date-month-year that we selected
      cy.get(endFilterDate).should("have.value", "01 Oct 2024");

      // Click filter search button
      let filterSearchBtn = ".formButton > .button";
      cy.get(filterSearchBtn).click();

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      let searchLastPageUrl =
        "/admin/auditTrail?action=&from=01+Jun+2023&to=01+Oct+2024&page=";
      let pageInfoElement = "#pageInfo";
      let totalRecordElement = ".total_font";
      cy.goLastPage(pageInfoElement, totalRecordElement, searchLastPageUrl);

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });
  });

  context("7_Audit_Trail_EDC", () => {
    beforeEach(() => {
      let administratorMenuTab = ":nth-child(2) > a > span";
      cy.get(administratorMenuTab).should("exist").click();
    });

    it("M05-01", () => {
      cy.get(":nth-child(4) > a > div").click();

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });

    it("M05-02", () => {
      cy.get(":nth-child(4) > a > div").click();
      cy.get("#search").type("SAMPLE09090");
      cy.get("form > :nth-child(1) > .button").click();

      cy.contains("No record found. Please try again");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });

    it("M05-03", () => {
      cy.get(":nth-child(4) > a > div").click();
      cy.get("#search").click();
      cy.get(".filterForm > :nth-child(1)").click();
      cy.get(".styled").select("View Merchant EDC list");
      cy.get(".filterForm > :nth-child(5) > :nth-child(2)").click();
      cy.get(".ui-datepicker-year").select("2014");
      cy.get(":nth-child(1) > :nth-child(4) > .ui-state-default").click();
      cy.get(".filterForm > :nth-child(5) > :nth-child(4)").click();
      cy.get(".ui-datepicker-year").select("2014");
      cy.get(":nth-child(1) > :nth-child(4) > .ui-state-default").click();
      cy.get(".formButton > .button").click();

      cy.contains("No record found. Please try again");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M05-04", () => {
      cy.get(":nth-child(4) > a > div").click();
      cy.get(".filterForm > :nth-child(5) > :nth-child(2)").click();
      cy.get(".ui-datepicker-year").select("2014");
      cy.get(":nth-child(1) > :nth-child(4) > .ui-state-default").click();
      cy.get(".filterForm > :nth-child(5) > :nth-child(4)").click();
      cy.get(".ui-datepicker-year").select("2014");
      cy.get(":nth-child(1) > :nth-child(4) > .ui-state-default").click();
      cy.get(".formButton > .button").click();

      cy.contains("No record found. Please try again");
      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M05-05", () => {
      cy.get(":nth-child(4) > a > div").click();
      cy.get("#search").type("kd000030");
      cy.get("form > :nth-child(1) > .button").click();

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M05-06", () => {
      cy.get(":nth-child(4) > a > div").click();

      /* ==== Generated with Cypress Studio ==== */
      cy.get(".styled").select("View company EDC details");
      cy.get(".filterForm > :nth-child(5) > :nth-child(2)").click();
      cy.get(".ui-datepicker-year").select("2023");
      cy.get(":nth-child(1) > :nth-child(1) > .ui-state-default").click();
      cy.get(".filterForm > :nth-child(5) > :nth-child(4)").click();
      cy.get(":nth-child(1) > :nth-child(3) > .ui-state-default").click();
      cy.get(".formButton > .button").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M05-07", () => {
      cy.get(":nth-child(4) > a > div").click();

      let nextPageBtn = "#next > span";
      let totalRecordElement = ".total_font";

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.goNextPage(nextPageBtn, totalRecordElement);

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M05-08", () => {
      cy.get(":nth-child(4) > a > div").click();

      let pageInfo = "#pageInfo";
      let totalRecordElement = ".total_font";
      let searchLastPageUrl = "/admin/auditTrailEDC?page=";

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      cy.goLastPage(pageInfo, totalRecordElement, searchLastPageUrl);

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });
  });
});
//#endregion
