function tidyNumber(n){
  let currentDigit;
  while(n > 0){
    const digit = n % 10;
    if(!digit){return false}
    if(currentDigit){
      if(digit > currentDigit){
        return false;
      }
    }
    currentDigit = digit;
    n = Math.trunc(n / 10);
  }
  return true;
}