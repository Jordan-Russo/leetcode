function sumOfIntegersInString(s) {
  let sum = 0;
  let stringNum = '';
  for(const char of s){
    if(char >= '0' && char <= '9'){
      stringNum += char;
    }else{
      sum += Number(stringNum);
      stringNum = '';
    }
  }
  sum += Number(stringNum);
  return sum;
}