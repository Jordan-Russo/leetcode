// url: https://leetcode.com/problems/smallest-index-with-equal-value/
// Given an integer array
// Return the smallest index where the the last digit of the index matches the value of nums[i]
// otherwise return -1
/**
 * @param {number[]} nums
 * @return {number}
 */
// Example 1:

// Input: nums = [0,1,2]
// Output: 0
// Explanation: 
// i=0: 0 mod 10 = 0 == nums[0].
// i=1: 1 mod 10 = 1 == nums[1].
// i=2: 2 mod 10 = 2 == nums[2].
// All indices have i mod 10 == nums[i], so we return the smallest index 0.
// Example 2:

// Input: nums = [4,3,2,1]
// Output: 2
// Explanation: 
// i=0: 0 mod 10 = 0 != nums[0].
// i=1: 1 mod 10 = 1 != nums[1].
// i=2: 2 mod 10 = 2 == nums[2].
// i=3: 3 mod 10 = 3 != nums[3].
// 2 is the only index which has i mod 10 == nums[i].
// Example 3:

// Input: nums = [1,2,3,4,5,6,7,8,9,0]
// Output: -1
// Explanation: No index satisfies i mod 10 == nums[i].
var smallestEqual = function(nums) {
    return nums.findIndex((e, i) => i % 10 == e)
};