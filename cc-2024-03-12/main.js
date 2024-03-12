// url: https://leetcode.com/problems/length-of-the-longest-alphabetical-continuous-substring/description/
// Given a string of undercase characters
// Return the length of the longest alphabetical substring

// Example 1:

// Input: s = "abacaba"
// Output: 2
// Explanation: There are 4 distinct continuous substrings: "a", "b", "c" and "ab".
// "ab" is the longest continuous substring.
// Example 2:

// Input: s = "abcde"
// Output: 5
// Explanation: "abcde" is the longest continuous substring.

/**
 * @param {string} s
 * @return {number}
 */

var longestContinuousSubstring = function(s) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    let start = 0
    let longest = 0
    for(let i = 0; i < s.length; i++){
        const curr = s.slice(start, i + 1)
        const isAlphabetical = alphabet.includes(curr)
        if(!isAlphabetical){
            longest = Math.max(longest, i - start)
            start = i
        }
    }
    longest = Math.max(longest, s.length - start)
    return longest
};