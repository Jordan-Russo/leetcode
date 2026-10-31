function evenOrOdd(str) {
  let evenSum = 0;
  let oddSum = 0;
  for(const digit of str){
    const num = Number(digit);
    if(digit & 1){
      oddSum += num;
    }
    else{
      evenSum += num;
    }
  }
  if(evenSum === oddSum){
    return "Even and Odd are the same";
  }
  return evenSum > oddSum ? "Even is greater than Odd" : "Odd is greater than Even";
}