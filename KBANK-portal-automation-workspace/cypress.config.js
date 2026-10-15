const { defineConfig } = require("cypress");
const { format, endOfMonth } = require("date-fns");

module.exports = defineConfig({
  e2e: {
    downloadsFolder: "cypress/downloads",
    viewportWidth: 1280,
    viewportHeight: 720,
    setupNodeEvents(on, config) {
      // This task using to return screenshotName following format that we want
      on("task", {
        takeScreenshot({
          fileName,
          imageName,
          describePath,
          contextPath,
          testCasePath,
        }) {
          const date = format(new Date(), "dd-MM-yyyy");
          const testFileName = fileName?.replace(/\s+/g, "_") || "";
          const describeName = describePath?.replace(/\s+/g, "_") || "";
          const contextName = contextPath?.replace(/\s+/g, "_") || "";
          const testCaseName = testCasePath?.replace(/\s+/g, "_") || "";

          const screenshotName = `${date}/${testFileName}/${describeName}/${contextName}/${testCaseName}/${imageName}`;

          return screenshotName;
        },
        deleteFile(filePath) {
          if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
          }
          return null;
        },
        moveFile({ from, to }) {
          return new Promise((resolve, reject) => {
            fs.rename(from, to, (err) => {
              if (err) return reject(err);
              resolve(null);
            });
          });
        },
        getLatestFile(folderPath) {
          const files = fs.readdirSync(folderPath);
          const mostRecentFile = files
            .map((file) => ({
              name: file,
              time: fs.statSync(path.join(folderPath, file)).mtime.getTime(),
            }))
            .sort((a, b) => b.time - a.time)[0];

          return path.join(folderPath, mostRecentFile.name);
        },
      });
    },
  },

  env: {
    KBANK_USERNAME: "kd000030",
    KBANK_PASSWORD: "P@ssw0rd",
    KBANK_USERNAME_2: "kd000028",
    KBANK_PASSWORD_2: "P@ssw0rd",
    KBANK_SUPER_ADMIN_USERNAME: "kc000003",
    KBANK_SUPER_ADMIN_PASSWORD: "P@ssw0rd",
    SHOP11_SPOC_MERCHANT_USERNAME: "kas11@mail.com",
    SHOP11_SPOC_MERCHANT_PASSWORD: "P@ssw0rd",
    ADD_BANK_USER_EMAIL: "katapon1@digio.co.th",
  },

  experimentalSessionAndOrigin: true,
  experimentalStudio: true,
  watchForFileChanges: false,
  chromeWebSecurity: false,
});
