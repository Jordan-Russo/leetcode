// url: https://leetcode.com/problems/generate-a-string-with-characters-that-have-odd-counts/
// Given an integer n, return a string with n characters such that each character in such string occurs an odd number of times.

// The returned string must contain only lowercase English letters. If there are multiples valid strings, return any of them.  
/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function(n) {
    const hasOddLength = n & 1;
    // if the number is odd return 'a' repeated for the length
    if(hasOddLength){
        return 'a'.repeat(n);
    }
    // if the number is even return 'b' concated with 'a' repeated for the length - 1
    else{
        return 'b' + 'a'.repeat(n - 1);
    }
};
// Example 1:

// Input: n = 4
// Output: "pppz"
// Explanation: "pppz" is a valid string since the character 'p' occurs three times and the character 'z' occurs once. Note that there are many other valid strings such as "ohhh" and "love".

// Example 2:

// Input: n = 2
// Output: "xy"
// Explanation: "xy" is a valid string since the characters 'x' and 'y' occur once. Note that there are many other valid strings such as "ag" and "ur".

// Example 3:

// Input: n = 7
// Output: "holasss"
