// url: https://leetcode.com/problems/smallest-even-multiple/

// Given a positive interger, n

// Return the least common multiple of 2 and n.

// Example 1:
// Input: n = 5
// Output: 10
// Explanation: The smallest multiple of both 5 and 2 is 10.

// Example 2:
// Input: n = 6
// Output: 6
// Explanation: The smallest multiple of both 6 and 2 is 6. Note that a number is a multiple of itself.

// range of number is between 1 <= x <= 150
    // can use bitwise operators

// determine if number is even
    // if even
        // return the number
    // if odd
        // return the number * 2.

/**
 * @param {number} n
 * @return {number}
 */

function smallestEvenMultiple(n) {
    const isOdd = n & 1 === 1;
    return isOdd ? n * 2 : n;
};

var smallestEvenMultiple = (n) => n & 1 ? n * 2 : n;