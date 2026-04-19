/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing = function(nums) {
    let canRemove = true;
    let removedIndex;
    // loop through nums
    for(let i = 1; i < nums.length; i++){
        // check if the previous element is greater then or equal to the current one
        const prev = i - 1 === removedIndex ? nums[i - 2] : nums[i - 1];
        const next = i + 1 === removedIndex ? nums[i + 2] : nums[i + 1];
        // check if the next element is less than or equal to the current one
        const invalidPrev = prev >= nums[i];
        const invalidNext = next <= nums[i];
        // if one of them is true, set the flag to false and continue to the next element
        if(invalidPrev && invalidNext){return false}
        // if both are true, return false
        if(invalidPrev || invalidNext){
            if(i === removedIndex){continue}
            if(!canRemove){return false}
            // how actually determine the correct index to remove
            // prev < next,  then remove the current
            if(prev < next){
                removedIndex = i;
            }else if(invalidPrev){
                removedIndex = i - 1;
                if(nums[i - 2] >= nums[i]){return false}
            }else{
                removedIndex = i + 1
                if(nums[i + 2] <= nums[i]){return false}
            }     
            canRemove = false;
        }
    }
    return true;
};