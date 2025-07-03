/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    const nums = new Set();
    for(const num of arr){
        // be wary of duplicate numbers, return false, unless all of the numbers in the arr are that number
        if(nums.has(num)){
            return new Set(arr).size === 1
        }
        nums.add(num);
    }
    const max = Math.max(...nums);
    const min = Math.min(...nums);
    const averageDifference = (max - min) / (arr.length - 1)
    for(let val = min; val <= max; val += averageDifference){
        if(!nums.has(val)){
            return false;
        }
    }
    return true;
};
