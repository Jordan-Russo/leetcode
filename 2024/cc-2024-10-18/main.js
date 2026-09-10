// url: https://leetcode.com/problems/longest-increasing-subsequence/
// Given an integer array nums, return the length of the longest strictly increasing
// subsequence
// .

 

// Example 1:

// Input: nums = [10,9,2,5,3,7,101,18]
// Output: 4
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.

// Example 2:

// Input: nums = [0,1,0,3,2,3]
// Output: 4

// Example 3:

// Input: nums = [7,7,7,7,7,7,7]
// Output: 1

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let cache = new Array(nums.length).fill(1);
    for(let i = nums.length - 2; i >= 0; i--){
        const curr = nums[i];
        for(let j = i + 1; j < nums.length; j++){
            const next = nums[j];
            if(curr < next){
                cache[i] = Math.max(cache[i], 1 + cache[j]);
            }
        }
        
    }
    return Math.max(...cache);
};