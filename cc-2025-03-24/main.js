// url: https://leetcode.com/problems/check-if-bitwise-or-has-trailing-zeros/description/
// given an array of positive integers, nums
// return a boolean on whether any combination of two elements can have a trailing zero in its binary representation
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var hasTrailingZeros = function(nums) {
    let hasEven = false;
    for(const num of nums){
        const isOdd = (num & 1) === 1;
        if(!isOdd){
            // check whether we already have an even or not
            // if we do return true
            if(hasEven){return true}
            // if not make hasEven true
            hasEven = true;
        }
    }
    // return false
    return false;
};
// console.log(hasTrailingZeros([1,2,3,4,5]), true);
// console.log(hasTrailingZeros([2,4,8,16]), true);
// console.log(hasTrailingZeros([1,3,5,7,9]), false);