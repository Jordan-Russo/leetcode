// url: https://leetcode.com/problems/arithmetic-slices/description/
// Given an integer array nums, return the number of arithmetic subarrays of nums.

// A subarray is a contiguous subsequence of the array.

 

// Example 1:

// Input: nums = [1,2,3,4]
// Output: 3
// Explanation: We have 3 arithmetic slices in nums: [1, 2, 3], [2, 3, 4] and [1,2,3,4] itself.
// Example 2:

// Input: nums = [1]
// Output: 0
/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function(nums) {
    let count = 0
    let consecutiveElements = 0
    let left = 0
    let right = 0
    while(right < nums.length){
        const windowRange = right - left + 1
        if(windowRange < 3){
            right++
            continue;
        }
        // make sure window is always at least 3
        // once the window is at least 3
        // compare the difference between first 2 and last 2 elements
        // keep track of the consecutiveElements
        const differenceOfFirstTwoNumbers = nums[left + 1] - nums[left]
        const differenceOfLastTwoNumbers = nums[right] - nums[right - 1]
        if(differenceOfFirstTwoNumbers === differenceOfLastTwoNumbers){
            count += consecutiveElements + 1
            consecutiveElements++
            right++
        }else{
            left++
            consecutiveElements = 0
        }
    }
    return count
};