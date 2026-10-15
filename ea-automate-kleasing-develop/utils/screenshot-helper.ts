import { Page, TestInfo } from '@playwright/test';

type ScreenshotOptions = {
  fullPage?: boolean;
};

export async function takeScreenshot(
  page: Page,
  testInfo: TestInfo,
  name: string,
  options?: ScreenshotOptions,
) {
  let screenshotPath = testInfo.outputPath(`${name}.png`);

  await page.waitForTimeout(2000);
  await page.screenshot({
    path: screenshotPath,
    fullPage: options?.fullPage ?? false,
  });

  await testInfo.attach(name, {
    path: screenshotPath,
    contentType: 'image/png',
  });
}
