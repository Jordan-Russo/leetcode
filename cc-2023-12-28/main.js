// url: https://leetcode.com/problems/majority-element
// If you have an array and one number exists more than half of the time
// Return the majority number
    // it will always exist
// keep track of the current value and how many times it appears
// when the same value appears again increase the value
// when it doesn't decrease the number
// if the number turns to 0
    // change the new value to the current element
    // change the count to 1
// return the final value of the element that remains
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let element = nums[0]
    let count = 1
    for(let i = 1; i < nums.length; i++){
        const newElement = nums[i]
        if(element === newElement){
            count++
        }else{
            count--
            if(count === 0){
                element = nums[i]
                count = 1
            }
        }
    }
    return element
};