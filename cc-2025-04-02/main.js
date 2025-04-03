// url: https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/
// given an integer array nums and k, the amount of numbers we can choose from the array
// find the minimum difference between the highest and lowest k numbers in the array
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function(nums, k) {
    if(k === 1){return 0}
    nums = nums.toSorted((a,b) => a - b);
    let min = Infinity;
    // loop and compare
    for(let i = k - 1; i < nums.length; i++){
        let start = i - k + 1;
        const diff = nums[i] - nums[start];
        min = Math.min(min, diff);
    }
    return min;
};
// console.log(minimumDifference([90], 1), 0);
// console.log(minimumDifference([9,4,1,7], 2), 2);