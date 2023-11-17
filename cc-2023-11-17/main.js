// url: https://leetcode.com/problems/search-in-rotated-sorted-array/

// Given an integer array /w distinct values that has an ascending sort that is then rotated

// Also given a target number which may or may not exist in the array

// Return the matching index of the value in the array, or return -1 if it doesn't exist


console.log(search([4,5,6,7,0,1,2], 0), 4)
console.log(search([4,5,6,7,0,1,2], 3), -1)
console.log(search([1], 0), -1)

// initialize
    // left as 0
    // right as array length - 1
    // middle
// Loop while left is <= right
    // middle is going to be the average of left and right, rounded down
    // is our target between left and middle
        // reassign right to be middle
    // otherwise
        // reassign left to middle + 1

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search(nums, target) {
    let left = 0
    let right = nums.length - 1
    let middle
    while(left <= right){
        middle = Math.floor((left + right) / 2)
        const leftVal = nums[left]
        const rightVal = nums[right]
        const middleVal = nums[middle]
        if(nums[middle] === target){
            return middle
        }else if(
            leftVal <= middleVal && target >= leftVal && target <= middleVal 
            || middleVal < rightVal 
            && (target > rightVal || target < middleVal)){
            right = middle
        }else{
            left = middle + 1
        }
    }
    return -1 
};