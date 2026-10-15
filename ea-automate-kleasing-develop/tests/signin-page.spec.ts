import axios from 'axios';
import { test, expect } from '@playwright/test';
import { SigninPage } from '../pages/sigin.page';
import { generateCID, generatePhoneNumber } from '../utils/test-data-factory';
import { takeScreenshot } from '../utils/screenshot-helper';

test.describe('2_Signin_Page', () => {
  tag: ['@regression', '@signin-page'];
  let signinPage: SigninPage;
  const RESPONSE_TIMEOUT: number = 10000;

  test.describe('2.1_Selfapply', () => {
    tag: '@kl-selfapply';

    test.beforeEach(async ({ page, baseURL }) => {
      signinPage = new SigninPage(page);

      await page.goto(`${baseURL}/signin`, { waitUntil: 'domcontentloaded' });
    });

    test('Signin_TC01', async ({ page }, testInfo) => {
      //TODO: relogic of submit button to handle retry logic inside page object
      const cid = generateCID();
      const phoneNum = generatePhoneNumber();

      console.log(`cid: ${cid}\nphoneNum: ${phoneNum}`);

      const { smsOtpRes, smsRes, smsCheckRes } = await signinPage.loginWithServerStutterRetry(
        cid,
        phoneNum,
        process.env.TEST_EMAIL!,
      );

      expect(smsOtpRes.status()).toBe(200);
      expect(smsCheckRes.status()).toBe(200);
      expect(smsRes.status()).toBe(200);

      console.log('> pass login');

      // Use any HTTP client
      const res = await axios.get('https://api.testmail.app/api/json', {
        params: {
          apikey: process.env.TESTMAIL_API_KEY!,
          namespace: process.env.TESTMAIL_NAMESPACES!,
          livequery: 'true',
        },
      });
      console.log('response of testmail:' + res.data);

      //TODO: called handle OTP logic
    });

    test('Signin_TC02', async ({ page, context, browser }, testInfo) => {
      await test.step('set cid with invalid cid', async () => {
        const targetCid: string = '6291';
        const cidErrorText: string = 'กรุณากรอกเลขบัตรประจำตัวประชาชนให้ครบ 13 หลัก';

        await signinPage.setCid(targetCid, cidErrorText);
      });

      await test.step('set phone number with invalid number', async () => {
        const targetPhoneNum: string = '08022';
        const phoneErrorText: string = 'กรุณากรอกหมายเลขโทรศัพท์มือถือให้ครบ 10 หลัก';

        await signinPage.setPhoneNumber(targetPhoneNum, phoneErrorText);
      });

      await test.step('verify submit button is disabled', async () => {
        await expect(signinPage.submitButton).toBeDisabled({
          timeout: RESPONSE_TIMEOUT,
        });

        await takeScreenshot(page, testInfo, '1_step-home-page');
      });

      await context.close();
      await browser.close();
    });

    test('Signin_TC03', async ({ page }, testInfo) => {
      const targetCid: string = generateCID();
      const targetPhoneNum: string = generatePhoneNumber();

      await test.step('signin 1: proceed to dopa', async () => {});
      await test.step('signin 2: proceed to dopa', async () => {});
      await test.step('signin 3: reach max limit signin per day', async () => {
        await signinPage.login(targetCid, targetPhoneNum, process.env.TEST_EMAIL!);

        //expect();
      });
    });
  });

  test.describe('2.2_KOKNewcar', () => {
    tag: '@kl-koknewcar';

    test.beforeEach(async ({ page, baseURL }) => {
      let kokURL = `${baseURL}${process.env.KOK_EXT_URL}`;
      let newCarSigninPath = `${kokURL}/signin?offering=true&offeringType=NEW%20CAR&vehicle_type=CAR`;

      signinPage = new SigninPage(page);
      await page.goto(newCarSigninPath);
    });
  });

  test.describe('2.3_KOKUsedcar', () => {
    tag: '@kl-kokusedcar';

    test.beforeEach(async ({ page, baseURL }) => {
      let kokURL = `${baseURL}${process.env.KOK_EXT_URL}`;
      let usedCarSigninPath = `${kokURL}/signin?offering=true&offeringType=USED%20CAR&vehicle_type=CAR`;

      signinPage = new SigninPage(page);
      await page.goto(usedCarSigninPath);
    });
  });
});
