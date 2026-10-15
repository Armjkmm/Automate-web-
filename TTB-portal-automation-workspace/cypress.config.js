const { defineConfig } = require("cypress");
const fs = require("fs");
const xlsx = require("xlsx"); // เพิ่มการใช้ xlsx library

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("task", {
        // task สำหรับการอ่านไฟล์ในโฟลเดอร์
        listFiles(folderPath) {
          return new Promise((resolve, reject) => {
            fs.readdir(folderPath, (err, files) => {
              if (err) {
                reject(err);
              } else {
                resolve(files); // คืนค่าไฟล์ทั้งหมดในโฟลเดอร์
              }
            });
          });
        },

        // task สำหรับการอ่านไฟล์ .xlsx และแปลงเป็น JSON
        parseXlsx({ filePath }) {
          const data = fs.readFileSync(filePath);
          const workbook = xlsx.read(data, { type: "buffer" });

          // ตรวจสอบว่า sheet มีข้อมูลหรือไม่
          const sheet = workbook.Sheets[workbook.SheetNames[0]];
          const jsonData = xlsx.utils.sheet_to_json(sheet);

          console.log("Parsed JSON data:", jsonData); // เพิ่มการ log ข้อมูลที่แปลงแล้ว
          return jsonData;
        },

        // task สำหรับเปลี่ยนชื่อไฟล์
        renameFile({ oldPath, newPath }) {    
          // ตรวจสอบว่าไฟล์ต้นทางมีอยู่จริง
          if (fs.existsSync(oldPath)) {
            // เปลี่ยนชื่อไฟล์
            fs.renameSync(oldPath, newPath);
            return null; // สำเร็จ
          }
          return null; // ถ้าไม่พบไฟล์ต้นทาง
        }
      });
    },
    // viewportWidth: 1440,
    // viewportHeight: 1920,
    viewportWidth: 1280,
    viewportHeight: 720,
  },

  env: {
    ADMIN_USERNAME: 'TESTMERCDGOAD3@TMBTest.local',
    ADMIN_PASSWORD: 'P@ss56789',
    VIEWER_USERNAME: 'TESTMERCUAT4@TMBTest.local',
    VIEWER_PASSWORD: 'Abc@12345',
    OPERATOR_USERNAME: 'TESTMERCUAT3@TMBTest.local',
    OPERATOR_PASSWORD: 'Abc@12345',
    DIGIO_USERNAME: 'TESTMERCDGO2@TMBTest.local',
    DIGIO_PASSWORD: "w,jg8pgx]ujpocx]'"
  },

  experimentalSessionAndOrigin: true,
  experimentalStudio: true,
  chromeWebSecurity: false,
  browser: "chrome",
});
