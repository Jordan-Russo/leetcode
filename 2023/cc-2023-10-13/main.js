// url: https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

// Given an array nums of length n
    // that has its numbers in range of [1, n]

// Return an array of all the integers that are missing from the range of [1, n] that aren't in nums

// Example 1:
// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]

// Example 2:
// Input: nums = [1,1]
// Output: [2]

// O(n) time, O(n) space

// create a set from the arrays nums
// initialize missing array
// loop from 1 to n
    // if num is not in set add it to missing array
// return missing array

// O(n^2) time, O(1) space (return arr excluded)
// initialize missing arr
// loop from 1 to n
    // if num is not in arr push it to missing arr
// return missing arr

// O(n) time, O(1) space (return arr excluded)
// initialize missing arr
// loop through arr
    // set expected value to index + 1
    // set swapPos to nums[i] - 1
    // if val is not expected
    // and val is not equal to value at swapPos
        // swap value at curr index with swapPos
            // decrement index
// loop through the array
    // if element value !== index + 1
        // add that to the missing array
// return missing array

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function findDisappearedNumbers(nums) {
    for(let i = 0; i < nums.length; ++i){
        const expectedVal = i + 1;
        const swapPos = nums[i] - 1;
        if(nums[i] !== expectedVal && nums[i] !== nums[swapPos]){
            const swapTemp = nums[i];
            nums[i] = nums[swapPos];
            nums[swapPos] = swapTemp;
            i--;
        }
    }
    const missingNums = nums.reduce((arr, num, i) => {
        if(nums[i] !== i + 1){
            arr.push(i + 1);
        }
        return arr;
    }, [])
    return missingNums;
};