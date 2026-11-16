function unusedDigits(...nums) {
  const digits = new Array(10).fill(false);
  for(let num of nums){
    while(num !== 0){
      const digit = num % 10;
      digits[digit] = true;
      num = Math.trunc(num / 10);
    }
  }
  let result = '';
  for(let i = 0; i < digits.length; i++){
    if(!digits[i]){result += i}
  }
  return result;
}