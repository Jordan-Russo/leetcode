// url: https://leetcode.com/problems/transpose-matrix/description/
// Given a 2D integer array matrix, return the transpose of matrix.
// The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
function transpose(matrix){
    const transposition = [];
    const rows = matrix.length;
    const cols = matrix[0].length;
    for(let col = 0; col < cols; col++){
        const newRow = [];
        for(let row = 0; row < rows; row++){
            newRow.push(matrix[row][col]);
        }
        transposition.push(newRow);
    }
    return transposition;
};
// Example 1:

// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[1,4,7],[2,5,8],[3,6,9]]

// Example 2:

// Input: matrix = [[1,2,3],[4,5,6]]
// Output: [[1,4],[2,5],[3,6]]