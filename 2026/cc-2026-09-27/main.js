function charPosition(lowerCaseLetter){
  return lowerCaseLetter.charCodeAt(0) - 96;
}
function encode(str,  n){
  const keyString = n.toString();
  let keyPos = 0;
  const result = [];
  for(const char of str){
    const encrypted = charPosition(char) + Number(keyString[keyPos]);
    result.push(encrypted)
    keyPos++;
    keyPos %= keyString.length; 
  }
  return result;
}