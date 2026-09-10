// url: https://leetcode.com/problems/number-of-zero-filled-subarrays/
/**
 * @param {number[]} nums
 * @return {number}
 */
// Given an integer array
// Return the number of subarrays that can be made from the array that only contain 0.

// Example 1:

// Input: nums = [1,3,0,0,2,0,0,4]
// Output: 6
// Explanation: 
// There are 4 occurrences of [0] as a subarray.
// There are 2 occurrences of [0,0] as a subarray.
// There is no occurrence of a subarray with a size more than 2 filled with 0. Therefore, we return 6.
// Example 2:

// Input: nums = [0,0,0,2,0,0]
// Output: 9
// Explanation:
// There are 5 occurrences of [0] as a subarray.
// There are 3 occurrences of [0,0] as a subarray.
// There is 1 occurrence of [0,0,0] as a subarray.
// There is no occurrence of a subarray with a size more than 3 filled with 0. Therefore, we return 9.
// Example 3:

// Input: nums = [2,10,2019]
// Output: 0
// Explanation: There is no subarray filled with 0. Therefore, we return 0.

var zeroFilledSubarray = function(nums) {
    // create a count, intialized at 0
    // keep track of the number of 0s in a row we have thus far, also initialized at 0 (consecutive count)
    // loop through each of the numbers
        // determine if current number is 0
        // if 0, add 1 + consecutiveCount to count, and increment consecutive count
        // else, assign consecutive count to 0
    // return the count    
    let numberOfZeroFilledSubarrays = 0
    let numberOfConsecutiveZeros = 0
    for(const num of nums){
        const isZero = num === 0
        if(isZero){
            numberOfZeroFilledSubarrays += 1 + numberOfConsecutiveZeros
            numberOfConsecutiveZeros++
        }else{
            numberOfConsecutiveZeros = 0
        }
    }
    return numberOfZeroFilledSubarrays
};