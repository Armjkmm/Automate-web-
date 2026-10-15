describe("Viewer/Test Scenario: 04 Manage User", () => {
    let data;

    beforeEach(() => {
        // request from fixtures
        cy.fixture('data_searchUser').then((dataMain) => {
            data = dataMain;
        });

        // auto login to enter portal page
        cy.smartShopWebPortal(
            Cypress.env('VIEWER_USERNAME'),
            Cypress.env('VIEWER_PASSWORD')
        );

        // auto enter manage user menu
        cy.get('#manageuser').click({ force: true });
    });

    context("1_Search Manage User", () => {
        it("TS04_TC01 Click Manage User main-menu", () => {
            cy.get('#manageuser').click({ force: true });
            cy.wait(1000);
            cy.url().should("include", "/manageuser");
            cy.takeScreenshotSimple();
        });

        it("TS04_TC02 Search by Name not found", () => {
            cy.search('search_keyword', data.name_notFound);
        });

        it("TS04_TC03 Search by Email not found", () => {
            cy.search('search_keyword', data.email_notFound);
        });

        it("TS04_TC04 Search by Mobile no. not found", () => {
            cy.search('search_keyword', data.mobile_notFound);
        });

        it("TS04_TC05 Search by Date not found", () => {
            cy.searchDate(
                data.startDate_notFound,
                data.endDate_notFound
            );
        });

        it("TS04_TC06 Search by status and Date not found", () => {
            cy.searchDateStatus(
                '#status-terminal',
                data.status_notFound,
                data.startDate_notFound,
                data.endDate_notFound
            );
        });

        it("TS04_TC07 Search by Name", () => {
            cy.search('search_keyword', data.name);
            cy.contains(data.name);
            cy.takeScreenshotSimple();
        });

        it("TS04_TC08 Search by Email", () => {
            cy.search('search_keyword', data.email);
            cy.contains(data.email);
            cy.takeScreenshotSimple();
        });

        it("TS04_TC09 Search by Mobile no.", () => {
            cy.search('search_keyword', data.mobile);
            cy.contains(data.mobile);
            cy.takeScreenshotSimple();
        });

        it("TS04_TC10 Search by Date", () => {
            cy.searchDate(
                data.startDate,
                data.endDate
            );
            cy.validateDate(
                ':nth-child(4)',
                data.startDate,
                data.endDate,
            );
            cy.takeScreenshotSimple();
        });

        it("TS04_TC11 Search by status and Date", () => {
            cy.searchDateStatus(
                '#status-terminal',
                data.status,
                data.startDate,
                data.endDate
            );
            cy.validateDate(
                ':nth-child(4)',
                data.startDate,
                data.endDate,
            );
            cy.validateText(':nth-child(5) > #alipaystatus', data.status);
        });
    });

    context("2_View Detail", () => {
        it("TS04_TC12 Select User", () => {
            cy.wait(1000);
            cy.takeScreenshotSimple(1);
            cy.get('.dropbtn1').first().trigger('mouseover');
            cy.contains(/View Detail/i).click({ force: true });

            // check url must have /manageuser/view
            cy.url().should("include", "/manageuser/view");
            cy.takeScreenshotSimple(2);
        });
    });
});