function formatDigitsGroupBySize(value: string, groupSizes: number[]): string {
  const digits = value.replace(/\D/g, '');

  if (!digits) return '';

  const boundaries: number[] = [];

  groupSizes.reduce((sum, size) => {
    const next = sum + size;
    boundaries.push(next);
    return next;
  }, 0);

  const groups: string[] = [];
  let start = 0;

  for (const boundary of boundaries) {
    if (start >= digits.length) break;
    groups.push(digits.slice(start, boundary));
    start = boundary;
  }

  if (start < digits.length) {
    groups[groups.length - 1] += digits.slice(start);
  }

  let result = groups.join('-');

  const lastBoundary = boundaries[boundaries.length - 1];
  const isExactMidBoundary =
    digits.length !== lastBoundary && boundaries.includes(digits.length);

  return isExactMidBoundary ? `${result}-` : result;
}

export function formatCID(cid: string): string {
  const groupSizes: number[] = [1, 4, 5, 2, 1];

  return formatDigitsGroupBySize(cid, groupSizes);
}

export function formatPhoneNumber(phoneNumber: string): string {
  const groupSizes: number[] = [3, 3, 4];

  return formatDigitsGroupBySize(phoneNumber, groupSizes);
}
