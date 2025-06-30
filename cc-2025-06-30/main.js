/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
    const lower = [];
    const equal = [];
    const greater = [];
    for(const num of nums){
        if(num < pivot){
            lower.push(num);
        }else if(num > pivot){
            greater.push(num);
        }else{
            equal.push(num);
        }
    }
    return [...lower, ...equal, ...greater];
};