// url: https://leetcode.com/problems/partition-equal-subset-sum/
// Given an integer array nums, return true if you can partition the array into two subsets such that the sum of the elements in both subsets is equal or false otherwise.

 

// Example 1:

// Input: nums = [1,5,11,5]
// Output: true
// Explanation: The array can be partitioned as [1, 5, 5] and [11].

// Example 2:

// Input: nums = [1,2,3,5]
// Output: false
// Explanation: The array cannot be partitioned into equal sum subsets.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    let total = nums.reduce((acc, c) => acc + c, 0);
    let target = total / 2;
    let subsetSums = new Set();
    subsetSums.add(0);
    for(const num of nums){
        for(const sum of [...subsetSums]){
            const newSum = num + sum;
            if(newSum < total){
                subsetSums.add(num + sum);
            }
            if(subsetSums.has(target)){return true;}
        }
    }
    return false;
};