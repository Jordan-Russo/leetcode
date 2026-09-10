/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
    let min = 0;
    let curr = 0;
    for(const num of nums){
        // loop through the numbers of the array and add them together as the current
        curr += num;
        // record the lowest value as you loop through
        min = Math.min(curr, min);
    }
    // return the absolute value of the min added with 1 more to be above 0
    return -min + 1;
};