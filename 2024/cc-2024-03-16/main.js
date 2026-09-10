// url: https://leetcode.com/problems/minimum-size-subarray-sum/
// Given an array of positive integers and a target number
// Return the minimum length of the array that sums to the target or greater
    // if no such length exists, return 0 instead
// Example 1:

// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.
// Example 2:

// Input: target = 4, nums = [1,4,4]
// Output: 1
// Example 3:

// Input: target = 11, nums = [1,1,1,1,1,1,1,1]
// Output: 0
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
function minSubArrayLen(target, nums){
    // sliding window
    let left = 0
    let right = 1
    // left starts at 0, right starts at one
    let minLength = Infinity
    let sum = nums[left]
    while(right <= nums.length){
    // move right until sum is >= target
        if(sum < target){
            sum += nums[right++]
        }else{
            const length = right - left
            minLength = Math.min(minLength, length)
            sum -= nums[left++]
        }

        // what if sum is equal or greater than target
            // calculate minLength, replace if neccesary

        // then move the left pointer to the right as much as possible while keeping the sum >= target
        // keep record of the min length 
        // keep looping until the right pointer is greater than the length of the array
    }
    return Number.isFinite(minLength) ? minLength : 0
    // return the min length
};
