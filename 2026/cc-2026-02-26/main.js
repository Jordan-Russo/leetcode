function isLucky(n){
  // check that the number is zero
  if(n === 0){
    // return true
    return true; 
  }
  // take the sum of the digits
  let sum = 0;
  while(n > 0){
    sum += n % 10;
    n = Math.trunc(n / 10);
  }
  // return whether it's a multiple of 9
  return sum % 9 === 0
}