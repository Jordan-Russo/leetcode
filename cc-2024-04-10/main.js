// url: https://leetcode.com/problems/make-number-of-distinct-characters-equal/
// You are given two 0-indexed strings word1 and word2.

// A move consists of choosing two indices i and j such that 0 <= i < word1.length and 0 <= j < word2.length and swapping word1[i] with word2[j].

// Return true if it is possible to get the number of distinct characters in word1 and word2 to be equal with exactly one move. Return false otherwise.

 

// Example 1:

// Input: word1 = "ac", word2 = "b"
// Output: false
// Explanation: Any pair of swaps would yield two distinct characters in the first string, and one in the second string.
// Example 2:

// Input: word1 = "abcc", word2 = "aab"
// Output: true
// Explanation: We swap index 2 of the first string with index 0 of the second string. The resulting strings are word1 = "abac" and word2 = "cab", which both have 3 distinct characters.
// Example 3:

// Input: word1 = "abcde", word2 = "fghij"
// Output: true
// Explanation: Both resulting strings will have 5 distinct characters, regardless of which indices we swap.
/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var isItPossible = function(word1, word2) {
    // make frequency cache and set for word1 and word2
    // keep track of the count of distinct character in both of them
    // try every combination of swap between word1 and word2
    // if any of them result in distinct char count being the same return true
    // if after looping through all possible combinations there are no solutions return false
    const characters1 = makeFrequencyCache(word1)
    const characters2 = makeFrequencyCache(word2)
    // console.log(characters1, characters2)
    const set1 = new Set([...word1])
    const set2 = new Set([...word2])
    const unionSet = new Set([...set1, ...set2])
    if(unionSet.size === set1.size && unionSet.size === set2.size){
        return true
    }
    // console.log(set1, set2)
    const start = 'a'.charCodeAt(0);
    for(let first = start; first < start + 26; first++){
        for(let second = start; second < start + 26; second++){
            const firstChar = String.fromCharCode(first)
            const secondChar = String.fromCharCode(second)
            if(!(characters1[firstChar]) || !(characters2[secondChar])){
                continue;
            }
            if(firstChar === secondChar){
                if(set1.size === set2.size){
                    return true
                }
                continue;
            }
            let uniques1 = set1.size
            let uniques2 = set2.size
            // check the first character
            // if it only exists once in characters1
            // remove from uniques1
            if(characters1[firstChar] === 1){
                uniques1--
            }
            // if it doesn't exist in characters2
            // add to uniques 2
            if(!characters2[firstChar]){
                uniques2++
            }
            // do the opposite for the second character
            if(characters2[secondChar] === 1){
                uniques2--
            }
            if(!characters1[secondChar]){
                uniques1++
            }

            if(uniques1 === uniques2){
                return true
            }
        }
    }
    return false
};
function makeFrequencyCache(str){
    const cache = {}
    for(const char of str){
        cache[char] ??= 0
        cache[char]++
    }
    return cache
}