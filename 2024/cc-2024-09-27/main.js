// url: https://leetcode.com/problems/house-robber-ii/description/
// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

 

// Example 1:

// Input: nums = [2,3,2]
// Output: 3
// Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.

// Example 2:

// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.

// Example 3:

// Input: nums = [1,2,3]
// Output: 3

/**
 * @param {number[]} nums
 * @return {number}
 */

// split a circular loop into two linear loops and cut one of the ends on each side
// then compare each option and return whichever choice yields the best result

var rob = function(nums) {
    const optionA = robOption(nums, 0, nums.length - 2);
    const optionB = robOption(nums, 1, nums.length - 1);
    return Math.max(optionA, optionB)
};

var robOption = function(nums, low, high) {
    // edges cases
    if(low >= high){return nums[low] || 0}
    let planA = nums[high];
    if(nums.length === 1){return nums[0]}
    let planB = nums[high - 1];
    for(let i = high - 2; i >= low; i--){
        // we either choose planB or itself + planA
        const mostRecent = planB;
        planB = Math.max(nums[i] + planA, planB)
        planA = Math.max(planA, mostRecent)
    }
    return Math.max(planA, planB);
};