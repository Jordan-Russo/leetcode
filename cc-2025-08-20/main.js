/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
    const min = [];
    const max = [];
    let curr = Infinity;
    for(const num of nums){
        curr = Math.min(curr, num);
        min.push(curr);
    }
    curr = -Infinity;
    for(let i = nums.length - 1; i >= 0; i--){
        curr = Math.max(curr, nums[i]);
        max.push(curr);
    }
    let maxDiff = -1;
    for(let i = 0; i < nums.length - 1; i++){
        const diff = max[max.length - 2 - i] - min[i];
        if(diff === 0){continue}
        maxDiff = Math.max(maxDiff, diff);
    }
    return maxDiff;
};