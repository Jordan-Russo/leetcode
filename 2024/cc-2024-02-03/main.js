// url: https://leetcode.com/problems/find-lucky-integer-in-an-array/
// Given an array of positive integers
// Return the largest integer that has the same frequency as its value
/**
 * @param {number[]} arr
 * @return {number}
 */
// Make a cache that stores the freq of all elements
// Make a variable (initialized at -1) that holds the largest value that has the same freq as its key
// Return the largest value that has the same frequency or -1 if there are none
var findLucky = function(arr) {
    const cache = new Map()
    for(const num of arr){
        if(!cache.has(num)){
            cache.set(num, 0)
        }
        cache.set(num, cache.get(num) + 1)
    }
    let largest = -1
    for(const [key, freq] of cache){
        if(key === freq){
            largest = Math.max(key, largest)
        }
    }
    return largest
};