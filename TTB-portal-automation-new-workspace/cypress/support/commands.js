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
import "cypress-file-upload";

Cypress.ScreenshotCaptureEnum = Object.freeze({
  FULLPAGE: "fullPage",
  VIEWPORT: "viewport",
  RUNNER: "runner",
});

//#region random
import { faker } from "@faker-js/faker";

Cypress.Commands.add("genAddressText", () => {
  const address = `${faker.location.streetAddress()}, ${faker.location.city()}, ${faker.location.state()} ${faker.location.zipCode("#####")}`;
  return cy.wrap(address);
});
Cypress.Commands.add("genZipCode", () => {
  const zip = faker.location.zipCode("#####"); // เช่น "10250"
  return cy.wrap(zip);
});
Cypress.Commands.add("genThaiPhoneNumber", () => {
  const prefixes = ["06", "08", "09"]; // ค่ายมือถือไทย
  const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];

  // สุ่มเลขอีก 8 หลักที่เหลือ (รวมเป็น 10 หลัก)
  const rest = faker.string.numeric(8);

  const phone = `${prefix}${rest}`; // เช่น "0812345678"
  return cy.wrap(phone);
});

function getRandomNickname() {
  const consonants = [
    "b",
    "c",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "m",
    "n",
    "p",
    "r",
    "s",
    "t",
    "v",
    "w",
    "z",
  ];
  const vowels = ["a", "e", "i", "o", "u"];

  // สุ่มความยาวชื่อ (2-3 พยางค์)
  const syllableCount = Math.floor(Math.random() * 2) + 2;
  let name = "";

  for (let i = 0; i < syllableCount; i++) {
    const c = consonants[Math.floor(Math.random() * consonants.length)];
    const v = vowels[Math.floor(Math.random() * vowels.length)];
    name += c + v;
  }

  // Capitalize ตัวแรก
  name = name.charAt(0).toUpperCase() + name.slice(1);

  return name; // ไม่มีตัวเลขต่อท้าย
}

Cypress.Commands.add("getRandomNickname", () => {
  return cy.wrap(getRandomNickname());
});

Cypress.Commands.add("generateRandomEmail", () => {
  return `test_${Date.now()}_${Math.floor(Math.random() * 1000)}@example.com`;
});
Cypress.Commands.add("generateRandomShopName", () => {
  const words = [
    "สยาม",
    "ทองคำ",
    "มงคล",
    "รุ่งเรือง",
    "เจริญ",
    "ไทย",
    "สุขใจ",
    "พัฒนา",
    "ก้าวหน้า",
  ];
  const word = words[Math.floor(Math.random() * words.length)];
  return `บจก. ${word} จำกัด`;
});
Cypress.Commands.add("generateRandomShopType", () => {
  const shopTypes = [
    "สวนสัตว์ไดโนเฉา",
    "แมว",
    "ร้านเสื้อผ้า",
    "ร้านขายของชำ",
    "ร้านเครื่องสำอาง",
    "ร้านอุปกรณ์อิเล็กทรอนิกส์",
    "ร้านเฟอร์นิเจอร์",
    "ร้านหนังสือ",
    "ร้านเครื่องเขียน",
    "ร้านขายยา",
  ];
  return shopTypes[Math.floor(Math.random() * shopTypes.length)];
});
Cypress.Commands.add("selectRandomOption", (selector) => {
  cy.get(`${selector} option`).then((options) => {
    const values = [...options].map((o) => o.value).filter((v) => v !== "");
    const randomValue = values[Math.floor(Math.random() * values.length)];
    cy.get(selector).select(randomValue);
  });
});

function generateThaiNationalId() {
  // สุ่ม 12 หลักแรก
  let digits = [];

  // หลักแรกมักไม่เป็น 0 (ตามรูปแบบทั่วไป)
  digits.push(Math.floor(Math.random() * 8) + 1); // 1-8

  for (let i = 0; i < 11; i++) {
    digits.push(Math.floor(Math.random() * 10));
  }

  // คำนวณ checksum (หลักที่ 13) ตามสูตรเลขบัตรประชาชนไทย
  // สูตร: (13 - (sum(digit[i] * (13-i)) mod 11)) mod 10
  let sum = 0;
  for (let i = 0; i < 12; i++) {
    sum += digits[i] * (13 - i);
  }
  const checksum = (11 - (sum % 11)) % 10;
  digits.push(checksum);

  return digits.join("");
}

