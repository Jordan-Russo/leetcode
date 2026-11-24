function getLargerNumbers(a, b) {
  const largest = [];
  for(let i = 0; i < a.length; i++){
    largest.push(Math.max(a[i], b[i]));
  }
  return largest;
}