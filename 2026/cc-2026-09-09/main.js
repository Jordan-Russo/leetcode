function squaresNeeded(grains){
  if(grains === 0){return 0}
  return Math.trunc(Math.log2(grains)) + 1;
}