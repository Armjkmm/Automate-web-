// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//#region Variables
import "cypress-iframe";
import "cypress-file-upload";
import { format } from "date-fns";
const path = require("path");
const fs = require("fs");

Cypress.ScreenshotCaptureEnum = Object.freeze({
  FULLPAGE: "fullPage",
  VIEWPORT: "viewport",
  RUNNER: "runner",
});

//#endregion

/**
 * Command function to validate the error message that area correct following selector and expected text
 *
 * @param {string} selector is element we want to inspect
 * @param {string} expectedText is the target text that selector should show
 * @param {int} timeoutNumber is the number that we wait for timeout by default we set it as 5000 miliseconds
 */
Cypress.Commands.add(
  "validateErrorMessage",
  (selector, expectedText, timeoutNumber = 5000) => {
    cy.get(selector, { timeout: timeoutNumber }).should(
      "have.text",
      expectedText
    );
  }
);

/**
 * Command function to auto login to Karsikorn bank portal page
 */
Cypress.Commands.add("enterKasikornBankPortalPage", (username, password) => {
  cy.visit("https://mpostest1.kasikornbank.com:7443/auth/login");

  // check the username input field is exist
  cy.get('input[id="j_username"]').should("exist");
  // Type username into username input field
  cy.get('input[id="j_username"]').type(username);

  // check the password input field is exist
  cy.get('input[id="j_password"]').should("exist");
  // Type password into password input field
  cy.get('input[id="j_password"]').type(password);

  // check submit button is exist
  cy.get('a[id="btn-login"]').should("exist");
  // Click to submit button
  cy.get('a[id="btn-login"]').click();

  // Check it can login to console page
  cy.url()
    .should("include", "/console")
    .then(() => {
      return new Cypress.Promise((resolve) => {
        const checkReadyState = () => {
          if (document.readyState === "complete") {
            resolve();
          } else {
            setTimeout(checkReadyState, 100);
          }
        };
        checkReadyState();
      });
    });
});

/**
 * Command function to auto login to Karsikorn bank portal page
 */
Cypress.Commands.add(
  "enterKasikornMerchantPortalPage",
  (username, password) => {
    cy.visit("https://mpostest1.kasikornbank.com/spoc/auth/login");

    // check the username input field is exist
    cy.get('input[id="j_username"]').should("exist");
    // Type username into username input field
    cy.get('input[id="j_username"]').type(username);

    // check the password input field is exist
    cy.get('input[id="j_password"]').should("exist");
    // Type password into password input field
    cy.get('input[id="j_password"]').type(password);

    // check submit button is exist
    cy.get(".button").should("exist");
    // Click to submit button
    cy.get(".button").click();

    // Check it can login to console page
    cy.url()
      .should("include", "/console")
      .then(() => {
        return new Cypress.Promise((resolve) => {
          const checkReadyState = () => {
            if (document.readyState === "complete") {
              resolve();
            } else {
              setTimeout(checkReadyState, 100);
            }
          };
          checkReadyState();
        });
      });
  }
);

/**
 * Command to take screenshot as viewport mode.
 * If there are image with the same name, this command will overwrite it.
 *
 * @param {string} name - The name of the screenshot file.
 * @param {string} captureMode - The capture mode, should be one of ScreenshotCaptureEnum.
 */
Cypress.Commands.add(
  "takeScreenshot",
  (name, captureMode = Cypress.ScreenshotCaptureEnum.VIEWPORT) => {
    const date = format(new Date(), "dd-MM-yyyy");
    const testFileName = Cypress.spec.name
      ?.replace(/\s+/g, "_")
      ?.replace(/\.cy\.js$/, "")
      ?.replace(/\.js$/, "")
      ?.replace(/(\.[^.]+)$/, "");
    const describeName = Cypress.currentTest.titlePath[0]?.replace(/\s+/g, "_");
    const contextName = Cypress.currentTest.titlePath[1]?.replace(/\s+/g, "_");
    const testCaseName = Cypress.currentTest.title?.replace(/\s+/g, "_");

    // Helper function to avoid repeating any part that is the same as the previous one
    const removeDuplicates = (parts) => {
      return parts.filter((part, index) => part && part !== parts[index - 1]);
    };

    // Generate path parts in the order and remove duplicates
    const pathParts = removeDuplicates([
      date,
      testFileName,
      describeName,
      contextName,
      testCaseName,
      name,
    ]);

    // Helper function to safely join path parts if they exist
    const safeJoin = (...parts) => parts.filter(Boolean).join("/");

    // Wait to perform for 1 seconds
    cy.wait(1000);

    let screenshotPath = safeJoin(...pathParts);
    // Take screenshot in format that we want in capture mode 'runner' with overwrite when there are file same name exists
    cy.screenshot(screenshotPath, {
      capture: captureMode,
      overwrite: true,
    });
  }
);

