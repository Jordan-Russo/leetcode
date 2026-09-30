function countLettersAndDigits(input) {
  let count = 0;
  for(const letter of input){
    const isLetter = letter <= 'Z' && letter >= 'A' || letter <= 'z' && letter >= 'a';
    const isNumber = letter >= '0' && letter <= '9';
    if(isLetter || isNumber){count++}
  }
  return count;
}