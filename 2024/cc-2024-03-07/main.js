// url: https://leetcode.com/problems/valid-palindrome-ii/submissions/
/**
 * @param {string} s
 * @return {boolean}
 */

// Given a string s, return true if the s can be palindrome after deleting at most one character from it.

// Input: s = "aba"
// Output: true
// Example 2:

// Input: s = "abca"
// Output: true
// Explanation: You could delete the character 'c'.
// Example 3:

// Input: s = "abc"
// Output: false

var validPalindrome = function(s) {
    return isPalidrome(s)
    function isPalidrome(s, deleteCount = 0){
        for(let i = 0; i < s.length; i++){
            let j = s.length - 1 - i
            if(s[i] !== s[j]){
                if(deleteCount > 0){
                    return false
                }
                // remove the left
                const a = s.slice(i + 1, j + 1)
                // remove the right
                const b = s.slice(i, j)
                return isPalidrome(a, 1) || isPalidrome(b, 1)
            }
        }
        return true
    }
};