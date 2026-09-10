// url: https://leetcode.com/problems/minimum-operations-to-make-array-values-equal-to-k/?envType=daily-question&envId=2025-04-09
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
//  You are given an integer array nums and an integer k.

// An integer h is called valid if all values in the array that are strictly greater than h are identical.

// For example, if nums = [10, 8, 10, 8], a valid integer is h = 9 because all nums[i] > 9 are equal to 10, but 5 is not a valid integer.

// You are allowed to perform the following operation on nums:

//     Select an integer h that is valid for the current values in nums.
//     For each index i where nums[i] > h, set nums[i] to h.

// Return the minimum number of operations required to make every element in nums equal to k. If it is impossible to make all elements equal to k, return -1.
var minOperations = function(nums, k) {
    let min = Infinity;
    const seen = new Set();
    for(const num of nums){
        seen.add(num);
        min = Math.min(min, num);
    }
    // if min is lower than k return -1
    if(min < k){return -1}
    // if not return the count of distinct elements excluding k
    else{
        return seen.has(k) ? seen.size - 1 : seen.size;
    }
};
// Example 1:

// Input: nums = [5,2,5,4,5], k = 2

// Output: 2

// Explanation:

// The operations can be performed in order using valid integers 4 and then 2.

// Example 2:

// Input: nums = [2,1,2], k = 2

// Output: -1

// Explanation:

// It is impossible to make all the values equal to 2.

// Example 3:

// Input: nums = [9,7,5,3], k = 1

// Output: 4

// Explanation:

// The operations can be performed using valid integers in the order 7, 5, 3, and 1.