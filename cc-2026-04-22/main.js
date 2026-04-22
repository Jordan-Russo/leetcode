/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var firstStableIndex = function(nums, k) {
    // create two arrays, one to hold the max at each position going from reverse
    const maximums = [];
    let max = nums[0];
    for(let i = 0; i < nums.length; i++){
        max = Math.max(max, nums[i]);
        maximums.push(max);
    }
    const minimums = [];
    let min = nums[nums.length - 1];
    for(let i = nums.length - 1; i >= 0; i--){
        min = Math.min(min, nums[i]);
        minimums.push(min);
    }
    // the other holding the min at each position going forward
    // combine the indexes to get the difference at each point
    for(let i = 0; i < nums.length; i++){
        // return the first one with a instability score <= k
        const instabilityScore = maximums[i] - minimums[minimums.length - 1 - i];
        if(instabilityScore <= k){return i}
    }
    // if none are found return -1 instead
    return -1;
};