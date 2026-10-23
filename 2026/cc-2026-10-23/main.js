const absSignificantDigit = n => Math.abs(n % 10);
function vampireTest(a, b) {
  // edge case return false for both factors being negative
  if(a < 0 && b < 0){return false}
  const digits = new Array(10).fill(0);
  let product = a * b;
  do{
    const digit = absSignificantDigit(a);
    digits[digit]++;
    a = Math.trunc(a / 10);
  }
  while(a !== 0);
  do{
    const digit = absSignificantDigit(b);
    digits[digit]++;
    b = Math.trunc(b / 10);
  }
  while(b !== 0);
  do{
    const digit = absSignificantDigit(product);
    digits[digit]--;
    if(digits[digit] < 0){return false}
    product = Math.trunc(product / 10);
  }
  while(product !== 0);
  return digits.every(digit => digit === 0);  
}