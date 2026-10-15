import { Locator, Page, Response, expect } from '@playwright/test';

export class ModalDialog {
  private readonly page: Page;

  private readonly RESPONSE_TIMEOUT: number = 10000;

  readonly container: Locator;
  readonly title: Locator;
  readonly body: Locator;

  constructor(page: Page, titleText: string, bodyText?: string) {
    this.page = page;
    this.container = this.page.getByRole('dialog');
    this.title = this.page.getByText(`${titleText}`);
    this.body = this.page.getByText(`${bodyText}`);
  }

  //#region verify parts
  async verifyDialogLoaded(): Promise<void> {
    await this.expectToBeVisible();
    await expect(this.title).toBeInViewport();
  }
  //#endregion

  async clickButton(name: string): Promise<void> {
    const targetBtn: Locator = this.getButton(name);

    await expect(targetBtn).toBeEnabled({ timeout: this.RESPONSE_TIMEOUT });
    await targetBtn.click();
    await this.expectToBeHidden();
  }

  async expectTitleToContain(text: string): Promise<void> {
    await expect(this.title).toContainText(text);
  }

  async expectToBeVisible(): Promise<void> {
    await expect(this.container).toBeVisible({
      timeout: this.RESPONSE_TIMEOUT,
    });
  }

  async expectToBeHidden(): Promise<void> {
    await expect(this.container).toBeHidden({ timeout: this.RESPONSE_TIMEOUT });
  }

  private getButton(name: string | RegExp): Locator {
    return this.page.getByRole('button', { name: name });
  }
}
