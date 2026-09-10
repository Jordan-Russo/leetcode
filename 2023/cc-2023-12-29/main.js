// url: https://leetcode.com/problems/power-of-two/
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    let cache = new Set()
    let curr = 1
    for(let i = 0; i < 31; i++){
        cache.add(curr)
        curr <<= 1
    }
    // a loop where we start at 1
    // keep doubling until larger than n
    // for 32-bit range
    return cache.has(n)
};