// url: https://leetcode.com/problems/check-if-all-as-appears-before-all-bs/description/
// Given a string composed of only 'a' and 'b' characters
// Return a boolean on whether or not every a appears before every b
/**
 * @param {string} s
 * @return {boolean}
 */
// Example 1:

// Input: s = "aaabbb"
// Output: true
// Explanation:
// The 'a's are at indices 0, 1, and 2, while the 'b's are at indices 3, 4, and 5.
// Hence, every 'a' appears before every 'b' and we return true.
// Example 2:

// Input: s = "abab"
// Output: false
// Explanation:
// There is an 'a' at index 2 and a 'b' at index 1.
// Hence, not every 'a' appears before every 'b' and we return false.
// Example 3:

// Input: s = "bbb"
// Output: true
// Explanation:
// There are no 'a's, hence, every 'a' appears before every 'b' and we return true.


// Find last position of 'a'
// find first position of 'b'
// Return whether the last 'a' comes before the last 'b'

var checkString = function(s) {
    const aLastPosition = s.lastIndexOf('a')
    let bFirstPosition = s.indexOf('b')
    if(bFirstPosition === -1){
        bFirstPosition = s.length
    }
    return aLastPosition < bFirstPosition
};