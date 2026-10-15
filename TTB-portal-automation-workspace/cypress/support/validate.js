Cypress.Commands.add("getText", (element) => {
    cy.get(element)  // เลือก element
        .invoke('text')         // ดึงข้อความ
        .then((text) => {  // ใช้ตัวแปร 'text' ซึ่งเป็นข้อความที่ดึงมา
            cy.wrap(text).as('myText');  // เก็บข้อความใน alias 'myText'
            Cypress.env('myText', text);  // เก็บค่าผลลัพธ์ใน Cypress.env()
            cy.log(text);  // แสดงข้อความใน log
        });
});

Cypress.Commands.add("validateText", (element, text) => {
    cy.wait(1000);

    cy.get('.wg-row').then(($rows) => {
        const numberOfRows = $rows.length;
        for (let n = 1; n < numberOfRows; n++) {

            // ถ้า element ใช้ :nth-child ก็เลือก nth child ตามลำดับ
            if (element.includes(':nth-child')) {
                cy.get(`:nth-child(${n}) > ${element}`).contains(new RegExp(text, 'i'));
            } else {
                cy.get(element).contains(new RegExp(text, 'i'));
            }
        }
        cy.takeScreenshotSimple();
    });
});

Cypress.Commands.add("validateMID", (name, settlementType) => {
    cy.gotoMID(name);
    cy.contains(settlementType);
});

Cypress.Commands.add("validateData", () => {
    cy.get('.wg-row').should('be.visible');  // ตรวจสอบให้แน่ใจว่าแถว .wg-row ปรากฏ

    // ใช้ .then() เพื่อเชื่อมโยงคำสั่ง
    return cy.get('body').then(($body) => {
        // ใช้ .toLowerCase() เพื่อแปลงข้อความเป็นตัวพิมพ์เล็ก
        const isTextVisible = $body.text().toLowerCase().includes('data not found');

        return cy.get('.text-ct-header-number').then(($headerNumber) => {
            const headerText = $headerNumber.text().trim();
            const isZero = headerText === '0'; // ตรวจสอบว่าค่าคือ 0

            // ถ้าเจอ "Data Not Found" หรือ .text-ct-header-number.ml-4 == 0
            if (isTextVisible || isZero) {
                cy.takeScreenshotSimple();  // แคปภาพเมื่อไม่พบข้อมูลหรือจำนวน 0
                cy.wrap(true);  // ใช้ cy.wrap() เพื่อส่งค่าผ่านขั้นตอนถัดไป
            } else {
                cy.wrap(false);  // ใช้ cy.wrap() เพื่อส่งค่าผ่านขั้นตอนถัดไป
            }
        });
    });
});

const dayjs = require('dayjs');
Cypress.Commands.add("convertDate", (dateString) => {
    const dateParts = dateString.split('/');  // แยกเป็น [dd, mm, yyyy]
    return dayjs(`${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`).toDate();  // คืนค่าผลลัพธ์เป็น Date object
});

Cypress.Commands.add("validateDownload", (button) => {
    cy.wait(2000);
    cy.get(button).click({ force: true }); // คลิกปุ่มดาวน์โหลด

    cy.wait(2000);
    // ตรวจสอบข้อความ "Download file over limit"
    cy.get('body').then(($body) => {
        // เช็คว่า "Download file over limit" มีอยู่ในหน้าเว็บหรือไม่
        const isTextVisible = $body.text().includes('Download file over limit');

        if (isTextVisible) {
            cy.takeScreenshotSimple(2);
            // ถ้ามีข้อความ "Download file over limit" ให้คลิกปุ่ม
            cy.get('.swal2-confirm', { timeout: 1000 }).click();

            // ตรวจสอบว่า "successfully" ปรากฏ
            cy.contains(/successfully/i);
            cy.takeScreenshotSimple(3);
            cy.get('.swal2-confirm', { timeout: 1000 }).click();

            // ใช้ตรวจสอบว่า popup ไม่แสดงผลในหน้าเว็บ
            cy.get('.swal2-popup').should('not.exist');

        }
    });
});

