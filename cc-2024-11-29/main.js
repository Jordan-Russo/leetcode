// url: https://leetcode.com/problems/find-the-original-typed-string-i/
/**
 * @param {string} word
 * @return {number}
 */
// given a string
  // lower case english characters

// return the total number of possible situations where alice may or may not have held a single character down for too long
  // return the total number of possible inputs
    // an input may have been pressed 1 or more times (but an error only happens once per string)

function possibleStringCount(word){
  // initialize a count at 1
  let count = 1
  // loop from the second character until the end
  for(let i = 1; i < word.length; i++){
    // if the previous character is equal to the current character, increase count
    if(word[i - 1] === word[i]){count++}
  }
  // return the count
  return count
}

// console.log(possibleStringCount('abbcccc'), 5)
// console.log(possibleStringCount('abcd'), 1)
// console.log(possibleStringCount('aaaa'), 4)