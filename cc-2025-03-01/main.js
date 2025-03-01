// url: https://leetcode.com/problems/minimum-operations-to-make-the-array-increasing/
// given an array of positive integers
// return the amount of increments needed inorder to make the array strictly increasing
/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let operationCount = 0;
    let prev = nums[0];
    for(let i = 1; i < nums.length; i++){
        let curr = nums[i];
        // is current > prev
        if(curr <= prev){
            curr = prev + 1;
            operationCount += curr - nums[i];
            // yes, do nothing
            // no, then make curr = prev + 1 and add curr - nums[i] to operations
        }
        // set prev = curr
        prev = curr;
    }
    return operationCount;
};
// console.log(minOperations([1,1,1]), 3);
// console.log(minOperations([1,5,2,4,1]), 14);
// console.log(minOperations([8]), 0);