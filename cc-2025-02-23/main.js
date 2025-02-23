// url: https://leetcode.com/problems/smallest-missing-integer-greater-than-sequential-prefix-sum/description/
// given an array of integers, nums
// return the smallest integer, x, not in the array, nums, such that x >= the sum of the longest sequential prefix
// a prefix can only be sequential if it starts from index 0 and is continous
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingInteger = function(nums) {
    let sum = nums[0];
    for(let i = 1; i < nums.length; i++){
        // is prev + 1 === curr ?
        if(nums[i - 1] + 1 === nums[i]){
            // if yes, sum += curr
            sum += nums[i];
        }else{
            // if not, break out of loop
            break;
        }
    }
    while(true){
    // loop from sum and keep incrementing until, nums doesn't include it
        // if not in nums, return sum
        if(nums.includes(sum) === false){return sum;}
        sum++;
    }
};