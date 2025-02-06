// url: https://leetcode.com/problems/longest-continuous-increasing-subsequence/
// given an array of integers, nums
// return the length of the longest continous increasing subarray that can be found within nums
/**
 * @param {number[]} nums
 * @return {number}
 */
function findLengthOfLCIS(nums){
    // initialize maxLength as 0
    let maxLength = 0;
    // initialize currLength as 0
    let currLength = 0;
    // initialize prev as -Infinity
    let prev = -Infinity;
    // loop through nums
    for(const num of nums){
        // if curr > prev
        if(num > prev){
            // increment currLength
            currLength++;
            // assign maxLength = Max(currLength, maxLength)
            maxLength = Math.max(currLength, maxLength);
        }
        // else 
        else{
            // set length to 1
            currLength = 1;
        }
        // set prev to curr
        prev = num;
    }
    // return maxLength
    return maxLength;
};
// console.log(findLengthOfLCIS([1,3,5,4,7]), 3);
// console.log(findLengthOfLCIS([2,2,2,2,2]), 1);