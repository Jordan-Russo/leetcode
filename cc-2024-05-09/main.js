// url: https://leetcode.com/problems/subarray-sum-equals-k/
// Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

// A subarray is a contiguous non-empty sequence of elements within an array.

// Example 1:

// Input: nums = [1,1,1], k = 2
// Output: 2

// Example 2:

// Input: nums = [1,2,3], k = 3
// Output: 2

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let count = 0
    let sum = 0
    const cache = {0: 1}
    for(const num of nums){
        sum += num
        const target = sum - k
        if(cache[target]){
            count += cache[target]
        }
        cache[sum] ??= 0
        cache[sum]++
    }
    return count
};
