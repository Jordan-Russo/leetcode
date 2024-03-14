// url: https://leetcode.com/problems/counting-words-with-a-given-prefix/description/
// Given an array of words
// Return the number of words that contain the given prefix
/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */

// Example 1:

// Input: words = ["pay","attention","practice","attend"], pref = "at"
// Output: 2
// Explanation: The 2 strings that contain "at" as a prefix are: "attention" and "attend".
// Example 2:

// Input: words = ["leetcode","win","loops","success"], pref = "code"
// Output: 0
// Explanation: There are no strings that contain "code" as a prefix.

// loop through the words and count which ones have the prefix
var prefixCount = function(words, pref) {
    return words.filter(word => word.startsWith(pref)).length
};