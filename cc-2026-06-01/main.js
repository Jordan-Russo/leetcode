/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumSubarrayLength = function(nums, k) {
    let minSubarrayLength = Infinity;
    for(let i = 0; i < nums.length; i++){
        let XOR = 0;
        for(let j = i; j < nums.length; j++){
            XOR |= nums[j];
            if(XOR >= k && j - i + 1 < minSubarrayLength){
                minSubarrayLength = j - i + 1;
            }
        }
    }
    return Number.isFinite(minSubarrayLength) ? minSubarrayLength : -1;
};