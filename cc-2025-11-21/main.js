/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
// given an array and an integer
var addToArrayForm = function(num, k) {
    // convert the digit array into a number
    const digitNum = BigInt(num.map(String).join(''))
    // add k to that number
    let sum = digitNum + BigInt(k)
    // turn the sum into array form
    let sumArray = sum.toString().split('').map(Number);

    // return the array form sum
    return sumArray;
};