/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function(nums, k) {
    let timer = 0;
    for(const num of nums){
        if(num === 1){
            if(timer > 0){return false}
            timer = k + 1;
        }
        timer--;
    }
    return true;
};