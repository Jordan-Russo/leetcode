/**
 * @param {number[]} nums
 * @return {number}
 */
var minAbsoluteDifference = function(nums) {
    let indexOfOne;
    let indexOfTwo;
    let minimumDistance = nums.length;
    // loop through nums
    for(let i = 0; i < nums.length; i++){
        // keep track of the latest index that has 1 or 2 as a value
        if(nums[i] === 1){
            indexOfOne = i;
        }
        if(nums[i] === 2){
            indexOfTwo = i;
        }
        // if both values have an index calculate the minimum, whenever they change
        if(indexOfOne !== undefined && indexOfTwo !== undefined){
           minimumDistance = Math.min(minimumDistance, Math.abs(indexOfOne - indexOfTwo))
        }
    }
    // return the minimum or -1 if none exists
    return minimumDistance === nums.length ? -1 : minimumDistance;
};