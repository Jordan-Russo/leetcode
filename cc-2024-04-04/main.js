// url: https://leetcode.com/problems/check-if-matrix-is-x-matrix/description/
// A square matrix is said to be an X-Matrix if both of the following conditions hold:

// All the elements in the diagonals of the matrix are non-zero.
// All other elements are 0.
// Given a 2D integer array grid of size n x n representing a square matrix, return true if grid is an X-Matrix. Otherwise, return false.

 

// Example 1:


// Input: grid = [[2,0,0,1],[0,3,1,0],[0,5,2,0],[4,0,0,2]]
// Output: true
// Explanation: Refer to the diagram above. 
// An X-Matrix should have the green elements (diagonals) be non-zero and the red elements be 0.
// Thus, grid is an X-Matrix.
// Example 2:


// Input: grid = [[5,7,0],[0,3,1],[0,5,0]]
// Output: false
// Explanation: Refer to the diagram above.
// An X-Matrix should have the green elements (diagonals) be non-zero and the red elements be 0.
// Thus, grid is not an X-Matrix.
/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var checkXMatrix = function(grid) {
    for(let row = 0; row < grid.length; row++){
        for(let col = 0; col < grid.length; col++){
            const isZero = grid[row][col] === 0
            const isDiagonal = isGridDiagonal(row, col)
            // if it's zero and diagonal 
            // or not diagonal but not 0
                // return false
            if(isDiagonal && isZero || !isDiagonal && !isZero){
                return false
            }
        }
    }
    return true
    function isGridDiagonal(row, col){
        return row === col || grid.length - 1 - row === col
        // if row === col
        // or if grid.length - 1 - row === col
    }
};