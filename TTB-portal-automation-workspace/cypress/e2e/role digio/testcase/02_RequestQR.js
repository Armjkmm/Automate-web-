describe("Digio/Test Scenario: 02 Request QR", () => {
    let data;

    beforeEach(() => {
        // request from fixtures
        cy.fixture('data_searchQR').then((dataMain) => {
            data = dataMain;
        });

        // auto login to enter portal page
        cy.smartShopWebPortal(
            Cypress.env('DIGIO_USERNAME'),
            Cypress.env('DIGIO_PASSWORD')
        );

        // auto enter Rquest QR menu
        cy.get('#qrcode').click({ force: true });
        cy.get('.wg-body').should('be.visible');

    });

    context("1_Search Request QR", () => {
        it("TS02_TC01 Click Request QR main-menu", () => {
            cy.url().should("include", "/qrcode");
            cy.takeScreenshotSimple();
        });

        it("TS02_TC02 Search by Shop name not found", () => {
            cy.search('search_all', data.shop_notFound);
        });

        it("TS02_TC03 Search by Request Code not found", () => {
            cy.search('search_all', data.qr_notFound);
        });

        it("TS02_TC04 Search by Date not found", () => {
            cy.searchDate(
                data.startDate_notFound,
                data.endDate_notFound
            );
        });

        it("TS02_TC05 Search by Status and Date not found", () => {
            cy.searchDateStatus(
                '#status-transactionalipay',
                data.status_notFound,
                data.startDate_notFound,
                data.endDate_notFound
            );
        });

        it("TS02_TC06 Search by Shop name", () => {
            cy.search('search_all', data.shop);
            cy.validateText(':nth-child(4)', data.shop);
        });

        it("TS02_TC07 Search by Request Code", () => {
            cy.search('search_all', data.qr);
            cy.validateText(':nth-child(3)', data.qr);
        });

        it("TS02_TC08 Search by Date", () => {
            cy.searchDate(
                data.startDate,
                data.endDate
            );
            cy.validateDate(
                '#qrrequeststandee_date',
                data.startDate,
                data.endDate,
            );
            cy.takeScreenshotSimple();
        });

        it("TS02_TC09 Search by Status and Date", () => {
            cy.searchDateStatus(
                '#status-transactionalipay',
                data.status,
                data.startDate,
                data.endDate
            );
            cy.getText('#qrrequeststandee_date');
            cy.validateDate(
                '#qrrequeststandee_date',
                data.startDate,
                data.endDate,
            );
            cy.validateText(':nth-child(5) > #qrstatus', data.status);
        });
    });

    context("2_View QR Details", () => {
        it("TS02_TC10 Select Request QR then Click at icon print", () => {
            cy.takeScreenshotSimple(1);
            cy.get(':nth-child(7) > a > .fa').first().click();
            cy.url().should("include", "/qrcode/print");
            cy.contains('Request Detail');
            cy.takeScreenshotSimple(2);
        });
    });

    context("3_Close Selected QR", () => {
        it("TS02_TC11 Close Selected QR with select Request QR then Click at Close Selected QR", () => {
            cy.searchStatus(
                '#status-transactionalipay',
                data.status_pending
            );
            cy.validateText(':nth-child(5) > #qrstatus', data.status_pending);
            cy.get('.wg-body input').first().click();
            cy.takeScreenshotSimple(2);

            cy.get('.mg-bt-10 .form-control > :nth-child(1)').click();
            cy.contains('คุณยืนยันการแก้ไขข้อมูลหรือไม่').should('be.visible').click();
            cy.takeScreenshotSimple(3);
        });

        it("TS02_TC12 Click Yes in pop-up คุณยืนยันการแก้ไขข้อมูลหรือไม่", () => {
            cy.searchStatus(
                '#status-transactionalipay',
                data.status_pending
            );

            // ดึงข้อความและเก็บไว้
            cy.getText('.wg-body > :nth-child(1) > :nth-child(3)');

            cy.get('.wg-body input').first().click();
            cy.get('.mg-bt-10 .form-control > :nth-child(1)').click();

            cy.contains(/Yes/i).should('be.visible').click();
            cy.takeScreenshotSimple();
        });

        it("TS02_TC13 Click Ok in pop-up แก้ไขข้อมูลสําเร็จ", function () {
            // ดึงค่าจาก Cypress.env() ที่เก็บไว้ในเคสก่อนหน้า
            const code = Cypress.env('myText');
            cy.log('responseCode:', code);

            cy.get('#qrcode').click({ force: true }); // enter Rquest QR menu
            cy.get('.wg-body').should('be.visible');

            cy.search('search_all', code);
            cy.get(':nth-child(1) > :nth-child(5) > #qrstatus').contains('CLOSE').should('be.visible');
            cy.takeScreenshotSimple();
        });
    });

    context("4_Change QR Status", () => {
        it("TS02_TC14 Change QR Status with select Request QR then Click at icon print", () => {
            cy.takeScreenshotSimple(1);
            cy.get(':nth-child(7) > a > .fa').first().click();

            cy.url().should("include", "/qrcode/print");
            cy.contains('Request Detail').should('be.visible');
            cy.takeScreenshotSimple(2);
        });

        it("TS02_TC15 Click icon pencil in Request Detail", () => {
            cy.get(':nth-child(7) > a > .fa').first().click();
            cy.get('.text-center > .fas').should('be.visible').click();
            cy.contains('Request QR Edit').should('be.visible');
            cy.takeScreenshotSimple();
        });

        it("TS02_TC16 Change QR Status with select change status then click button Save", () => {
            cy.get(':nth-child(7) > a > .fa').first().click();
            cy.get('.text-center > .fas').should('be.visible').click();

            cy.contains('Request QR Edit').should('be.visible');
            cy.status("PENDING");
            cy.wait(5000);
            cy.takeScreenshotSimple(1);

            cy.contains(/Save/i).click();
            cy.contains('คุณยืนยันการแก้ไขข้อมูลหรือไม่').should('be.visible').click();
            cy.takeScreenshotSimple(2);
        });

        it("TS02_TC17 Click Yes in pop-up คุณยืนยันการแก้ไขข้อมูลหรือไม่", () => {
            cy.get(':nth-child(7) > a > .fa').first().click();
            cy.get('.text-center > .fas').should('be.visible').click();

            cy.contains('Request QR Edit').should('be.visible');
            cy.status("PENDING");
            cy.wait(5000);

            cy.contains(/Save/i).click();
            cy.contains(/Yes/i).should('be.visible').click();
            cy.contains('แก้ไขข้อมูลสําเร็จ').should('be.visible');
            cy.takeScreenshotSimple();
        });

        it("TS02_TC18 Click Ok in pop-up แก้ไขข้อมูลสําเร็จ", () => {
            cy.get(':nth-child(7) > a > .fa').first().click();
            cy.get('.text-center > .fas').should('be.visible').click();

            cy.contains('Request QR Edit').should('be.visible');
            cy.status("PENDING");
            cy.wait(5000);

            cy.contains(/Save/i).click();
            cy.contains(/Yes/i).should('be.visible').click();
            cy.contains(/OK/i).should('be.visible').click();
            cy.takeScreenshotSimple();
        });
    });

    context("5_Print QR in Request QR Edit page", () => {
        it("TS02_TC19 Select Request QR then Click at icon print", () => {
            cy.takeScreenshotSimple(1);
            cy.get(':nth-child(7) > a > .fa').first().click();

            cy.url().should("include", "/qrcode/print");
            cy.contains('Request Detail').should('be.visible');
            cy.takeScreenshotSimple(2);
        });

        it("TS02_TC20 Click button Print in Request Detail page", () => {
            cy.get(':nth-child(7) > a > .fa').first().click();
            cy.url().should("include", "/qrcode/print");
            cy.wait(2000);
            cy.contains('Print QR').click();

            // สร้างชื่อไฟล์ใหม่
            cy.renameNewfile('printQr', 'pdf');
            cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.RUNNER);
        });
    });

    context("6_Print Selected QR", () => {
        it("TS02_TC21 Print QR with select Request QR then Click at Print Selected QR", () => {
            cy.get('.wg-body input').first().click();
            cy.get('.wg-body input').eq(1).click();
            cy.get('.mg-bt-10 .form-control > :nth-child(2)').click();
            cy.takeScreenshotSimple();
            cy.wait(1000);

            // สร้างชื่อไฟล์ใหม่
            cy.renameNewfile('print-qr', 'pdf');
            cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.RUNNER);
        });
    });

    context("7_Export Request QR Report", () => {
        it("TS02_TC22 Export of QR Report", () => {
            cy.validateDownload('#exportexcel');
            cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.RUNNER);

            cy.validateFile(
                data.fileName,
                ['Job No.', (value) => { expect(value).to.match(/TMB_QR_Standee_/); }],
                ['MID', (value) => { expect(value).to.not.empty(); }],
                ['จำนวน QR Code', (value) => { expect(value).to.be.gte(1); }]
            );
            cy.takeScreenshotSimple(2);
        });

        it("TS02_TC23 Search by Shop name then Export of QR Report", () => {
            cy.search('search_all', data.shop);
            cy.validateText(':nth-child(4)', data.shop);
            cy.validateDownload('#exportexcel');
            cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.RUNNER);

            cy.validateFile(
                data.fileName,
                ['Job No.', (value) => { expect(value).to.match(/TMB_QR_Standee_/); }],
                ['MID', (value) => { expect(value).to.not.empty(); }],
                ['จำนวน QR Code', (value) => { expect(value).to.be.gte(1); }]
            );
        });

        it("TS02_TC24 Search by Request Code and date then Export of QR Report", () => {
            cy.search('search_all', data.qr);
            cy.validateText(':nth-child(3)', data.qr);
            cy.validateDownload('#exportexcel');
            cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.RUNNER);

            cy.validateFile(
                data.fileName,
                ['Job No.', (value) => { expect(value).to.match(/TMB_QR_Standee_/); }],
                ['MID', (value) => { expect(value).to.not.empty(); }],
                ['จำนวน QR Code', (value) => { expect(value).to.be.gte(1); }]
            );
        });

        it("TS02_TC25 Search by Date then Export of QR Report", () => {
            cy.searchDate(
                data.startDate,
                data.endDate
            );
            cy.validateDate(
                '#qrrequeststandee_date',
                data.startDate,
                data.endDate,
            );
            cy.validateDownload('#exportexcel');
            cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.RUNNER);

            cy.validateFile(
                data.fileName,
                ['Job No.', (value) => { expect(value).to.match(/TMB_QR_Standee_/); }],
                ['MID', (value) => { expect(value).to.not.empty(); }],
                ['จำนวน QR Code', (value) => { expect(value).to.be.gte(1); }]
            );
            cy.takeScreenshotSimple(2);
        });

        it("TS02_TC26 Search by Status and Date then Export of QR Report", () => {
            cy.searchDateStatus(
                '#status-transactionalipay',
                data.status,
                data.startDate,
                data.endDate
            );
            cy.getText('#qrrequeststandee_date');
            cy.validateDate(
                '#qrrequeststandee_date',
                data.startDate,
                data.endDate,
            );
            cy.validateText(':nth-child(5) > #qrstatus', data.status);
            cy.validateDownload('#exportexcel');
            cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.RUNNER);

            cy.validateFile(
                data.fileName,
                ['Job No.', (value) => { expect(value).to.match(/TMB_QR_Standee_/); }],
                ['MID', (value) => { expect(value).to.not.empty(); }],
                ['จำนวน QR Code', (value) => { expect(value).to.be.gte(1); }]
            );
        });

    });
});