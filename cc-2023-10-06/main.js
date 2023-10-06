// url: https://leetcode.com/problems/three-divisors/

// Given a positive integer n

// Return true whether it has exactly three positive divisors, otherwise return false

// Example 1:
// Input: n = 2
// Output: false
// Explantion: 2 has only two divisors: 1 and 2.

// Example 2:
// Input: n = 4
// Output: true
// Explantion: 4 has three divisors: 1, 2, and 4.

// A number will have 1 and itself as divisors
// to only have three positive divisors the only other value has to be its square root.

// Therefore run a loop from 2 and ending before the sqrt of n
// if there is only one match return true.
// if there is more than one or none return false.

/**
 * @param {number} n
 * @return {boolean}
 */

// Time complexity is O(sqrt(n))
// all factors can be deduced within the sqrt (you can find the smaller one in the pair)

var isThree = function(n) {
    // first check whether sqrt is a number
        // if not return false
    // then check if there are other numbers greater than 1 but less than the sqrt that are divisors
        // if so return false
    // otherwise return true
    if(n <= 1){return false}
    let sqrt = Math.sqrt(n);
    if(sqrt % 1 !== 0){
        return false;
    }
    for(let i = 2; i < sqrt; ++i){
        if(n % i === 0){
            return false
        }
    }
    return true;
};