Cypress.Commands.add("generateThaiNationalId", () => {
  return cy.wrap(generateThaiNationalId());
});
//#endregion

Cypress.Commands.add(
  "validateErrorMessage",
  (selector, expectedText, timeoutNumber = 5000) => {
    cy.get(selector, { timeout: timeoutNumber }).should(
      "have.text",
      expectedText,
    );
  },
);

Cypress.Commands.add("loginBankPortalPageSIT", (username, password) => {
  cy.visit("https://d1iqw3s387ikdk.cloudfront.net");
  cy.get("#DD_DEPARTMENT").click();
  cy.get("#Smartshop").click();
  cy.get("#TF_USERNAME").type(username);
  cy.get("#TF_PASSWORD").type(password);
  cy.get("#BT_LOGIN").click();
  cy.wait(4000);
});

Cypress.Commands.add("enterTtbSmartshopLoginPage", () => {
  cy.visit("https://epayment-tmb-uat.digio.co.th/", {
    timeout: 30000, // Adjust the timeout as needed (in milliseconds)
    waitUntil: "networkidle0",
  });
  // Click the ttbsmartshop button
  cy.get("#BT_LOGIN").click();
});

Cypress.Commands.add("loginBankPortalPageUAT", (username, password) => {
  cy.intercept("POST", "/adfs/ls/idpinitiatedsignon.htm").as("goToLoginPage");
  cy.enterTtbSmartshopLoginPage();
  cy.wait("@goToLoginPage");
  cy.contains("Servicesdd TTBTest").should("be.visible");
  cy.url().should("include", "https://servicesdd.tmbbank.com");
  cy.intercept("POST", "/company/api/dashboard/summary").as("dashboardSummary");
  cy.origin(
    "https://servicesdd.tmbbank.com",
    { args: { username, password } },
    ({ username, password }) => {
      cy.get("#userNameInput").type(username);
      cy.get("#passwordInput").type(password);
      cy.get("#submitButton").click();
    },
  );

  cy.url().should("include", "epayment-tmb");
  cy.wait("@dashboardSummary");
  cy.contains("WELCOME TO E-PAYMENT").should("be.visible");
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
    },
  );
});

