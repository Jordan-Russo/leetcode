function getSumOfDigits(integer) {
  let sum = 0;
  const digits =  String(integer).split('').map(Number);
  for(var ix = 0; ix < digits.length; ix++) {
    sum += digits[ix];
  }
  return sum;
}