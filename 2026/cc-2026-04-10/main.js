/**
 * @param {number[]} nums
 * @return {number}
 */
// given an integer array nums
// return the first positive number that can't be found in the nums array that is greater than the average of values of nums
var smallestAbsent = function(nums) {
    // find the average value of nums
    const average = nums.reduce((acc, c) => acc + c, 0) / nums.length;
    let curr = Math.max(Math.trunc(average) + 1, 1);
    const seen = new Set(nums);
    // loop from the average + 1, incrementing by one each loop
    for(let i = curr; i < curr + 101; i++){
        // check if that value can be found within nums
        if(!seen.has(i)){
            // if not return that value
            return i;
        }
    }
};