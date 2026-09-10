// url: https://leetcode.com/problems/make-array-zero-by-subtracting-equal-amounts/

// Given a non-negative intger array

// return the minimum number of operations(applied to all elements that are not 0) to make every element in nums equal to 0

// Example 1:
// Input: nums = [1,5,0,3,5]
// Output: 3
// Explanation:
// In the first operation, choose x = 1. Now, nums = [0,4,0,2,4].
// In the second operation, choose x = 2. Now, nums = [0,2,0,0,2].
// In the third operation, choose x = 2. Now, nums = [0,0,0,0,0].

// Example 2:
// Input: nums = [0]
// Output: 0
// Explanation: Each element in nums is already 0 so no operations are needed.

// Quadratic time complexity -- not optimal

// initialize count at 0
// initialize min at 0
// make a loop that runs while there is a value in the array larger than the min.
    // grab the smallest value in the array that is larger than the min
    // reassign min
    // increment count
// return count

// more optimal solution

// grab a set of all elements (uniques)
// remove 0 from that set if in there
// return the size of the set

/**
 * @param {number[]} nums
 * @return {number}
 */

function minimumOperations(nums){
    let count = 0;
    let min = 0;
    const max = Math.max(nums);
    while(min < max){
        // grab smallest value larger than min
        min = Math.min(...nums.filter(n => n > min))
        count++;
    }
    return count;
};

function minimumOperations(nums){
    const uniqueNums = new Set(nums)
    uniqueNums.delete(0);
    return uniqueNums.size;
};