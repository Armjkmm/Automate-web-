import { Locator, expect } from '@playwright/test';
import { Page, TestInfo } from '@playwright/test';
import { TEST_RESULT_PATH } from '../playwright.config';
import fs from 'fs';
import path from 'path';

export async function downloadFile(
  page: Page,
  testInfo: TestInfo,
  selector: Locator,
  customName?: string,
) {
  const [download] = await Promise.all([
    page.waitForEvent('download'),
    selector.click(),
  ]);

  const suggestedFileName = download.suggestedFilename();

  const testCaseName = testInfo.title.replace(/\s+/g, '_');
  const downloadDir = path.resolve(
    `${TEST_RESULT_PATH}/downloads`,
    testCaseName,
  );

  if (!fs.existsSync(downloadDir)) {
    fs.mkdirSync(downloadDir, { recursive: true });
  }

  const filePath = path.join(downloadDir, customName || suggestedFileName);

  await download.saveAs(filePath);
  expect(fs.existsSync(filePath)).toBeTruthy();

  await testInfo.attach(customName || suggestedFileName, {
    path: filePath,
    contentType: 'application/octet-stream',
  });
}
