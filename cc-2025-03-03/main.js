// url: https://leetcode.com/problems/number-of-even-and-odd-bits/
// given a positive integer, n
// return an array
    //first value being the number of even indicies in the binary value of n that has 1
    // second value being the number of odd indicies in the binary value of n that has 1
// 0-indexex and bits go from right to left
// return [evenBitCount, oddBitCount]
/**
 * @param {number} n
 * @return {number[]}
 */
var evenOddBit = function(n) {
    let evenCount = 0;
    let oddCount = 0;
    let index = 0;
    while(n > 0){
        // check parity of bit
        const hasBit = n & 1;
        // if its odd
        if(hasBit){
            // increment count for the parity of index
            (index & 1) ? oddCount++ : evenCount++;
        }
        // increment index
        index++;
        // bit shift assign n to the right 1 position
        n >>= 1;
    }
    return [evenCount, oddCount];
};
// console.log(evenOddBit(50), [1,2]);
// console.log(evenOddBit(2), [0,1]);