/**
 * Command to take screenshot in simplify version by default as viewport mode.
 * If there are image with the same name, this command will overwrite it.
 *
 * @param {string} name - The name of the screenshot file.
 * @param {string} captureMode - The capture mode, should be one of ScreenshotCaptureEnum.
 */
Cypress.Commands.add(
  "takeScreenshotSimplify",
  (name, captureMode = Cypress.ScreenshotCaptureEnum.VIEWPORT) => {
    const date = format(new Date(), "dd-MM-yyyy");
    const testFileName = Cypress.spec.name
      ?.replace(/\s+/g, "_")
      ?.replace(/\.cy\.js$/, "")
      ?.replace(/\.js$/, "")
      ?.replace(/(\.[^.]+)$/, "");
    const describeName = Cypress.currentTest.titlePath[0]?.replace(/\s+/g, "_");
    const contextName = Cypress.currentTest.titlePath[1]?.replace(/\s+/g, "_");
    const testCaseName = Cypress.currentTest.title?.replace(/\s+/g, "_");

    //TODO: uncomment this when this automated test upgraded
    //const testCaseName = Cypress.currentTest.title?.split(":")[0]?.trim()?.replace(/\s+/g, "_");

    // Helper function to avoid repeating any part that is the same as the previous one
    const removeDuplicates = (parts) => {
      return parts.filter((part, index) => part && part !== parts[index - 1]);
    };

    // Generate path parts in the order and remove duplicates
    const pathParts = removeDuplicates([
      date,
      testFileName,
      describeName,
      contextName,
      `${testCaseName}_${name}`,
    ]);

    // Helper function to safely join path parts if they exist
    const safeJoin = (...parts) => parts.filter(Boolean).join("/");

    // Wait to perform for 1 secondsß
    cy.wait(1000);

    let screenshotPath = safeJoin(...pathParts);
    // Take screenshot in format that we want in capture mode 'runner' with overwrite when there are file same name exists
    cy.screenshot(screenshotPath, {
      capture: captureMode,
      overwrite: true,
    });
  }
);

/**
 * Command to get the next id from url and prefix
 *
 * @param {string} prefix is the id pattern like "AutomateRegTest1" or "AutomateRegTest2" prefix is "AutomateRegTest"
 * @param {string} url is the link of website url that you want to request to check id
 */
Cypress.Commands.add(
  "getNextIdFollowingPrefix",
  (
    prefix,
    url = "https://mpostest1.kasikornbank.com:7443/admin/search?search="
  ) => {
    const baseUrl = `${url}${prefix}`;

    return cy.request(baseUrl).then((response) => {
      expect(response.status).to.eq(200);

      const bodyText = response.body;
      // Dynamic create regex with the prefix
      const idPattern = new RegExp(`${prefix}(\\d+)`, "g");
      let maxIdNumber = 0;
      let match;

      // Loop through all matches in the response body
      while ((match = idPattern.exec(bodyText)) !== null) {
        // Extract the number part
        const idNumber = parseInt(match[1], 10);

        // Track the highest number
        if (idNumber > maxIdNumber) {
          maxIdNumber = idNumber;
        }
      }

      // Generate the next ID by incrementing the highest number found
      const nextId = `${prefix}${maxIdNumber + 1}`;

      return nextId;
    });
  }
);

/**
 * Command to go next page and assert that total record must be same
 *
 * @param {string} is next page button element
 * @param {string} is total record element to get text for assert
 */
Cypress.Commands.add("goNextPage", (nextPageBtn, totalRecordElement) => {
  let totalRecords;

  cy.get(totalRecordElement)
    .invoke("text")
    .then((text) => {
      // Split by ': ' and get the second part
      totalRecords = parseInt(text.split(": ")[1]);
      cy.log(`total records: ${totalRecords}`);
    });

  // find the nextPageBtn then click to go next page
  cy.get(nextPageBtn).click();

  let newTotalRecords;

  cy.get(totalRecordElement)
    .invoke("text")
    .then((text) => {
      // Split by ': ' and get the second part
      newTotalRecords = parseInt(text.split(": ")[1]);
      cy.log(`new total records: ${newTotalRecords}`);
    });

  // Assert to check total records must be the same value
  expect(newTotalRecords).to.equal(totalRecords);
});

