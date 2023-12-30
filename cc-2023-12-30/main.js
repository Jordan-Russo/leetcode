// url: https://leetcode.com/problems/power-of-four/
// Given an integer, n, return whether it's a power of 4, for range of number (-2**31 <= n <= 2**31 - 1)
// cache all powers of 4
// return whether number is in the cache
let cache = new Set()
let num = 1
for(let i = 0; i < 31; i += 2){
  cache.add(num)
  num <<= 2
}
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    return cache.has(n)
};