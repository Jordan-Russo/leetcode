/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isTrionic = function(nums) {
    if(nums[0] >= nums[1]){return false}
    let midpoint1Index;
    for(let i = 1; i < nums.length; i++){
        if(nums[i + 1] === nums[i]){return false}
        if(nums[i + 1] < nums[i]){
            midpoint1Index = i;
            break;
        }
    }
    if(!midpoint1Index || midpoint1Index === nums.length - 1){
        return false;
    }
    let midpoint2Index;
    for(let i = midpoint1Index; i < nums.length; i++){
        if(nums[i + 1] === nums[i]){return false}
        if(nums[i + 1] > nums[i]){
            midpoint2Index = i;
            break;
        }
    }
    if(!midpoint2Index || midpoint2Index === nums.length - 1){
        return false;
    }
    for(let i = midpoint2Index; i < nums.length; i++){
        if(nums[i + 1] <= nums[i]){return false}
    }
    return true;
};