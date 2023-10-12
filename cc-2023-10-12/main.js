// url: https://leetcode.com/problems/first-missing-positive/

// Given an unsorted interger array

// Return the smallest missing positive integer

// Example 1:
// Input: nums = [1,2,0]
// Output: 3
// Explanation: The numbers in the range [1,2] are all in the array.

// Example 2:
// Input: nums = [3,4,-1,1]
// Output: 2
// Explanation: 1 is in the array but 2 is missing.

// Example 3:
// Input: nums = [7,8,9,11,12]
// Output: 1
// Explanation: The smallest positive integer 1 is missing.


/**
 * @param {number[]} nums
 * @return {number}
 */

// O(n) time O(n) space:
// keep all numbers in a set
// return the first positive integer that's not in the set
function firstMissingPositive(nums) {
    const numberSet = new Set(nums);
    let i = 1;
    while(i <= nums.length + 1){
        if(!numberSet.has(i)){
            return i;
        }
        ++i;
    }
};

// O(n) time O(1) space:
// we need to mutate the array
// loop through all of the numbers
// if negative, delete them
// if positive, reassign their key to be their value
    // then delete their old value
// then loop from 1 to either n or the amount of elements left
// return the first one that isn't there.

// to keep extra memory at O(1) you may have to delete some nullish keys as you go through.

function firstMissingPositive(nums){
    const n = nums.length;
    for(let i = 0; i < n; ++i){
        console.log(nums);
        if(nums[i] !== i + 1){
            // if current value isn't the expected value
            // swap it  with the expected index
            smartSwap(nums, i, nums[i] - 1)
        }
    }
    for(let i = 0; i <= n; ++i){
        if(nums[i] !== i + 1){
            return i + 1;
        }
    }
}

// swaps array values at 2 indices
// if the second index that the first index swaps to is undefined
    // delete the key from the obj
// deleteing undefined keys is done to preserve O(1) extra space
// otherwise this function would lead to O(n) extra space.
function smartSwap(arr, index1, index2){
    let swappedVal = arr[index2];
    arr[index2] = arr[index1];
    if(swappedVal !== undefined){
        arr[index1] = swappedVal;
    }else{
        delete arr[index1];
    }
}