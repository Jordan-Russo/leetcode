// url: https://leetcode.com/problems/sum-of-variable-length-subarrays/
// given an integer array
// for each element
    // define a subarray where the start is the maximum between 0, and i - nums[i]
    // and the end is i
    // add the values in the subarray to a sum
// return the sum made using the subarray for each element
/**
 * @param {number[]} nums
 * @return {number}
 */
function subarraySum(nums){
    let sum = 0;
    for(let i = 0; i < nums.length; i++){
        const start = Math.max(0, i - nums[i]);
        sum += nums
            .slice(start, i + 1)
            .reduce((acc, c) => acc + c, 0);        
    }
    return sum;
};
// console.log(subarraySum([2,3,1]), 11);
// console.log(subarraySum([3,1,1,2]), 13);