/**
 * @param {number[]} nums
 * @return {boolean}
 */
var findSubarrays = function(nums) {
    const sums = new Set();
    for(let i = 1; i < nums.length; i++){
        const sum = nums[i - 1] + nums[i];
        if(sums.has(sum)){return true}
        sums.add(sum);
    }
    return false;
};