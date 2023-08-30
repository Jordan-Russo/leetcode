// url: https://leetcode.com/problems/remove-duplicates-from-sorted-array

/**
 * @param {number[]} nums
 * @return {number}
 */

// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

var removeDuplicates = function(nums) {
  let prev;
  let j;
  for(let i = 1; i < nums.length; ++i){
      prev = nums[i - 1];
      j = i
      while(prev >= nums[j] && j < nums.length){
          j++;
      }
      if(j === nums.length){return i}
      if(j !== i){
          const temp = nums[j];
          nums[j] = nums[i];
          nums[i] = temp;
      }
  }
  return nums.length
};

// naive sort - insertion sort
// initialize a variable with the idea of swapped 
// loop starts at the second element
  // initialize previous as arr[i - 1]
  // initialize j = i
  // keep incrementing j until arr[j] > prev or j === arr.length
      // if arr[j] > prev
          // swap arr[i] with arr[j]
  // if j is at arr length return the index as k.
// return arr.length

// loop will stop once there are no more swaps or once the array is done.

// YOU MUST RETURN THE NUMBER OF UNIQUE ELEMENTS
