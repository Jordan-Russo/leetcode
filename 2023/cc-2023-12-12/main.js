// url: https://leetcode.com/problems/single-number/

// Given an non-empty array of integers
// Each number appears an even # of times except 1 number.
// Return the number that appears an odd # of times in the array.

// if two numbers appear in an even # of times in an array the accumulation of their XOR value will be 0.
// XOR identity property, when both operands are the same in an XOR, will result in 0
// 137 ^ 137 === 0
// 2 ^ 1 === 3
// 5 ^ 3 === 6

/**
 * @param {number[]} nums
 * @return {number}
 */

const singleNumber = nums => nums.reduce((acc, c) => acc ^ c)