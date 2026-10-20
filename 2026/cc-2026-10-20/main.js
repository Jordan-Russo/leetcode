function isNice(arr){
  if(arr.length === 0){return false}
  const nums = new Set(arr);
  return arr.every(val => nums.has(val - 1) || nums.has(val + 1));
}