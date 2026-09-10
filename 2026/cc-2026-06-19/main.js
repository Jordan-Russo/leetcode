function sumTriangularNumbers(n) {
  if(n <= 0){return 0}
  let sum = 0;
  let prev = 0;
  let value = 1;
  for(let i = 1; i <= n; i++){
    prev = prev + value;
    sum += prev;
    value++;
  }
  return sum;
}

// 1, 3, 6, 10, 15, 21

// 1, 4, 10, 20, 35, 56