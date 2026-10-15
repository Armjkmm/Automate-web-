Cypress.Commands.add("search", (elName, data) => {
  cy.get(`[name="${elName}"]`).type(data); // กรอกข้อมูลในฟิลด์
  cy.get('[type="button"]')
    .contains(/SEARCH/i)
    .click(); // คลิกปุ่ม Search

  cy.get(".wg-row").should("be.visible");
  cy.get("body").then(($body) => {
    // ใช้ .toLowerCase() เพื่อแปลงข้อความเป็นตัวพิมพ์เล็ก
    const isTextVisible = $body.text().toLowerCase().includes("data not found");
    // ตรวจสอบจำนวน 0 ใน .text-ct-header-number.ml-4
    cy.get(".text-ct-header-number").then(($headerNumber) => {
      const headerText = $headerNumber.text().trim();
      const isZero = headerText === "0"; // ตรวจสอบว่าค่าคือ 0

      // ถ้าเจอ "Data Not Found" หรือ .text-ct-header-number.ml-4 == 0
      if (isTextVisible || isZero) {
        cy.takeScreenshotSimple(); // แคปภาพเมื่อไม่พบข้อมูลหรือจำนวน 0
      }
    });
  });
});

Cypress.Commands.add("searchStatus", (elStatus, status) => {
  cy.get(elStatus).select(status);
  cy.get('[type="button"]')
    .contains(/SEARCH/i)
    .click();
});

Cypress.Commands.add("searchWithDate", (elName, data, start, end) => {
  cy.get(`[name="${elName}"]`).type(data);
  cy.get("#start").type(start);
  cy.get("#end").type(end);

  cy.get('[type="button"]')
    .contains(/SEARCH/i)
    .click();
  cy.takeScreenshotSimple();
});

Cypress.Commands.add("searchDate", (start, end) => {
  cy.get("#start").type(start);
  cy.get("#end").type(end);
  cy.get('[type="button"]')
    .contains(/SEARCH/i)
    .click();

  cy.get(".wg-row").should("be.visible");
  cy.get("body").then(($body) => {
    // ใช้ .toLowerCase() เพื่อแปลงข้อความเป็นตัวพิมพ์เล็ก
    const isTextVisible = $body.text().toLowerCase().includes("data not found");
    // ตรวจสอบจำนวน 0 ใน .text-ct-header-number.ml-4
    cy.get(".text-ct-header-number").then(($headerNumber) => {
      const headerText = $headerNumber.text().trim();
      const isZero = headerText === "0"; // ตรวจสอบว่าค่าคือ 0

      // ถ้าเจอ "Data Not Found" หรือ .text-ct-header-number.ml-4 == 0
      if (isTextVisible || isZero) {
        cy.takeScreenshotSimple(); // แคปภาพเมื่อไม่พบข้อมูลหรือจำนวน 0
      }
    });
  });
});

Cypress.Commands.add("searchDateStatus", (elStatus, status, start, end) => {
  cy.get("#start").type(start);
  cy.get("#end").type(end);
  cy.get(elStatus).select(status);
  cy.get('[type="button"]')
    .contains(/SEARCH/i)
    .click();

  cy.get(".wg-row").should("be.visible");
  cy.get("body").then(($body) => {
    // ใช้ .toLowerCase() เพื่อแปลงข้อความเป็นตัวพิมพ์เล็ก
    const isTextVisible = $body.text().toLowerCase().includes("data not found");
    // ตรวจสอบจำนวน 0 ใน .text-ct-header-number.ml-4
    cy.get(".text-ct-header-number").then(($headerNumber) => {
      const headerText = $headerNumber.text().trim();
      const isZero = headerText === "0"; // ตรวจสอบว่าค่าคือ 0

      // ถ้าเจอ "Data Not Found" หรือ .text-ct-header-number.ml-4 == 0
      if (isTextVisible || isZero) {
        cy.takeScreenshotSimple(); // แคปภาพเมื่อไม่พบข้อมูลหรือจำนวน 0
      }
    });
  });
});

Cypress.Commands.add("selectDate", (start, end) => {
  cy.get("#start").type(start);
  cy.get("#end").type(end);
});

Cypress.Commands.add("searchYear", (element, data) => {
  cy.get(element).click();
  cy.contains(data).click();

  cy.get("#btn_submit_download_summary_transactionn")
    .contains(/Download/i)
    .click();
  cy.takeScreenshotSimple();
});
