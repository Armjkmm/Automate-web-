export function generateCID(): string {
  let cid = '';
  let sum = 0;
  let digitWeight = 13;

  for (let i = 0; i < 12; i++) {
    let randomNum = Math.floor(Math.random() * 10);
    let weight = digitWeight - i;

    cid += randomNum.toString();
    sum += randomNum * weight;
  }

  let checkDigit = (11 - (sum % 11)) % 10;
  cid += checkDigit.toString();

  return cid;
}

export function generatePhoneNumber(): string {
  let phoneNumber = '0';
  let mobilePrefix = ['6', '8', '9'];
  let randomIndex = Math.floor(Math.random() * mobilePrefix.length);

  phoneNumber += mobilePrefix[randomIndex];

  for (let i = 0; i < 8; i++) {
    phoneNumber += Math.floor(Math.random() * 10).toString();
  }

  return phoneNumber;
}
