/**
 * @param {number[]} nums
 * @return {number}
 */
var evenNumberBitwiseORs = function(nums) {
    return nums.reduce((acc, c) => {
        if(!(c & 1)){
            acc |= c;
        }
        return acc;
    }, 0)
};