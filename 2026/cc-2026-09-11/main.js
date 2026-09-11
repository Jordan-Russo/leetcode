function differenceOfSquares(n) {
  const sum = n * (n + 1) / 2;
  let sumSquared = sum * sum;
  for(let i = n; i > 0; i--){
    sumSquared -= i * i;
  }
  return sumSquared;
}