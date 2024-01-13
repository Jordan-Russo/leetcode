// url: https://leetcode.com/problems/to-lower-case/
// Given a string
// Return the string, with every uppercase character replace with a lowercased one.
// Example 1:

// Input: s = "Hello"
// Output: "hello"
// Example 2:

// Input: s = "here"
// Output: "here"
// Example 3:

// Input: s = "LOVELY"
// Output: "lovely"

// create a new string (that's empty)
// Loop through the old string's characters
    // if it's an uppercase character concatenate the lowercase character to the end of the new string
    // otherwise concatenate the character to the end of the new string
// return the new string

/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
    return s.toLowerCase()
};