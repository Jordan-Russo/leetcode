// url: https://leetcode.com/problems/search-insert-position/

// Given a sorted arr, ascending sort, of unique values
// Given a target value

// Return the index of the the value if it exists w/n the array
    // otherwise if it doesn't, return the position where it should be inserted.



/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    // unoptimized naive sort, loop left to right until the value to the right is no longer less than the value
    // return that index
    // for(let i = 0; i <= nums.length; ++i){
    //     if(nums[i] < target === false){
    //         return nums[i];
    //     }
    // }

    // optimized

    // initialize a high and a low as length and 0.
    let high = nums.length;
    let low = 0;
    let middle;
    // initalize a average
    // loop until low < high === false
    while(low < high){
        // calculate middle by rounding down the average of low and high
        // check the value at the middle index and compare it to the target
        // if equal return middle index
        // if middle value is less than target
            // increase low to middle + 1
        // if middle value is more than target
            // decrease high to middle
        middle = Math.floor((low + high) / 2);
        const value = nums[middle];
        if(value === target){
            return middle;
        }
        if(value < target){
            low = middle + 1;
        }
        if(value > target){
            high = middle;
        }
    }
    return high;
    // return either high
};



// Example 1:
// Input: nums = [1,3,5,6], target = 5
// Output: 2

// Example 2:
// Input: nums = [1,3,5,6], target = 2
// Output: 1

// Example 3:
// Input: nums = [1,3,5,6], target = 7
// Output: 4


console.log(
    searchInsert([1,3,5,6], 5) === 2
)
console.log(
    searchInsert([1,3,5,6], 2) === 1
)
console.log(
    searchInsert([1,3,5,6], 7) === 4
)