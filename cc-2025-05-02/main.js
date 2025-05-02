// url: https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/
// given a positive integer, n
// return an array that has n unique integers, with the sum of distinct integers being 0.
/**
 * @param {number} n
 * @return {number[]}
 */
function sumZero(n) {
    // initialize a result array
    const result = [];
    // figure out if n is odd or even
    const isOdd = n & 1;
    // figure out how many times n is divisible by 2 (rounding up)
    const quotient = Math.floor(n / 2);
    // loop through 1 to the # of the quotient
    for(let i = 0; i < quotient; i++){
        // add +/- index into the result array
        result.push(i + 1);
        result.push(-i - 1);
    }
    // if n was odd, add zero into the result array as well
    if(isOdd){result.push(0)}
    // return the result array
    return result;
};
// console.log(sumZero(5), [-7,-1,1,3,4]);
// console.log(sumZero(3), [-1,0,1]);
// console.log(sumZero(2), [-1,1,1]);
// console.log(sumZero(1), [0]);