function change(string){
  const letters = new Set();
  for(const char of string){
    letters.add(char.toLowerCase());
  }
  let result = '';
  for(let i = 0; i < 26; i++){
    const char = String.fromCharCode(97 + i);
    result += letters.has(char) ? '1' : '0';
  }
  return result;
}