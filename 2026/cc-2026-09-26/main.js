function seven(m) {
  let stepCounter = 0;
  while(m >= 100){
    const digit = m % 10;
    m = Math.trunc(m / 10);
    m -= digit * 2;
    stepCounter++;
  }
  return [m, stepCounter];
}