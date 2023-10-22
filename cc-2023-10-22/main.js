// url: https://leetcode.com/problems/valid-anagram/

// Given two strings

// Return whether or not they're anagrams of each other

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// check that both strings have the same length
// if false, return false
// then build cache that stores the characters of the string using first string, along with their quantity
// then go through the second string, decrementing as you find the string
    // if the second string contains more of a character, or a unique character
        // return false
// return true, assuming no flags (same quantity of each character, same length)
var isAnagram = function(s, t) {
    if(s.length !== t.length){return false}
    const cache = {}
    for(let i = 0; i < s.length; ++i){
        cache[s[i]] ??= 0;
        cache[s[i]]++;
    }
    for(let j = 0; j < t.length; ++j){
        if(cache[t[j]]){
            cache[t[j]]--;
        }else{
            return false
        }
    }
    return true;
};