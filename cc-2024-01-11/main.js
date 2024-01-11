// url: https://leetcode.com/problems/number-of-good-pairs/
// Given an array of integers, nums
// Return the number of good pairs
// Conditions for being a "good pair"
    // nums[i] === nums[j]
    // i < j
        // AKA: two index positions with equal element values can only produce up to one pair together
// Example 1:
// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
// Example 2:
// Input: nums = [1,1,1,1]
// Output: 6
// Explanation: Each pair in the array are good.
// Example 3:
// Input: nums = [1,2,3]
// Output: 0

// Approaches
    // Naive
        // Quadratic O(n^2) time complexity
            // loop through all possible combinations of i and j with a counter that increments when the two conditions are met
    // Hashmap
        // Linear O(n) time and space complexity 
        // make and reference a datastructure that contains each element and its frequency
        // Loop through the array
            // add each element into the cache and increment its frequency
        // Loop through the cache
            // use the frequency of each value in the cache to determine how many good pairs are made from it
        // return the sum of all good pairs
/**
 * @param {number[]} nums
 * @return {number}
 */
// caching/hashmap approach
var numIdenticalPairs = function(nums) {
    const cache = {}
    for(const num of nums){
        cache[num] ??= 0
        cache[num]++
    }
    // loop through nums
        // make cache
    // loop through cache
        // increment counter
    // Return counter
    const getPairCount = n => (n - 1) * (n) / 2
    return Object.entries(cache).reduce((acc, [_, freq]) => acc + getPairCount(freq), 0)
};