/**
 * Command to go to the last page and assert that total record must be same
 *
 * @param {string} is next page button element
 * @param {string} is total record element to get text for assert
 */
Cypress.Commands.add(
  "goLastPage",
  (pageInfoElement, totalRecordElement, searchLastPageUrl) => {
    let totalRecords;

    cy.get(totalRecordElement)
      .invoke("text")
      .then((text) => {
        // Split by ': ' and get the second part
        totalRecords = parseInt(text.split(": ")[1]);
        cy.log(`total records: ${totalRecords}`);
      });

    cy.get(pageInfoElement)
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
          const formattedUrl = `${searchLastPageUrl}${lastPageNumber}`;

          const lastPageBtn = `[href="${formattedUrl}"]`;
          cy.log(`Navigating to: ${lastPageBtn}`);
          cy.get(lastPageBtn).click();
        }
      });

    let newTotalRecords;

    cy.get(totalRecordElement)
      .invoke("text")
      .then((text) => {
        // Split by ': ' and get the second part
        newTotalRecords = parseInt(text.split(": ")[1]);
        cy.log(`new total records: ${newTotalRecords}`);
      });

    // Assert to check total records must be the same value
    expect(newTotalRecords).to.equal(totalRecords);
  }
);

/**
 * Command to get a random hash number
 *
 * @param {number} exponentialNotation - A scientific notation value that defines
 * the range for random number generation.
 * Example: 1e9 represents 1 x 10^9, which is used to generate a random number
 * between 0 and 999,999,999.
 *
 * @param {int} maxLength - The maximum length of digits for the random number.
 * If the generated number is shorter than this length,
 * it will be padded with leading zeros to match the specified maxLength.
 *
 * @return {string} A random number as a string, padded with leading zeros
 * if needed, to match the maxLength.
 */
Cypress.Commands.add("randomHash", (exponentialNotation, maxLength) => {
  const randomHash = Math.floor(Math.random() * exponentialNotation)
    .toString()
    .padStart(maxLength, "0");

  return randomHash;
});

/**
 * Custom command to get a usable Merchant ID (MID) that is not already in use.
 *
 * @param {string} url - The base URL for the MID search. Defaults to the test URL for Kasikorn Bank.
 * @returns {Promise<string>} A promise that resolves to a usable random MID.
 */
Cypress.Commands.add(
  "getUsableMID",
  (url = "https://mpostest1.kasikornbank.com:7443/admin/search?search=") => {
    const checkMIDExists = (randomMID) => {
      const baseUrl = `${url}${randomMID}`;
      return cy.request(baseUrl).then((response) => {
        cy.log(response.body); // Log the response body for inspection
        expect(response.status).to.eq(200);

        // Assuming 'response.body.mids' is an array of existing MIDs
        const exists =
          Array.isArray(response.body.mids) &&
          response.body.mids.some((item) => item === randomMID);

        return exists; // Return true if the MID exists, false otherwise
      });
    };

    const generateNewMID = () => {
      return cy.randomHash(1e15, 15).then(($randHash) => {
        return `${$randHash}`; // Return the generated MID as a string
      });
    };

    let randomMID; // Variable to hold the generated MID

    return generateNewMID().then((mid) => {
      randomMID = mid;

      const checkUntilUsable = () => {
        return checkMIDExists(randomMID).then((exists) => {
          if (exists) {
            return generateNewMID().then((newMid) => {
              randomMID = newMid; // Update the MID
              return checkUntilUsable(); // Recursive call to check the new MID
            });
          } else {
            return randomMID; // MID is usable, return it
          }
        });
      };

      return checkUntilUsable(); // Start the checking process
    });
  }
);

/**
 * Custom command to move file from A(source path) to B(destination path)
 *
 * @param {string} source - the origin path that file located
 * @param {string} destination -  the destination path that we want to move file to
 */
Cypress.Commands.add("moveFile", (source, destination) => {
  const sourcePath = path.resolve(source);
  const destPath = path.resolve(destination);

  // Check if source file exists
  if (fs.existsSync(sourcePath)) {
    fs.rename(sourcePath, destPath, (err) => {
      if (err) {
        throw new Error(`Error moving file: ${err.message}`);
      }
    });
  } else {
    throw new Error(`Source file does not exist: ${sourcePath}`);
  }
});

