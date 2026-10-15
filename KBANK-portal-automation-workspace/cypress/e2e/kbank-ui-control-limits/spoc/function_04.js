describe("function 04", () => {
  beforeEach(() => {
    // auto login to enter portal page
    cy.enterKasikornBankPortalPage(
      Cypress.env("KBANK_USERNAME"),
      Cypress.env("KBANK_PASSWORD")
    );

    // wait for 1 seconds
    cy.wait(1000);
  });

  let startDay = 1;
  let startMonth = 10;
  let startYear = 2024;
  let endDay = 11;
  let endMonth = 11;
  let endYear = 2024;

  it("TS20", () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.get(":nth-child(2) > a > span").click();
    cy.get(":nth-child(4) > a > div").click();
    cy.get(".styled").select("Active");

    cy.get("#fromdate").click();
    cy.get("select.ui-datepicker-month").select(`${startMonth - 1}`);
    cy.get("select.ui-datepicker-year").select(`${startYear}`);
    cy.get('a[class="ui-state-default"]').contains(`${startDay}`).click();

    cy.get("#todate").click();
    cy.get("select.ui-datepicker-month").select(`${endMonth - 1}`);
    cy.get("select.ui-datepicker-year").select(`${endYear}`);
    cy.get('a[class="ui-state-default"]').contains(`${endDay}`).click();

    cy.get(".formButton > .button").click();
    /* ==== End Cypress Studio ==== */

    cy.get(".textCenter > .button").should(
      "have.text",
      "Export Company Profile"
    );

    cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
  });

  it("TS21", () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.get(":nth-child(2) > a > span").click();
    cy.get(":nth-child(4) > a > div").click();
    cy.get(".styled").select("Active");

    cy.get("#fromdate").click();
    cy.get("select.ui-datepicker-month").select(`${startMonth - 1}`);
    cy.get("select.ui-datepicker-year").select(`${startYear}`);
    cy.get('a[class="ui-state-default"]').contains(`${startDay}`).click();

    cy.get("#todate").click();
    cy.get("select.ui-datepicker-month").select(`${endMonth - 1}`);
    cy.get("select.ui-datepicker-year").select(`${endYear}`);
    cy.get('a[class="ui-state-default"]').contains(`${endDay}`).click();

    cy.get(".formButton > .button").click();
    /* ==== End Cypress Studio ==== */

    cy.get(".textCenter > .button").should(
      "have.text",
      "Export Company Profile"
    );

    cy.wait(1000);
    cy.get(".textCenter > .button").click();

    cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

    //TODO: [ Manual ] check the file downloaded by this way is correct naming or not
  });
});
