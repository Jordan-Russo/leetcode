function newAvg(arr, newavg) {
  const sum = arr.reduce((acc, c) => acc + c, 0);
  const expected = newavg * (arr.length + 1);
  const calculated = expected - sum;
  if(calculated <= 0){
    throw new Error('Expected New Average is too low');
  }
  return Math.ceil(calculated);
}