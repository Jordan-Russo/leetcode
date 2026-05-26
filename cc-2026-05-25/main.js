/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumSwaps = function(nums) {
    let zeroCount = 0;
    let swapCount = 0;
    for(const num of nums){
        if(num === 0){zeroCount++}
    }
    for(let i = nums.length - 1; i > nums.length - 1 - zeroCount; i--){
        if(nums[i] !== 0){swapCount++}
    }
    return swapCount;
};