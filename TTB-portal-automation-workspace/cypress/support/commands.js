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
import { format } from "date-fns";
Cypress.ScreenshotCaptureEnum = Object.freeze({
  FULLPAGE: "fullPage",
  VIEWPORT: "viewport",
  RUNNER: "runner",
});
//#endregion

//#region Command Functions
/*
 * Command function to enter ttb smartshop login page
 */
Cypress.Commands.add("enterTtbSmartshopLoginPage", () => {
  cy.visit("https://epayment-tmb-uat.digio.co.th/account/signin", {
    timeout: 30000, // Adjust the timeout as needed (in milliseconds)
    waitUntil: "networkidle0",
  });

  // Wait for web loading for 1 second
  cy.wait(1000);

  // Click the ttbsmartshop button
  cy.contains("button", "ttbsmartshop").click();
});

/*
 * Command function to validate the error message that area correct following selector and expected text
 *
 * @param {selector} is element we want to inspect
 * @param {expectedText} is the target text that selector should show
 * @param {timeoutNumber} is the number that we wait for timeout by default we set it as 5000 miliseconds
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

/*
 * Command function to auto login and logout to DigiPay bank page
 */
Cypress.Commands.add("loginBankPortalPage", () => {
  cy.enterTtbSmartshopLoginPage();
  cy.origin("https://servicesdd.tmbbank.com", () => {
    cy.get('input[type="email"]#userNameInput').type(
      "TESTMERCDGOAD4@TMBTest.local"
    );
    cy.get('input[type="password"]#passwordInput').type("P@ss56789");
    cy.get("#submitButton").click();
  });
  cy.wait(5000);
});

Cypress.Commands.add("smartShopWebPortal", (username, password) => {
  cy.enterTtbSmartshopLoginPage();

  cy.get("#userNameInput").type(username);
  cy.get("#passwordInput").type(password);
  cy.get("#submitButton").click();

  cy.wait(5000);

  //check url must have epayment-tmb
  cy.url().should("include", "epayment-tmb");
});

/**
 * Command to take screenshot as viewport mode.
 * If there are image with the same name, this command will overwrite it.
 *
 * @param {name} is the name of picture that we screenshot
 */
Cypress.Commands.add("takeScreenshot", (name) => {
  const date = format(new Date(), "dd-MM-yyyy");
  const describeName = Cypress.currentTest.titlePath[0].replace(/\s+/g, "_");
  const contextName = Cypress.currentTest.titlePath[1].replace(/\s+/g, "_");
  const testCaseName = Cypress.currentTest.title.replace(/\s+/g, "_");

  // Wait to perform for 1 seconds
  cy.wait(1000);

  // Take screenshot in format that we want in capture mode 'runner' with overwrite when there are file same name exists
  cy.screenshot(
    `${date}/${describeName}/${contextName}/${testCaseName}/${name}`,
    {
      capture: "runner",
      overwrite: true,
    }
  );
});

Cypress.Commands.add(
  "takeScreenshotSimple",
  (number = 1, captureMode = Cypress.ScreenshotCaptureEnum.VIEWPORT) => {
    const date = format(new Date(), "dd-MM-yyyy");
    const describeName = Cypress.currentTest.titlePath[0].replace(/\s+/g, "_");
    const contextName = Cypress.currentTest.titlePath[1].replace(/\s+/g, "_");
    const testCaseName = Cypress.currentTest.title.replace(/\s+/g, "_");

    // Wait to perform for 3 seconds
    cy.wait(3000);
    if (captureMode === Cypress.ScreenshotCaptureEnum.VIEWPORT) {
      cy.get("body").then(($body) => {
        // Check if the popup is found in the body
        if (
          $body.find('.swal2-popup').length === 1 ||
          $body.find('.modal-dialog').length === 1 ||
          $body.find('[style="display: block;"]').length === 1
        ) {
          cy.scrollTo("center", { ensureScrollable: false }); // เลื่อนไปยังตำแหน่งกลาง
          cy.screenshot(
            `${date}/${describeName}/${contextName}/${testCaseName}_${number}_1`,
            {
              capture: captureMode,
              overwrite: true,
            }
          );
        } else {
          // 1. เลื่อนหน้าไปที่ตำแหน่งบนสุด
          cy.scrollTo("top", { ensureScrollable: false });

          // 2. แคปภาพตอนอยู่ที่ตำแหน่งบนสุดของหน้า
          cy.screenshot(
            `${date}/${describeName}/${contextName}/${testCaseName}_${number}_1`,
            {
              capture: captureMode,
              overwrite: true,
            }
          );

          // 3. ตรวจสอบความสูงของหน้าเว็บ
          cy.document().then((doc) => {
            const docHeight = doc.documentElement.scrollHeight; // ความสูงของหน้า
            const windowHeight = Cypress.config("viewportHeight"); // ความสูงของหน้าต่าง viewport

            // ถ้าหน้ายาวมากกว่า 1.25-1.75 เท่าของความสูงหน้าจอ
            if (
              docHeight > windowHeight * 1.25 &&
              docHeight < windowHeight * 1.75
            ) {
              cy.scrollTo("bottom", { ensureScrollable: false }); // เลื่อนจนถึงสุดหน้า
              cy.screenshot(
                `${date}/${describeName}/${contextName}/${testCaseName}_${number}_2`,
                {
                  capture: captureMode,
                  overwrite: true,
                }
              );
            } else if (docHeight >= windowHeight * 1.75) {
              // ถ้าหน้ายาวมากกว่า 1.75 เท่าของความสูงหน้าจอ ก็แคปที่ตำแหน่ง 50%
              cy.scrollTo("0%", "50%", { ensureScrollable: false });
              cy.screenshot(
                `${date}/${describeName}/${contextName}/${testCaseName}_${number}_2`,
                {
                  capture: captureMode,
                  overwrite: true,
                }
              );

              cy.scrollTo("bottom", { ensureScrollable: false }); // เลื่อนจนถึงสุดหน้า
              cy.screenshot(
                `${date}/${describeName}/${contextName}/${testCaseName}_${number}_3`,
                {
                  capture: captureMode,
                  overwrite: true,
                }
              );
            }
          });
        }
      });

    } else {
      cy.screenshot(
        `${date}/${describeName}/${contextName}/${testCaseName}_${number}`,
        {
          capture: captureMode,
          overwrite: true,
        }
      );
    }
  }
);

