// url: https://leetcode.com/problems/top-k-frequent-elements/

// Given an array of numbers, an integer (k), and be BETWEEN 1 and unique elements.

// Return the k most frequent elements
// CAN BE DONE IN ANY ORDER
// There only ever one solution
    // no variance in what can be used for solution.

// create a cache that stores the num as the key, and its frequency as the value
// loop through all the numbers in the array nums
    // increment and add keys to the cache as you loop
// sort the cache keys by a descending frequency (their values)
// return the top k frequent elements


// Examples:
// console.log(
//     topKFrequent([1,1,1,2,2,3], 2)
// )
// console.log(
//     topKFrequent([1], 1)
// )

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */


// n log n solution (required sorting):

var topKFrequent = function(nums, k) {
    const cache = {};
    for(const num of nums){
        cache[num] ??= 0;
        cache[num]++;
    }
    const sortedElements = Object.keys(cache).sort((a,b) => cache[b] - cache[a]);
    const topKElements = sortedElements.slice(0, k);
    return topKElements;
};

// n solution - bucket sort (count is key, numbers are the value(s)):
// Requires same cache as before:
var topKFrequent = function(nums, k) {
    const cache = {};
    for(const num of nums){
        cache[num] ??= 0;
        cache[num]++;
    }
    // but now creates a datastructure using count and frequency
    const bucket = {};
    let maxFreq = 0;
    for(const [num, freq] of Object.entries(cache)){
        bucket[freq] ??= [];
        bucket[freq].push(num);
        maxFreq = Math.max(maxFreq, freq);
    }
    // loop through bucket from maxFreq to 1
    // push values if there are any into the most freq arr
    // return the array once it's k length;
    const topKElements = [];
    for(let i = maxFreq; i > 0; --i){
        if(bucket[i]){
            topKElements.push(...bucket[i])
        }
        if(topKElements.length === k){
            return topKElements;
        }
    }
}