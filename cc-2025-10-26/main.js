/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    // sort the numbers, ascending
    const sorted = nums.toSorted((a,b) => a - b);
    // compare the product of the 3 biggest numbers with the product of the biggest number and the two smallest numbers
    const a = sorted[sorted.length - 1] * sorted[sorted.length - 2] * sorted[sorted.length - 3];
    const b = sorted[0] * sorted[1] * sorted[sorted.length - 1];
    // return the last product of those two
    return Math.max(a, b);
};