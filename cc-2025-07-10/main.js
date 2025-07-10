// Given an array of string words, return all strings in words that are a of another word. You can return the answer in any order.
/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
    const result = [];
    // loop through words
    for(const word of words){
        // push word into result if there is a different word that contains the word
        if(words.some(string => string.includes(word) && string !== word)){
            result.push(word);
        }
    }
    return result;
};
// Example 1:

// Input: words = ["mass","as","hero","superhero"]
// Output: ["as","hero"]
// Explanation: "as" is substring of "mass" and "hero" is substring of "superhero".
// ["hero","as"] is also a valid answer.

// Example 2:

// Input: words = ["leetcode","et","code"]
// Output: ["et","code"]
// Explanation: "et", "code" are substring of "leetcode".

// Example 3:

// Input: words = ["blue","green","bu"]
// Output: []
// Explanation: No string of words is substring of another string.