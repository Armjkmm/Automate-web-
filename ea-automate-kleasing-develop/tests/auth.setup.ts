import { test as setup } from '@playwright/test';
import { generateCID, generatePhoneNumber } from '../utils/test-data-factory';
import { SigninPage } from '../pages/sigin.page';
import path from 'path';

const authSelfapplyFile = path.join(
  __dirname,
  '../playwright/.auth/selfapply.json',
);

const authKokNewcarFile = path.join(
  __dirname,
  '../playwright/.auth/kok_newcar.json',
);

const authKokUsedcarFile = path.join(
  __dirname,
  '../playwright/.auth/kok_usedcar.json',
);

setup('authenticate selfapply', async ({ page }) => {
  await page.goto(`${process.env.BASE_URL}/signin`);

  let signinPage = new SigninPage(page);

  await signinPage.login(
    generateCID(),
    generatePhoneNumber(),
    process.env.TEST_EMAIL!,
  );
  await signinPage.submitForm();

  await page.context().storageState({ path: authSelfapplyFile });
});

setup('authenticate kok_newcar', async ({ page }) => {
  await page.goto(
    `${process.env.BASE_URL}/signin?offering=true&offeringType=NEW%20CAR&vehicle_type=CAR`,
  );
  await page.context().storageState({ path: authKokNewcarFile });
});

setup('authenticate kok_usedcar', async ({ page }) => {
  await page.goto(
    `${process.env.BASE_URL}/signin?offering=true&off  eringType=USED%20CAR&vehicle_type=CAR`,
  );

  await page.context().storageState({ path: authKokUsedcarFile });
});
