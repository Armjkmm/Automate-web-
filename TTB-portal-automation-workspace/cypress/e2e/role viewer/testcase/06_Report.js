describe("Viewer/Test Scenario: 06 Report", () => {
    let data;

    beforeEach(() => {
        // request from fixtures
        cy.fixture('data_searchReport').then((dataMain) => {
            data = dataMain;
        });

        // auto login to enter portal page
        cy.smartShopWebPortal(
            Cypress.env('VIEWER_USERNAME'),
            Cypress.env('VIEWER_PASSWORD')
        );

        // auto enter report menu
        cy.get('a#report[href="/report"]').first().click({ force: true });
    });

    context("1_Report", () => {
        it("TS06_TC01 Click Report sub-menu", () => {
            cy.get('a#report[href="/report/reports"]').first().click({ force: true });
            cy.wait(1000);
            cy.url().should("include", "/report/reports");
            cy.takeScreenshotSimple();
        });

        it("TS06_TC02 Not Select Date and None selected report", () => {
            cy.get('a#report[href="/report/reports"]').first().click({ force: true });
            cy.wait(1000);
            cy.takeScreenshotSimple(1);

            cy.get('#reconcileZip').click();
            cy.contains('กรุณาเลือก report');
            cy.takeScreenshotSimple(2);
        });

        it("TS06_TC03 Not Select Date and select report", () => {
            cy.get('a#report[href="/report/reports"]').first().click({ force: true });
            cy.wait(1000);

            cy.get('#id__button__button').click();
            cy.contains(data.report_transaction).click({ force: true });
            cy.takeScreenshotSimple(1);

            cy.get('#reconcileZip').click({ force: true });
            cy.contains('กรุณาเลือกวันที่');
            cy.takeScreenshotSimple(2);
        });

        it("TS06_TC04 Select Date and report not found", () => {
            cy.get('a#report[href="/report/reports"]').first().click({ force: true });
            cy.wait(1000);
            cy.selectDate(
                data.startDate_notFound,
                data.endDate_notFound
            );

            cy.get('#id__button__button').click();
            cy.contains(data.report_merchant).click({ force: true });
            cy.takeScreenshotSimple(1);

            cy.validateDownload('#reconcileZip');
            cy.contains(/successfully/i);
            cy.takeScreenshotSimple(2);
        });

        it("TS06_TC05 Click OK in pop-up Finished Report successfully.", () => {
            cy.get('a#report[href="/report/reports"]').first().click({ force: true });
            cy.wait(1000);

            cy.selectDate(
                data.startDate_notFound,
                data.endDate_notFound
            );
            cy.get('#id__button__button').click();
            cy.contains(data.report_merchant).click({ force: true });
            cy.takeScreenshotSimple(1);

            cy.validateDownload('#reconcileZip');
            cy.contains(/successfully/i);
            cy.takeScreenshotSimple(2);
            cy.contains(/OK/i).click();

            cy.validateFile(
                data.fileName_merchant,
                // ตรวจสอบว่า field ไม่มีค่า
                ['Create Date', (value) => { expect(value).to.be.empty; }],
                ['Merchant ID', (value) => { expect(value).to.be.empty; }]
            );
            cy.takeScreenshotSimple(3);
        });

        it("TS06_TC06 Select Date and report then Click Download", () => {
            cy.get('a#report[href="/report/reports"]').first().click({ force: true });
            cy.wait(1000);
            cy.selectDate(
                data.startDate,
                data.endDate
            );

            cy.get('#id__button__button').click();
            cy.contains(data.report_staff).click({ force: true });
            cy.takeScreenshotSimple(1);

            cy.validateDownload('#reconcileZip');
            cy.contains(/successfully/i);
            cy.takeScreenshotSimple(2);
        });

        it("TS06_TC07 Click OK in pop-up Finished Report successfully.", () => {
            cy.get('a#report[href="/report/reports"]').first().click({ force: true });
            cy.wait(1000);

            cy.selectDate(
                data.startDate,
                data.endDate
            );
            cy.get('#id__button__button').click();
            cy.contains(data.report_staff).click({ force: true });
            cy.takeScreenshotSimple(1);

            cy.validateDownload('#reconcileZip');
            cy.contains(/successfully/i);
            cy.takeScreenshotSimple(2);
            cy.contains(/OK/i).click();

            cy.validateFile(
                data.fileName_staff,
                ['Merchant Type', (value) => { expect(value).to.match(/Juristic/); }],
                ['Merchant ID', (value) => { expect(value).to.be.not.empty; }],
                ['Created date & time', (value) => {
                    // แปลง startDate และ endDate โดยใช้ cy.convertDate()
                    cy.convertDate(data.startDate).then((startDate) => {
                        cy.convertDate(data.endDate).then((endDate) => {
                            cy.log('startDate: ' + startDate);
                            cy.log('endDate: ' + endDate);

                            cy.convertDate(value).then((paymentDate) => {
                                // ตรวจสอบว่า paymentDate อยู่ในช่วง startDate ถึง endDate
                                expect(paymentDate).to.be.within(startDate, endDate);
                            });
                        });
                    });
                }]
            );
            cy.takeScreenshotSimple(3);
        });
    });

    context("2_Search Report Request Status", () => {
        it("TS06_TC08 Click Report Request Status sub-menu", () => {
            cy.get('#requestProcess').click({ force: true });
            cy.wait(1000);
            cy.url().should("include", "/report/requestProcess");
            cy.takeScreenshotSimple();
        });

        it("TS06_TC09 Search by Request Date data not found", () => {
            cy.get('#requestProcess').click({ force: true });
            cy.wait(1000);

            cy.searchDate(
                data.startDate_notFound,
                data.endDate_notFound
            );
        });

        it("TS06_TC10 Search by Select Report and Date data not found", () => {
            cy.get('#requestProcess').click({ force: true });
            cy.wait(1000);

            cy.searchDateStatus(
                '[name="report_type"]',
                data.report_merchant,
                data.startDate_notFound,
                data.endDate_notFound
            );
        });

        it("TS06_TC11 Search by status and Date data not found", () => {
            cy.get('#requestProcess').click({ force: true });
            cy.wait(1000);

            cy.searchDateStatus(
                '[name="status"]',
                data.status_notFound,
                data.startDate_notFound,
                data.endDate_notFound
            );
        });

        it("TS06_TC14 Search by Request Date", () => {
            cy.get('#requestProcess').click({ force: true });
            cy.wait(1000);

            cy.selectDate(
                data.startDate_reportRequest,
                data.endDate_reportRequest
            );
            cy.validateDate(
                '#transaction_date',
                data.startDate_reportRequest,
                data.endDate_reportRequest,
            );
            cy.takeScreenshotSimple();
        });

        it("TS06_TC15 Search by Request Date and Select Report", () => {
            cy.get('#requestProcess').click({ force: true });
            cy.wait(1000);

            cy.searchDateStatus(
                '#devicetype-transactionalipay[name="report_type"]',
                data.report_transaction,
                data.startDate_reportRequest,
                data.endDate_reportRequest
            );

            cy.getText('#transaction_date');
            cy.validateDate(
                '#transaction_date',
                data.startDate_reportRequest,
                data.endDate_reportRequest,
            );
            cy.validateText('#report_type', data.report_transaction);
        });

        it("TS06_TC16 Search by Request Date and status", () => {
            cy.get('#requestProcess').click({ force: true });
            cy.wait(1000);

            cy.searchDateStatus(
                '[name="status"]',
                data.status,
                data.startDate_reportRequest,
                data.endDate_reportRequest
            );

            cy.getText('#transaction_date');
            cy.validateDate(
                '#transaction_date',
                data.startDate_reportRequest,
                data.endDate_reportRequest,
            );
            cy.validateText(':nth-child(5) > p', data.status);
        });
    });

    context("3_Transaction summary report", () => {
        it("TS06_TC19 Click Transaction summary report sub-menu", () => {
            cy.get('#summaryTransaction').click({ force: true });
            cy.wait(1000);
            cy.url().should("include", "/report/summaryTransaction");
            cy.takeScreenshotSimple();
        });

        it("TS06_TC20 Select year data not found", () => {
            cy.get('#summaryTransaction').click({ force: true });
            cy.wait(1000);

            cy.searchYear(
                '#dropdown_report_year__button__button',
                data.year_notFound
            )
            cy.contains('ไม่พบรายงานสรุปรายการประจำปี');
            cy.takeScreenshotSimple();
        });

        it("TS06_TC21 Click OK in pop-up alert Unsuccessful ไม่พบรายงานรายการประจำปี", () => {
            cy.get('#summaryTransaction').click({ force: true });
            cy.wait(1000);

            cy.searchYear(
                '#dropdown_report_year__button__button',
                data.year_notFound
            )

            cy.contains('ไม่พบรายงานสรุปรายการประจำปี');
            cy.contains(/OK/i).click();
            cy.takeScreenshotSimple(1);

            cy.get('.swal2-popup').should('not.exist');  // ใช้ตรวจสอบว่า popup ไม่แสดงผลในหน้าเว็บ
            cy.takeScreenshotSimple(2);

        });

        it("TS06_TC22 Select year", () => {
            cy.get('#summaryTransaction').click({ force: true });
            cy.wait(1000);

            cy.searchYear(
                '#dropdown_report_year__button__button',
                data.year
            )
            cy.contains(/successfully/i);
            cy.takeScreenshotSimple();
        });

        it("TS06_TC23 Click OK in pop-up  Success Finished Successfully", () => {
            cy.get('#summaryTransaction').click({ force: true });
            cy.wait(1000);

            cy.searchYear(
                '#dropdown_report_year__button__button',
                data.year
            )
            cy.wait(1000);
            cy.contains(/successfully/i);
            cy.validateDownload('.swal2-confirm');

            cy.validateFile(
                data.fileName_summary + data.year,
                ['Merchant ID', (value) => { expect(value).to.be.not.empty; }], // ตรวจสอบว่า field มีค่า
                // กรณีตรวจสอบ Payment Channel ต้องเป็นหนึ่งใน 3 ค่านี้
                ['Payment Channel', (value) => {
                    expect(value).to.be.oneOf(['QR STATIC', 'QR DYNAMIC', 'CASH']);
                }]
            );
            cy.takeScreenshotSimple();
        });
    });

    context("4_Download", () => {
        it("TS06_TC24 Download of Sale Trasaction report  in Report page", () => {
            cy.get('a#report[href="/report/reports"]').first().click({ force: true });
            cy.wait(1000);
            cy.selectDate(
                data.endDate,
                data.endDate
            );
            cy.get('#id__button__button').click();
            cy.contains(data.report_transaction).click({ force: true });
            cy.takeScreenshotSimple(1);
            cy.validateDownload('#reconcileZip');

            cy.get('#requestProcess').click({ force: true });

            // getText และเรียกใช้ตัวแปร myText ที่เก็บไว้
            cy.getText(':nth-child(1) > #report_type');
            cy.get('@myText').then((report) => {
                cy.log(report);  // แสดงข้อความที่เก็บใน myText
                cy.wait(5000);
                cy.reload();
                cy.get('#download_disabled').should('not.exist');
                cy.validateDownload('#download');

                // getText และเรียกใช้ตัวแปร myText ที่เก็บไว้
                cy.getText(':nth-child(1) > #details_date');
                cy.get('@myText').then((date) => {
                    let dateDate = date.split(' - ');

                    // ใช้ cy.convertDate เพื่อแปลงวันที่จาก dd/mm/yyyy เป็น Date object
                    cy.convertDate(dateDate[0]).then((startDate) => {
                        cy.convertDate(dateDate[1]).then((endDate) => {
                            cy.log('startDate: ' + startDate);
                            cy.log('endDate: ' + endDate);

                            cy.validateFile(
                                data.report_transaction,
                                ['Merchant ID', (value) => { expect(value).to.be.not.empty; }],
                                ['Payment Date', (value) => {
                                    cy.convertDate(value).then((paymentDate) => {
                                        // ตรวจสอบว่า paymentDate อยู่ในช่วง startDate ถึง endDate
                                        expect(paymentDate).to.be.within(startDate, endDate);
                                    });
                                }]
                            );
                        });
                    });
                });

            });
            cy.takeScreenshotSimple(4);
        });

        it("TS06_TC25 Download of Merchant Registration report in Report page", () => {
            cy.get('a#report[href="/report/reports"]').first().click({ force: true });
            cy.wait(1000);
            cy.selectDate(
                data.startDate,
                data.endDate
            );
            cy.get('#id__button__button').click();
            cy.contains(data.report_merchant).click({ force: true });
            cy.takeScreenshotSimple(1);
            cy.validateDownload('#reconcileZip');

            cy.contains(/successfully/i);
            cy.takeScreenshotSimple(2);
            cy.get('.swal2-confirm').click();
            cy.takeScreenshotSimple(3);

            // ใช้ cy.then() เพื่อทำงานกับผลลัพธ์ของ cy.convertDate()
            cy.convertDate(data.startDate).then((startDate) => {
                cy.convertDate(data.endDate).then((endDate) => {
                    cy.validateFile(
                        data.fileName_merchant,
                        ['Merchant ID', (value) => { expect(value).to.be.not.empty; }],
                        ['Create Date', (value) => {
                            const dataParts = value.split(' '); // แยกวันที่และเวลาออกจากกัน
                            cy.convertDate(dataParts[0]).then((paymentDate) => {
                                expect(paymentDate).to.be.within(startDate, endDate);   // ตรวจสอบว่า paymentDate อยู่ในช่วง startDate ถึง endDate
                            });
                        }]
                    );
                });
            });
            cy.takeScreenshotSimple(4);
        });

        it("TS06_TC26 Download of QR Requrest Report in Report page", () => {
            cy.get('a#report[href="/report/reports"]').first().click({ force: true });
            cy.wait(1000);
            cy.selectDate(
                data.startDate,
                data.endDate
            );
            cy.get('#id__button__button').click();
            cy.contains(data.report_qr).click({ force: true });
            cy.takeScreenshotSimple(1);
            cy.validateDownload('#reconcileZip');

            cy.contains(/successfully/i);
            cy.takeScreenshotSimple(2);
            cy.get('.swal2-confirm').click();
            cy.takeScreenshotSimple(3);
            cy.validateFile(
                data.fileName_qr,
                ['Request ID', (value) => { expect(value).to.be.not.empty; }],
                ['Request Quantity', (value) => { expect(value).to.be.gte(1); }]
            );
            cy.takeScreenshotSimple(4);
        });

        it("TS06_TC27 Download of Staff Report in Report page", () => {
            cy.get('a#report[href="/report/reports"]').first().click({ force: true });
            cy.wait(1000);
            cy.selectDate(
                data.startDate,
                data.endDate
            );
            cy.get('#id__button__button').click();
            cy.contains(data.report_staff).click({ force: true });
            cy.takeScreenshotSimple(1);
            cy.validateDownload('#reconcileZip');

            cy.validateFile(
                data.fileName_staff,
                ['Merchant Type', (value) => { expect(value).to.match(/Juristic/); }],
                ['Merchant ID', (value) => { expect(value).to.be.not.empty; }]
            );
            cy.takeScreenshotSimple(2);
        });

        it("TS06_TC28 Download of Report Request Status  in Report Request Status page", () => {
            cy.get('#requestProcess').click({ force: true });
            cy.wait(1000);
            cy.takeScreenshotSimple(1);

            // getText และเรียกใช้ตัวแปร myText ที่เก็บไว้
            cy.getText(':nth-child(1) > #report_type');
            cy.get('@myText').then((report) => {
                cy.validateDownload('#download');
                cy.getText(':nth-child(1) > #details_date');

                cy.get('@myText').then((date) => {
                    let dateDate = date.split(' - ');   // แยก startDate และ endDate จากข้อมูลที่ได้จากเว็บ

                    // แปลง startDate และ endDate โดยใช้ cy.convertDate()
                    cy.convertDate(dateDate[0]).then((startDate) => {
                        cy.convertDate(dateDate[1]).then((endDate) => {
                            cy.log('startDate: ' + startDate);
                            cy.log('endDate: ' + endDate);

                            // เรียก validateFile หลังจากแปลงวันที่แล้ว
                            cy.validateFile(
                                report,
                                ['Merchant Type', (value) => { expect(value).to.match(/Juristic/); }],
                                ['Merchant ID', (value) => { expect(value).to.be.not.empty; }],
                                ['Payment Date', (value) => {
                                    const dataParts = value.split(' ');
                                    cy.convertDate(dataParts[0]).then((paymentDate) => {
                                        expect(paymentDate).to.be.within(startDate, endDate);
                                    });
                                }]
                            );
                        });
                    });
                });
            });
            cy.takeScreenshotSimple(2);
        });
    });
});