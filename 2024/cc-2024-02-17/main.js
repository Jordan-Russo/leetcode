// url: https://leetcode.com/problems/determine-color-of-a-chessboard-square/
// Given chess coordinates, return a boolean indicating whether the square is white
/**
 * @param {string} coordinates
 * @return {boolean}
 */

// Example 1:

// Input: coordinates = "a1"
// Output: false
// Explanation: From the chessboard above, the square with coordinates "a1" is black, so return false.
// Example 2:

// Input: coordinates = "h3"
// Output: true
// Explanation: From the chessboard above, the square with coordinates "h3" is white, so return true.
// Example 3:

// Input: coordinates = "c7"
// Output: false

var squareIsWhite = function([letter, number]) {
    return ( (letter.charCodeAt() - 'a'.charCodeAt() + 1) + Number(number) & 1) === 1
};