Cypress.Commands.add("status", (status) => {
  cy.get('select[name="status"]').select(status);
});

Cypress.Commands.add("requestType", (requestType) => {
  cy.get('select[id="request_type"]').select(requestType);
});

Cypress.Commands.add("approvalCompanyStatus", (approvalCompanyStatus) => {
  cy.get('select[id="status"]').select(approvalCompanyStatus);
});

Cypress.Commands.add("gotomenucash", () => {
  cy.get(
    ".main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(3) > #transactionAll"
  ).click();
  cy.get(
    ".main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(3) > .nav-second-level > :nth-child(4) > #cash > div"
  ).click();
});

Cypress.Commands.add("gotomenupromptpay", () => {
  cy.get(
    ".main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(3) > #transactionAll"
  ).click();
  cy.get(
    ".main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(3) > .nav-second-level > :nth-child(5) > #tqrc > div"
  ).click();
});

Cypress.Commands.add("gotomenumanageuser", () => {
  cy.get(
    ".main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(4) > #manageuser > .toggle-none"
  ).click();
});

Cypress.Commands.add("goGoToMenuAuditLog", () => {
  cy.get(
    ".main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(8) > #log"
  ).click();
  cy.get(
    ".main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(8) > .nav-second-level > .nav-item > #auditlog > div"
  ).click();
});

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

// ทำให้โค้ดหาชื่อไฟล์ที่ตรงกับ pattern ก่อน
Cypress.Commands.add("parseXlsx", (inputFilePattern) => {
  cy.task("listFiles", Cypress.config("downloadsFolder")) // ตรวจสอบไฟล์ทั้งหมดในโฟลเดอร์ดาวน์โหลด
    .then((files) => {
      // หาชื่อไฟล์ที่ตรงกับ pattern
      const fileName = files.find((file) => inputFilePattern.test(file));

      // ถ้าเจอไฟล์ตรงกับ pattern ก็จะอ่านไฟล์นั้น
      if (fileName) {
        cy.readFile(
          `${Cypress.config("downloadsFolder")}/${fileName}`,
          "binary",
          { timeout: 15000 }
        );
      } else {
        throw new Error(`ไม่พบไฟล์ที่ตรงกับ pattern: ${inputFilePattern}`);
      }
    });
});

Cypress.Commands.add("gotoMID", (name, capture = 'nonCap') => {
  cy.search('search_all', name);
  cy.wait(1000);
  cy.takeScreenshotSimple();

  cy.get('.dropbtn').trigger('mouseover');
  cy.get('#viewcompany').click({ force: true });
  if(capture === 'cap'){
    cy.takeScreenshotSimple(2);
  }

  cy.contains('Merchant name : ' + name).should('be.visible').click();
  cy.wait(3000);
  cy.url().should("include", "/company/view/mid");    // check url
  if(capture === 'cap'){
    cy.takeScreenshotSimple(3);
  }
});

Cypress.Commands.add("resetMID", (lumpsum, realtime) => {
    // Validate 'Lump sum' condition
    cy.gotoMID(lumpsum).then(() => {
      cy.get(':nth-child(9) > .form-group > :nth-child(2)').then(($el) => {
        if ($el.text().includes('Lump sum')) {
          cy.get('.breadcrumb-company').contains('All Companies').click();
        } else {
          cy.get('.fas.fa-pen').click();
          cy.get('#LUMPSUM').click();
          cy.get('.btn').contains(/save/i).click();
          cy.contains(/success/i).should('be.visible');
          cy.contains(/ok/i).click();
        }
      });
    });

    // Validate 'Real time' condition
    cy.gotoMID(realtime).then(() => {
      cy.get(':nth-child(9) > .form-group > :nth-child(2)').then(($el) => {
        if ($el.text().includes('Real time')) {
          cy.get('.breadcrumb-company').contains('All Companies').click();
        } else {
          cy.get('.fas.fa-pen').click();
          cy.get('#NORMAL').click();
          cy.get('.btn').contains(/save/i).click();
          cy.contains(/success/i).should('be.visible');
          cy.contains(/ok/i).click();
        }
      });
    });
});

Cypress.Commands.add("genDateTime", () => {
  const timestamp = new Date();
  const year = timestamp.getFullYear();
  const month = String(timestamp.getMonth() + 1).padStart(2, '0');  // เดือน
  const day = String(timestamp.getDate()).padStart(2, '0');  // วัน
  const hours = String(timestamp.getHours()).padStart(2, '0');  // ชั่วโมง
  const minutes = String(timestamp.getMinutes()).padStart(2, '0');  // นาที
  const seconds = String(timestamp.getSeconds()).padStart(2, '0');  // วินาที
  return `${year}-${month}-${day}_${hours}-${minutes}-${seconds}`;
});
