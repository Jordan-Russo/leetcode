// url: https://leetcode.com/problems/check-if-all-the-integers-in-a-range-are-covered/
// given a 2D integer array with each subarray containing a range of left and right
// return a boolean on whether every number in the inclusive range is covered in found in any of the ranges
/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
var isCovered = function(ranges, left, right) {
    for(let i = left; i <= right; i++){
        let found = false
        for(const [start, end] of ranges){
            if(i >= start && i <= end){
                found = true
                break;
            }
        }
        if(!found){return false}
    }
    return true
};
// console.log(isCovered([[1,2], [3,4], [5,6]], 2, 5), true)
// console.log(isCovered([[1,10], [10,20]], 21, 21), false)