// url: https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/description/
// Given two strings of equal length
// Return whether or not its possible to make both strings equal with at most one switch of two characteres.
// Example 1:

// Input: s1 = "bank", s2 = "kanb"
// Output: true
// Explanation: For example, swap the first character with the last character of s2 to make "bank".
// Example 2:

// Input: s1 = "attack", s2 = "defend"
// Output: false
// Explanation: It is impossible to make them equal with one string swap.
// Example 3:

// Input: s1 = "kelb", s2 = "kelb"
// Output: true
// Explanation: The two strings are already equal, so no string swap operation is required.
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
// they need to have the same characters (type, freq)
// at most two characters can be mismatched
var areAlmostEqual = function(s1, s2) {
    const charCache = {}
    for(const char of s1){
        charCache[char] ??= 0
        charCache[char]++
    }
    for(const char of s2){
        if(!charCache[char]){
            return false
        }
        charCache[char]--
    }
    let mismatchCount = 0
    for(let i = 0; i < s1.length; i++){
        if(s1[i] !== s2[i]){
            mismatchCount++
        }
        if(mismatchCount > 2){
            return false
        }
    }
    return true
};