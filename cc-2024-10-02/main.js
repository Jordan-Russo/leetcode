// url: https://leetcode.com/problems/rotate-string/
// Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.

// A shift on s consists of moving the leftmost character of s to the rightmost position.

//     For example, if s = "abcde", then it will be "bcdea" after one shift.

 

// Example 1:

// Input: s = "abcde", goal = "cdeab"
// Output: true

// Example 2:

// Input: s = "abcde", goal = "abced"
// Output: false

// to be equal in a rotation both strings must have the same characters in sequence and the same length
// instead of rotating until positions match, if we know their lengths are equal we can repeat the sequence of one and try matching it with entire other segment.

/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    if(s.length !== goal.length){return false}
    return s.repeat(2).includes(goal);
};