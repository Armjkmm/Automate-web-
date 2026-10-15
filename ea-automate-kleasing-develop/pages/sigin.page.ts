import { Locator, Page, expect } from '@playwright/test';
import { KokTypeParams } from '../types/kok-signin.type';
import { SmsFlowResponse } from '../types/sms.type';
import { waitForApiResponse } from '../utils/api-response-helper';
import { formatCID, formatPhoneNumber } from '../utils/test-data-helper';
import { ModalDialog } from '../components/modal-dialog.components';
import { OtpDialog } from '../components/otp-dialog.component';

export class SigninPage {
  private readonly MAX_RETRIES: number = 3;
  private readonly TYPING_SPEED: number = 50;
  private readonly RESPONSE_TIMEOUT: number = 10000;
  private readonly ENROLL_JURISTIC_URL: string = 'https://www.kasikornbank.com/th/personal/autoloan/pages/new-car.aspx';
  private readonly CLOSE_DIALOG_BUTTON_TEXT: string = 'ปิดหน้าต่าง';
  private readonly STUTTER_STATUS_CODE: number = 504;

  readonly cid: Locator;
  readonly phoneNumber: Locator;
  readonly email: Locator;
  readonly submitButton: Locator;
  readonly otpDialog: OtpDialog;

  private readonly page: Page;
  private readonly warningModalDialog: ModalDialog;

  constructor(page: Page) {
    this.page = page;

    this.cid = this.page.locator('#icCard');
    this.phoneNumber = this.page.locator('#phone');
    this.email = this.page.locator('input[type="email"]');
    this.submitButton = this.page.locator('button#submitWebEntry');

    this.warningModalDialog = new ModalDialog(this.page, 'ขออภัย เกิดเหตุขัดข้อง');
    this.otpDialog = new OtpDialog(page);
  }

  //#region verify parts
  async verifyKokPageLoaded({ offeringType, vehicleType }: KokTypeParams): Promise<void> {
    await expect(this.page).toHaveURL(this.getOfferingUrl({ offeringType, vehicleType }), {
      timeout: this.RESPONSE_TIMEOUT,
    });
  }

  async verifyPageLoaded(): Promise<void> {
    await expect(this.page).toHaveURL('/signin', {
      timeout: this.RESPONSE_TIMEOUT,
    });
  }

  async verifyJuristicPageLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(this.ENROLL_JURISTIC_URL, {
      timeout: this.RESPONSE_TIMEOUT,
    });
  }
  //#endregion

  async setCid(cid: string, expectedError?: string): Promise<void> {
    await this.fillField(this.cid, cid, formatCID, expectedError);
  }

  async setPhoneNumber(phoneNumber: string, expectedError?: string): Promise<void> {
    await this.fillField(this.phoneNumber, phoneNumber, formatPhoneNumber, expectedError);
  }

  async setEmail(email: string, expectedError?: string): Promise<void> {
    await this.fillField(this.email, email, (v) => v, expectedError);
  }

  async submitForm(): Promise<SmsFlowResponse> {
    await expect(this.submitButton).toBeEnabled();

    const smsOtpPromise = waitForApiResponse(this.page, '/api/smsOtp', 200);
    const smsPromise = waitForApiResponse(this.page, '/api/sms', 200);
    const smsCheckPromise = waitForApiResponse(this.page, '/api/kl/sms_check_status', 200);

    await this.submitButton.click();

    const [smsOtpRes, smsRes, smsCheckRes] = await Promise.all([smsOtpPromise, smsPromise, smsCheckPromise]);

    return {
      smsOtpRes,
      smsRes,
      smsCheckRes,
    };
  }

  async login(cid: string, phoneNumber: string, email: string): Promise<SmsFlowResponse> {
    await this.setCid(cid);
    await this.setPhoneNumber(phoneNumber);
    await this.setEmail(email);

    return this.submitForm();
  }

  async loginWithServerStutterRetry(cid: string, phoneNumber: string, email: string): Promise<SmsFlowResponse> {
    let result = await this.login(cid, phoneNumber, email);
    let retries = 0;

    while (result.smsRes.status() === this.STUTTER_STATUS_CODE && retries < this.MAX_RETRIES) {
      console.log(`>> SMS API returned 504 (known server stutter). Retrying (${retries + 1}/${this.MAX_RETRIES})...`);
      await this.dismissServerErrorDialog();
      result = await this.login(cid, phoneNumber, email);
      retries++;
    }

    if (result.smsRes.status() === this.STUTTER_STATUS_CODE) {
      throw new Error(`>> SMS API response 504 after ${this.MAX_RETRIES} retries`);
    }

    return result;
  }

  private async fillField(
    locator: Locator,
    value: string,
    formatter: (v: string) => string,
    expectedError?: string,
  ): Promise<void> {
    await expect(locator).toBeVisible();

    await locator.clear();
    await expect(locator).toBeEmpty();

    await locator.click();
    await locator.pressSequentially(value, {
      delay: this.TYPING_SPEED,
    });

    if (expectedError) {
      await expect(this.page.getByText(expectedError)).toBeVisible();
    }

    await expect(locator).toHaveValue(formatter(value));
  }

  private async dismissServerErrorDialog(): Promise<void> {
    await this.warningModalDialog.verifyDialogLoaded();
    await this.warningModalDialog.clickButton(this.CLOSE_DIALOG_BUTTON_TEXT);
  }

  private getOfferingUrl({ offeringType, vehicleType }: KokTypeParams): string {
    return `/signin?offering=true&offeringType=${offeringType}%20CAR&vehicle_type=${vehicleType}`;
  }
}
