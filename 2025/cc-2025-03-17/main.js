// url: https://leetcode.com/problems/longest-harmonious-subsequence/description/
// given an integer array nums
// return the length of the longest harmonious subsequence
// a subsequence is any sub-selection of numbers in the array in the order that they appear
// harmonious refers to the fact that the minimum and maximum value difference must be exactly one
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    // build a frequency cache
    const cache = new Map();
    for(const num of nums){
        // if key doesn't exist
        if(!cache.has(num)){
            cache.set(num, 0);
        }
        // increment key in cache
        cache.set(num, cache.get(num) + 1);
    }
    // initialize max length at 0
    let maxLen = 0;
    // loop through the keys
    for(const [key, val] of cache){
        // look for key + 1 in frequency cache
        if(cache.has(key + 1)){
        // if you find it, sum it with the key frequency as an harmonious sequency length
            // reassign for max length
            const sum = cache.get(key) + cache.get(key + 1);
            maxLen = Math.max(maxLen, sum);
        }
    }
    // return max length
    return maxLen;
};
// console.log(findLHS([1,3,2,2,5,2,3,7]),5);
// console.log(findLHS([1,2,3,4]),2);
// console.log(findLHS([1,1,1,1]),0);