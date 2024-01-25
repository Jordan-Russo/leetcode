// url: https://leetcode.com/problems/keep-multiplying-found-values-by-two/
// Given an array of integers, keep doubling a given value until it cannot be found within the given numbers
// Return the number that isn't found in the array of integers
// Example 1:

// Input: nums = [5,3,6,1,12], original = 3
// Output: 24
// Explanation: 
// - 3 is found in nums. 3 is multiplied by 2 to obtain 6.
// - 6 is found in nums. 6 is multiplied by 2 to obtain 12.
// - 12 is found in nums. 12 is multiplied by 2 to obtain 24.
// - 24 is not found in nums. Thus, 24 is returned.
// Example 2:

// Input: nums = [2,7,9], original = 4
// Output: 4
// Explanation:
// - 4 is not found in nums. Thus, 4 is returned.
/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, target) {
    const cache = new Set(nums)
    while(cache.has(target)){
        target += target
    }
    return target
};