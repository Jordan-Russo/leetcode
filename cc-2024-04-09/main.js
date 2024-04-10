// url: https://leetcode.com/problems/maximum-erasure-value/description/
// You are given an array of positive integers nums and want to erase a subarray containing unique elements. The score you get by erasing the subarray is equal to the sum of its elements.

// Return the maximum score you can get by erasing exactly one subarray.

// An array b is called to be a subarray of a if it forms a contiguous subsequence of a, that is, if it is equal to a[l],a[l+1],...,a[r] for some (l,r).

 

// Example 1:

// Input: nums = [4,2,4,5,6]
// Output: 17
// Explanation: The optimal subarray here is [2,4,5,6].
// Example 2:

// Input: nums = [5,2,1,2,5,2,1,2,5]
// Output: 8
// Explanation: The optimal subarray here is [5,2,1] or [1,2,5].
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function(nums) {
    const seen = new Set()
    let left = 0
    let right = left
    let currentSum = 0
    let maximumSum = 0
    while(right < nums.length){
        const curr = nums[right]
        while(seen.has(curr)){
            // move left
            currentSum -= nums[left]
            seen.delete(nums[left])
            left++
        }
        currentSum += curr
        maximumSum = Math.max(maximumSum, currentSum)
        seen.add(curr)
        right++
    }
    return maximumSum
    // scan through the array creating a window for uniques, keeping track of a sum and maxSum for each subarray
    // return maxSum
};