describe("Viewer/Test Scenario: 05 Request QR", () => {
    let data;

    beforeEach(() => {
        // request from fixtures
        cy.fixture('data_searchQR').then((dataMain) => {
            data = dataMain;
        });

        // auto login to enter portal page
        cy.smartShopWebPortal(
            Cypress.env('VIEWER_USERNAME'),
            Cypress.env('VIEWER_PASSWORD')
        );

        // auto enter Rquest QR menu
        cy.get('#qrcode').click({ force: true });
    });

    context("1_Search Request QR", () => {
        it("TS05_TC01 Click Request QR main-menu", () => {
            cy.wait(1000);
            cy.url().should("include", "/qrcode");
            cy.takeScreenshotSimple();
        });

        it("TS05_TC02 Search by Shop name not found", () => {
            cy.search('search_all', data.shop_notFound);
        });

        it("TS05_TC03 Search by Request Code not found", () => {
            cy.search('search_all', data.qr_notFound);
        });

        it("TS05_TC04 Search by Date not found", () => {
            cy.searchDate(
                data.startDate_notFound,
                data.endDate_notFound
            );
        });

        it("TS05_TC05 Search by Status and Date not found", () => {
            cy.searchDateStatus(
                '#status-transactionalipay',
                data.status_notFound,
                data.startDate_notFound,
                data.endDate_notFound
            );
        });

        it("TS05_TC06 Search by Shop name", () => {
            cy.search('search_all', data.shop);
            cy.validateText(':nth-child(4)', data.shop);
        });

        it("TS05_TC07 Search by Request Code", () => {
            cy.search('search_all', data.qr);
            cy.validateText(':nth-child(3)', data.qr);
        });

        it("TS05_TC08 Search by Date", () => {
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

        it("TS05_TC09 Search by Status and Date", () => {
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

    context("2_Export Request QR Report", () => {
        it("TS05_TC10 Export of QR Report", () => {
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

        it("TS05_TC11 Search by Shop name then Export of QR Report", () => {
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

        it("TS05_TC12 Search by Request Code and date then Export of QR Report", () => {
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

        it("TS05_TC13 Search by Date then Export of QR Report", () => {
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

        it("TS05_TC14 Search by Status and Date then Export of QR Report", () => {
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