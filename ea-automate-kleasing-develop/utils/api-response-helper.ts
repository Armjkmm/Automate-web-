import { Page, Response } from '@playwright/test';

export async function waitForApiResponse(
  page: Page,
  pathFragment: string,
  expectedStatus: number = 200,
  timeout: number = 20000,
): Promise<Response> {
  return page.waitForResponse(
    (res) =>
      res.url().includes(pathFragment) && res.status() === expectedStatus,
    { timeout: timeout },
  );
}
