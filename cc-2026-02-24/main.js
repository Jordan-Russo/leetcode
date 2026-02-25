function solve(a,b){
  const aCharacters = new Set(a);
  const bCharacters = new Set(b);
  // initialize a result string as empty
  let result = '';
  // loop through a
  for(const char of a){ 
    // see if each value is in b, if not concatenate it to the end of result string
    if(!bCharacters.has(char)){
      result += char;
    }
  }
  // loop through b
  for(const char of b){
    // see if each value is in a, if not concatenate it to the end of result string
    if(!aCharacters.has(char)){
      result += char;
    } 
  }
  // return result string
  return result;
};