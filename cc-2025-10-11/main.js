/**
 * @param {number[]} nums
 * @return {number}
 */
var alternatingSum = function(nums) {
    let sum = 0;
    for(let i = 0; i < nums.length; i++){
        const isOdd = i & 1;
        sum += isOdd ? -nums[i] : nums[i];
    }
    return sum;
};