describe("Viewer/Test Scenario: 03 Transaction", () => {
    let data;

    beforeEach(() => {
        // request data from fixtures
        cy.fixture('data_searchTxn').then((dataMain) => {
            data = dataMain;
        });

        // auto login to enter portal page
        cy.smartShopWebPortal(
            Cypress.env('VIEWER_USERNAME'),
            Cypress.env('VIEWER_PASSWORD')
        );

        // auto enter transaction menu
        cy.get('#transactionAll').click({ force: true });

    });

    context("1_Search Cash", () => {
        it("TS03_TC01 Click Cash sub-menu", () => {
            cy.get('#cash').click({ force: true });
            cy.wait(1000);
            cy.url().should("include", "/transactionAll/cash");
            cy.takeScreenshotSimple();
        });

        it("TS03_TC02 Search by transaction ID not found", () => {
            cy.get('#cash').click({ force: true });
            cy.search('transaction_id', data.txnID_notFound);
        });

        it("TS03_TC03 Search by MID not found", () => {
            cy.get('#cash').click({ force: true });
            cy.search('mid', data.MID_notFound);
        });

        it("TS03_TC04 Search by TID not found", () => {
            cy.get('#cash').click({ force: true });
            cy.search('tid', data.TID_notFound);
        });

        it("TS03_TC05 Search by Date not found", () => {
            cy.get('#cash').click({ force: true });
            cy.searchDate(
                data.startDate_notFound,
                data.endDate_notFound
            );
        });

        it("TS03_TC06 Search by Status and Date not found", () => {
            cy.get('#cash').click({ force: true });
            cy.searchDateStatus(
                '#status-transactionalipay',
                data.statusCash_notFound,
                data.startDate_notFound,
                data.endDate_notFound
            );
        });

        it("TS03_TC07 Search by transaction ID and Date", () => {
            cy.get('#cash').click({ force: true });
            cy.searchWithDate(
                'transaction_id',
                data.txnIDCash,
                data.startDate,
                data.endDate
            );

            cy.contains(data.txnIDCash);
            cy.getText('#alipaytransaction_date');
            cy.validateDate(
                '#alipaytransaction_date',
                data.startDate,
                data.endDate
            );
            cy.takeScreenshotSimple();
        });

        it("TS03_TC08 Search by MID and Date", () => {
            cy.get('#cash').click({ force: true });
            cy.searchWithDate(
                'mid',
                data.MID,
                data.startDate,
                data.endDate
            );

            cy.getText('#alipaytransaction_date');
            cy.validateDate(
                '#alipaytransaction_date',
                data.startDate,
                data.endDate,
            );

            cy.wait(1000);
            cy.get('#alipaytransaction_date').click();
            cy.contains(data.MID);
            cy.takeScreenshotSimple();
        });

        it("TS03_TC09 Search by TID and Date", () => {
            cy.get('#cash').click({ force: true });
            cy.searchWithDate(
                'tid',
                data.TID,
                data.startDate,
                data.endDate
            );

            cy.getText('#alipaytransaction_date');
            cy.validateDate(
                '#alipaytransaction_date',
                data.startDate,
                data.endDate,
            );

            cy.wait(1000);
            cy.get('#alipaytransaction_date').click();
            cy.contains(data.TID);
            cy.takeScreenshotSimple();
        });

        it("TS03_TC10 Search by Date", () => {
            cy.get('#cash').click({ force: true });
            cy.searchDate(
                data.startDate,
                data.endDate
            );
            cy.validateDate(
                '#alipaytransaction_date',
                data.startDate,
                data.endDate,
            );
            cy.takeScreenshotSimple();
        });

        it("TS03_TC11 Search by Status and Date", () => {
            cy.get('#cash').click({ force: true });
            cy.searchDateStatus(
                '#status-transactionalipay',
                data.statusCash,
                data.startDate,
                data.endDate
            );
            cy.validateDate(
                '#alipaytransaction_date',
                data.startDate,
                data.endDate,
            );
            cy.validateText(':nth-child(4) > #alipaystatus', data.statusCash);
        });
    });

    context("2_Transaction Cash Detail", () => {
        it("TS03_TC12 Select transaction", () => {
            cy.get('#cash').click({ force: true });
            cy.searchDate(
                data.startDate,
                data.endDate
            );
            cy.get('#alipaytransaction_date').first().click();
            cy.contains(/Transaction Details/i);
            cy.takeScreenshotSimple();
        });
    });

    context("4_Search PromptPay", () => {
        it("TS03_TC13 Click Promptpay sub-menu", () => {
            cy.get('#tqrc').click({ force: true });
            cy.url().should("include", "/transactionAll/promptpay");
            cy.takeScreenshotSimple();
        });

        it("TS03_TC15 Search by transaction ID not found", () => {
            cy.get('#tqrc').click({ force: true });
            cy.search('transaction_id', data.txnID_notFound);

        });

        it("TS03_TC16 Search by Biller ID not found", () => {
            cy.get('#tqrc').click({ force: true });
            cy.search('biller_no', data.billerID_notFound);

        });

        it("TS03_TC17 Search by Prefix No. not found", () => {
            cy.get('#tqrc').click({ force: true });
            cy.search('prefix_no', data.prefixNo_notFound);

        });

        it("TS03_TC18 Search by MID not found", () => {
            cy.get('#tqrc').click({ force: true });
            cy.search('mid', data.MID_notFound);

        });

        it("TS03_TC19 Search by TID not found", () => {
            cy.get('#tqrc').click({ force: true });
            cy.search('tid', data.TID_notFound);

        });

        it("TS03_TC20 Search by Date not found", () => {
            cy.get('#tqrc').click({ force: true });
            cy.searchDate(
                data.startDate_notFound,
                data.endDate_notFound
            );

        });

        it("TS03_TC21 Search by Status and Date not found", () => {
            cy.get('#tqrc').click({ force: true });
            cy.searchDateStatus(
                '#status-tqrc',
                data.status_notFound,
                data.startDate_notFound,
                data.endDate_notFound
            );

        });

        it("TS03_TC22 Search by transaction ID and Date", () => {
            cy.get('#tqrc').click({ force: true });
            cy.searchWithDate(
                'transaction_id',
                data.txnID,
                data.startDate,
                data.endDate
            );

            cy.contains(data.txnID);
            cy.getText('#wechattransaction_date');
            cy.validateDate(
                '#wechattransaction_date',
                data.startDate,
                data.endDate
            );
            cy.takeScreenshotSimple();
        });

        it("TS03_TC23 Search by Biller ID and Date", () => {
            cy.get('#tqrc').click({ force: true });
            cy.searchWithDate(
                'biller_no',
                data.billerID,
                data.startDate,
                data.endDate
            );

            cy.contains(data.billerID);
            cy.getText('#wechattransaction_date');
            cy.validateDate(
                '#wechattransaction_date',
                data.startDate,
                data.endDate
            );
            cy.takeScreenshotSimple();
        });

        it("TS03_TC24 Search by Prefix No. and Date", () => {
            cy.get('#tqrc').click({ force: true });
            cy.searchWithDate(
                'prefix_no',
                data.prefixNo,
                data.startDate,
                data.endDate
            );

            cy.getText('#wechattransaction_date');
            cy.validateDate(
                '#wechattransaction_date',
                data.startDate,
                data.endDate,
            );

            cy.wait(1000);
            cy.get('#wechattransaction_date').click();
            cy.contains(data.prefixNo);
            cy.takeScreenshotSimple();
        });

        it("TS03_TC25 Search by MID and Date", () => {
            cy.get('#tqrc').click({ force: true });
            cy.searchWithDate(
                'mid',
                data.MID,
                data.startDate,
                data.endDate
            );

            cy.getText('#wechattransaction_date');
            cy.validateDate(
                '#wechattransaction_date',
                data.startDate,
                data.endDate,
            );

            cy.wait(1000);
            cy.get('#wechattransaction_date').click();
            cy.contains(data.MID);
            cy.takeScreenshotSimple();
        });

        it("TS03_TC26 Search by TID and Date", () => {
            cy.get('#tqrc').click({ force: true });
            cy.searchWithDate(
                'tid',
                data.TID,
                data.startDate,
                data.endDate
            );

            cy.getText('#wechattransaction_date');
            cy.validateDate(
                '#wechattransaction_date',
                data.startDate,
                data.endDate,
            );

            cy.wait(1000);
            cy.get('#wechattransaction_date').click();
            cy.contains(data.TID);
            cy.takeScreenshotSimple();
        });

        it("TS03_TC27 Search by Date", () => {
            cy.get('#tqrc').click({ force: true });
            cy.searchDate(
                data.startDate,
                data.endDate
            );
            cy.validateDate(
                '#wechattransaction_date',
                data.startDate,
                data.endDate,
            );
            cy.takeScreenshotSimple();
        });

        it("TS03_TC28 Search by Status and Date", () => {
            cy.get('#tqrc').click({ force: true });
            cy.searchDateStatus(
                '#status-tqrc',
                data.status,
                data.startDate,
                data.endDate
            );
            cy.validateDate(
                '#wechattransaction_date',
                data.startDate,
                data.endDate,
            );
            cy.validateText(':nth-child(4) > #wechatstatus', data.status);
        });
    });

    context("4_Transaction Thai QR Pormptpay Detail", () => {
        it("TS03_TC29 Select transaction", () => {
            cy.get('#tqrc').click({ force: true });
            cy.searchDate(
                data.startDate,
                data.endDate
            );
            cy.get('#wechattransaction_date').first().click();
            cy.contains(/Transaction Details/i);
            cy.takeScreenshotSimple();
        });
    });

});   