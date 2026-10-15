function goToSubMenuAllCompany() {
  cy.get(
    ".css-1mvsuhg > .MuiDrawer-root > .MuiPaper-root > .css-1jd25az > .MuiList-root > :nth-child(2) > #MAINMENU_6 > .MuiListItemText-root > .MuiTypography-root",
  ).click();
  cy.wait(3000);
  let companyListBtn = cy.get(
    "#SUB_MENU_6_1_1 > .MuiListItemText-root > .MuiTypography-root",
    { timeout: 20000 },
  );
  companyListBtn.should("be.visible");
  companyListBtn.click();
}
let startDateNotFound = "05/07/2025";
let endDateNotFound = "05/07/2025";
let startHaveData = "19/07/2025";
let endHaveData = "25/07/2025";

let actionTerminateBy = "Terminated By : DGO_Bua1 (DGO_Bua1)";
let searchByCompanyNameUploadFileTerminateCompany = "Play82";

//#region Search in Company
let companyName = "ซีเอ็มยู56";
let taxID = "0115531101766";
let midCompany = "862846318025752";
let accountNo = "0541056438";
//#endregion

//#region Check default Set Permission Settlement
function checkDefaultSetPermissionSettlement() {
  cy.get(".css-1kkt86i > :nth-child(1)")
    .invoke("text")
    .should("eq", "จำนวนต่อวัน :1");
  cy.get(".css-1kkt86i > :nth-child(2)")
    .invoke("text")
    .should("eq", "จำนวนต่อเดือน :31");
}
//#endregion

//#region Check default Limit Per Transaction QRCS
function checkDefaultLimitPerTransactionQRCS() {
  cy.get(
    ':nth-child(3) > .MuiGrid-grid-xs-5 > [style="font-size: 10px; margin-top: 5%;"]',
  )
    .invoke("text")
    .should("eq", "Limit per transaction : 50,000 baht");
}
//#endregion

//#region Check default Limit Add Per Transaction QRCS
function checkDefaultLimitAddPerTransactionQRCS() {
  cy.get("#TF_TF_LIMIT_PER_TRANSACTION").should("have.value", "50,000");
}
//#endregion

//#region Check default settlement type
function checkDefaultSettlementType() {
  cy.get(":nth-child(1) > .MuiButtonBase-root > .PrivateSwitchBase-input")
    .check()
    .should("be.checked");
}
//#endregion

//#region Check default settlement type in merchant detail
function checkDefaultSettlementTypeInMerchantDetail() {
  cy.get("#TF_SETTLEMENT TYPE").should("have.value", "Real time");
}
//#endregion

//#region Create New Company Payment type Pomptpay
function createNewCompanyPatmentTypePromptPay() {
  let PrefixPP = "T618";
  cy.get("#DD_BILLER_ID").click();
  cy.get("#\\30 10753700001716").click(); // Beller ID
  // cy.get("#\\30 10753700001733").click(); // Beller ID
  cy.get("#TF_PREFIX").type(PrefixPP).should("be.visible");
}
//#endregion

let addressPP = "BBK";
let zipPP = "30130";
let phonePP = "0922692832";
let emailPP = "thanongsak@digio.asia";
let activeBy = "DGO_Bua1 (DGO_Bua1)";

//#region Create New Company Payment type QRCS
function createNewCompanyPatmentTypeQRCS() {
  let PrefixQRCS = "T616";
  cy.get("#DD_BILLER_ID").click();
  cy.get("#\\30 10753700001716").click(); // Beller ID
  // cy.get("#\\30 10753700001733").click(); // Beller ID
  cy.get("#TF_PREFIX").type(PrefixQRCS).should("be.visible");
}
let taxIDQRCS = "21212";
let taxBranchNameQRCS = "121211";
let taxBranchNoQRCS = "12127";
//#endregion

let merchantAddPaymentServiceQRCS = "ซีเอ็มยู52";

