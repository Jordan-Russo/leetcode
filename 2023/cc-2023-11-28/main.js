// url: https://leetcode.com/problems/permutation-in-string/

// Given 2 strings, s1 and s2

// Return a boolean on whether s2 includes any permutation (combination of all characters) of s1.

// Example 1:
// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba").

// Example 2:
// Input: s1 = "ab", s2 = "eidboaoo"
// Output: false

// use s1 to build a datastructure that holds character and count
// initialize 1 pointer, start at 0
// loop through s2.
    // if current charcter isn't in
        // check current length
        // return true if long enough (i - start === s1.length)
        // otherwise move left and right one
// return false
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    const letters = new Map() 
    for(const char of s1){
        if(!letters.has(char)){
            letters.set(char, 0)
        }
        letters.set(char, letters.get(char) + 1)
    }
    let start = 0
    for(let i=0; i <= s2.length; ++i){
        const char = s2[i]
        if(!letters.get(char)){
            if(i - start === s1.length){
                return true
            }
            while(start <= i && !letters.get(char)){
                if(letters.get(char)){
                    letters.set(char, letters.get(char) - 1)
                    // remove character from available letters
                }
                letters.set(s2[start], letters.get(s2[start]) + 1)
                start++
            }
            // handle character not being in
        }
        letters.set(char, letters.get(char) - 1)
        // remove character from available letters

    }
    return false
};