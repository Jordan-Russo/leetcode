// url: https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/
// Given two non-negative integers low and high.
// Return the count of odd numbers between low and high (inclusive).
/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    const difference = high - low;
    const lowOrHighOdd = (low & 1) === 1 || (high & 1) === 1;
    return Math.trunc(difference/2) + lowOrHighOdd;
};
// Example 1:

// Input: low = 3, high = 7
// Output: 3
// Explanation: The odd numbers between 3 and 7 are [3,5,7].

// Example 2:

// Input: low = 8, high = 10
// Output: 1
// Explanation: The odd numbers between 8 and 10 are [9].