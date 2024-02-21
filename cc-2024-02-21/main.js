// url: https://leetcode.com/problems/count-elements-with-maximum-frequency/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    // do a cache of frequency
    // keep track of max freq
    // sum the frequencies of all elements with max frequency
    // Return the sum
    const cache = {}
    let maxFreq = 0
    let totalMaxFrequencies = 0
    for(const num of nums){
        cache[num] ??= 0
        cache[num]++
        maxFreq = Math.max(maxFreq, cache[num])
    }
    for(const num in cache){
        if(cache[num] === maxFreq){
            totalMaxFrequencies += maxFreq
        }
    }
    return totalMaxFrequencies
};