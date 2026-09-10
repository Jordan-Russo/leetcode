// url: https://leetcode.com/problems/check-if-numbers-are-ascending-in-a-sentence/description/
// Given a string of words and numbers, with each word separated by a single space
// Return whether or not all the numbers present as words within the string are in an increasing order (boolean)

// Example 1:

// example-1
// Input: s = "1 box has 3 blue 4 red 6 green and 12 yellow marbles"
// Output: true
// Explanation: The numbers in s are: 1, 3, 4, 6, 12.
// They are strictly increasing from left to right: 1 < 3 < 4 < 6 < 12.
// Example 2:

// Input: s = "hello world 5 x 5"
// Output: false
// Explanation: The numbers in s are: 5, 5. They are not strictly increasing.
// Example 3:

// example-3
// Input: s = "sunset is at 7 51 pm overnight lows will be in the low 50 and 60 s"
// Output: false
// Explanation: The numbers in s are: 7, 51, 50, 60. They are not strictly increasing.

/**
 * @param {string} s
 * @return {boolean}
 */

// parse numbers from the string
// Return whether the parsed numbers are strictly increasing

var areNumbersAscending = function(s) {
    const numbers = s.split(' ').reduce((acc, c) => {
        const number = Number(c)
        if(Number.isInteger(number)){
            acc.push(number)
        }
        return acc
    }, [])
    return numbers.every((number, i) => {
        return number < numbers[i + 1] || i === numbers.length - 1
    })
};