// url: https://leetcode.com/problems/count-elements-with-strictly-smaller-and-greater-elements/
// Given an integer array, return the count of elements that have both a smaller number element and a greater number element in the integer
/**
 * @param {number[]} nums
 * @return {number}
 */
var countElements = function(nums) {
    const min = Math.min(...nums)
    const max = Math.max(...nums)
    let betweenCount = 0
    for(const num of nums){
        if(num > min && num < max){
            betweenCount++
        }
    }
    return betweenCount
};