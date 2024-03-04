// url: https://leetcode.com/problems/most-frequent-number-following-key-in-an-array/description/
// Given an array and a target number
// Find the most frequent number that occurs after a key
    // There will always be one unique answer
    // The key itself could be the most frequent value
// Return that most frequent number
/**
 * @param {number[]} nums
 * @param {number} key
 * @return {number}
 */
var mostFrequent = function(nums, key) {
    // build a cache that stores key and freq
    const cache = {}
    // have a variable(s) that say greatest character
    let mostFrequent = nums.at(0)
    for(let i = 0; i < nums.length; i++){
    // loop through the array
        if(nums[i - 1] === key){
        // if previous value is key
            cache[nums[i]] ??= 0
            cache[nums[i]]++
            // add curr value to cache
            mostFrequent = cache[nums[i]] > (cache[mostFrequent] || 0) ? nums[i] : mostFrequent
            // compare and reassign mostFrequent num
        }
    }
    return mostFrequent
    // Return the key in the cache with the highest freq
};