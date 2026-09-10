/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var missingMultiple = function(nums, k) {
    const seen = new Set(nums);
    for(let i = 1; i <= nums.length + 1; i++){
        const multiple = i * k;
        if(!seen.has(multiple)){
            return multiple;
        }
    }
};