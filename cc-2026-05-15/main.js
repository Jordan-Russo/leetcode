function getMissingElement(nums){
  let sum = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9;
  for(const num of nums){
    sum -= num;
  }
  return sum;
}