/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var limitOccurrences = function(nums, k) {
    const result = [];
    for(let i = 0; i < nums.length; i++){
        if(nums[i - k] === nums[i]){continue}
        result.push(nums[i]);
    }
    return result;
};