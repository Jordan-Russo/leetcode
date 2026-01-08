/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGood = function(nums) {
    const max = Math.max(...nums);
    if(max !== nums.length - 1){return false}
    const seen = new Set();
    for(const num of nums){
        if(seen.has(num) && num !== max){
            return false;
        }
        seen.add(num);
    }
    return seen.size === nums.length - 1;
};