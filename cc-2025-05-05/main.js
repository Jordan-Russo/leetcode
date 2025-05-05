// url: https://leetcode.com/problems/smallest-number-with-all-set-bits/
// given positive integer, n
// smallest positive integer that is greater than or equal to n
    // its binary representation cannot contain any '0' bits in it
/**
 * @param {number} n
 * @return {number}
 */
function hasBinaryZero(n){
    while(n > 0){
        const bit = n & 1;
        if(bit !== 1){return true}
        n >>= 1;
    }
    return false;
}
function smallestNumber(n){
    // helper function that determines whether there's zeros in the binary representation
    // loop upwards from n, until the number has no zeros in binary form
    while(hasBinaryZero(n)){
        n++;
    }
    // return the number /w no zeros in binary form
    return n;
};
// console.log(smallestNumber(5), 7);
// console.log(smallestNumber(3), 3);
// console.log(smallestNumber(10), 15);