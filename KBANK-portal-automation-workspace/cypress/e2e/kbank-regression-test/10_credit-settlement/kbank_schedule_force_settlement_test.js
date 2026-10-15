describe("Test Scenario: Schedule Force Settlement", () => {
  beforeEach(() => {
    cy.enterKasikornBankPortalPage(
      Cypress.env("KBANK_USERNAME"),
      Cypress.env("KBANK_PASSWORD")
    );

    cy.wait(1000);
    cy.get(":nth-child(8) > a > span").click();
  });

  const getRandomTime = (excludeTime) => {
    let randomTime;
    do {
      const hour = Math.floor(Math.random() * 24);
      randomTime = `${hour.toString().padStart(2, "0")}:00`;
    } while (randomTime === excludeTime);
    return randomTime;
  };

  context("1_Schedule Force Settlement", () => {
    beforeEach(() => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(":nth-child(2) > a > div").click();
      /* ==== End Cypress Studio ==== */
    });

    let cacheNewScheduleTime = "";

    it("M34-01", () => {
      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M34-02", () => {
      cy.get("#search").type("THATSHOULDNOTFOUND");
      cy.get("#ctaMid > .button").click();

      cy.contains("does not exist");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M34-03", () => {
      cy.get("#search").type("digio");
      cy.get("#ctaMid > .button").click();

      cy.contains("does not exist").should("not.exist");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M34-04", () => {
      cy.get("#search").type("Cte2");
      cy.get("#ctaMid > .button").click();

      cy.contains("does not exist").should("not.exist");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M34-05", () => {
      cy.get("#search").type("111111111111111");
      cy.get("#ctaMid > .button").click();

      cy.contains("does not exist").should("not.exist");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M34-06", () => {
      cy.get("#search").type("digio");
      cy.get("#ctaMid > .button").click();

      cy.contains("does not exist").should("not.exist");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      /* ==== Generated with Cypress Studio ==== */
      cy.get(".button > span").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M34-07", () => {
      cy.get("#search").type("digio");
      cy.get("#ctaMid > .button").click();

      cy.contains("does not exist").should("not.exist");

      cy.get(".button > span").click();

      cy.get(".formValue")
        .invoke("text")
        .then((text) => {
          const extractedTime = text.match(/(\d{2}:\d{2})/)[0];
          cy.log(`Extracted Time: ${extractedTime}`);

          // Generate a random time and ensure it's in the correct format
          cacheNewScheduleTime = getRandomTime(extractedTime);
          cy.log(`Random Time: ${cacheNewScheduleTime}`);

          cy.wait(2000);
          cy.get("#hour")
            .find("option")
            .contains(cacheNewScheduleTime)
            .then((option) => {
              cy.get("#hour").select(option.val());
            });

          cy.takeScreenshotSimplify(
            "1",
            Cypress.ScreenshotCaptureEnum.FULLPAGE
          );

          cy.get("#\\31 ").click();

          cy.takeScreenshotSimplify(
            "2",
            Cypress.ScreenshotCaptureEnum.FULLPAGE
          );
        });
    });

    it("M34-08", () => {
      cy.get("#search").type("digio");
      cy.get("#ctaMid > .button").click();

      cy.contains("does not exist").should("not.exist");

      /* ==== Generated with Cypress Studio ==== */
      cy.get(".button > span").click();
      /* ==== End Cypress Studio ==== */

      /* ==== Generated with Cypress Studio ==== */

      cy.wait(2000);
      cy.get("#hour")
        .find("option")
        .contains(cacheNewScheduleTime)
        .then((option) => {
          cy.get("#hour").select(option.val());
        });

      cy.get("#\\31 ").click();
      /* ==== End Cypress Studio ==== */
      cy.get(
        '[href="javascript:document.doScheduleSettlementForm.submit();"]'
      ).click();

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M34-09", () => {
      cy.get("#search").type("test");
      cy.get("#ctaMid > .button").click();

      cy.contains("does not exist").should("not.exist");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);

      /* ==== Generated with Cypress Studio ==== */
      cy.get("#next > span").click();
      /* ==== End Cypress Studio ==== */

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });

    it("M34-10", () => {
      cy.get("#search").type("test");
      cy.get("#ctaMid > .button").click();

      cy.contains("does not exist").should("not.exist");

      cy.takeScreenshotSimplify("1", Cypress.ScreenshotCaptureEnum.FULLPAGE);
      let searchLastPageUrl =
        "/creditSettlement/searchCompany?search=test&page=";
      let pageInfoElement = "#pageInfo";
      let totalRecordElement = ".total_font";
      cy.goLastPage(pageInfoElement, totalRecordElement, searchLastPageUrl);

      cy.takeScreenshotSimplify("2", Cypress.ScreenshotCaptureEnum.FULLPAGE);
    });
  });
});
