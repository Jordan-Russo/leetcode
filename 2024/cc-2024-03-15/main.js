// url: https://leetcode.com/problems/count-prefixes-of-a-given-string/description/
// Given string array of prefixes
// Given a string
// Return the number of strings in the array that are a prefix match to the other given string

// Example 1:

// Input: words = ["a","b","c","ab","bc","abc"], s = "abc"
// Output: 3
// Explanation:
// The strings in words which are a prefix of s = "abc" are:
// "a", "ab", and "abc".
// Thus the number of strings in words which are a prefix of s is 3.
// Example 2:

// Input: words = ["a","a"], s = "aa"
// Output: 2
// Explanation:
// Both of the strings are a prefix of s. 
// Note that the same string can occur multiple times in words, and it should be counted each time.

/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var countPrefixes = function(words, s) {
    return words.filter(word => s.startsWith(word)).length
};