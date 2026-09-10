/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSum = function(nums) {
    // return the sum from the set of numbers that are not negative
    return [...new Set(nums)].filter(num => num >= 0).reduce((acc, c) => acc + c, 0) || Math.max(...nums);
};