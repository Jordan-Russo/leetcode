function calculate(str) {
  const nums = str.split('plus').map(x => x.split('minus')).flat().map(Number);
  let result = nums[0];
  let pos = 1;
  for(const char of str){
    if(char === 'm'){
      result -= nums[pos++];
    }
    if(char === 'p'){
      result += nums[pos++];
    }
  }
  return String(result);
};