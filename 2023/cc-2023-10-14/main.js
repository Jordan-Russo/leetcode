// url: https://leetcode.com/problems/find-all-duplicates-in-an-array/

// Given an integer arr nums (length n)
    // all nums are in range [1, n]
    // numbers can appear once or twice

// Return an new array that has all the elements that return twice

// Example 1:
// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [2,3]

// Example 2:
// Input: nums = [1,1,2]
// Output: [1]

// Example 3:
// Input: nums = [1]
// Output: []

// Inialize return array
// loop through nums
    // try to swap current index with the index nums - 1
    // if nums[i] === i + 1 OR nums[i] === nums[nums[i] - 1]
        // move to the next num
    // else 
        // do swap
        // decrement curent index
// loop through nums
    // if arr[i] !== i + 1
        // add the value at the index to the return array.
// return duplicate arr

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function findDuplicates(nums) {
    for(let i = 0; i < nums.length; ++i){
        if(nums[i] !== i + 1 && nums[i] !== nums[nums[i] - 1]){
            const tempVal = nums[nums[i] - 1];
            nums[nums[i] - 1] = nums[i];
            nums[i] = tempVal;
            i--;
        }
    }
    return nums.filter((number, i) => number !== i + 1);
};