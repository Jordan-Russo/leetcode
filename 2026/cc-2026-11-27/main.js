function fusc(n) {
  if(n === 0){return 0}
  if(n === 1){return 1}
  const half = Math.trunc(n / 2);
  if(n & 1){return fusc(half) + fusc(half + 1)}
  else{return fusc(half)}
}