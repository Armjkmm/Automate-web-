import { Locator, Page, TestInfo, expect } from '@playwright/test';
import { downloadFile } from '../utils/download-helper';

export class HomePage {
  private readonly page: Page;

  private readonly RESPONSE_TIMEOUT: number = 20000;

  readonly downloadProductDescLink: Locator;
  readonly enterWebsiteBtn: Locator;
  readonly juristicSigninBtn: Locator;
  readonly personalSigninBtn: Locator;

  //#region  popup locators
  readonly popupOpenBtn: Locator;
  readonly popupNextBtn: Locator;
  readonly popupPreviousBtn: Locator;
  readonly popupCloseBtn: Locator;
  //#endregion

  constructor(page: Page) {
    this.page = page;
    this.downloadProductDescLink = this.page.getByRole('link', {
      name: 'ดาวน์โหลดคำอธิบายผลิตภัณฑ์ ได้ที่นี่',
    });
    this.enterWebsiteBtn = this.page.getByRole('button', {
      name: 'เข้าสู่เว็บไซต์',
    });
    this.popupOpenBtn = this.page.locator('.pxtm-click-openPopup > p');
    this.popupNextBtn = this.page.locator('.react-multiple-carousel__arrow--right');
    this.popupPreviousBtn = this.page.locator('.react-multiple-carousel__arrow--left');
    this.popupCloseBtn = this.page.getByRole('button', {
      name: 'X',
      exact: true,
    });
    this.juristicSigninBtn = this.page.getByRole('button', {
      name: 'สมัครในนามนิติบุคคล',
    });
    this.personalSigninBtn = this.page.getByRole('button', {
      name: 'สมัครในนามบุคคลธรรมดา',
    });
  }

  //#region popup actions
  async openPopup(): Promise<void> {
    await expect(this.popupOpenBtn).toBeVisible({
      timeout: this.RESPONSE_TIMEOUT,
    });

    await this.popupOpenBtn.click();
  }

  async goToNextPopupSlide(): Promise<void> {
    await expect(this.popupNextBtn).toBeVisible({
      timeout: this.RESPONSE_TIMEOUT,
    });

    await this.popupNextBtn.click();
  }

  async goToPreviousPopupSlide(): Promise<void> {
    await expect(this.popupPreviousBtn).toBeVisible({
      timeout: this.RESPONSE_TIMEOUT,
    });

    await this.popupPreviousBtn.click();
  }

  async closePopup(): Promise<void> {
    await expect(this.popupCloseBtn).toBeVisible({
      timeout: this.RESPONSE_TIMEOUT,
    });

    await this.popupCloseBtn.click();
  }
  //#endregion

  async downloadProductDescFile(testInfo: TestInfo): Promise<void> {
    await downloadFile(this.page, testInfo, this.downloadProductDescLink);
  }

  async enterWebsiteIfPresent(): Promise<void> {
    const isBtnVisible = await this.enterWebsiteBtn.isVisible({
      timeout: this.RESPONSE_TIMEOUT,
    });

    if (isBtnVisible) {
      await expect(this.enterWebsiteBtn).toBeEnabled({
        timeout: this.RESPONSE_TIMEOUT,
      });

      await this.enterWebsiteBtn.click();
    }
  }

  async goToJuristicSigninPage(): Promise<void> {
    await expect(this.juristicSigninBtn).toBeVisible({
      timeout: this.RESPONSE_TIMEOUT,
    });

    await this.juristicSigninBtn.click();
  }

  async goToPersonalSigninPage(): Promise<void> {
    await expect(this.personalSigninBtn).toBeVisible({
      timeout: this.RESPONSE_TIMEOUT,
    });

    await this.personalSigninBtn.click();
  }
}
