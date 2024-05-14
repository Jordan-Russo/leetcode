// url: https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/
/**
 * @param {number} num
 * @return {number}
 */
// Given a number with 4 digits
// give the minimal sum by rearranging the digits and splitting them
// Example 1:

// Input: num = 2932
// Output: 52
// Explanation: Some possible pairs [new1, new2] are [29, 23], [223, 9], etc.
// The minimum sum can be obtained by the pair [29, 23]: 29 + 23 = 52.

// Example 2:

// Input: num = 4009
// Output: 13
// Explanation: Some possible pairs [new1, new2] are [0, 49], [490, 0], etc. 
// The minimum sum can be obtained by the pair [4, 9]: 4 + 9 = 13.

// make a sorted ascending array
// [2,2,3,9]
// return 1st and last number as a number summed with second and third number

var minimumSum = function(num) {
    const digits = []
    for(let i = 0; i < 4; i++){
        const digit = num % 10
        digits.push(digit)
        num = Math.trunc(num / 10)
    }
    digits.sort((a,b) => a - b);
    const a = digits[0] * 10 + digits[3]
    const b = digits[1] * 10 + digits[2]
    const sum = a + b
    return sum
};