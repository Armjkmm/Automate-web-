import { webkit, firefox, chromium, FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {
  const browsers = [chromium, firefox, webkit];

  for (const browserType of browsers) {
    const browser = await browserType.launch();
    const context = await browser.newContext();

    // Block tracking scripts globally
    await context.route('**/gtm.js*', (route) =>
      route.fulfill({
        status: 204,
        body: '',
      }),
    );

    await context.route('**/gtag/**', (route) =>
      route.fulfill({
        status: 204,
        body: '',
      }),
    );

    await context.route('**/googletagmanager.com/**', (route) =>
      route.fulfill({
        status: 204,
        body: '',
      }),
    );

    await context.route('**/google-analytics.com/**', (route) =>
      route.fulfill({
        status: 204,
        body: '',
      }),
    );

    await browser.close();
  }
}

export default globalSetup;
