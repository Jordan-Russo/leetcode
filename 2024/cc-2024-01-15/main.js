// url: https://leetcode.com/problems/hamming-distance/
// Given two 32-bit positive integers
// Return the amount of bits that don't match between the two numbers
// Example 1:

// Input: x = 1, y = 4
// Output: 2
// Explanation:
// 1   (0 0 0 1)
// 4   (0 1 0 0)
//        ↑   ↑
// The above arrows point to positions where the corresponding bits are different.
// Example 2:

// Input: x = 3, y = 1
// Output: 1
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
// Scan an compare each bit position
// count and return the amount of positions that have mismatching bit values
var hammingDistance = function(x, y) {
    let distance = 0
    while(x !== y){
        // check last bit
        const xBit = x & 1
        const yBit = y & 1
        if(xBit !== yBit){
            distance++
        }
        x >>= 1
        y >>= 1
    }
    return distance
};