function cake(x, y){
  const evenIndex = char => char.charCodeAt(0);
  const oddIndex = char => char.charCodeAt(0) - 96;
  let knockedCandleCount = 0;
  for(let i = 0; i < y.length; i++){
    knockedCandleCount += (i & 1) ? oddIndex(y[i]) : evenIndex(y[i]);
  }
  return knockedCandleCount / x > 0.7 ? 'Fire!' : 'That was close!';
}