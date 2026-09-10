// url: https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative/
// Given an integer array nums that does not contain any zeros, find the largest positive integer k such that -k also exists in the array.

// Return the positive integer k. If there is no such integer, return -1.

 

// Example 1:

// Input: nums = [-1,2,-3,3]
// Output: 3
// Explanation: 3 is the only valid k we can find in the array.

// Example 2:

// Input: nums = [-1,10,6,7,-7,1]
// Output: 7
// Explanation: Both 1 and 7 have their corresponding negative values in the array. 7 has a larger value.

// Example 3:

// Input: nums = [-10,8,6,7,-2,-3]
// Output: -1
// Explanation: There is no a single valid k, we return -1.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    // create two sets one that holds positive and one that holds negative values
    const positives = new Set()
    const negatives = new Set()
    // loop through the numbers adding them to their sets
    for(const num of nums){
        if(num > 0){
            positives.add(num)
        }else{
            negatives.add(num)
        }
    }
    // create largest pair as -1
    let largestPair = -1
    // scan through all positive numbers 
        // check if negative ccounter part exists 
        // if so reassign largest pair
    for(const num of positives){
        if(negatives.has(-num)){
            largestPair = Math.max(num, largestPair)
        }
    }
    return largestPair
    // return largest pair
};