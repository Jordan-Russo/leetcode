// url: https://leetcode.com/problems/sum-of-digits-in-base-k/
// Given an integer n (in base 10) and a base k, return the sum of the digits of n after converting n from base 10 to base k.

// After converting, each digit should be interpreted as a base 10 number, and the sum should be returned in base 10.
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function(n, k) {
    // turn integer into a string with radix k
    const newBase = n.toString(k);
    // sum the digits of the string
    let sum = 0;
    for(const digit of newBase){
        sum += Number(digit);
    }
    // return the string digit sum as a number
    return sum;
};
// Example 1:

// Input: n = 34, k = 6
// Output: 9
// Explanation: 34 (base 10) expressed in base 6 is 54. 5 + 4 = 9.

// Example 2:

// Input: n = 10, k = 10
// Output: 1
// Explanation: n is already in base 10. 1 + 0 = 1.