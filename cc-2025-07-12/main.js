/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function(nums) {
    let sum = nums[0]
    let max = sum
    // loop through left to right make a sum and keep going
    // calculate the sum before moving to the next number
    // if the curr value is less than or equal to the prev start fresh
    for(let i = 1; i < nums.length; i++){
        const prev = nums[i - 1];
        const curr = nums[i];
        if(prev >= curr){
            sum = 0
        }
         sum += curr
        max = Math.max(max, sum)
    }
    return max
};