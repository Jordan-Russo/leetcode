// url: https://leetcode.com/problems/binary-search/

// Given an array of integers, nums, 
// array will always have at least one element in it
// will only have numbers
// the array will be sorted in ascending order
// The values in the array are all unique

// Return the index of the number if it exists, otherwise return -1
    // there can be no more than 1 value in that arr that has that value.

// have bounds to check
// low which is set to 0
// high which is set to nums.length
// Create a loop that runs while low is less than high
    // search at the average of these points (truncated);
    // use the average index
    // if the value at average index is:
        // equal to target
            // return the average index
        // less than target
            // let low bound to average + 1;
        // greater than target
            // let high bound to average
// return -1
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
    let low = 0;
    let high = nums.length;
    let average;
    while(low < high){
        average = Math.trunc((low + high) / 2);
        if(nums[average] === target){
            return average;
        }
        if(nums[average] < target){
            low = average + 1;
        }
        if(nums[average] > target){
            high = average;
        }
    }
    return -1;
};


// console.log(search([-1,0,3,5,9,12], 9), 4);
// console.log(search([-1,0,3,5,9,12], 2), -1);