const vowels = new Set('aeiou');
function vowelOne(s){
  let binaryString = '';
  for(const char of s){
    binaryString += vowels.has(char.toLowerCase()) ? '1' : '0';
  }
  return binaryString;
}