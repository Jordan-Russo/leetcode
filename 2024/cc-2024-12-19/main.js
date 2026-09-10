// url: https://leetcode.com/problems/number-of-strings-that-appear-as-substrings-in-word/description/
/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
// given an array of strings and a string word
// return the number of strings in the array that can be found within as a substring of the word

function numOfStrings(patterns, word){
  // initialize a count
  let count = 0
  // loop through each pattern
  for(const pattern of patterns){
    if(word.includes(pattern)){count++}
    // check if word includes pattern, if so increment count
  }
  return count
  // return count
}

// console.log(numOfStrings(["a","abc","bc","d"], "abc"), 3)
// console.log(numOfStrings(["a","b","c"], "aaaaabbbbb"), 2)
// console.log(numOfStrings(["a","a","a"], "ab"), 3)