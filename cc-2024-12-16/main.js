// url: https://leetcode.com/problems/count-common-words-with-one-occurrence/
/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
// given two string arrays
// always passing in array
// elements will always be a string, at least one string
// each string will have one character at minimum
  
// return the number of words that are found in both string arrays exactly once

function countWords(words1, words2){
  // create a frequency cache for each word in each words array
  const frequency1 = {}
  for(const word of words1){
    frequency1[word] = frequency1[word] + 1 || 1
  }
  const frequency2 = {}
  for(const word of words2){
    frequency2[word] = frequency2[word] + 1 || 1
  }
  // initialize count at 0
  let count = 0
  // loop through one of the frequency caches
  for(const word in frequency1){
    if(frequency1[word] === 1 && frequency2[word] === 1){
      count++
    }
  }
    // if a key is found with a frequency of one, and the frequency of the key in the other cache is also one
      // increment count
  return count
  // return count
}

// console.log(countWords(["leetcode","is","amazing","as","is"], ["amazing","leetcode","is"]), 2)
// console.log(countWords(["b","bb","bbb"], ["a","aa","aaa"]), 0)
// console.log(countWords(["a","ab"], ["a","a","a","ab"]), 1)