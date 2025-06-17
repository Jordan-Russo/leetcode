// url: https://leetcode.com/problems/maximum-difference-between-adjacent-elements-in-a-circular-array/
/**
 * @param {number[]} nums
 * @return {number}
 */
function maxAdjacentDistance(nums){
    let maxDiff = Math.abs(nums[0] - nums[nums.length - 1]);
    for(let i = 1; i < nums.length; i++){
        const prev = nums[i - 1];
        const curr = nums[i];
        const diff = Math.abs(curr - prev);
        maxDiff = Math.max(maxDiff, diff);
    }
    return maxDiff;
};
// Example 1:

// Input: nums = [1,2,4]

// Output: 3

// Explanation:

// Because nums is circular, nums[0] and nums[2] are adjacent. They have the maximum absolute difference of |4 - 1| = 3.

// Example 2:

// Input: nums = [-5,-10,-5]

// Output: 5

// Explanation:

// The adjacent elements nums[0] and nums[1] have the maximum absolute difference of |-5 - (-10)| = 5.