const path = require('path');
Cypress.Commands.add("validateFile", (reportName, row = 2, ...validators) => {
    const downloadsFolder = Cypress.config('downloadsFolder');  // ได้ค่า downloadsFolder จาก config
    const fileNamePattern = new RegExp(`^${reportName}.*\.xlsx`, 'i');

    cy.task('listFiles', downloadsFolder).then((files) => {
        const fileName = files.find(file => fileNamePattern.test(file));

        if (fileName) {
            // ตรวจสอบว่า fileName ถูกต้องก่อน
            console.log(`Found file: ${fileName}`);  // ตรวจสอบชื่อไฟล์ที่พบ

            // ตรวจสอบเส้นทางไฟล์
            const filePath = path.join(downloadsFolder, fileName);
            cy.task('parseXlsx', { filePath }).then((jsonData) => {
                console.log("Parsed JSON data:", jsonData);

                if (jsonData && jsonData.length > row) {
                    cy.log(`The file contains more than ${row} rows`); // ถ้าไฟล์มีจำนวนแถวมากกว่า row

                    // ตรวจสอบแต่ละ row ว่ามีค่าตามที่ต้องการหรือไม่
                    jsonData.forEach((dataRow) => {
                        // ตรวจสอบว่าแต่ละ row มีค่าเป็นไปตามที่คาดไว้
                        validators.forEach(([field, validator]) => {
                            if (dataRow[field]) {
                                validator(dataRow[field]);
                            }
                        });
                    });
                }
            });
        }
    });
});

Cypress.Commands.add("renameNewfile", (file, type) => {
    cy.wait(3000);
    // สร้างชื่อไฟล์ใหม่ที่มี timestamp
    cy.genDateTime().then((timestampISOString) => {
        const newFileName = `${file}_${timestampISOString}.${type}`;
        const downloadPath = `cypress/downloads/${file}.${type}`;
        const newDownloadPath = `cypress/downloads/${newFileName}`;

        // ตรวจสอบว่าไฟล์มีอยู่และไม่ว่างเปล่า
        cy.readFile(downloadPath).should('exist');  // ตรวจสอบว่าไฟล์อยู่จริง
        cy.readFile(downloadPath).should('not.be.empty');  // ตรวจสอบว่าไฟล์ไม่ว่างเปล่า

        // ย้ายไฟล์และเปลี่ยนชื่อไฟล์
        cy.task('renameFile', { oldPath: downloadPath, newPath: newDownloadPath }).then(() => {
            // ตรวจสอบว่าไฟล์ใหม่มีอยู่จริง
            cy.readFile(newDownloadPath).should('exist');
            cy.readFile(newDownloadPath).should('not.be.empty');
        });

        // ใช้ cy.wrap() เพื่อเก็บค่าผลลัพธ์ที่ได้
        cy.wrap(`${file}_${timestampISOString}`).as('filename');  // เก็บไว้ใน "filename"
    });
});

Cypress.Commands.add("validateDate", (elDate, start, end) => {
    cy.wait(1000);

    // แยก start และ end date ออกเป็น array
    let startDate, endDate;
    startDate = start.split('/');
    endDate = end.split('/');

    cy.get('.wg-row').then(($rows) => {
        const numberOfRows = $rows.length;
        cy.log('numberOfRows: ' + numberOfRows);

        if (numberOfRows <= 3) {
            cy.get('@myText').then((text) => {
                let date = text.split(' ');

                cy.get(elDate).then(($el) => {
                    // ใช้ for loop เพื่อวนลูปจากวันเริ่มต้นไปจนถึงวันสุดท้าย
                    for (let n = parseInt(startDate[0]); n <= parseInt(endDate[0]); n++) {

                        // เปรียบเทียบวันใน startDate หรือ endDate กับ n
                        if (parseInt(date[0]) == n) {
                            cy.log(`Day ${n} is valid in startDate or endDate`);
                        } else {
                            false;
                        }
                    }
                });
            });

        } else {
            for (let m = 1; m < numberOfRows; m++) {

                cy.get(`:nth-child(${m}) > ${elDate}`).then(($el) => {
                    let text = $el.text();  // หรือ $el.text() เพื่อดึงข้อความ

                    // ใช้ for loop เพื่อวนลูปจากวันเริ่มต้นไปจนถึงวันสุดท้าย
                    for (let n = parseInt(startDate[0]); n <= parseInt(endDate[0]); n++) {

                        // เปรียบเทียบวันใน startDate หรือ endDate กับ i
                        if (parseInt(text) == n) {
                            cy.log(`Day ${n} is valid in startDate or endDate`);
                        } else {
                            false;
                        }
                    }
                });
            }
        }
    });
});