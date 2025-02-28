// url: https://leetcode.com/problems/find-numbers-with-even-number-of-digits/
// given an array of positive integers
// return how many of them have an even number of digits
/**
 * @param {number[]} nums
 * @return {number}
 */
function findNumbers(nums){
    let evenNumberOfDigitCount = 0;
    // initialize a count
    for(let num of nums){
        // loop through each number
        let digitCount = 0;
        // find the amount of digits it has
        while(num > 0){
            digitCount++;
            num = Math.floor(num / 10);
        }
        if((digitCount & 1) === 0){
        // if it has an even amount of digits increase count
            evenNumberOfDigitCount++;
        }
    }
    return evenNumberOfDigitCount;
    // return count
};
// console.log([12,345,2,6,7896], 2);
// console.log([555,901,482,1771], 1);