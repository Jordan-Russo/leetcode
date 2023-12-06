// url: https://leetcode.com/problems/happy-number/

// Given a number n, which is a positive integer
// Return if the positive integer is a 'Happy' number
    // Being a happy number means that through the looping process of summing the square of each digit, the value of 1 is reached.
    // You'd return false if there was an infinite loop 

// Example 1:

// Input: n = 19
// Output: true
// Explanation:
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1
// Example 2:

// Input: n = 2
// Output: false

// a loop while the new value doesn't equal the old value and the new value isn't 1
// if the new value is 1 return true
// if the value equals the old value return false

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const seen = new Set([])
    let newValue = n
    do{
        seen.add(newValue)
        newValue = squareSumofDigits(newValue)
    }while(!seen.has(newValue))
    return seen.has(1)
    function squareSumofDigits(n){
        let newNumber = 0
        while(n){
            const digit = n % 10
            n -= digit
            newNumber += digit * digit
            n /= 10
        }
        return newNumber
    }
};