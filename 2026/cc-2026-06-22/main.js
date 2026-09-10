function digitize(n){
  if(n === 0){return [0]}
  const digits = [];
  while(n > 0){
    const digit = n % 10;
    n -= digit;
    n /= 10;
    digits.push(digit);
  }
  return digits.reverse();
}