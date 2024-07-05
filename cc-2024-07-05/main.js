// url: https://leetcode.com/problems/word-pattern/
// Given a pattern and a string s, find if s follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

// Example 1:

// Input: pattern = "abba", s = "dog cat cat dog"
// Output: true

// Example 2:

// Input: pattern = "abba", s = "dog cat cat fish"
// Output: false

// Example 3:

// Input: pattern = "aaaa", s = "dog cat cat dog"
// Output: false

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const seen = s.split(' ')
    // if it has spaces make it an array like that
    // otherwise make it an array with a single word
    let seenCache = new Map()
    for(let i = 0; i < seen.length; i++){
        if(!seenCache.has(seen[i])){seenCache.set(seen[i], pattern[i])}
        if(seenCache.get(seen[i]) !== pattern[i]){return false}
    }
    if(new Set(pattern).size !== new Set(seen).size){return false}
    return seen.length === pattern.length
};