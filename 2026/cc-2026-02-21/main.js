function isLucky(num){
  while(num !== 0){
    const digit = Math.abs(num % 10);
    if(digit === 7){return true}
    num = Math.trunc(num / 10);
  }
  return  false;
}
function filterLucky(nums){
  return nums.filter(num => isLucky(num));
}