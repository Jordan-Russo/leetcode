// url: https://leetcode.com/problems/move-zeroes/submissions/1225666794/
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

 

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    nums.sort((a,b) => {
      // if zero move to the right, therefore make 0 positive and all other values 0
      if(a === 0 && b === 0 || a !== 0 && b !== 0){
          return 0
      }else if(a === 0 && b !== 0){
          return 1
      }else{
          return -1
      }
    });
    return nums  
  };