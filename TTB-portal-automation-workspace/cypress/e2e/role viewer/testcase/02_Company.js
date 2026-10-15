describe("Viewer/Test Scenario: 02 Company", () => {
    let data;

    beforeEach(() => {
        // request data from fixtures
        cy.fixture('data_searchComp').then((dataMain) => {
            data = dataMain;
        });

        // auto login to enter portal page
        cy.smartShopWebPortal(
            Cypress.env('VIEWER_USERNAME'),
            Cypress.env('VIEWER_PASSWORD')
        );

    });

    context("1_Search All Companies", () => {
        it("TS02_TC01 Click All Companies", () => {

            // auto enter company menu
            cy.get('#company').click({ force: true });
            cy.get('#allcompany').click({ force: true });

            //check url must have /company/all
            cy.wait(1000);
            cy.url().should("include", "/company/all");
            cy.takeScreenshotSimple();
        });

        it("TS02_TC02 Search by Name not found", () => {
            // search
            cy.search('search_all', data.name_notFound);
        });

        it("TS02_TC03 Search by Tax ID not found", () => {
            // search
            cy.search('search_all', data.taxID_notFound);
        });

        it("TS02_TC04 Search by Acc No not found", () => {
            // search
            cy.search('search_all', data.accountNo_notFound);
        });

        it("TS02_TC05 Search by MID not found", () => {
            // search
            cy.search('search_all', data.MID_notFound);
        });

        it("TS02_TC06 Search by Date not found", () => {
            // searchDate
            cy.searchDate(
                data.startDate_notFound,
                data.endDate_notFound
            );
        });

        it("TS02_TC07 Search by Date Status not found", () => {
            // search Date and status
            cy.searchDateStatus(
                '#status',
                data.status_notFound,
                data.startDate_notFound,
                data.endDate_notFound
            );
        });

        it("TS02_TC08 Search by Name", () => {
            // search
            cy.search('search_all', data.name);

            // check message must name
            cy.contains(data.name);
            cy.takeScreenshotSimple();
        });

        it("TS02_TC09 Search by Tax ID", () => {
            // search
            cy.search('search_all', data.taxID);

            // open details and check equal taxID
            cy.get('#companyName').click();
            cy.contains(data.taxID);
            cy.takeScreenshotSimple();
        });

        it("TS02_TC10 Search by Acc No", () => {
            // search
            cy.search('search_all', data.accountNo);

            // getText and click view details
            cy.getText('#companyName');
            cy.get('.dropbtn').trigger('mouseover');
            cy.takeScreenshotSimple(1);

            // getText และเรียกใช้ตัวแปร myText ที่เก็บไว้
            cy.get('#viewcompany').click({ force: true });
            cy.wait(2000);
            cy.get('@myText').then((text) => {
                cy.log(text);  // แสดงข้อความที่เก็บใน myText
                cy.get('.group_user').contains(text).click();
            });

            // check equal accountNo
            cy.wait(2000);
            cy.contains(data.accountNo);
            cy.takeScreenshotSimple(2);
        });

        it("TS02_TC11 Search MID", () => {
            // search
            cy.search('search_all', data.MID);

            // check equal MID
            cy.get('.fas.fa-eye').click();
            cy.wait(1000);
            cy.contains(data.MID);
            cy.takeScreenshotSimple();
        });

        it("TS02_TC12 Search Date", () => {
            // searchDate
            cy.searchDate(
                data.startDate,
                data.endDate
            );

            // check equal Date
            cy.validateDate(
                '#createDate',
                data.startDate,
                data.endDate
            );
            cy.takeScreenshotSimple();
        });

        it("TS02_TC13 Search Date Status", () => {
            // search Date and status
            cy.searchDateStatus(
                '#status',
                data.status,
                data.startDate,
                data.endDate
            );

            // check message must Date and status
            cy.validateDate(
                '#createDate',
                data.startDate,
                data.endDate
            );
            cy.validateText('#transactionId-partnerTransactionID', data.status);
        });
    });

    context("2_View Detail", () => {
        it("TS02_TC14 Company to View Detail", () => {
            cy.wait(1000);
            cy.get('.dropbtn').first().trigger('mouseover');
            cy.takeScreenshotSimple(1);

            cy.get('#viewcompany').first().click({ force: true });

            // check url must have /company/view
            cy.url().should("include", "/company/view");
            cy.takeScreenshotSimple(2);
        });
    });
});