/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var absDifference = function(nums, k) {
    const sorted = nums.toSorted((a,b) => a - b);
    let minSum = 0;
    let maxSum = 0;
    for(let i = 0; i < k; i++){
        minSum += sorted[i];
    }
    for(let i = nums.length - 1; i > nums.length - 1 - k; i--){
        maxSum += sorted[i];
    }
    return maxSum - minSum;
};