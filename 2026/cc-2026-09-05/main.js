function missingNo(nums) {
  let result = 5050;
  for(const num of nums){result -= num}
  return result;
  // space complexity of O(1) additional memory used
  // time complexity of O(n), n being the length of the nums array.
}