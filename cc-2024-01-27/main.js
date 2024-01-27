// url: https://leetcode.com/problems/check-if-n-and-its-double-exist/
// Given an arr of integers
// Return whether any integer has a double in the array as well

// cache all numbers
// loop through each number and ask whether or not it's in the set
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    let cache = new Set()
    for(const num of arr){
        if(num === 0 && cache.has(0)){
            return true
        }
        cache.add(num)
    }
    for(const num of cache){
        if(num !== 0 && cache.has(num + num)){
            return true
        }
    }
    return false
};