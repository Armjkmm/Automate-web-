describe("cScanB/Test Scenario: 01 Settlement Type", () => {
    let data;

    beforeEach(() => {
        // request data from fixtures
        cy.fixture('data_searchComp').then((dataMain) => {
            data = dataMain;

            // auto login to enter portal page
            cy.smartShopWebPortal(
                Cypress.env('ADMIN_USERNAME'),
                Cypress.env('ADMIN_PASSWORD')
            );

            cy.resetMID(dataMain.name_lumpsum, dataMain.name_realtime);
        });
    });

    context("1_Real-Time", () => {
        it("TS01_TC01 ตรวจสอบข้อมูลกรณี ผู้ใช้งานเลือกตั้งค่าเป็น Real-Time (Radio)", () => {
            cy.validateMID(data.name_realtime, 'Real time');
            cy.takeScreenshotSimple(2);
        });

        // ไม่มีข้อมูล
        // it("TS01_TC02 กรณี สร้างร้านค้าใหม่ ผู้ใช้งานเลือกตั้งค่าเป็น Real-Time (Radio)", () => {
        // });

        it("TS01_TC03 กรณี แก้ไขทีละร้านค้า ผู้ใช้งานเลือกตั้งค่าเป็น Real-Time (Radio)", () => {
            cy.validateMID(data.name_lumpsum, 'Lump sum');
            cy.takeScreenshotSimple(2);

            cy.get('.fas.fa-pen').click();
            cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.FULLPAGE);

            cy.get('#NORMAL').click();
            cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.FULLPAGE);

            cy.get('.btn').contains(/save/i).click();
            cy.contains(/success/i);
            cy.takeScreenshotSimple(5);

            cy.contains(/ok/i).click();
            cy.wait(1000);
            cy.url().should("include", "/company/all");    // check url
            cy.takeScreenshotSimple(6);

            cy.validateMID(data.name_lumpsum, 'Real time');
            cy.takeScreenshotSimple(7, Cypress.ScreenshotCaptureEnum.FULLPAGE);
        });
    });

    context("2_Lump-Sum", () => {
        it("TS01_TC12 ตรวจสอบข้อมูลกรณี ผู้ใช้งานเลือกตั้งค่าเป็น Lump-Sum (Radio)", () => {
            cy.validateMID(data.name_lumpsum, 'Lump sum');
            cy.takeScreenshotSimple(2);
        });

        // ไม่มีข้อมูล
        // it("TS01_TC13 กรณี สร้างร้านค้าใหม่ ผู้ใช้งานเลือกตั้งค่าเป็น Lump-Sum (Radio)", () => {
        // });

        it("TS01_TC14 กรณี แก้ไขทีละร้านค้า ผู้ใช้งานเลือกตั้งค่าเป็น Lump-Sum (Radio)", () => {
            cy.validateMID(data.name_realtime, 'Real time');
            cy.takeScreenshotSimple(2);

            cy.get('.fas.fa-pen').click();
            cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.FULLPAGE);

            cy.get('#LUMPSUM').click();
            cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.FULLPAGE);

            cy.get('.btn').contains(/save/i).click();
            cy.contains(/success/i);
            cy.takeScreenshotSimple(5);

            cy.contains(/ok/i).click();
            cy.wait(1000);
            cy.url().should("include", "/company/all");    // check url
            cy.takeScreenshotSimple(6);

            cy.validateMID(data.name_realtime, 'Lump sum');
            cy.takeScreenshotSimple(7, Cypress.ScreenshotCaptureEnum.FULLPAGE);
        });
    });
});