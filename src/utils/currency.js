export function digitOnly(value) {
  const stringValue = String(value);
  const arrayDigits = stringValue.match(/\d+/g);

  if (arrayDigits === null) return 0;

  return parseFloat(arrayDigits.reduce((a, b) => a + b));
}

export function currency(value = 0) {
  return digitOnly(value).toLocaleString('ID');
}

export function toIdr(value = 0) {
  return `Rp ${currency(value)}`;
}

