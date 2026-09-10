// url: https://leetcode.com/problems/contains-duplicate-ii/

// Given an integer array and integer k

// Return boolean on whether there is are two distinct indicies, i and j
    // such indicies i and j have the same value in the array
    // and that the difference between these indicies is <= k.

// Example 1:
// Input: nums = [1,2,3,1], k = 3
// Output: true

// Example 2:
// Input: nums = [1,0,1,1], k = 1
// Output: true

// Example 3:
// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false


// guard check against k being 0, return false if so.
// make a cache that stores a value as its key and its last index as its value.

// loop through the array
    // check if value is in cache
        // true 
            // check if the difference between the index values is <= k
                // true
                    // return true
                // false
                    // set value equal to current index
        // false
            // make value in cache ([value]: index)
// return false

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

var containsNearbyDuplicate = function(nums, k) {
    const cache = {};
    let inRange;
    for(let i = 0; i < nums.length; ++i){
        inRange = Math.abs(i - cache[nums[i]]) <= k;
        if(nums[i] in cache && inRange){
            return true;
        }
        cache[nums[i]] = i;
    }
    return false;
};