describe("Test Scenario: 02 Company (create merchant)", () => {
  beforeEach(() => {
    //auto login to enter portal page
    cy.loginBankPortalPageUAT(
      Cypress.env("ADMIN_USERNAME"),
      Cypress.env("ADMIN_PASSWORD"),
    );
  });

  context(
    "27 Create New Company in Company page Type Payment QR Promptpay",
    () => {
      it("TS02_TC0156-TC171_Create New Company Type Payment QR Promptpay", () => {
        goToSubMenuAllCompany();
        cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.intercept("POST", "/setting/api/setting/limit-transaction").as(
          "waitAPISetingLimitTransaction",
        );
        cy.get("#BT_REQUEST_CREATE_COMPANY").click();
        cy.wait("@waitAPISetingLimitTransaction");
        cy.contains("Create New Company").should("be.visible");
        cy.get("#BT_NEXT").click();
        cy.contains("Incorrect information").should("be.visible");
        cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get("#TF_PREFIX").type("T222");
        cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.intercept("POST", "/company/api/company/ttb/inquiry/subBiller").as(
          "searchPrefix",
        );
        cy.get("#BT_NEXT").click();
        cy.wait("@searchPrefix");
        cy.contains("Invalid prefix no").should("be.visible");
        cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get("#BT_CENTER").click();
        cy.get("#TF_PREFIX").clear();
        cy.get("#DD_BILLER_ID").click();
        cy.wait(1000);
        cy.get("#\\30 10753700001716").click();
        cy.get("#TF_PREFIX").type("A084").should("be.visible");
        cy.takeScreenshotSimple(5, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get("#BT_NEXT").click();
        cy.contains("Existing prefix").should("be.visible");
        cy.takeScreenshotSimple(6, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get("#BT_CENTER").click();
        cy.get("#TF_PREFIX").clear();
        createNewCompanyPatmentTypePromptPay();
        cy.takeScreenshotSimple(7, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get("#BT_NEXT").click();
        cy.contains("Company Profile").should("be.visible");
        cy.get("#TF_COMPANY_NAME").clear();
        cy.get("#TF_COMPANY_SHORT_NAME").clear();
        cy.generateRandomShopName().then((shopName) => {
          cy.get("#TF_COMPANY_NAME").type(shopName);
        });
        cy.generateRandomShopName().then((shopName) => {
          cy.get("#TF_COMPANY_SHORT_NAME").type(shopName);
        });
        cy.get("#BT_NEXT").click();
        cy.contains("Incorrect information").should("be.visible");
        cy.takeScreenshotSimple(8, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.genAddressText().then((address) => {
          cy.get("#TF_ADDRESS_1").type(address).should("be.visible");
        });
        cy.get("#DD_PROVINCE").click();
        cy.wait(1000);
        cy.get("#DD_PROVINCE_80").click();
        cy.wait(1000);
        cy.get("#DD_CITY").click();
        cy.wait(1000);
        cy.get("#DD_CITY_18").click();
        cy.genZipCode().then((zip) => {
          cy.get("#TF_ZIP_CODE").type(zip).should("be.visible");
        });
        cy.genThaiPhoneNumber().then((phone) => {
          cy.get("#TF_PHONE").type(phone).should("be.visible");
        });
        cy.wait(2000);
        cy.takeScreenshotSimple(9, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get("#BT_NEXT").click();
        cy.contains("Payment Service").should("be.visible");
        cy.takeScreenshotSimple(10, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get("#BT_NEXT").click();
        cy.contains("Invite Owner");
        cy.get("#TF_EMAIL").type("thanongsakmail.com");
        cy.get("#TF_PHONE_NUMBER_INVITE_OWNER").type("0922232");
        cy.takeScreenshotSimple(11, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get("#BT_NEXT").click();
        cy.contains("Incorrect information");
        cy.contains("(Between 9-10 Numeric characters, starting with 0)");
        cy.takeScreenshotSimple(12, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get("#TF_EMAIL").clear();
        cy.get("#TF_PHONE_NUMBER_INVITE_OWNER").clear();
        cy.wait(1000);
        cy.get("#TF_EMAIL").type("thanongsakmail.com");
        cy.get("#TF_PHONE_NUMBER_INVITE_OWNER").type("0922692832");
        cy.takeScreenshotSimple(13, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get("#BT_NEXT").click();
        cy.contains("Incorrect information").should("be.visible");
        cy.wait(2000);
        cy.takeScreenshotSimple(14, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get("#TF_EMAIL").clear();
        cy.get("#TF_PHONE_NUMBER_INVITE_OWNER").clear();
        cy.wait(1000);
        cy.get("#TF_EMAIL").type("thanongsak@digio.asia");
        cy.get("#TF_PHONE_NUMBER_INVITE_OWNER").type("0922632");
        cy.takeScreenshotSimple(15, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get("#BT_NEXT").click();
        cy.contains("(Between 9-10 Numeric characters, starting with 0)");
        cy.wait(2000);
        cy.takeScreenshotSimple(16, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get("#TF_EMAIL").clear();
        cy.get("#TF_PHONE_NUMBER_INVITE_OWNER").clear();
        cy.wait(1000);
        cy.generateRandomEmail().then((email) => {
          cy.get("#TF_EMAIL").type(email);
        });
        cy.genThaiPhoneNumber().then((phone) => {
          cy.get("#TF_PHONE_NUMBER_INVITE_OWNER")
            .type(phone)
            .should("be.visible");
        });
        cy.takeScreenshotSimple(17, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get("#BT_NEXT").click();
        cy.wait(2000);
        cy.takeScreenshotSimple(18, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get("#BT_SUBMIT").click();
        cy.contains("Confirm Create New Company?").should("be.visible");
        cy.wait(1000);
        cy.takeScreenshotSimple(19, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get("#BT_RIGHT").click();
        cy.takeScreenshotSimple(20, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get("#BT_SUBMIT").click();
        cy.wait(1000);
        cy.takeScreenshotSimple(21, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.intercept("POST", "company-user/api/companyUser/invite/owner").as(
          "inviteOwnerSuccess",
        );
        cy.get("#BT_LEFT").click();
        cy.wait("@inviteOwnerSuccess");
        cy.contains("Success").should("be.visible");
        cy.takeScreenshotSimple(22, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get("#BT_CENTER").click();
        cy.contains("Company").should("be.visible");
        cy.takeScreenshotSimple(23, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.wait(1000);
        cy.get(
          ":nth-child(1) > :nth-child(7) > #IB_TABLE_MENU_undefined",
        ).click();
        cy.contains("View Detail").should("be.visible");
        cy.takeScreenshotSimple(24, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.contains("View Details").click();
        cy.takeScreenshotSimple(25, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.contains(activeBy).should("be.visible");
        cy.wait(1000);
        cy.get(".css-fb8w0w > #IB_MENU_GENERNAL_undefined").click();
        cy.takeScreenshotSimple(26, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.contains("View Detail Merchant").should("be.visible");
        cy.contains("View Detail Merchant").click();
        cy.contains("Real time").should("be.visible");
        checkDefaultSetPermissionSettlement();
        cy.takeScreenshotSimple(27, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      });
    },
  );

  context("28 Add QR Credit Card in Merchant Detail", () => {
    it("TS02_TC171-TC182_Add QR Credit Card", () => {
      goToSubMenuAllCompany();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#IB_TABLE_MENU_undefined").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("View Detail").should("be.visible");
      cy.contains("View Details").click();
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".css-fb8w0w > #IB_MENU_GENERNAL_undefined").click();
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("View Detail Merchant").should("be.visible");
      cy.intercept("POST", "/company/api/company/province").as(
        "goToMerchantPage",
      );
      cy.contains("View Detail Merchant").click();
      cy.wait("@goToMerchantPage");
      cy.takeScreenshotSimple(5, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CONFIRM_EDIT_COMPANY").click();
      cy.contains("Add QR Credit Card").should("be.visible");
      cy.get("#BT_CHANGE_OK").click();
      cy.contains("Incorrect information").should("be.visible");
      cy.takeScreenshotSimple(6, Cypress.ScreenshotCaptureEnum.VIEWPORT);

      cy.genZipCode().then((zip) => {
        cy.get("#TF_TAX_ID").type(zip).should("be.visible");
      });
      cy.getRandomNickname().then((nickname) => {
        cy.get("#TF_TAX_BRANCH_NAME").type(nickname);
      });
      cy.genZipCode().then((zip) => {
        cy.get("#TF_TAX_BRANCH_NO").type(zip).should("be.visible");
      });
      cy.takeScreenshotSimple(7, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CHANGE_OK").click();
      cy.contains("Confirm Add Payment Service?").should("be.visible");
      cy.takeScreenshotSimple(8, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_RIGHT").click();
      cy.takeScreenshotSimple(9, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CHANGE_OK").click();
      cy.contains("Confirm Add Payment Service?").should("be.visible");
      cy.takeScreenshotSimple(10, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_LEFT").click();
      cy.contains("Success").should("be.visible");
      cy.takeScreenshotSimple(11, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
      cy.contains("QR Credit Card").should("be.visible");
      cy.takeScreenshotSimple(12, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
  });

  context("29 Edit Payment Service QR Credit Card in Company Detail", () => {
    it("TS02_TC183-TC190_Update Payment Service QR Credit Card", () => {
      goToSubMenuAllCompany();
      cy.get("#TF_COMPANY_NAME")
        .type(merchantAddPaymentServiceQRCS)
        .should("be.visible");
      cy.get("#BT_SEARCH").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#IB_TABLE_MENU_undefined").click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("View Detail").should("be.visible");
      cy.contains("View Details").click();
      cy.contains(merchantAddPaymentServiceQRCS).should("be.visible");
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(
        ":nth-child(4) > .MuiGrid-grid-xs-1 > #IB_MENU_GENERNAL_undefined",
      ).click();
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("Edit QR Credit Card").should("be.visible");
      cy.contains("Edit QR Credit Card").click();
      cy.takeScreenshotSimple(5, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#limit-per-transaction").clear();
      cy.wait(1000);
      cy.genZipCode().then((zip) => {
        cy.get("#limit-per-transaction").type(zip).should("be.visible");
      });
      cy.get("#DD_NOTE")
        .type("Test update Limit Per Transaction")
        .should("be.visible");
      cy.takeScreenshotSimple(6, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CONFIRM_CHANGE_STATUS").click();
      cy.contains("Success").should("be.visible");
      cy.takeScreenshotSimple(7, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
      cy.takeScreenshotSimple(8, Cypress.ScreenshotCaptureEnum.VIEWPORT);
    });
  });

  context(
    "30 Edit Payment Service QR Credit Card status Suspended in Company Detail",
    () => {
      it("TS02_TC191-TC198_Update Status Payment Service QR Credit Card", () => {
        goToSubMenuAllCompany();
        cy.get("#TF_COMPANY_NAME")
          .type(merchantAddPaymentServiceQRCS)
          .should("be.visible");
        cy.get("#BT_SEARCH").click();
        cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get("#IB_TABLE_MENU_undefined").click();
        cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.contains("View Detail").should("be.visible");
        cy.contains("View Details").click();
        cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.contains(merchantAddPaymentServiceQRCS).should("be.visible");
        cy.get(
          ":nth-child(4) > .MuiGrid-grid-xs-1 > #IB_MENU_GENERNAL_undefined",
        ).click();
        cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.contains("Edit QR Credit Card").should("be.visible");
        cy.contains("Edit QR Credit Card").click();
        cy.takeScreenshotSimple(5, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get("#DD_SELECT_STATUS").click();
        cy.contains("Suspended").should("be.visible");
        cy.get("#DD_STATUS_3").click();
        cy.get("#DD_NOTE")
          .type("Test Edit Status Suspended")
          .should("be.visible");
        //   cy.takeScreenshotSimple(6, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.contains("Edit").should("be.visible");
        cy.intercept("POST", "/company/api/company/ttb/detail").as(
          "companyDetailPage",
        );
        cy.get("#BT_CONFIRM_CHANGE_STATUS").click();
        cy.wait("@companyDetailPage");
        cy.contains("Success").should("be.visible");
        //   cy.takeScreenshotSimple(7, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get("#BT_CENTER").click();
        cy.contains("Suspended").should("be.visible");
        //   cy.takeScreenshotSimple(8, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      });
    },
  );

  context(
    "31 Edit Payment Service QR Credit Card status Active in Company Detail",
    () => {
      it("TS02_TC199-TC206_Update Status Payment Service QR Credit Card", () => {
        goToSubMenuAllCompany();
        cy.get("#TF_COMPANY_NAME")
          .type(merchantAddPaymentServiceQRCS)
          .should("be.visible");
        cy.get("#BT_SEARCH").click();
        cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get("#IB_TABLE_MENU_undefined").click();
        cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.contains("View Details").should("be.visible");
        cy.contains("View Details").click();
        cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.contains(merchantAddPaymentServiceQRCS).should("be.visible");
        cy.get(
          ":nth-child(4) > .MuiGrid-grid-xs-1 > #IB_MENU_GENERNAL_undefined",
        ).click();
        cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.contains("Edit QR Credit Card").should("be.visible");
        cy.contains("Edit QR Credit Card").click();
        cy.takeScreenshotSimple(5, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get("#DD_SELECT_STATUS").click();
        cy.contains("Active").should("be.visible");
        cy.get("#DD_STATUS_2").click();
        cy.get("#DD_NOTE").type("Test Edit Status Active").should("be.visible");
        //   cy.takeScreenshotSimple(6, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.contains("Edit").should("be.visible");
        cy.intercept("POST", "/company/api/company/ttb/detail").as(
          "companyDetailPage",
        );
        cy.get("#BT_CONFIRM_CHANGE_STATUS").click();
        cy.wait("@companyDetailPage");
        cy.contains("Success").should("be.visible");
        //   cy.takeScreenshotSimple(7, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get("#BT_CENTER").click();
        cy.contains("Active").should("be.visible");
        //   cy.takeScreenshotSimple(8, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      });
    },
  );

  context(
    "32 Create New Company in Company page Type Payment QR Credit Card",
    () => {
      it("TS02_TC207-TC233_Create New Company Type Payment QRCS", () => {
        goToSubMenuAllCompany();
        cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.intercept("POST", "/setting/api/setting/limit-transaction").as(
          "waitAPISetingLimitTransaction",
        );
        cy.get("#BT_REQUEST_CREATE_COMPANY").click();
        cy.wait("@waitAPISetingLimitTransaction");
        cy.contains("Create New Company").should("be.visible");
        cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        createNewCompanyPatmentTypeQRCS();
        cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.intercept("POST", "/company/api/company/mcc").as("goToMerchantPage");
        cy.get("#BT_NEXT").click();
        cy.wait("@goToMerchantPage");
        cy.contains("Company Profile").should("be.visible");
        cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get("#BT_NEXT").click();
        cy.contains("Incorrect information").should("be.visible");
        cy.takeScreenshotSimple(5, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get("#TF_COMPANY_NAME").clear();
        cy.get("#TF_COMPANY_SHORT_NAME").clear();
        cy.generateRandomShopName().then((shopName) => {
          cy.get("#TF_COMPANY_NAME").type(shopName);
        });
        cy.generateRandomShopName().then((shopName) => {
          cy.get("#TF_COMPANY_SHORT_NAME").type(shopName);
        });
        cy.get("#AUTO_MERCHANT_CATEGORY").clear();
        cy.get("#AUTO_MERCHANT_CATEGORY").type("0013");
        cy.contains("0013").should("be.visible");
        cy.get("#AUTO_MERCHANT_CATEGORY-option-0").click();
        cy.contains("Mcc Other Description").should("be.visible");
        cy.generateRandomShopType().then((shopType) => {
          cy.get("#TF_MCC_OTHER_DESC").type(shopType);
        });
        cy.genAddressText().then((address) => {
          cy.get("#TF_ADDRESS_1").type(address).should("be.visible");
        });
        cy.get("#DD_PROVINCE").click();
        cy.wait(1000);
        cy.get("#DD_PROVINCE_80").click();
        cy.wait(1000);
        cy.get("#DD_CITY").click();
        cy.wait(1000);
        cy.get("#DD_CITY_18").click();
        cy.genZipCode().then((zip) => {
          cy.get("#TF_ZIP_CODE").type(zip).should("be.visible");
        });
        cy.genThaiPhoneNumber().then((phone) => {
          cy.get("#TF_PHONE").type(phone).should("be.visible");
        });
        cy.takeScreenshotSimple(6, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get("#BT_NEXT").click();
        cy.contains("Payment Service").should("be.visible");
        cy.get(
          ".css-etdwts > .css-4kya3o > :nth-child(2) > .MuiButtonBase-root",
        ).click();
        cy.takeScreenshotSimple(7, Cypress.ScreenshotCaptureEnum.VIEWPORT);

        cy.get("#BT_CHANGE_OK").click();
        cy.contains("Incorrect information").should("be.visible");
        cy.takeScreenshotSimple(8, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.genZipCode().then((zip) => {
          cy.get("#TF_TAX_ID").type(zip).should("be.visible");
        });
        cy.getRandomNickname().then((nickname) => {
          cy.get("#TF_TAX_BRANCH_NAME").type(nickname);
        });
        cy.genZipCode().then((zip) => {
          cy.get("#TF_TAX_BRANCH_NO").type(zip).should("be.visible");
        });
        cy.takeScreenshotSimple(9, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get("#BT_CHANGE_OK").click();
        cy.contains("Confirm Add Payment Service?").should("be.visible");
        cy.takeScreenshotSimple(10, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get("#BT_RIGHT").click();
        cy.contains("Add Payment Service").should("be.visible");
        cy.takeScreenshotSimple(11, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get(
          ".css-etdwts > .css-4kya3o > :nth-child(2) > .MuiButtonBase-root",
        ).click();
        cy.takeScreenshotSimple(12, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.genZipCode().then((zip) => {
          cy.get("#TF_TAX_ID").type(zip).should("be.visible");
        });
        cy.getRandomNickname().then((nickname) => {
          cy.get("#TF_TAX_BRANCH_NAME").type(nickname);
        });
        cy.genZipCode().then((zip) => {
          cy.get("#TF_TAX_BRANCH_NO").type(zip).should("be.visible");
        });
        cy.takeScreenshotSimple(13, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get("#BT_CHANGE_OK").click();
        cy.contains("Confirm Add Payment Service?").should("be.visible");
        cy.takeScreenshotSimple(14, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get("#BT_LEFT").click();
        cy.contains("Success").should("be.visible");
        cy.takeScreenshotSimple(15, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get("#BT_CENTER").click();
        cy.contains("QR Credit Card").should("be.visible");
        cy.takeScreenshotSimple(16, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get(":nth-child(5) > #BT_UPDATE_REPORT").click();
        cy.takeScreenshotSimple(17, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get("#TF_TAX_BRANCH_NAME").clear();
        cy.get("#TF_TAX_BRANCH_NO").clear();
        cy.get("#TF_TAX_ID").clear();
        cy.takeScreenshotSimple(18, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.wait(2000);
        cy.genZipCode().then((zip) => {
          cy.get("#TF_TAX_ID").type(zip).should("be.visible");
        });
        cy.getRandomNickname().then((nickname) => {
          cy.get("#TF_TAX_BRANCH_NAME").type(nickname);
        });
        cy.genZipCode().then((zip) => {
          cy.get("#TF_TAX_BRANCH_NO").type(zip).should("be.visible");
        });
        cy.takeScreenshotSimple(19, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get("#BT_CHANGE_OK").click();
        cy.contains("Confirm Edit Payment Service?").should("be.visible");
        cy.takeScreenshotSimple(20, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get("#BT_LEFT").click();
        cy.contains("Edit payment successfully.").should("be.visible");
        cy.takeScreenshotSimple(21, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get("#BT_CENTER").click();
        cy.takeScreenshotSimple(22, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get(":nth-child(6) > #BT_UPDATE_REPORT").click();
        cy.contains("Confirm remove your payment ?").should("be.visible");
        cy.takeScreenshotSimple(23, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get("#BT_LEFT").click();
        cy.contains("Add Payment Service").should("be.visible");
        cy.takeScreenshotSimple(24, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get(
          ".css-etdwts > .css-4kya3o > :nth-child(2) > .MuiButtonBase-root",
        ).click();
        cy.takeScreenshotSimple(25, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.genZipCode().then((zip) => {
          cy.get("#TF_TAX_ID").type(zip).should("be.visible");
        });
        cy.getRandomNickname().then((nickname) => {
          cy.get("#TF_TAX_BRANCH_NAME").type(nickname);
        });
        cy.genZipCode().then((zip) => {
          cy.get("#TF_TAX_BRANCH_NO").type(zip).should("be.visible");
        });
        cy.takeScreenshotSimple(26, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get("#BT_CHANGE_OK").click();
        cy.contains("Confirm Add Payment Service?").should("be.visible");
        cy.takeScreenshotSimple(27, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get("#BT_LEFT").click();
        cy.contains("Success").should("be.visible");
        cy.takeScreenshotSimple(28, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get("#BT_CENTER").click();
        cy.contains("QR Credit Card").should("be.visible");
        cy.takeScreenshotSimple(29, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get("#BT_NEXT").click();
        cy.contains("Invite Owner").should("be.visible");
        cy.takeScreenshotSimple(30, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.generateRandomEmail().then((email) => {
          cy.get("#TF_EMAIL").type(email);
        });
        cy.genThaiPhoneNumber().then((phone) => {
          cy.get("#TF_PHONE_NUMBER_INVITE_OWNER")
            .type(phone)
            .should("be.visible");
        });
        cy.takeScreenshotSimple(31, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get("#BT_NEXT").click();
        cy.takeScreenshotSimple(32, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get("#BT_SUBMIT").click();
        cy.contains("Confirm Create New Company?").should("be.visible");
        cy.takeScreenshotSimple(33, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get("#BT_RIGHT").click();
        cy.takeScreenshotSimple(34, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get("#BT_SUBMIT").click();
        cy.contains("Confirm Create New Company?").should("be.visible");
        cy.takeScreenshotSimple(35, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.intercept("POST", "company-user/api/companyUser/invite/owner").as(
          "inviteOwnerSuccess",
        );
        cy.get("#BT_LEFT").click();
        cy.wait("@inviteOwnerSuccess");
        cy.contains("Success").should("be.visible");
        cy.takeScreenshotSimple(36, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get("#BT_CENTER").click();
        cy.contains("Company").should("be.visible");
        cy.takeScreenshotSimple(37, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get(
          ":nth-child(1) > :nth-child(7) > #IB_TABLE_MENU_undefined",
        ).click();
        cy.takeScreenshotSimple(38, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.contains("View Details").should("be.visible");
        cy.contains("View Details").click();
        cy.contains(activeBy).should("be.visible");
        cy.takeScreenshotSimple(39, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get(".css-fb8w0w > #IB_MENU_GENERNAL_undefined").click();
        cy.takeScreenshotSimple(40, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.contains("View Detail Merchant").should("be.visible");
        cy.contains("View Detail Merchant").click();
        cy.contains("Real time").should("be.visible");
        cy.takeScreenshotSimple(41, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      });
    },
  );

  context("33_Upload File Terminate Company", () => {
    it("TS02_TC234-TC246_Upload File Terminate Company Status Terminate", () => {
      goToSubMenuAllCompany();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(
        ".css-15j76c0 > .MuiGrid-grid-xs-12 > .MuiGrid-spacing-xs-2 > :nth-child(3)",
      ).click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("Upload File Terminate Company").should("be.visible");
      cy.get(
        '.MuiGrid-direction-xs-column > [style="margin-bottom: 5px;"] > .MuiTypography-noWrap',
      ).click();
      cy.renameNewfile("xlsx"); // ไม่ต้องระบุชื่อไฟล์, มันจะหาตัวล่าสุดให้เอง
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.RUNNER);
      cy.get("@filename").then((newFileName) => {
        cy.log("ชื่อไฟล์ใหม่ล่าสุด:", newFileName);
        cy.validateFile(newFileName, 1);
      });
      cy.wait(3000);

      const filePath1 =
        "../fixtures/terminate-company/Template_Terminate_Company_Invalid.xlsx";
      cy.fixture(filePath1).then((fileContent) => {
        cy.get(".css-1ls4h0d > #file-upload").attachFile({
          fileContent,
          fileName: "Template_Terminate_Company_Invalid.xlsx",
          mimeType: "text/xlsx",
        });
        cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get("#BT_CONFIRM_CHANGE_STATUS").click();
        cy.contains("Invalid file data");
        cy.takeScreenshotSimple(5, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get("#BT_CENTER").click();
        cy.get(".css-w9lh5x > .MuiButtonBase-root").click();
        cy.wait(3000);

        const filePath2 =
          "../fixtures/terminate-company/Template_Terminate_Company_Dup.xlsx";
        cy.fixture(filePath2, "binary").then((fileContent) => {
          cy.get(".css-1ls4h0d > #file-upload").attachFile({
            fileContent,
            fileName: "Template_Terminate_Company_Dup.xlsx",
            mimeType:
              "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            encoding: "binary",
          });
          cy.takeScreenshotSimple(6, Cypress.ScreenshotCaptureEnum.VIEWPORT);
          cy.get("#BT_CONFIRM_CHANGE_STATUS").click();
          cy.contains("จากข้อมูลที่ Upload ทั้งหมด 1 ร้านค้า").should(
            "be.visible",
          );
          cy.contains("พบ 0 ร้านค้า ข้อมูลถูกต้อง").should("be.visible");
          cy.contains("พบ 1 ร้านค้า ข้อมูลไม่ถูกต้อง").should("be.visible");
          cy.takeScreenshotSimple(7, Cypress.ScreenshotCaptureEnum.VIEWPORT);
          cy.get("#BT_RIGHT").click();
          cy.get(".css-w9lh5x > .MuiButtonBase-root").click();
          cy.takeScreenshotSimple(8, Cypress.ScreenshotCaptureEnum.VIEWPORT);

          const filePath3 =
            "../fixtures/terminate-company/Template_Terminate_Company.xlsx";
          cy.fixture(filePath3, "binary").then((fileContent) => {
            cy.log();
            cy.get(".css-1ls4h0d > #file-upload").attachFile({
              fileContent,
              fileName: "Template_Terminate_Company.xlsx",
              mimeType:
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
              encoding: "binary",
            });
            cy.get("#BT_CONFIRM_CHANGE_STATUS").click();
            let popupUploadFileTerminateCompanyAllMerchant = cy.get(
              ".MuiPaper-elevation24 > .MuiPaper-root",
              { timeout: 20000 },
            );
            popupUploadFileTerminateCompanyAllMerchant.should("be.visible");
            popupUploadFileTerminateCompanyAllMerchant.click();
            cy.intercept(
              "POST",
              "/company/api/company/uploadFileTerminateCompany",
            ).as("uploadFileTerminateCompanySuccess");
            cy.takeScreenshotSimple(8, Cypress.ScreenshotCaptureEnum.VIEWPORT);
            cy.get("#BT_LEFT").click();
            cy.contains("Success").should("be.visible");
            cy.wait("@uploadFileTerminateCompanySuccess");
            cy.takeScreenshotSimple(9, Cypress.ScreenshotCaptureEnum.VIEWPORT);
            cy.get("#BT_CENTER").click();

            cy.get("#TF_COMPANY_NAME")
              .type(searchByCompanyNameUploadFileTerminateCompany)
              .should("be.visible");
            cy.get("#BT_SEARCH").click();
            cy.contains(searchByCompanyNameUploadFileTerminateCompany);
            cy.get("#IB_TABLE_MENU_undefined").click();
            cy.takeScreenshotSimple(10, Cypress.ScreenshotCaptureEnum.VIEWPORT);
            let openKababViewDetailCompany = cy.get(
              ".MuiPaper-root > .MuiList-root",
              { timeout: 20000 },
            );
            openKababViewDetailCompany.should("be.visible");
            openKababViewDetailCompany.click();
            cy.intercept("POST", "/company/api/company/ttb/detail").as(
              "companyDetail",
            );
            cy.contains("View Details").should("be.visible");
            cy.contains("View Details").click();
            cy.contains(searchByCompanyNameUploadFileTerminateCompany).should(
              "be.visible",
            );
            cy.contains(actionTerminateBy).should("be.visible");
            cy.wait("@companyDetail");
            cy.takeScreenshotSimple(11, Cypress.ScreenshotCaptureEnum.VIEWPORT);
          });
        });
      });
    });
  });

  context("34 Export Excel in Company  page", () => {
    it("TS02_TC247_All Company", () => {
      goToSubMenuAllCompany();
      cy.get("#BT_EXPORT_EXCEL").click();
      cy.wait(3000);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.renameNewfile("xlsx"); // ไม่ต้องระบุชื่อไฟล์, มันจะหาตัวล่าสุดให้เอง
      cy.get("@filename").then((newFileName) => {
        cy.log("ชื่อไฟล์ใหม่ล่าสุด:", newFileName);
        cy.validateFile(newFileName, 1);
      });
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.RUNNER);
    });
    it("TS02_TC248_Search by Company Name then Export of Company Report", () => {
      goToSubMenuAllCompany();
      cy.get("#TF_COMPANY_NAME").type(companyName);
      cy.get("#BT_SEARCH").click();
      cy.contains(companyName);
      cy.wait(1000);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_EXPORT_EXCEL").click();
      cy.wait(3000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.renameNewfile("xlsx"); // ไม่ต้องระบุชื่อไฟล์, มันจะหาตัวล่าสุดให้เอง
      cy.get("@filename").then((newFileName) => {
        cy.log("ชื่อไฟล์ใหม่ล่าสุด:", newFileName);
        cy.validateFile(newFileName, 1);
      });
      cy.wait(3000);
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.RUNNER);
    });
    it("TS02_TC249_Search by Tax ID then Export of Company Report", () => {
      goToSubMenuAllCompany();
      cy.get("#TF_TAX_ID").type(taxID);
      cy.get("#BT_SEARCH").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_EXPORT_EXCEL").click();
      cy.wait(3000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.renameNewfile("xlsx"); // ไม่ต้องระบุชื่อไฟล์, มันจะหาตัวล่าสุดให้เอง
      cy.get("@filename").then((newFileName) => {
        cy.log("ชื่อไฟล์ใหม่ล่าสุด:", newFileName);
        cy.validateFile(newFileName, 1);
      });
      cy.wait(3000);
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.RUNNER);
    });
    it("TS02_TC250_Search by MID then Export of Company Report", () => {
      goToSubMenuAllCompany();
      cy.get("#TF_MID").type(midCompany);
      cy.get("#BT_SEARCH").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_EXPORT_EXCEL").click();
      cy.wait(3000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.renameNewfile("xlsx"); // ไม่ต้องระบุชื่อไฟล์, มันจะหาตัวล่าสุดให้เอง
      cy.get("@filename").then((newFileName) => {
        cy.log("ชื่อไฟล์ใหม่ล่าสุด:", newFileName);
        cy.validateFile(newFileName, 1);
      });
      cy.wait(3000);
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.RUNNER);
    });
    it("TS02_TC251_Search by Ac No then Export of Company Report", () => {
      goToSubMenuAllCompany();
      cy.get("#TF_ACCOUNT_NUMBER").type(accountNo);
      cy.get("#BT_SEARCH").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_EXPORT_EXCEL").click();
      cy.wait(3000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.renameNewfile("xlsx"); // ไม่ต้องระบุชื่อไฟล์, มันจะหาตัวล่าสุดให้เอง
      cy.get("@filename").then((newFileName) => {
        cy.log("ชื่อไฟล์ใหม่ล่าสุด:", newFileName);
        cy.validateFile(newFileName, 1);
      });
      cy.wait(3000);
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.RUNNER);
    });
    it("TS02_TC252_Search by Start Date and End Date then Export of Company Report", () => {
      goToSubMenuAllCompany();
      cy.get("#TF_DATERANGEPICKER_START").type(startHaveData);
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData);
      cy.get("#BT_SEARCH").click();
      cy.contains("Active");
      cy.wait(1000);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_EXPORT_EXCEL").click();
      cy.wait(3000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.renameNewfile("xlsx"); // ไม่ต้องระบุชื่อไฟล์, มันจะหาตัวล่าสุดให้เอง
      cy.get("@filename").then((newFileName) => {
        cy.log("ชื่อไฟล์ใหม่ล่าสุด:", newFileName);
        cy.validateFile(newFileName, 1);
      });
      cy.wait(3000);
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.RUNNER);
    });
    it("TS02_TC253_Search by Status and Date then Export of Company Report", () => {
      goToSubMenuAllCompany();
      cy.get("#TF_DATERANGEPICKER_START").type(startHaveData);
      cy.get("#TF_DATERANGEPICKER_END").type(endHaveData);
      cy.wait(1000);
      cy.get("#DD_STATUS").click();
      cy.wait(1000);
      cy.get('[data-value="ACTIVE"]').click();
      cy.get("#BT_SEARCH").click();
      cy.contains("Active");
      cy.wait(1000);
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_EXPORT_EXCEL").click();
      cy.wait(3000);
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.renameNewfile("xlsx"); // ไม่ต้องระบุชื่อไฟล์, มันจะหาตัวล่าสุดให้เอง
      cy.get("@filename").then((newFileName) => {
        cy.log("ชื่อไฟล์ใหม่ล่าสุด:", newFileName);
        cy.validateFile(newFileName, 1);
      });
      cy.wait(3000);
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.RUNNER);
    });
  });

  context("35 Edit Tax invoice in merchant details", () => {
    it("TS02_TC254-TC266_Edit Tax invoice in merchant details", () => {
      goToSubMenuAllCompany();
      cy.get("#TF_MID").type(midCompany).should("be.visible");
      cy.get("#BT_SEARCH").click();
      cy.takeScreenshotSimple(1, Cypress.ScreenshotCaptureEnum.VIEWPORT);

      cy.get(
        ":nth-child(1) > :nth-child(7) > #IB_TABLE_MENU_undefined",
      ).click();
      cy.takeScreenshotSimple(2, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("View Details").should("be.visible");
      cy.contains("View Details").click();
      cy.takeScreenshotSimple(3, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(".css-fb8w0w > #IB_MENU_GENERNAL_undefined").click();
      cy.takeScreenshotSimple(4, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("View Detail Merchant").should("be.visible");
      cy.intercept("POST", "/company/api/company/province").as(
        "goToMerchantPage",
      );
      cy.get("#MENU_BUTTON_MERCHANT_LIST").click();
      cy.takeScreenshotSimple(5, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.wait("@goToMerchantPage");
      cy.contains(midCompany).should("be.visible");
      cy.get(
        ".css-11h9ze7 > .MuiGrid-grid-xs-1 > #IB_MENU_GENERNAL_undefined",
      ).click();
      cy.takeScreenshotSimple(6, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.intercept("POST", "/company/api/company/city").as(
        "goToEditMerchantPage",
      );
      cy.contains("Edit Merchant").should("be.visible");
      cy.contains("Edit Merchant").click();
      cy.wait("@goToEditMerchantPage");
      cy.contains("Edit Merchant").should("be.visible");
      cy.takeScreenshotSimple(7, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.intercept(
        "POST",
        "/company/api/company/ttb/inquiry/accountNameAndNumber",
      ).as("updateAccountNumber");
      cy.get(".MuiGrid-grid-xs-2 > #BT_CONFIRM_EDIT_COMPANY").click();
      cy.wait("@updateAccountNumber");
      cy.takeScreenshotSimple(8, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.contains("อัพเดท Account name และ Account number เรียบร้อย").should(
        "be.visible",
      );
      cy.takeScreenshotSimple(9, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get("#BT_CENTER").click();
      cy.takeScreenshotSimple(10, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(
        ":nth-child(4) > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #DD_PROVINCE",
      ).click();
      cy.contains("CHAIYAPUM").should("be.visible");
      cy.contains("CHAIYAPUM").click();
      cy.get(".css-1vj6niw > .MuiGrid-root > #BT_CONFIRM_EDIT_COMPANY").click();
      cy.takeScreenshotSimple(11, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      cy.get(
        ":nth-child(4) > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #DD_PROVINCE",
      ).click();
      cy.get("#DD_PROVINCE_127").click();
      cy.get(
        ":nth-child(4) > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > #DD_CITY",
      ).click();
      cy.get("#DD_CITY_1").click();

      //Start check radio button
      cy.get('input[type="radio"]:not([disabled]):not(:checked)')
        .first()
        .check();
      //End check radio button

      cy.get(
        ":nth-child(5) > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #TF_ZIP",
      ).clear();
      cy.genZipCode().then((zip) => {
        cy.get(
          ":nth-child(5) > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #TF_ZIP",
        )
          .type(zip)
          .should("be.visible");
        cy.takeScreenshotSimple(12, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get(
          ".css-1vj6niw > .MuiGrid-root > #BT_CONFIRM_EDIT_COMPANY",
        ).click();
        cy.contains("Confirm Edit Merchant?").should("be.visible");
        cy.takeScreenshotSimple(13, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get("#BT_RIGHT").click();
        cy.takeScreenshotSimple(14, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get(
          ".css-1vj6niw > .MuiGrid-root > #BT_CONFIRM_EDIT_COMPANY",
        ).click();
        cy.contains("Confirm Edit Merchant?").should("be.visible");
        cy.takeScreenshotSimple(15, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.get("#BT_LEFT").click();
        cy.contains("Success").should("be.visible");
        cy.takeScreenshotSimple(16, Cypress.ScreenshotCaptureEnum.VIEWPORT);
        cy.intercept("POST", "/company/api/company/province").as(
          "goToMerchantPage",
        );
        cy.get("#BT_CENTER").click();
        cy.wait("@goToMerchantPage");
        cy.takeScreenshotSimple(17, Cypress.ScreenshotCaptureEnum.VIEWPORT);
      });
    });
  });
});
