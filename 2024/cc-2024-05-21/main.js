// url: https://leetcode.com/problems/max-consecutive-ones-iii/description/
// Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

 

// Example 1:

// Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
// Output: 6
// Explanation: [1,1,1,0,0,1,1,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

// Example 2:

// Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
// Output: 10
// Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let maxCount = 0
    let zeroCount = 0
    let left = 0
    let right = 0
    while(right < nums.length){
        const curr = nums[right]
        const isZero = curr === 0
        if(isZero){
            zeroCount++
            if(zeroCount > k){
                maxCount = Math.max(maxCount, right - left)
                // calculate current size
                if(k === 0){
                    left = right + 1
                    zeroCount = 0
                    // move left and right to one past right
                }else{
                    while(zeroCount > k){
                        const removed = nums[left]
                        if(removed === 0){
                            zeroCount--
                        }
                        left++
                    }
                    // increase zeroCount
                    // move left until zeroCount === k
                }
            }
        }
        right++
    }
    maxCount = Math.max(maxCount, right - left)
    // final check
    return maxCount
};