function checkThreeAndTwo(array) {
  if(array.length !== 5){return false}
  const cache = {};
  for(const str of array){
    cache[str] ??= 0;
    cache[str]++;
  }
  for(const key in cache){
    if(cache[key] > 3 || cache[key] < 2){return false}
  }
  return true;
}