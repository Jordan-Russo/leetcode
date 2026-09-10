// https://leetcode.com/problems/sort-array-by-parity/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// given array of numbers
// Modify the array in place to sort it by placing all the even numbers first, followed by all the odd nums (in any pattern that follows these rules)

// keep an even index position, i.e. when doing quicksort, where all values to the left are known to be even

var sortArrayByParity = function(nums) {
    let evenIndex = 0
    for(let i = 0; i < nums.length; i++){
        const num = nums[i]
        const isOdd = num & 1
        if(!isOdd){
            // we do a swap here
            // We want to swap nums[evenIndex] with nums[i]
            nums[i] = nums[evenIndex]
            nums[evenIndex] = num
            evenIndex++
        }
    }
    return nums
};