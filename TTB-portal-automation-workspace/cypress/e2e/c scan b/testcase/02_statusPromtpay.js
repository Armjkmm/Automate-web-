describe("cScanB/Test Scenario: 02 Status Promtpay", () => {
    let data;

    beforeEach(() => {
        // request data from fixtures
        cy.fixture('data_searchTxn').then((dataMain) => {
            data = dataMain;
        });

        // auto login to enter portal page
        cy.smartShopWebPortal(
            Cypress.env('ADMIN_USERNAME'),
            Cypress.env('ADMIN_PASSWORD')
        );

        // auto enter transaction menu
        cy.get('#transactionAll').click({ force: true });
        cy.get('#tqrc').click({ force: true });
        cy.wait(2000);
    });

    context("1_Status Transaction PromptPay", () => {
        it("TS02_TC01 ตรวจสอบรายละเอียดข้อมูล Status กรณี รายการสำเร็จ", () => {
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
            cy.validateText('#wechatstatus', data.status);
            cy.get('#wechatstatus').first().click();
            cy.validateText('#paymentStatus_wechat', data.statusTH);
        });

        it("TS02_TC02 ตรวจสอบรายละเอียดข้อมูล Status กรณี รายการถูกยกเลิก", () => {
            cy.searchDateStatus(
                '#status-tqrc',
                data.status_cancel,
                data.startDate,
                data.endDate
            );
            cy.validateDate(
                '#wechattransaction_date',
                data.startDate,
                data.endDate,
            );
            cy.validateText('#wechatstatus', data.status_cancel);
            cy.get('#wechatstatus').first().click();
            cy.validateText('#paymentStatus_wechat', data.statusTH_cancel);
        });

        it("TS02_TC03 ตรวจสอบรายละเอียดข้อมูล Status กรณี รายการสำเร็จ จากนั้นทำรายการ รายการคืนเงินสำเร็จ", () => {
            cy.searchDateStatus(
                '#status-tqrc',
                data.status_successVoid,
                data.startDate,
                data.endDate
            );
            cy.validateDate(
                '#wechattransaction_date',
                data.startDate,
                data.endDate,
            );
            cy.validateText('#wechatstatus', data.status_successVoid);
            cy.get('#wechatstatus').first().click();
            cy.validateText('#paymentStatus_wechat', data.statusTH_successVoid);
        });

        // it("TS02_TC04 ตรวจสอบรายละเอียดข้อมูล Status กรณี รายการสำเร็จ จากนั้นทำรายการ รายการรออนุมัติคืนเงิน (ก่อน 23:00)", () => {
        //     cy.searchStatus(
        //         '#status-tqrc',
        //         data.status_pendingVoid
        //     );
        //     cy.validateText('#wechatstatus', data.status_pendingVoid);
        //     cy.get('#wechatstatus').first().click();
        //     cy.validateText('#paymentStatus_wechat', data.statusTH_pendingVoid);
            
        //     // ดึงข้อความและเก็บไว้
        //     cy.getText('#wechatpaymentId_partnerTrxId').first();
        //     const transactionID = Cypress.env('myText');
        //     Cypress.env('transactionID_TS02_TC05', transactionID);  // เก็บข้อมูลสำหรับ TS02_TC05
        // });

        // it("TS02_TC05 ตรวจสอบรายละเอียดข้อมูล Status กรณี รายการสำเร็จ จากนั้นทำรายการ รายการรออนุมัติคืนเงิน (หลัง 23:00)", () => {
        //     // ดึงค่าจาก Cypress.env() ที่เก็บไว้ในเคสก่อนหน้า
        //     const transactionID = Cypress.env('transactionID_TS02_TC05');
        //     cy.search('transaction_id',transactionID);

        //     cy.validateText('#paymentStatus_wechat', data.status);
        //     cy.get('#wechatstatus').click();
        //     cy.validateText('#paymentStatus_wechat', data.statusTH);
        // });

        // it("TS02_TC06 ตรวจสอบรายละเอียดข้อมูล Status กรณี รายการสำเร็จ จากนั้นทำรายการ รายการคืนเงินไม่สำเร็จ (ก่อน 23:00)", () => {
        //     cy.searchStatus(
        //         '#status-tqrc',
        //         data.status_failVoid
        //     );
        //     cy.validateText('#wechatstatus', data.status_failVoid);
        //     cy.get('#wechatstatus').first().click();
        //     cy.validateText('#paymentStatus_wechat', data.statusTH_failVoid);
            
        //     // ดึงข้อความและเก็บไว้
        //     cy.getText2('#wechatpaymentId_partnerTrxId').first();
        //     const transactionID = Cypress.env('myText');
        //     Cypress.env('transactionID_TS02_TC07', transactionID);  // เก็บข้อมูลสำหรับ TS02_TC07
        // });

        // it("TS02_TC07 ตรวจสอบรายละเอียดข้อมูล Status กรณี รายการสำเร็จ จากนั้นทำรายการ รายการคืนเงินไม่สำเร็จ (หลัง 23:00)", () => {
        //     // ดึงค่าจาก Cypress.env() ที่เก็บไว้ในเคสก่อนหน้า
        //     const transactionID = Cypress.env('transactionID_TS02_TC07');
        //     cy.search('transaction_id',transactionID);

        //     cy.validateText('#paymentStatus_wechat', data.status);
        //     cy.get('#wechatstatus').click();
        //     cy.validateText('#paymentStatus_wechat', data.statusTH);
        // });
    });
});