describe("Setting/Test Scenario: 01 Bulk upload", () => {
    let data;

    beforeEach(() => {
        // request data from fixtures
        cy.fixture('data_searchComp').then((dataMain) => {
            data = dataMain;
        });

        // auto login to enter portal page
        cy.smartShopWebPortal(
            Cypress.env('ADMIN_USERNAME'),
            Cypress.env('ADMIN_PASSWORD')
        );
    });

    context("1_Bulk upload Ju", () => {
        it("TS02_TC01 Click Settlement bulk upload", () => {
            cy.get('#setting').click({ force: true });
            cy.get('#settingSettlement').click({ force: true });

            cy.url().should("include", "/settlement/bulkupload");
            cy.contains('Settlement Real time or Lump sum').should('be.visible');
            cy.takeScreenshotSimple();
        });

        it("TS02_TC02 Click Template File", () => {
            cy.get('#setting').click({ force: true });
            cy.get('#settingSettlement').click({ force: true });

            cy.contains('Template File').should('be.visible').click();
            cy.renameNewfile('Template_Settlement_Company', 'xlsx'); // สร้างชื่อไฟล์ใหม่
            cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.RUNNER);
        });

        it("TS02_TC03 Upload file with no data", () => {
            cy.get('#setting').click({ force: true });
            cy.get('#settingSettlement').click({ force: true });

            cy.get('#file').selectFile('cypress/fixtures/Settlement_Company_noData.xlsx'); // อัปโหลดไฟล์
            cy.contains('Submit').click();
            cy.contains('ข้อมูลในไฟล์ไม่ถูกต้อง').should('be.visible');
            cy.takeScreenshotSimple();
        });

        it("TS02_TC04 Upload file with invalid data", () => {
            cy.get('#setting').click({ force: true });
            cy.get('#settingSettlement').click({ force: true });

            cy.get('#file').selectFile('cypress/fixtures/Settlement_Company_invalid.xlsx'); // อัปโหลดไฟล์
            cy.contains('Submit').click();
            cy.contains('พบ 1 ร้านค้า ข้อมูลไม่ถูกต้อง').should('be.visible');
            cy.takeScreenshotSimple();
        });

        it("TS02_TC05 Download File Settlement Company fail", () => {
            cy.get('#setting').click({ force: true });
            cy.get('#settingSettlement').click({ force: true });

            cy.get('#file').selectFile('cypress/fixtures/Settlement_Company_invalid.xlsx'); // อัปโหลดไฟล์
            cy.contains('Submit').click();
            cy.contains('พบ 1 ร้านค้า ข้อมูลไม่ถูกต้อง').should('be.visible');
            cy.contains('Download').click();
            cy.validateFile('Settlement_Company_invalid.xlsx_fail');
            cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.RUNNER);
        });

        it("TS02_TC06 Upload file with valid data", () => {
            cy.resetMID(data.ju_lumpsum, data.ju_realtime);
            cy.get('#setting').click({ force: true });
            cy.get('#settingSettlement').click({ force: true });

            cy.get('#file').selectFile('cypress/fixtures/Settlement_Company_valid.xlsx'); // อัปโหลดไฟล์
            cy.contains('Submit').click();
            cy.wait(3000);
            cy.contains('ข้อมูลถูกต้องทั้งหมด').should('be.visible');
            cy.takeScreenshotSimple();
        });

        it("TS02_TC07 Click Confirm in pop-up จากข้อมูลที่ upload  ทั้งหมด .. ร้านค้า (ข้อมูลถูกทั้งหมด)", () => {
            cy.resetMID(data.ju_lumpsum, data.ju_realtime);
            cy.get('#setting').click({ force: true });
            cy.get('#settingSettlement').click({ force: true });

            cy.get('#file').selectFile('cypress/fixtures/Settlement_Company_valid.xlsx'); // อัปโหลดไฟล์
            cy.contains('Submit').click();
            cy.wait(3000);
            cy.contains('ข้อมูลถูกต้องทั้งหมด').should('be.visible');
            cy.contains('Confirm').click();
            cy.takeScreenshotSimple();
        });

        it("TS02_TC08 Upload file with กำลังทำรายการ Settlement", () => {
            cy.get('#setting').click({ force: true });
            cy.get('#settingSettlement').click({ force: true });
    
            cy.get(':nth-child(1) > #createDate').contains(/Settlement_Company_valid.xlsx/i);
            cy.get(':nth-child(1) > #transactionId-partnerTransactionID').contains(/processing/i);
            cy.get('#detail > .fa').first().click();
            cy.contains('Settlement Bulk Upload Detail').should('be.visible');
            cy.takeScreenshotSimple();
        });
    });
});
