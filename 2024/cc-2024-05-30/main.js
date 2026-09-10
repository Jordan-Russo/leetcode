// url: https://leetcode.com/problems/removing-minimum-and-maximum-from-array/description/
// You are given a 0-indexed array of distinct integers nums.

// There is an element in nums that has the lowest value and an element that has the highest value. We call them the minimum and maximum respectively. Your goal is to remove both these elements from the array.

// A deletion is defined as either removing an element from the front of the array or removing an element from the back of the array.

// Return the minimum number of deletions it would take to remove both the minimum and maximum element from the array.

 

// Example 1:

// Input: nums = [2,10,7,5,4,1,8,6]
// Output: 5
// Explanation: 
// The minimum element in the array is nums[5], which is 1.
// The maximum element in the array is nums[1], which is 10.
// We can remove both the minimum and maximum by removing 2 elements from the front and 3 elements from the back.
// This results in 2 + 3 = 5 deletions, which is the minimum number possible.

// Example 2:

// Input: nums = [0,-4,19,1,8,-2,-3,5]
// Output: 3
// Explanation: 
// The minimum element in the array is nums[1], which is -4.
// The maximum element in the array is nums[2], which is 19.
// We can remove both the minimum and maximum by removing 3 elements from the front.
// This results in only 3 deletions, which is the minimum number possible.

// Example 3:

// Input: nums = [101]
// Output: 1
// Explanation:  
// There is only one element in the array, which makes it both the minimum and maximum element.
// We can remove it with 1 deletion.

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDeletions = function(nums) {
    // do a loop and keep track of the index of max and min
    let minimumIndex = 0
    let maximumIndex = 0
    for(let i = 0; i < nums.length; i++){
        const curr = nums[i]
        if(curr < nums[minimumIndex]){
            minimumIndex = i
        }
        if(curr > nums[maximumIndex]){
            maximumIndex = i
        }
    }
    // with the minimum and maximum index, we now decide whether it makes more sense to go one of three ways
    // return the minimum calculated value from these three:
        // entirely left
        // entirely right
        // left and right
            // sum of distance to left most extrema index + distance to right most extrema indea
    const completelyLeft = Math.max(minimumIndex, maximumIndex) + 1
    const completelyRight = nums.length - Math.min(minimumIndex, maximumIndex)
    const leftAndRight = Math.min(minimumIndex, maximumIndex) + 1 
        + nums.length - Math.max(minimumIndex, maximumIndex);
    return Math.min(completelyLeft, completelyRight, leftAndRight)
};