// url: https://leetcode.com/problems/add-digits/
// Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.
/**
 * @param {number} num
 * @return {number}
 */
// keep summing the digits of the number and use it to create a new number until the number is less than 10
// return the final digit
var addDigits = function(num) {
    while(num >= 10){
        let newNum = 0
        while(num){
            const digit = num % 10
            newNum += digit
            num -= digit
            num /= 10
        }
        num = newNum
    }
    return num
};