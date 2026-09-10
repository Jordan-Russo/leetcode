// url: https://leetcode.com/problems/ransom-note/
// Given the letters in a magazine and the letters of a ransom note both as strings of characters
// Return whether or not the magazine has the required characters for the ransom note
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true

// build a cache of the characters in the magazine and their frequency
// loop through the ransom note
    // remove used characters from the cache frequency of the character
    // return false if
        // a character that is needed by the note isn't in the cache
// return true

var canConstruct = function(ransomNote, magazine) {
    const cache = {}
    for(const char of magazine){
        cache[char] ??= 0
        cache[char]++
    }
    for(const char of ransomNote){
        if(!cache[char]){
            return false
        }else{
            cache[char]--
        }
    }
    return true
};