function modifiedSum(a, n) {
  const sum = a.reduce((acc, c) => acc + c, 0);
  const powerSum = a.reduce((acc, c) => acc + c ** n, 0);
  return powerSum - sum;
}