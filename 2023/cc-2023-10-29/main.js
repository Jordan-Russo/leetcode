// url: https://leetcode.com/problems/longest-consecutive-sequence/

// Given array of integers, nums
// Return the length of the longest consecutive elements sequence

// Example 1:

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
// Example 2:

// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9

// loop and cache each number only once 
// With a cache, filter out numbers that have no number consecutive to them.
    // grab a minimum and maximum from the numbers that are consecutive
// initialize max length
// keep a current length
// loop from the minimum num to the maximum num
// if current number exists then increment the current length
    // reassign maxlength if currlength is greater
// if current number doesn't exist
    // reassign current length to 0
// return the max length

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(nums.length === 0){
        return 0;
    }
    const cache = new Set(nums);
    let max = -Infinity;
    let min = Infinity;
    for(const num of cache){
        // if a number doesn't have a number that either comes before or after it remove it.
        if(!cache.has(num-1) && !cache.has(num+1)){
            cache.delete(num);
        }
    }
    for(const num of cache){
        if(num > max){
            max = num;
        }
        if(num < min){
            min = num;
        }
    }
    let maxSeq = 1;
    let currSeq = 0;
    for(let i = min; i <= max; ++i){
        if(cache.has(i)){
            currSeq++;
            maxSeq = Math.max(maxSeq, currSeq);
        }else{
            currSeq = 0;
        }
    }
    return maxSeq;
};