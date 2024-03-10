// url: https://leetcode.com/problems/find-first-palindromic-string-in-the-array/description/
/**
 * @param {string[]} words
 * @return {string}
 */
// Given an array of strings words, return the first palindromic string in the array. If there is no such string, return an empty string "".
// string is a palindrome if the string is read the same way forward and backward

// Example 1:

// Input: words = ["abc","car","ada","racecar","cool"]
// Output: "ada"
// Explanation: The first string that is palindromic is "ada".
// Note that "racecar" is also palindromic, but it is not the first.
// Example 2:

// Input: words = ["notapalindrome","racecar"]
// Output: "racecar"
// Explanation: The first and only string that is palindromic is "racecar".
// Example 3:

// Input: words = ["def","ghi"]
// Output: ""
// Explanation: There are no palindromic strings, so the empty string is returned.

var firstPalindrome = function(words) {
    return words.find(isPalidrome) || ''
    function isPalidrome(s){
        for(let i = 0; i < s.length / 2; i++){
            if(s[i] !== s[s.length - 1 - i]){
                return false
            }
        }
        return true
    }
};