// url: https://leetcode.com/problems/keyboard-row/
/**
 * @param {string[]} words
 * @return {string[]}
 */
// Given an array of words

// return an array that contains all the words that can be typed with only one american keyboard row of letters

function findWords(words){
  const firstRow = new Set('qwertyuiop')
  const secondRow = new Set('asdfghjkl')
  const thirdRow = new Set('zxcvbnm')
  const foundWords = []
  for(const word of words){
    str = word.toLowerCase();
    // create a function that returns whether every character in a word can be found in a set
      // pass in our set and the word
      // returns a boolean
    const isValid = containsWord(str, firstRow) || containsWord(str, secondRow) || containsWord(str, thirdRow)
    if(isValid){
      foundWords.push(word)
    }
  }
  return foundWords
}

function containsWord(word, set){
  for(const char of word){
    if(!set.has(char)){return false}
  }
  return true
}

console.log(findWords(['Hello', 'Alaska', 'Dad', 'Peace']), ['Alaska', 'Dad'])
console.log(findWords(['omk']), [])
console.log(findWords(['adsdf', 'sfd']), ['adsdf', 'sfd'])