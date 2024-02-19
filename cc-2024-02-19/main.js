// url: https://leetcode.com/problems/divide-array-into-equal-pairs/
// Given an integer array that contains an even number of elements
// Return whether every element occurs an even number of times
/**
 * @param {number[]} nums
 * @return {boolean}
 */

// Example 1:

// Input: nums = [3,2,3,2,2,2]
// Output: true
// Explanation: 
// There are 6 elements in nums, so they should be divided into 6 / 2 = 3 pairs.
// If nums is divided into the pairs (2, 2), (3, 3), and (2, 2), it will satisfy all the conditions.
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Explanation: 
// There is no way to divide nums into 4 / 2 = 2 pairs such that the pairs satisfy every condition.

var divideArray = function(nums) {
    // quick check if there are even numbers in the array
        // if odd length return
    // make a cache that stores key and freq
    // loop through numbers
    // loop through frequencies in the cache
        // if any are odd return false
    // return true
    if(nums.length & 1 === 1){
        return false
    }
    const cache = {}
    for(const num of nums){
        cache[num] ??= 0
        cache[num]++
    }
    for(const num in cache){
        if(cache[num] & 1 === 1){
            return false
        }
    }
    return true
};