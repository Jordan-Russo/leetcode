// url: https://leetcode.com/problems/find-the-middle-index-in-array/
// Return the pivot index where all the values to the right and left of the pivot are equal
// If no such pivot Index exists within the given array
    // return -1
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function(nums) {
    let left = 0
    let right = nums.reduce((acc, c) => acc + c, 0)
    for(let i = 0; i < nums.length; i++){
        const curr = nums[i]
        // remove value from right
        right -= curr
        // check if left and right are equal
            // if so return the current index
        if(left === right){
            return i
        }
        // add value to left
        left += curr
    }
    // Loop
    return -1
    // handles no solution
};