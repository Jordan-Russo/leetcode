// url: https://leetcode.com/problems/reverse-string-ii/

// Given a string, s, and an integer k

// Go through the string, alternate between reversing the first k charcters and not (starting with reversing)
// if k is larger than length reverse all characters

// Example 1:
// Input: s = "abcdefg", k = 2
// Output: "bacdfeg"

// Example 2:
// Input: s = "abcd", k = 2
// Output: "bacd"

// make a new string
// loop while there sre still characters
    // grab the first k characters
    // reverse them and concatenate them to a new string
    // grab the next k characters
    // concate them to a new string
// return the new string

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    const reverse = str => {
        let reversedStr = ''
        for(let j = str.length - 1; j >= 0; --j){
            reversedStr += str[j]
        }
        return reversedStr
    }
    let newString = ''
    for(let i = 0; i < s.length; i += 2 * k){
        newString += reverse(s.slice(i, i + k)) + s.slice(i + k, i + 2 * k)
    }
    // function that takes string, return reverse
    return newString;
};