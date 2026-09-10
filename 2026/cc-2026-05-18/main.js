function shorterReverseLonger(a,b){
  return b.length > a.length ?  a + [...b].reverse().join('') + a : b + [...a].reverse().join('') + b;
}