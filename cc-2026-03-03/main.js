function divisibleByThree(str){
  let sum = 0;
  for(const char of str){sum += Number(char)}
  return Number.isInteger(sum / 3);
}