import { KokTypeParams } from './../types/kok-signin.types';
import { downloadFile } from '../utils/downloadHelper';
import { Locator, Page, TestInfo, expect } from '@playwright/test';
import { url } from 'inspector';

export class KokHomePage {
  private readonly page: Page;

  private readonly RESPONSE_TIMEOUT: number = 20000;

  private readonly newCarLoanTypeSelector: Locator;
  private readonly usedCarLoanTypeSelector: Locator;
  private readonly newCarVehicleTypeSelector: Locator;
  private readonly newCarBigbikeVehicleTypeSelector: Locator;
  private readonly usedCarVehicleTypeSelector: Locator;
  private readonly downloadProductDescLink: Locator;
  private readonly enterWebsiteBtn: Locator;
  private readonly confirmLoanButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.newCarLoanTypeSelector = this.page.getByRole('img', {
      name: 'Newcar',
    });
    this.usedCarLoanTypeSelector = this.page.getByRole('img', {
      name: 'UsedCar',
    });
    this.newCarVehicleTypeSelector = this.page.getByRole('img', {
      name: 'เลือกประเภทรถยนต์',
    });
    this.newCarBigbikeVehicleTypeSelector = this.page.getByRole('img', {
      name: 'เลือกบิ๊กไบค์',
    });
    this.usedCarVehicleTypeSelector = this.page.getByRole('img', {
      name: 'เลือกประเภทรถยนต์',
    });
    this.downloadProductDescLink = this.page.getByRole('link', {
      name: 'ดาวน์โหลดคำอธิบายผลิตภัณฑ์ ได้ที่นี่',
    });
    this.enterWebsiteBtn = this.page.getByRole('button', {
      name: 'เข้าสู่เว็บไซต์',
    });
    this.confirmLoanButton = this.page.getByRole('button', {
      name: 'ยืนยันประเมินวงเงิน',
    });
  }

  //#region setter getter
  async setProduct({
    offeringType,
    vehicleType,
  }: KokTypeParams): Promise<void> {
    if (offeringType == 'USED' && vehicleType == 'BIGBIKE') {
      throw new Error(
        `[${__filename}] Unsupported product: used car dont have a bigbike product`,
      );
    }

    let targetLoanSelector: Locator =
      offeringType == 'NEW'
        ? this.newCarLoanTypeSelector
        : this.usedCarLoanTypeSelector;

    let targetCarSelector: Locator =
      offeringType == 'NEW'
        ? this.newCarVehicleTypeSelector
        : this.usedCarVehicleTypeSelector;

    let targetVehicleSelector: Locator =
      vehicleType == 'CAR'
        ? targetCarSelector
        : this.newCarBigbikeVehicleTypeSelector;

    await expect(targetLoanSelector).toBeVisible({
      timeout: this.RESPONSE_TIMEOUT,
    });

    await targetLoanSelector.click();

    await expect(targetVehicleSelector).toBeVisible({
      timeout: this.RESPONSE_TIMEOUT,
    });

    await targetVehicleSelector.click();
  }
  //#endregion

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

  async downloadProductDescFile(testInfo: TestInfo): Promise<void> {
    await downloadFile(this.page, testInfo, this.downloadProductDescLink);
  }

  async confirmLoan() {
    await expect(this.confirmLoanButton).toBeEnabled({
      timeout: this.RESPONSE_TIMEOUT,
    });

    await this.confirmLoanButton.click();
  }
}