/**
 * Custom Cypress command to set a specific date in a date picker.
 *
 * This command opens a calendar widget, navigates to the target month and year,
 * and selects the specified day. It prevents infinite loops by calculating the
 * exact number of clicks needed to reach the desired month and year.
 *
 * @param {string} selector - The CSS selector for the date picker input element.
 * @param {number} day - The day of the target date (e.g., 31 for the 31st).
 * @param {number} month - The month of the target date (1 = January, 12 = December).
 * @param {number} year - The year of the target date (e.g., 2024).
 */
Cypress.Commands.add("setFormattedDate", (selector, day, month, year) => {
  // Open the calendar
  cy.get(selector).click();

  // Set defaults to current date if not provided
  const today = new Date();
  const targetMonth = month || today.getMonth() + 1;
  const targetYear = year || today.getFullYear();

  // Map months for comparison
  const monthNames = {
    Jan: 1,
    Feb: 2,
    Mar: 3,
    Apr: 4,
    May: 5,
    Jun: 6,
    Jul: 7,
    Aug: 8,
    Sep: 9,
    Oct: 10,
    Nov: 11,
    Dec: 12,
  };

  // Calculate total clicks required to reach target date
  cy.get(".ui-datepicker-title").then(($title) => {
    const monthText = $title.find(".ui-datepicker-month").text().trim();
    let currentMonth = monthNames[monthText.substring(0, 3)];
    let currentYear = parseInt($title.find(".ui-datepicker-year").text());

    const calculateClicks = () => {
      let clicks = 0;

      // Calculate number of months forward or backward
      if (
        targetYear > currentYear ||
        (targetYear === currentYear && targetMonth > currentMonth)
      ) {
        // Moving forward
        while (
          currentYear < targetYear ||
          (currentYear === targetYear && currentMonth < targetMonth)
        ) {
          clicks++;
          currentMonth++;
          if (currentMonth > 12) {
            currentMonth = 1;
            currentYear++;
          }
        }
      } else if (
        targetYear < currentYear ||
        (targetYear === currentYear && targetMonth < currentMonth)
      ) {
        // Moving backward
        while (
          currentYear > targetYear ||
          (currentYear === targetYear && currentMonth > targetMonth)
        ) {
          clicks--;
          currentMonth--;
          if (currentMonth < 1) {
            currentMonth = 12;
            currentYear--;
          }
        }
      }

      return clicks;
    };

    const clicksNeeded = calculateClicks();
    const buttonSelector =
      clicksNeeded > 0 ? ".ui-datepicker-next" : ".ui-datepicker-prev";
    const totalClicks = Math.abs(clicksNeeded);

    // Perform the calculated number of clicks
    Cypress._.times(totalClicks, () => {
      cy.get(buttonSelector)
        .should("not.have.class", "ui-state-disabled")
        .click();
    });

    // Now select the day in the target month and year
    cy.get(".ui-datepicker-calendar")
      .contains("a", new RegExp(`^${day}$`))
      .click();
  });
});

Cypress.Commands.add("changeStatus", (status) => {
  cy.get('select[name="status"]').select(status);
});

Cypress.Commands.add("selectDate", (start, end) => {
  var startDate = start.split("/");
  var endDate = end.split("/");

  cy.get("#fromdate").click();
  cy.get("select.ui-datepicker-year").select(startDate[2]); //Select ใช้ในกรณี drop down list only
  cy.get("select.ui-datepicker-month").select(startDate[1]);
  cy.get('a[class="ui-state-default"]').contains(startDate[0]).click();

  cy.get("#todate").click();
  cy.get("select.ui-datepicker-year").select(endDate[2]);
  cy.get("select.ui-datepicker-month").select(endDate[1]);
  cy.get('a[class="ui-state-default"]').contains(endDate[0]).click();
});

Cypress.Commands.add("cleartemp", () => {
  cy.get('li a[href="/controlLimit').click();
  cy.get(2000);
  cy.get(":nth-child(3) > a > div").click();
  cy.wait(4000);
  cy.get("#search").type("401014525290001");
  cy.get("form > :nth-child(1) > .button").click();
  cy.get("select.selectInTable").eq(0).select("Add Permanent Limit");
  cy.get("#buttonGo").eq(0).click();
  cy.get("#maxAmountEDCPerTransac").type("100000");
  cy.get("#maxAmountEDCPerMonth").type("500000");
  cy.get("#\\31").click();
  cy.get("#popUpLimitSubmit").click();
  cy.get("#submitThis").click();
  cy.get("form > .button").click();
});

Cypress.Commands.add("searchMid", (targetMid) => {
  cy.get("#search").type(targetMid);
});

//#endregion
