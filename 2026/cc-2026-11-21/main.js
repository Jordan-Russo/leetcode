function stantonMeasure(nums){
  // make a frequency cache
  const cache = {};
  for(const num of nums){cache[num] = cache[num] + 1 || 1}
  // check how many times 1 appeared, n
  const n = cache[1] || 0;
  // check how many times n appeared and return it
  return cache[n] || 0;
}