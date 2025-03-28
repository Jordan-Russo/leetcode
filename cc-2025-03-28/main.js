// url: https://leetcode.com/problems/count-partitions-with-even-sum-difference/
// given an integer array
// return a count of how many partitions of the array (different ways of splitting it in two parts) is able to make a left and right subarray where the difference in sums is even.
/**
 * @param {number[]} nums
 * @return {number}
 */
var countPartitions = function(nums) {
    const sumIsOdd = (nums.reduce((a,c) => a + c, 0) & 1) === 1;
    return sumIsOdd ? 0 : nums.length - 1;
};
// find the sum of all the numbers and initialize it as rightSum
// initialize leftSum at 0
// initialize count at 0
// loop through numbers from 0 to nums.length - 2
    // subtract current value from rightSum
    // add curr value to leftSum
    // increase count if difference is even
// return count
// console.log(countPartitions([10,10,3,7,6]), 4);
// console.log(countPartitions([1,2,2]), 0);
// console.log(countPartitions([2,4,6,8]), 3);