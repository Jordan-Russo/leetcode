// url: https://leetcode.com/problems/number-of-common-factors/
// Given two positive integers a and b, return the number of common factors of a and b.

// An integer x is a common factor of a and b if x divides both a and b.
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function(a, b) {
    // initialize count at 0
    let count = 0;
    // find the minimum between a and b
    let max = Math.max(a,b);
    let min = Math.min(a,b);
    const end = Math.ceil(min / 2);
    // loop through 1 <= ceil(min(a,b)/2)
    for(let i = 1; i <= end; i++){
        // check whether divisible by both
        const divisibleByBoth = max % i === 0 && min % i === 0;
        // if so increment count
        if(divisibleByBoth){count++;}
    }
    if(min > 1 && max % min === 0){
    // if min(a,b) is greater than 1 check if max(a,b) divisible by min(a,b)
        // if so increment again
        count++;
    }
    // return count
    return count;
};
// Example 1:

// Input: a = 12, b = 6
// Output: 4
// Explanation: The common factors of 12 and 6 are 1, 2, 3, 6.

// Example 2:

// Input: a = 25, b = 30
// Output: 2
// Explanation: The common factors of 25 and 30 are 1, 5.