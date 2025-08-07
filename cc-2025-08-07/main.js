/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    return nums.reduce((acc, c) => acc * Math.sign(c), 1);
};