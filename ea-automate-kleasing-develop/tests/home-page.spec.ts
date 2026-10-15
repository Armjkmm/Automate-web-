import { test } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { SigninPage } from '../pages/sigin.page';
import { takeScreenshot } from '../utils/screenshot-helper';
import { KokHomePage } from '../pages/kok-home.page';

//NOTED: TC01 - TC05
test.describe('1_Home_Page', () => {
  tag: ['@regression', '@home-page'];
  let signinPage: SigninPage;

  test.describe('1.1_Selfapply', () => {
    tag: '@kl-selfapply';
    let homePage: HomePage;

    test.beforeEach(async ({ page, baseURL }) => {
      homePage = new HomePage(page);
      signinPage = new SigninPage(page);

      await page.goto(`${baseURL}`, { waitUntil: 'domcontentloaded' });
      await homePage.enterWebsiteIfPresent();
    });

    test('Home_TC01', async ({ page }, testInfo) => {
      await test.step('go to home page', async () => {
        await takeScreenshot(page, testInfo, '1_step-home-page');
      });
    });

    test('Home_TC02', async ({ page }, testInfo) => {
      await test.step('download product description file', async () => {
        await homePage.downloadProductDescFile(testInfo);
        await takeScreenshot(
          page,
          testInfo,
          '1_after-download-product-description-file',
        );
      });
    });

    test('Home_TC03', async ({ page }, testInfo) => {
      await test.step('open popup', async () => {
        await homePage.openPopup();
        await takeScreenshot(page, testInfo, '1_step-home-popup');
      });

      await test.step('press > in popup', async () => {
        await homePage.goToNextPopupSlide();
        await takeScreenshot(page, testInfo, '2_step-popup-arrow-right');
      });

      await test.step('press < in popup', async () => {
        await homePage.goToPreviousPopupSlide();
        await takeScreenshot(page, testInfo, '3_step-popup-arrow-left');
      });

      await test.step('close popup', async () => {
        await homePage.closePopup();
        await takeScreenshot(page, testInfo, '4_step-popup-close');
      });
    });

    test('Home_TC04', async ({ page }, testInfo) => {
      await test.step('go to juristic signin page', async () => {
        await homePage.goToJuristicSigninPage();
        await signinPage.verifyJuristicPageLoaded();
        await takeScreenshot(page, testInfo, '1_step-juristic-signin-page');
      });
    });

    test('Home_TC05', async ({ page }, testInfo) => {
      await test.step('go to personal signin page', async () => {
        await homePage.goToPersonalSigninPage();
        await signinPage.verifyPageLoaded();
        await takeScreenshot(page, testInfo, '1_step-personal-signin-page');
      });
    });
  });

  test.describe('1.2_KOKNewcar', () => {
    tag: '@kl-koknewcar';
    let kokHomePage: KokHomePage;

    test.beforeEach(async ({ page, baseURL }) => {
      const kokURL = `${baseURL}${process.env.KOK_EXT_URL}`;
      kokHomePage = new KokHomePage(page);
      signinPage = new SigninPage(page);

      await page.goto(kokURL, { waitUntil: 'domcontentloaded' });
      await kokHomePage.enterWebsiteIfPresent();
    });

    test('Home_TC01', async ({ page }, testInfo) => {
      await test.step('go to home page', async () => {
        await takeScreenshot(page, testInfo, '1_home-page');
      });
    });

    test('Home_TC02', async ({ page }, testInfo) => {
      await test.step('download product description file', async () => {
        await kokHomePage.downloadProductDescFile(testInfo);
        await takeScreenshot(
          page,
          testInfo,
          '1_after-download-product-description-file',
        );
      });
    });

    test('Home_TC03', async ({ page }, testInfo) => {
      await test.step('select loan type = new car & vehicle type = car', async () => {
        await kokHomePage.setProduct({
          offeringType: 'NEW',
          vehicleType: 'CAR',
        });
        await takeScreenshot(page, testInfo, '1_set_product');
      });
      await test.step('confirm the loan to proceed to signin page', async () => {
        await kokHomePage.confirmLoan();

        await signinPage.verifyKokPageLoaded({
          offeringType: 'NEW',
          vehicleType: 'CAR',
        });
        await takeScreenshot(page, testInfo, '2_go-to-signin-page');
      });
    });
  });

  test.describe('1.3_KOKUsedcar', () => {
    tag: '@kl-kokusedcar';
    let kokHomePage: KokHomePage;

    test.beforeEach(async ({ page, baseURL }) => {
      let kokURL = `${baseURL}${process.env.KOK_EXT_URL}`;
      kokHomePage = new KokHomePage(page);
      signinPage = new SigninPage(page);

      await page.goto(kokURL, { waitUntil: 'domcontentloaded' });
      await kokHomePage.enterWebsiteIfPresent();
    });

    test('Home_TC01', async ({ page }, testInfo) => {
      await test.step('go to home page', async () => {
        await takeScreenshot(page, testInfo, '1_home-page');
      });
    });

    test('Home_TC02', async ({ page }, testInfo) => {
      await test.step('download product description file', async () => {
        await kokHomePage.downloadProductDescFile(testInfo);
        await takeScreenshot(
          page,
          testInfo,
          '1_after-download-product-description-file',
        );
      });
    });

    test('Home_TC03', async ({ page }, testInfo) => {
      await test.step('select loan type = used car & vehicle type = car', async () => {
        await kokHomePage.setProduct({
          offeringType: 'USED',
          vehicleType: 'CAR',
        });
        await takeScreenshot(page, testInfo, '1_set_product');
      });
      await test.step('confirm the loan to proceed to signin page', async () => {
        await kokHomePage.confirmLoan();
        await signinPage.verifyKokPageLoaded({
          offeringType: 'USED',
          vehicleType: 'CAR',
        });
        await takeScreenshot(page, testInfo, '2_go-to-signin-page');
      });
    });
  });
});
