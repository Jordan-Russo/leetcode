// url: https://leetcode.com/problems/longest-palindrome/

// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.
// Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

// Example 1:

// Input: s = "abccccdd"
// Output: 7
// Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
// Example 2:

// Input: s = "a"
// Output: 1
// Explanation: The longest palindrome that can be built is "a", whose length is 1.

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    // cache frequency of every character
    const chars = {}
    for(const char of s){
        chars[char] ??= 0
        chars[char]++
    }
    let charPairs = 0
    let hasOdd = 0
    // loop through each character
    for(let char in chars){
        if(chars[char] & 1){
            hasOdd = 1
        }
        charPairs += Math.floor(chars[char] / 2)
        // remove pairs until pairs can't be removed for each counting the number of pairs
        // for each pair add 2 to the length of palidrome
    // also make sure if possible to grab an additional character
        // so I guess whenever the first odd number comes grab that then don't grab anymore
    }
    return hasOdd + charPairs * 2
    // then return the longest palidrome length without making it.
};