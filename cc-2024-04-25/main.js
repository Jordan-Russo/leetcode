// url: https://leetcode.com/problems/subarray-product-less-than-k/
// Given an array of integers nums and an integer k, return the number of contiguous subarrays where the product of all the elements in the subarray is strictly less than k.

 

// Example 1:

// Input: nums = [10,5,2,6], k = 100
// Output: 8
// Explanation: The 8 subarrays that have product less than 100 are:
// [10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]
// Note that [10, 5, 2] is not included as the product of 100 is not strictly less than k.

// Example 2:

// Input: nums = [1,2,3], k = 0
// Output: 0

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    let count = 0
    let left = 0
    let right = 0
    let currentProduct = 1
    while(Math.max(left, right) < nums.length){
        // multiply the current product with the current value
        // if currentProduct is under k add (right - left) + 1 to count
        // if current product isn't under k, move left forward and divide currentProduct by the left element value until it is 
            // then add (right - left) + 1 to count
        // or stop when left === nums.length
        // increment right
        currentProduct *= nums[right]
        while(currentProduct >= k && left < nums.length){
            currentProduct /= nums[left]
            left++
        }
        if(right >= left){
            count += right - left + 1
        }
        right++
    }
    return count
};