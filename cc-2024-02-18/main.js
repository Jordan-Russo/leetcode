// url: https://leetcode.com/problems/sum-of-unique-elements/
/**
 * @param {number[]} nums
 * @return {number}
 */

// Example 1:

// Input: nums = [1,2,3,2]
// Output: 4
// Explanation: The unique elements are [1,3], and the sum is 4.
// Example 2:

// Input: nums = [1,1,1,1,1]
// Output: 0
// Explanation: There are no unique elements, and the sum is 0.
// Example 3:

// Input: nums = [1,2,3,4,5]
// Output: 15
// Explanation: The unique elements are [1,2,3,4,5], and the sum is 15.

var sumOfUnique = function(nums) {
    const seen = {}
    let sum = 0
    for(const num of nums){
        seen[num] ??= 0
        seen[num]++
        if(seen[num] === 1){
            sum += num
        }
        if(seen[num] === 2){
            sum -= num
        }
    }
    return sum
};