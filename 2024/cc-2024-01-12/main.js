// url: https://leetcode.com/problems/determine-if-string-halves-are-alike/
// Given a string of even length
// Return whether or not both halves of it have the same number of vowels
/**
 * @param {string} s
 * @return {boolean}
 */
const vowelCount = word => [...word.toLowerCase()].filter(char => 'aeiou'.includes(char)).length
var halvesAreAlike = function(s) {
    const half = s.length / 2
    const left = s.slice(0, half)
    const right = s.slice(half)
    return vowelCount(left) === vowelCount(right)
};