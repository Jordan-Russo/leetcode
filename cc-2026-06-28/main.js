function mygcd(x,y){
  let gcd = 1;
  let min = Math.min(x,y);
  for(let i = 2; i <= min; i++){
    while(x % i === 0 && y % i === 0){
      gcd *= i;
      x /= i;
      y /= i;
      min = Math.min(x, y);
    }
  }
  return gcd;
}