/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumOfGoodNumbers = function(nums, k) {
    let sum = 0;
    for(let i = 0; i < nums.length; i++){
        // check if previous is larger or equal
        if(nums[i - k] >= nums[i]){continue}
            // continue the loop if so
        // check if next is larger or equal
        if(nums[i + k] >= nums[i]){continue}
            // continue loop if so
        sum += nums[i];
        // add value to sum
    }
    return sum;
};