const prevMultOfThree = n => {
  const isDivisibleBy3 = x => x % 3 === 0 && x > 0;
  while(n > 0 && !isDivisibleBy3(n)){
    n = Math.trunc(n / 10);
  }
  return isDivisibleBy3(n) ? n : null;
}