function pattern(n){
  if(n < 1){return ''}
  const nums = [String(n)];
  let count = n - 1;
  while(count > 0){ 
  // loop n times, decrease n each time
    // loop is grabbing the previous string and then adding n, then decrementing
    nums.push(nums[nums.length - 1] + String(count));
    count--;
  }
  return nums.reverse().join('\n');
}