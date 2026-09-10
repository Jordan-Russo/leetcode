function longestWord(stringOfWords) {
  // initialize longest word length at 0
  let maxLength = 0;
  // initialize longest word as an empty string
  let longestWord = '';
  // split the string into individual words, and loop through them
  for(const word of stringOfWords.split(' ')){ 
    // reassign longest word length to be the maximum between the current and maximum
    maxLength = Math.max(maxLength, word.length);
    // if current word length >= longest word length
    if(word.length >= maxLength){ 
      // reassign longest word string as current word
      longestWord = word;
    }
  }
  // return the longest word string
  return longestWord;
}