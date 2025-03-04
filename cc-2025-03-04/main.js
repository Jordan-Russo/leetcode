// url: https://leetcode.com/problems/subarrays-distinct-element-sum-of-squares-i/
// given an integer array nums
// return the sum of squares of distinct values found in each subarray
    // generate each subarray
    // find the amount of unique elements in each
    // add the square of the unique count for each one
    // return the sum of those squares
/**
 * @param {number[]} nums
 * @return {number}
 */
var sumCounts = function(nums) {
    let sum = 0;
    function addSquaredDistinctValueCountToSum(startIndex){
        const seen = new Set();
        for(let i = startIndex; i < nums.length; i++){
            seen.add(nums[i]);
            sum += seen.size * seen.size;
        }
    }
    // loop through the array
    for(let i = 0; i < nums.length; i++){
        addSquaredDistinctValueCountToSum(i);
        // call a function that will take an index
            // it will loop from that index to the end of the array
            // as it loops it'll add the square of uniques to a sum
    }
    return sum;
};
// console.log(sumCounts([1,2,1]), 15);
// console.log(sumCounts([1,1]), 3);