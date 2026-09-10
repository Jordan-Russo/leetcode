function findDeletedNumber(arr, mixArr) {
  // find sum
  const actualSum = mixArr.reduce((acc, c) => acc + c, 0);
  // compare it to expected sum
  const expectedSum = arr.reduce((acc, c) => acc + c, 0);
  // return expected sum - actual sum
  return expectedSum - actualSum;
}