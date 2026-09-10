// url: https://leetcode.com/problems/alternating-digit-sum/
// Given a positive integer
// return sum all of its digits when the 1 + 2n digit is positive but the 2n digit is negative.
// Example 1:

// Input: n = 521
// Output: 4
// Explanation: (+5) + (-2) + (+1) = 4.
// Example 2:

// Input: n = 111
// Output: 1
// Explanation: (+1) + (-1) + (+1) = 1.
// Example 3:

// Input: n = 886996
// Output: 0
// Explanation: (+8) + (-8) + (+6) + (-9) + (+9) + (-6) = 0.
/**
 * @param {number} n
 * @return {number}
 */
// remove one digit at a time and sum it, while alternating whether to add or subtract.
// return the sum
var alternateDigitSum = function(n) {
    let sum = 0
    const numberString = String(n)
    for(let i = 0; i < numberString.length; i++){
        sum += (i & 1) === 0 ? +numberString[i] : -numberString[i]
    }
    return sum
};