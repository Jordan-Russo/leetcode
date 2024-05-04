// url: https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/
/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
//  Given postivie integer array nums
// Given target integer X
// Return the minimum amount of shifts and pops you need to do to the array to remove exactly X
// if there are no ways to remove X total of element value return -1


var minOperations = function(nums, x) {
    let total = nums.reduce((acc, c) => acc + c, 0)
    if(total < x){
        return -1
    }
    let left = 0
    let right = 0
    let minimumOperations = Infinity
    while(right < nums.length){
        total -= nums[right]
        // look at total
        // if total is equal to x, upddate minimumOperations.
        // if total is less than x, move left pointer right
        while(total < x && left < nums.length){
            total += nums[left]
            left++
        }
        console.log(left, right, total)
        if(total === x){
            const operationCount = nums.length - 1 - right + left
            minimumOperations = Math.min(operationCount, minimumOperations)
        }
        right++
    }
    return isFinite(minimumOperations) ? minimumOperations : -1
};