Cypress.Commands.add(
  "takeScreenshotSimple",
  (number = 1, captureMode = Cypress.ScreenshotCaptureEnum.VIEWPORT) => {
    const date = format(new Date(), "dd-MM-yyyy");
    const describeName = Cypress.currentTest.titlePath[0].replace(/\s+/g, "_");
    const contextName = Cypress.currentTest.titlePath[1].replace(/\s+/g, "_");
    const testCaseName = Cypress.currentTest.title.replace(/\s+/g, "_");

    const SCREENSHOT_DELAY = 3000;

    const DIALOG_SELECTORS = [
      ".swal2-popup",
      ".modal-dialog .modal-content",
      ".ant-modal-content",
      ".MuiDialog-paper",
      '[role="dialog"]',
      '[role="alertdialog"]',
    ];

    const DROPDOWN_SELECTORS = [
      ".dropdown-menu.show",
      ".context-menu",
      '[role="menu"]',
      '[role="listbox"]',
      ".merchant-action-menu",
      ".merchant-dropdown",
      ".card-menu",
      ".popover",
      ".popover-body",
      '[role="tooltip"]',
    ];

    // ================================================================
    // Helper: หา dialog จริง (กรองด้วยขนาด + z-index สูงสุด)
    // ================================================================
    const findTopDialog = ($body) => {
      let $topDialog = null;
      let maxZIndex = -Infinity;

      DIALOG_SELECTORS.forEach((selector) => {
        $body
          .find(selector)
          .filter(":visible")
          .each((_, el) => {
            const rect = el.getBoundingClientRect();
            if (rect.width >= 200 && rect.height >= 100) {
              const z = parseInt(window.getComputedStyle(el).zIndex) || 0;
              if (z > maxZIndex) {
                maxZIndex = z;
                $topDialog = Cypress.$(el);
              }
            }
          });
      });

      return $topDialog;
    };

    // ================================================================
    // Helper: ตรวจ dropdown/context menu
    // ================================================================
    const findDropdownMenu = ($body) => {
      for (const selector of DROPDOWN_SELECTORS) {
        const $el = $body.find(selector).filter(":visible");
        if ($el.length > 0) return $el.first();
      }
      return null;
    };

    // ================================================================
    // Helper: แคป viewport โดย scroll ให้ element อยู่กึ่งกลางก่อน
    // → ได้ทั้ง background + dialog/dropdown ในภาพเดียว
    // ================================================================
    const screenshotWithContext = ($el, filename) => {
      cy.window().then((win) => {
        const el = $el[0];
        const rect = el.getBoundingClientRect();
        const viewportHeight = win.innerHeight;
        const currentScrollY = win.scrollY;

        // คำนวณ scroll ให้ center ของ dialog ตรงกับ center ของ viewport
        const elCenterY = rect.top + rect.height / 2 + currentScrollY;
        const targetScrollY = Math.max(0, elCenterY - viewportHeight / 2);

        win.scrollTo({ top: targetScrollY, behavior: "instant" });
      });

      // ✅ แคป viewport ทั้งหมด → ได้ background + dialog
      cy.screenshot(filename, {
        capture: "viewport",
        overwrite: true,
      });
    };
    // ================================================================
    // Helper: แคป viewport ทันที ไม่ scroll (สำหรับ dropdown)
    // ================================================================
    const screenshotViewportNow = (filename) => {
      cy.screenshot(filename, {
        capture: "viewport",
        overwrite: true,
      });
    };

    // ================================================================
    // Helper: แคปแบบ scroll หลายภาพ (หน้าปกติ)
    // ================================================================
    const screenshotFullPage = (baseFilename, mode) => {
      cy.scrollTo("top", { ensureScrollable: false });
      cy.screenshot(`${baseFilename}_1`, { capture: mode, overwrite: true });

      cy.document().then((doc) => {
        const docHeight = doc.documentElement.scrollHeight;
        const viewportHeight = Cypress.config("viewportHeight");

        if (
          docHeight > viewportHeight * 1.25 &&
          docHeight < viewportHeight * 1.75
        ) {
          cy.scrollTo("bottom", { ensureScrollable: false });
          cy.screenshot(`${baseFilename}_2`, {
            capture: mode,
            overwrite: true,
          });
        } else if (docHeight >= viewportHeight * 1.75) {
          cy.scrollTo("0%", "50%", { ensureScrollable: false });
          cy.screenshot(`${baseFilename}_2`, {
            capture: mode,
            overwrite: true,
          });
          cy.scrollTo("bottom", { ensureScrollable: false });
          cy.screenshot(`${baseFilename}_3`, {
            capture: mode,
            overwrite: true,
          });
        }
      });
    };

    // ================================================================
    // Main Logic
    // ================================================================
    const baseFilename = `${date}/${describeName}/${contextName}/${testCaseName}_${number}`;

    cy.wait(SCREENSHOT_DELAY);

    if (captureMode !== Cypress.ScreenshotCaptureEnum.VIEWPORT) {
      cy.screenshot(baseFilename, { capture: captureMode, overwrite: true });
      return;
    }

    cy.get("body").then(($body) => {
      const $dialog = findTopDialog($body);
      const $dropdown = findDropdownMenu($body);

      if ($dialog?.length) {
        // ✅ Case 1: Dialog/Modal → scroll ให้อยู่กึ่งกลาง แล้วแคป viewport ทั้งหมด
        // → ได้ทั้ง background + dialog overlay ในภาพเดียว
        cy.log("[screenshot] Dialog → capture viewport with background");
        screenshotWithContext($dialog, `${baseFilename}_1`);
      } else if ($dropdown?.length) {
        // ✅ Case 2: Dropdown → แคป viewport ทันที ไม่ scroll
        cy.log("[screenshot] Dropdown → capture viewport now");
        screenshotViewportNow(`${baseFilename}_1`);
      } else {
        // ✅ Case 3: หน้าปกติ → scroll แล้วแคปหลายภาพ
        cy.log("[screenshot] Normal page → capture fullPage");
        screenshotFullPage(baseFilename, captureMode);
      }
    });
  },
);

