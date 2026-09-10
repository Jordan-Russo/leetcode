// url: https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]

// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]

// Example 3:

// Input: nums = [], target = 0
// Output: [-1,-1]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let result = []
    let left = 0
    let right = nums.length
    let middle;
    // loop to find first
    while(left < right){
        middle = Math.floor((left + right) / 2)
        if(nums[middle] === target){
            if(nums[middle - 1] !== target){
                result[0] = middle
                break;
            }else{
                right = middle
            }
        }else if(nums[middle] < target){
            left = middle + 1
        }else{
            right = middle
        }
    }
    // loop to find last
    left = 0
    right = nums.length

    while(left < right){
        middle = Math.floor((left + right) / 2)
        if(nums[middle] === target){
            if(nums[middle + 1] !== target){
                result[1] = middle
                break;
            }else{
                left = middle + 1
            }
        }else if(nums[middle] < target){
            left = middle + 1
        }else{
            right = middle
        }
    }
    if(result.length === 0){
        result.push(-1, -1)
    }
    return result
};