function findMissing(arr1, arr2) {
  const expected = arr1.reduce((acc, c) => acc + c, 0);
  const actual = arr2.reduce((acc, c) => acc + c, 0);
  return expected - actual;
}