import { Response } from '@playwright/test';

export type SmsFlowResponse = {
  smsOtpRes: Response;
  smsRes: Response;
  smsCheckRes: Response;
};
