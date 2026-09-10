// url: https://leetcode.com/problems/find-the-maximum-achievable-number/
// Given two integers num and t
// num being the starting integer
// t being the number of operations that can be done
// Return the largest number that you can make that has the same number of increment/decrement operations as num does.

// Example 1:

// Input: num = 4, t = 1
// Output: 6
// Explanation: The maximum achievable number is x = 6; it can become equal to num after performing this operation:
// 1- Decrease x by 1, and increase num by 1. Now, x = 5 and num = 5. 
// It can be proven that there is no achievable number larger than 6.

// Example 2:

// Input: num = 3, t = 2
// Output: 7
// Explanation: The maximum achievable number is x = 7; after performing these operations, x will equal num: 
// 1- Decrease x by 1, and increase num by 1. Now, x = 6 and num = 4.
// 2- Decrease x by 1, and increase num by 1. Now, x = 5 and num = 5.
// It can be proven that there is no achievable number larger than 7.
/**
 * @param {number} num
 * @param {number} t
 * @return {number}
 */

// Use the number and t, to find the largest number that you can increase num halfway towards and the largest number halfway down to it.
// Return that number.
var theMaximumAchievableX = function(num, t) {
    return Math.max(num + t + t, num - t - t)
};