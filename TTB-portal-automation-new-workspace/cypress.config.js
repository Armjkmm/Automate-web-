const path = require("path");
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
        // ✅ หาชื่อไฟล์ล่าสุดในโฟลเดอร์ ไม่กรองชื่อ
        getLatestDownloadedFile({ folderPath, extension }) {
          const files = fs
            .readdirSync(folderPath)
            .filter((file) => file.endsWith(`.${extension}`));

          if (files.length === 0) return null;

          const fullPaths = files.map((f) => path.join(folderPath, f));
          const latestFile = fullPaths.reduce((a, b) =>
            fs.statSync(a).mtime > fs.statSync(b).mtime ? a : b,
          );

          return path.basename(latestFile); // คืนชื่อไฟล์ล่าสุด
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
        },
      });
    },

    // viewportWidth: 1440,
    // viewportHeight: 1920,
    // viewportWidth: 1920,
    // viewportHeight: 1080,
    viewportWidth: 1440,
    viewportHeight: 900,
    // viewportWidth: 1280,
    // viewportHeight: 720,
    // viewportWidth: 1280,
    // viewportHeight: 1080,
  },

  env: {
    ADMIN_USERNAME: "DGO_Bua1@TMBTest.local",
    ADMIN_PASSWORD: "P@ss1604",
    ADMIN_USERNAME2: "DGO_Bua2@TMBTest.local",
    ADMIN_PASSWORD2: "P@ss1604",
    OPERATOR_USERNAME: "DGO_Oper1@TMBTest.local",
    OPERATOR_PASSWORD: "P@ss1604",
    OPERATOR_USERNAME2: "DGO_Oper2@TMBTest.local",
    OPERATOR_PASSWORD2: "P@ss1604",
    VIEWER_USERNAME: "DGO_View1@TMBTest.local",
    VIEWER_PASSWORD: "P@ss1604",
    VIEWER_USERNAME2: "DGO_View2@TMBTest.local",
    VIEWER_PASSWORD2: "P@ss1604",
    DIGIO_USERNAME: "DGO_Digi1@TMBTest.local",
    DIGIO_PASSWORD: "P@ss1604",
    DIGIO_USERNAME2: "DGO_Digi2@TMBTest.local",
    DIGIO_PASSWORD2: "P@ss1604",

    // ADMIN_USERNAME: "automateadmin",
    // ADMIN_PASSWORD: "Qwer!234",
    // ADMIN_USERNAME1: "thanongsak",
    // ADMIN_PASSWORD1: "Qwer!234",
    // ADMIN_USERNAME2: "ruttagorn",
    // ADMIN_PASSWORD2: "Cybersonic13@",
    // VIEWER_USERNAME: "",
    // VIEWER_PASSWORD: "",
    // OPERATOR_USERNAME: "",
    // OPERATOR_PASSWORD: "",
    // DIGIO_USERNAME: "automateadmin",
    // DIGIO_PASSWORD: "Qwer!234",
  },

  experimentalSessionAndOrigin: true,
  experimentalStudio: true,
  chromeWebSecurity: false,
  browser: "chrome",
});
