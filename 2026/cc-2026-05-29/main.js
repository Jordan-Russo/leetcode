/**
 * @param {number[]} nums
 * @param {number} l
 * @param {number} r
 * @return {number}
 */
var minimumSumSubarray = function(nums, l, r) {
    let minPositiveSum = Infinity;
    // loop starting position
    for(let i = 0; i < nums.length - l  + 1; i++){
        // loop ending position
        let sum = 0;
        for(let j = i; j < i + r && j < nums.length; j++){
            // if length between start/stop is not between l and r
            const distance = j - i + 1;
            if(distance > r){break}
            sum += nums[j];
            if(distance >= l && distance <= r && sum > 0){
                minPositiveSum = Math.min(sum, minPositiveSum);
            }
            // calculoate the sum
                // if it's smaller, then continue
                // if it's larger, then break
            // compare the sum, making sure to store the smallest value that's > 0
        }
    }
    // return the minimum positive sum 
    return isFinite(minPositiveSum) ? minPositiveSum : -1; 
};