// url: https://leetcode.com/problems/self-dividing-numbers/description/
// A self-dividing number is a number that is divisible by every digit it contains.

//     For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.

// A self-dividing number is not allowed to contain the digit zero.

// Given two integers left and right, return a list of all the self-dividing numbers in the range [left, right].

 

// Example 1:

// Input: left = 1, right = 22
// Output: [1,2,3,4,5,6,7,8,9,11,12,15,22]

// Example 2:

// Input: left = 47, right = 85
// Output: [48,55,66,77]

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
function selfDividingNumbers(left, right) {
    const result = []
    for(let i = left; i <= right; i++){
        if(isSelfDividing(i)){
            result.push(i)
        }
    }
    return result
    function isSelfDividing(n){
        let number = n
        while(number){
            const digit = number % 10
            if(digit === 0 || n % digit !== 0){
                return false
            }
            number -= digit
            number /= 10
        }
        // take every digit until the number is zero
        return true
    }
};