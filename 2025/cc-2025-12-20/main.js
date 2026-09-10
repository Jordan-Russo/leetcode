/**
 * @param {number[]} nums
 * @param {number} indexDifference
 * @param {number} valueDifference
 * @return {number[]}
 */
var findIndices = function(nums, indexDifference, valueDifference) {
    const range = Math.max(...nums) - Math.min(...nums);
    if(range < valueDifference){return [-1,-1]}
    for(let i = 0; i < nums.length; i++){
        for(let j = i + indexDifference; j < nums.length; j++){
            const range = Math.abs(nums[i] - nums[j]);
            if(range >= valueDifference){
                return [i, j];
            }
        }
    }
    return [-1,-1];
};