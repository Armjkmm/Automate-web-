import { Locator, Page, Response, expect } from '@playwright/test';
import { formatPhoneNumber } from '../utils/test-data-helper';

export class OtpDialog {
  readonly requestOtpBtn: Locator;
  readonly cancelBtn: Locator;

  private readonly OTP_LENGTH: number = 6;
  private readonly RESPONSE_TIMEOUT: number = 10000;

  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;

    this.requestOtpBtn = this.page.locator('button#requestOTPBTN');
    this.cancelBtn = this.page.getByRole('button', { name: 'ยกเลิก' });
  }

  //#region verify parts
  async verifyDialogLoaded(
    phoneNumber: number,
    optRes: {
      smsOtpRes: Response;
      smsRes: Response;
      smsCheckRes: Response;
    },
  ): Promise<void> {
    expect(optRes.smsOtpRes.status()).toBe(200);
    expect(optRes.smsCheckRes.status()).toBe(200);
    expect(optRes.smsRes.status()).toBe(200);

    await expect(
      this.page.getByText(this.getCensorPhoneNumber(phoneNumber)),
    ).toBeVisible({
      timeout: this.RESPONSE_TIMEOUT,
    });

    await expect(this.getOtpDigitInput(1)).toBeEditable({
      timeout: this.RESPONSE_TIMEOUT,
    });
  }
  //#endregion

  async fillOtp(otp: string): Promise<void> {
    const digits = otp.split('');

    if (digits.length != this.OTP_LENGTH) {
      throw new Error('OTP must be 6 digits');
    }

    for (let i = 0; i < digits.length; i++) {
      const input = this.getOtpDigitInput(i + 1);

      await input.click();
      await input.pressSequentially(digits[i]);
      await expect(input).toHaveValue(digits[i]);
    }
  }

  async requestNewOtp(): Promise<void> {
    await expect(this.requestOtpBtn).toBeEnabled();

    await this.requestOtpBtn.click();
  }

  async cancel(): Promise<void> {
    await expect(this.cancelBtn).toBeEnabled();

    await this.cancelBtn.click();
  }

  private getOtpDigitInput(digit: number): Locator {
    return this.page.getByRole('textbox', {
      name: `รหัส OTP หลักที่ ${digit}`,
    });
  }

  private getCensorPhoneNumber(phoneNumber: number) {
    const replacementSymbol = 'X';
    const phoneNumCharArray = [...phoneNumber.toString()];

    let mappedCensorPhoneNumber = phoneNumCharArray.map((char, index) => {
      index >= 3 && index <= 7 ? replacementSymbol : char;
    });

    const result = formatPhoneNumber(mappedCensorPhoneNumber.join(''));

    return result;
  }
}
