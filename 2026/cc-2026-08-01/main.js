const vowels = new Set('aeiou');
function solve(s){
  let maxLength = 0;
  let length = 0;
  for(const letter of s){
    if(vowels.has(letter)){
      length++;
    }else{
      maxLength = Math.max(maxLength, length);
      length = 0;
    }
  }
  maxLength = Math.max(maxLength, length);
  return maxLength;
}