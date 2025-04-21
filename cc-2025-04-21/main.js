// url: https://leetcode.com/problems/n-repeated-element-in-size-2n-array/description/
// You are given an integer array nums with the following properties:

//     nums.length == 2 * n.
//     nums contains n + 1 unique elements.
//     Exactly one element of nums is repeated n times.

// Return the element that is repeated n times.
/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    // make a frequency cache
    const cache = {};
    for(const num of nums){
        cache[num] = cache[num] + 1 || 1;
    }
    // find the element that occurs length / 2 times
    for(const key in cache){
        if(cache[key] === nums.length / 2){return Number(key);}
    }
};
// Example 1:

// Input: nums = [1,2,3,3]
// Output: 3

// Example 2:

// Input: nums = [2,1,2,5,3,2]
// Output: 2

// Example 3:

// Input: nums = [5,1,5,2,5,3,5,4]
// Output: 5