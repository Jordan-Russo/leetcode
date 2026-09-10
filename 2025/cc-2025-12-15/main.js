/**
 * @param {number[]} nums
 * @return {number}
 */
var maximizeExpressionOfThree = function(nums) {
    const sorted = nums.toSorted((a,b) => b - a);
    return sorted[0] + sorted[1] - sorted[sorted.length - 1];
};