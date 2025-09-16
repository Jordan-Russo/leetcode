/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxKDistinct = function(nums, k) {
    const uniques = new Set(nums);
    const descendingUniques = [...uniques].sort((a,b) => b - a);
    return descendingUniques.slice(0, k);
};