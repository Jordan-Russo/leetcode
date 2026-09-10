/**
 * @param {number[]} nums
 * @return {number}
 */
var countSubarrays = function(nums) {
    let count = 0;
    for(let i = 0; i < nums.length - 2; i++){
        const hasCondition = nums[i] * 2 + nums[i + 2] * 2 === nums[i + 1];
        if(hasCondition){count++}
    }
    return count;
};