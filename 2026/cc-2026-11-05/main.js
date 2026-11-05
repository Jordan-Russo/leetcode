function absentVowel(x){
  const vowels = {
    a: false,
    e: false,
    i: false,
    o: false,
    u: false
  }
  for(const char of x){
    if(char in vowels){
      vowels[char] = true;
    }
  }
  let index = 0;
  for(const key in vowels){
    if(vowels[key] === false){return index}
    index++;
  }
}