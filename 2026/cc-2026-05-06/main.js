/**
 * @param {number[]} nums
 * @return {number}
 */
var maxOperations = function(nums) {
    let count = 1;
    const target = nums[0] + nums[1];
    for(let i = 3; i < nums.length; i += 2){
        const score = nums[i] + nums[i - 1];
        if(score === target){
            count++;
        }else{
            return count
        }        
    }
    return count;
};