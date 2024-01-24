// url: https://leetcode.com/problems/largest-number-at-least-twice-of-others/
// Always given an array with at least 2 elements (non negative integers)
// The largest element is unique
// Return index of the largest number
/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    let largest = -1
    let secondLargest = -1
    for(let num = 0; num < nums.length; num++){
        const curr = nums[num]
        if(curr > (nums[largest] ?? 0)){
            secondLargest = largest
            largest = num
        }else if(curr > (nums[secondLargest] ?? 0)){
            secondLargest = num
        }
    }
    const quotient = nums[largest] / nums[secondLargest]
    const isDominant = quotient >= 2 || isNaN(quotient)
    return isDominant ? largest : -1
};