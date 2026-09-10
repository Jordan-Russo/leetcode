function solve(arr){
  arr = [...new Set(arr)];
  const cache = {};
  for(const num of arr){
    const abs = Math.abs(num);
    cache[abs] ??= 0;
    cache[abs] += Math.sign(num); 
  }
  for(const key in cache){
    if(cache[key] !== 0){return Math.sign(cache[key]) * Number(key)}
  }
};