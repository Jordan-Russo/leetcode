/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    const isArrayEqual = nums.every(num => num === nums[0]);
    return isArrayEqual ? 0 : 1;
};