Cypress.Commands.add("closePopupIfExists", () => {
  cy.get("body").then(($body) => {
    if ($body.find('button:contains("Close")').length > 0) {
      cy.contains("button", "Close").click();
      cy.log("Popup closed successfully");
    } else {
      cy.log("No popup found");
    }
  });
});

Cypress.Commands.add(
  "takeScreenshotSimple1",
  (number = 1, captureMode = Cypress.ScreenshotCaptureEnum.VIEWPORT) => {
    const date = format(new Date(), "dd-MM-yyyy");
    const describeName = Cypress.currentTest.titlePath[0].replace(/\s+/g, "_");
    const contextName = Cypress.currentTest.titlePath[1].replace(/\s+/g, "_");
    const testCaseName = Cypress.currentTest.title.replace(/\s+/g, "_");

    cy.wait(3000);

    if (captureMode === Cypress.ScreenshotCaptureEnum.VIEWPORT) {
      cy.get("body").then(($body) => {
        const hasSwalPopup = $body.find(".swal2-popup:visible").length > 0;
        const hasModalDialog = $body.find(".modal-dialog:visible").length > 0;
        const hasKebab =
          $body.find(
            ".MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiPaper-root.MuiMenu-paper.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation8.MuiPopover-paper.css-177ic5c",
          ).length > 0;

        const hasDisplayBlock =
          $body.find('[style*="display: block"]:visible').length > 0;

        if (hasSwalPopup || hasModalDialog || hasKebab || hasDisplayBlock) {
          // ถ้ามี popup ให้แคปเฉพาะ popup นั้น
          let popupSelector = null;

          if (hasSwalPopup) popupSelector = ".swal2-popup:visible";
          else if (hasModalDialog) popupSelector = ".modal-dialog:visible";
          else if (hasKebab)
            popupSelector =
              ".MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiPaper-root.MuiMenu-paper.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation8.MuiPopover-paper.css-177ic5c";
          else if (hasDisplayBlock)
            popupSelector = '[style*="display: block"]:visible';

          // cy.get(popupSelector).screenshot(
          cy.screenshot(
            `${date}/${describeName}/${contextName}/${testCaseName}_${number}_popup`,
            {
              capture: "viewport",
              overwrite: true,
            },
          );
        } else {
          // ถ้าไม่มี popup ให้แคปทั้งหน้าตามเดิม
          cy.scrollTo("top", { ensureScrollable: false });

          cy.screenshot(
            `${date}/${describeName}/${contextName}/${testCaseName}_${number}_1`,
            {
              capture: captureMode,
              overwrite: true,
            },
          );

          cy.document().then((doc) => {
            const docHeight = doc.documentElement.scrollHeight;
            const windowHeight = Cypress.config("viewportHeight");

            if (
              docHeight > windowHeight * 1.25 &&
              docHeight < windowHeight * 1.75
            ) {
              cy.scrollTo("bottom", { ensureScrollable: false });
              cy.screenshot(
                `${date}/${describeName}/${contextName}/${testCaseName}_${number}_2`,
                {
                  capture: captureMode,
                  overwrite: true,
                },
              );
            } else if (docHeight >= windowHeight * 1.75) {
              cy.scrollTo("0%", "50%", { ensureScrollable: false });
              cy.screenshot(
                `${date}/${describeName}/${contextName}/${testCaseName}_${number}_2`,
                {
                  capture: captureMode,
                  overwrite: true,
                },
              );

              cy.scrollTo("bottom", { ensureScrollable: false });
              cy.screenshot(
                `${date}/${describeName}/${contextName}/${testCaseName}_${number}_3`,
                {
                  capture: captureMode,
                  overwrite: true,
                },
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
        },
      );
    }
  },
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
    ".main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(3) > #transactionAll",
  ).click();
  cy.get(
    ".main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(3) > .nav-second-level > :nth-child(4) > #cash > div",
  ).click();
});

Cypress.Commands.add("gotomenupromptpay", () => {
  cy.get(
    ".main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(3) > #transactionAll",
  ).click();
  cy.get(
    ".main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(3) > .nav-second-level > :nth-child(5) > #tqrc > div",
  ).click();
});

Cypress.Commands.add("gotomenumanageuser", () => {
  cy.get(
    ".main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(4) > #manageuser > .toggle-none",
  ).click();
});

Cypress.Commands.add("goGoToMenuAuditLog", () => {
  cy.get(
    ".main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(8) > #log",
  ).click();
  cy.get(
    ".main-content > :nth-child(1) > .pace > .main-sidebar-nav > .nano > .nano-content > #menu > :nth-child(8) > .nav-second-level > .nav-item > #auditlog > div",
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
          { timeout: 15000 },
        );
      } else {
        throw new Error(`ไม่พบไฟล์ที่ตรงกับ pattern: ${inputFilePattern}`);
      }
    });
});

