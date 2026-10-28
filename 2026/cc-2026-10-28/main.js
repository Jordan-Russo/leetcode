function solve(str){
  const letters = [];
  for(const char of str){
    if(char !== ' '){letters.push(char)}
  }
  let result = '';
  let pos = letters.length - 1;
  for(const char of str){
    if(char === ' '){result += ' '}
    else{
      result += letters.pop();
      pos--;
    }
  }
  return result;
}