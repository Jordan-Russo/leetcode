/**
 * @param {number[]} nums
 * @return {number}
 */
// given an array of positive integers, of length > 0
// return the number of incremovable subarrays that exist in nums
    // an incremovable array is an continguous subarray that can be removed from nums, leaving the remaining elements to be strictly increasing
    // the incremovable array cannot be empty but the remaining elements in nums can be
var incremovableSubarrayCount = function(nums) {
    let count = 0;
    for(let i = 0; i < nums.length; i++){
        for(let j = i; j < nums.length; j++){
            let isIncreasing = true;
            let prev = null;
            for(let k = 0; k < nums.length; k++){
                if(k >= i && k <= j){continue}
                if(prev !== null && nums[k] <= prev){
                    isIncreasing = false;
                    break;
                }
                prev = nums[k];
            }
            if(isIncreasing){
                count++;
            }
        }
    }
    return count;
};
// console.log(incremovableSubarrayCount([1,2,3,4]), 10);
// console.log(incremovableSubarrayCount([6,5,7,8]), 7);
// console.log(incremovableSubarrayCount([8,7,6,6]), 3);