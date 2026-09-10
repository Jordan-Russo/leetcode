/**
 * @param {string} coordinate1
 * @param {string} coordinate2
 * @return {boolean}
 */
function checkTwoChessboards(coordinate1, coordinate2){
    // caculate color of each coordinate
        // use the parity of the sum of its row and column position 
        // turn a-h into numbers (1-8)
    const color1 = isWhiteSquare(coordinate1);
    const color2 = isWhiteSquare(coordinate2);
    // return if the colors of each are equal
    return color1 === color2;
};
function isWhiteSquare(coordinate){
    // col is the letter position from the 1st character
    const col = coordinate[0].charCodeAt(0) - 96;
    const row = Number(coordinate[1]);
    // row is the number from the 2nd character 
    return (col + row) % 2 === 1;
}
// Example 1:

// Input: coordinate1 = "a1", coordinate2 = "c3"

// Output: true

// Explanation:

// Both squares are black.

// Example 2:

// Input: coordinate1 = "a1", coordinate2 = "h3"

// Output: false

// Explanation:

// Square "a1" is black and "h3" is white.