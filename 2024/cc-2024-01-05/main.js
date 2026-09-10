// url: https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// Given an array of numbers, return an array that shows how many elements are smaller than each element
var smallerNumbersThanCurrent = function(nums) {
    return nums.map(smallerCount)
    function smallerCount(element,_,arr){
        let count = 0
        for(const num of arr){
            if(num < element){
                count++
            }
        }
        return count
    }
};