Cypress.Commands.add("gotoMID", (name, capture = "nonCap") => {
  cy.search("search_all", name);
  cy.wait(1000);
  cy.takeScreenshotSimple();

  cy.get(".dropbtn").trigger("mouseover");
  cy.get("#viewcompany").click({ force: true });
  if (capture === "cap") {
    cy.takeScreenshotSimple(2);
  }

  cy.contains("Merchant name : " + name)
    .should("be.visible")
    .click();
  cy.wait(3000);
  cy.url().should("include", "/company/view/mid"); // check url
  if (capture === "cap") {
    cy.takeScreenshotSimple(3);
  }
});

Cypress.Commands.add("resetMID", (lumpsum, realtime) => {
  // Validate 'Lump sum' condition
  cy.gotoMID(lumpsum).then(() => {
    cy.get(":nth-child(9) > .form-group > :nth-child(2)").then(($el) => {
      if ($el.text().includes("Lump sum")) {
        cy.get(".breadcrumb-company").contains("All Companies").click();
      } else {
        cy.get(".fas.fa-pen").click();
        cy.get("#LUMPSUM").click();
        cy.get(".btn").contains(/save/i).click();
        cy.contains(/success/i).should("be.visible");
        cy.contains(/ok/i).click();
      }
    });
  });

  // Validate 'Real time' condition
  cy.gotoMID(realtime).then(() => {
    cy.get(":nth-child(9) > .form-group > :nth-child(2)").then(($el) => {
      if ($el.text().includes("Real time")) {
        cy.get(".breadcrumb-company").contains("All Companies").click();
      } else {
        cy.get(".fas.fa-pen").click();
        cy.get("#NORMAL").click();
        cy.get(".btn").contains(/save/i).click();
        cy.contains(/success/i).should("be.visible");
        cy.contains(/ok/i).click();
      }
    });
  });
});

Cypress.Commands.add("genDateTime", () => {
  const timestamp = new Date();
  const year = timestamp.getFullYear();
  const month = String(timestamp.getMonth() + 1).padStart(2, "0"); // เดือน
  const day = String(timestamp.getDate()).padStart(2, "0"); // วัน
  const hours = String(timestamp.getHours()).padStart(2, "0"); // ชั่วโมง
  const minutes = String(timestamp.getMinutes()).padStart(2, "0"); // นาที
  const seconds = String(timestamp.getSeconds()).padStart(2, "0"); // วินาที
  return `${year}-${month}-${day}_${hours}-${minutes}-${seconds}`;
});

Cypress.Commands.add("closeDataNotFoundPopupIfExists", () => {
  cy.get("body").then(($body) => {
    if ($body.text().includes("Data Not Found")) {
      cy.log("พบ popup Data Not Found -> กดปุ่ม Close");
      cy.contains("Data Not Found")
        .parents('.modal, .popup, [role="dialog"]')
        .within(() => {
          cy.contains("Close").click();
        });
    } else {
      cy.log("ไม่พบ popup Data Not Found");
    }
  });
});

Cypress.Commands.add(
  "reloadUntilVisibleWithTimeout",
  (selector, totalTimeout = 60000, reloadDelay = 3000) => {
    const startTime = Date.now();

    function attempt() {
      cy.get("body").then(($body) => {
        if (
          $body.find(selector).length > 0 &&
          $body.find(selector).is(":visible")
        ) {
          cy.log(`เจอปุ่มแล้ว ใช้เวลา ${Date.now() - startTime}ms`);
          return;
        }

        if (Date.now() - startTime >= totalTimeout) {
          throw new Error(
            `Timeout: ไม่พบปุ่ม ${selector} ภายใน ${totalTimeout}ms`,
          );
        }

        cy.wait(reloadDelay);
        cy.reload();
        attempt();
      });
    }

    attempt();
  },
);
