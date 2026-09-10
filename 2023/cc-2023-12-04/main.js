// url: https://leetcode.com/problems/find-the-difference/

// Given two strings, s
    // and t, which is string s but shuffled and has an additional character

// Return the additional character that was added in t.

// Example 1:

// Input: s = "abcd", t = "abcde"
// Output: "e"
// Explanation: 'e' is the letter that was added.
// Example 2:

// Input: s = "", t = "y"
// Output: "y"

// build a cache that uses string s
// loop through the characters in string t, return the first character that isn't in the cache
// make the cache hold both char type and frequency
// decrement as you loop through string t.

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    const cache = {}
    for(const char of s){
        cache[char] ??= 0
        cache[char]++
    }
    for(const char of t){
        if(cache[char]){
            cache[char]--
        }else{
            return char
        }
    }
};