/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// given an array of integers
// return the largest contiguous subarray average that was taken with range k
var findMaxAverage = function(nums, k) {
    // sliding window problem, where the window length is fixed
    // initialize a sum at 0
    let sum = 0;
    // initialize a maxSum at -Infinity
    let maxSum = -Infinity;
    // sum and add all the elements that exist before index k - 1
    for(let i = 0; i < k - 1; i++){
        sum += nums[i];
    }
    // loop from index k - 1 to the end of the array
    for(let i = k - 1; i < nums.length; i++){
        // add the curent index's number to the sum
        sum += nums[i];
        // compare it to the maxSum, and reassign maxSum if sum is >
        maxSum = Math.max(sum, maxSum);
        // subtract the sum by the index at i - k + 1
        sum -= nums[i - k + 1];
    }
    // return maxSum / k
    return maxSum / k;
};