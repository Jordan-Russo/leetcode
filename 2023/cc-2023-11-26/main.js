// url: https://leetcode.com/problems/longest-repeating-character-replacement/

// given a string, s, and an integer, k

// k represents the amount of allowed characters that can not be the same in a string

// return the length of the longest substring you can make (using k)

// Example 1:
// Input: s = "ABAB", k = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.

// Example 2:
// Input: s = "AABABBA", k = 1
// Output: 4
// Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
// The substring "BBBB" has the longest repeating letters, which is 4.
// There may exists other ways to achieve this answer too.

// have a pointer to the start
// use a map to hold characters and their frequency
// initialize maxLength = 0

// loop through all characters
// calculate characters that are not the characters at start
// if length of that is > k
// loop and move the start until it isn't

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let startPos = 0
    let maxLength = 0
    let maxFreq = 0
    const chars = new Map()

    for(let i = 0; i < s.length; i++){
        // if character isn't in count
        if(!chars.has(s[i])){
            chars.set(s[i], 0)
        }
        chars.set(s[i], chars.get(s[i]) + 1)
        maxFreq = Math.max(maxFreq, chars.get(s[i]))
        while(i - startPos + 1 - maxFreq > k){
            chars.set(s[startPos], chars.get(s[startPos]) - 1)
            startPos++
        }
        maxLength = Math.max(maxLength, i - startPos + 1)
    }
    return maxLength
};