// url: https://leetcode.com/problems/contains-duplicate/

// Given an integer array 

// Return a boolean on whether any value is repeated

// Example 1:
// Input: nums = [1,2,3,1]
// Output: true

// Example 2:
// Input: nums = [1,2,3,4]
// Output: false

// Example 3:
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

// Initialize a cache
// Loop through array
    // if cache already seen the value
        // return true
    // if cache didn't see value before
        // add the value to cache
// return false since there were no found duplicates

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const uniques = {};
    for(const num of nums){
        uniques[num] ??= 0;
        if(uniques[num] === 1){return true}
        uniques[num]++;
    }
    return false;
    // return new Set(nums).size !== nums.length
};