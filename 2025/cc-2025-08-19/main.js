/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function(nums) {
    nums = nums.toSorted((a,b) => a - b);
    let pos = 0;
    for(let i = 1; i <= nums.length; i++){
        while(nums[pos] < i){
            pos++;
        }
        if(pos === nums.length){return -1}
        // at a position where everything to the left is less than
        const greaterThanOrEqualTo = nums.length - pos;
        if(greaterThanOrEqualTo === i){return i};
    }
    return -1;
};