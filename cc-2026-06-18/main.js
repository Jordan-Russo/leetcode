function explode(s) {
  let result = '';
  for(const num of s){
    result += num.repeat(num);
  }
  return result;
}