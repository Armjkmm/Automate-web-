# **K-Bank Portal Automate Workspace**

A Cypress automation project built for testing K-Bank web portal's workflow. This workspace integrates various Cypress plugins to support file uploads, iframe interactions, and other automated processes.

## **Project Overview**

- **Project Name:** `KBANK-portal-automation-workspace`
- **Version:** 1.0.0
- **Author:** Katapon Sinpunyawong
- **License:** ISC

## **Dependencies**

The following dependencies are required for this project:

##### **Core Dependencies:**

- `date-fns` ^4.1.0

##### **Development Dependencies:**

- `cypress` ^13.15.0
- `cypress-file-upload` ^5.0.8
- `cypress-iframe` ^1.0.1

---

### **Setup Instructions**

1. **Clone the Repository:**

   ```bash
   git clone <repository-url>
   cd kbank_automate_workspace
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Open Cypress Test Runner:**

   ```bash
   npx cypress open
   ```

---

### **Project Structure**

- **`/cypress`**: Contains Cypress test files and configuration.
- **`package.json`**: Lists dependencies and scripts for the project.
- **`package-lock.json`**: Locks dependency versions to ensure consistency.

---

### **How to Add New Tests**

1. Create a new test file inside the `/cypress/e2e` directory.
2. Use the available plugins (`cypress-file-upload`, `cypress-iframe`) as needed for your scenarios.
3. Example code to test file upload:

   ```javascript
   import "cypress-file-upload";

   describe("Test Scenario: Your Test Scenario Name", () => {
     it("XX-XX", () => {
       const filePath = "path/to/file.pdf";
       cy.get('input[type="file"]').attachFile(filePath);
     });
   });
   ```

---

### **Contributing**

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push your changes and open a Pull Request.
