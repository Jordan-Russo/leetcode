function getDecimal(n){
  const wholeNumber = Math.trunc(n);
  return Math.abs(n - wholeNumber);
}