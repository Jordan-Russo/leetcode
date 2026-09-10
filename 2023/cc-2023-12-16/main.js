// url: https://leetcode.com/problems/reverse-bits/
// Given a 32 bit unsigned integer
// Return the number you get when the bits are reversed.
// Example 1:

// Input: n = 00000010100101000001111010011100
// Output:    964176192 (00111001011110000010100101000000)
// Explanation: The input binary string 00000010100101000001111010011100 represents the unsigned integer 43261596, so return 964176192 which its binary representation is 00111001011110000010100101000000.
// Example 2:

// Input: n = 11111111111111111111111111111101
// Output:   3221225471 (10111111111111111111111111111111)
// Explanation: The input binary string 11111111111111111111111111111101 represents the unsigned integer 4294967293, so return 3221225471 which its binary representation is 10111111111111111111111111111111.

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let reverseNum = 0
    for(let bitPos = 0; bitPos < 31; bitPos++){
        const bit = (n >> bitPos) & 1
        reverseNum |= bit << (30 - bitPos)
    }
    reverseNum *= 2
    const lastBit = (n >> 31) & 1
    if(lastBit){
        reverseNum += 1
    }
    return reverseNum
};