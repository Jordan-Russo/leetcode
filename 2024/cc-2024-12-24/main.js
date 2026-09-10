// url: https://leetcode.com/problems/largest-local-values-in-a-matrix/
// given an square integer matrix grid
    // will always be at least 3 x 3
// Return a new grid with dimensions (n - 2) * (n - 2) that has every 3 x 3 region maximum value
// the local maximum
/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
function largestLocal(grid){
    const newGrid = []
    for(let i = 1; i < grid.length - 1; i++){
        const newRow = []
        for(let j = 1; j < grid[i].length - 1; j++){
            newRow.push(findLocalMax(grid, i, j))
        }
        newGrid.push(newRow)
    }
    return newGrid
};
function findLocalMax(grid, row, col){
    let max = -Infinity
    for(let i = row - 1; i < row + 2; i++){
        for(let j = col - 1; j < col + 2; j++){
            max = Math.max(max, grid[i][j])
        }
    }
    return max
}
// Example 1:

// Input: grid = [[9,9,8,1],[5,6,2,6],[8,2,6,4],[6,2,2,2]]
// Output: [[9,9],[8,6]]
// Explanation: The diagram above shows the original matrix and the generated matrix.
// Notice that each value in the generated matrix corresponds to the largest value of a contiguous 3 x 3 matrix in grid.

// Example 2:

// Input: grid = [[1,1,1,1,1],[1,1,1,1,1],[1,1,2,1,1],[1,1,1,1,1],[1,1,1,1,1]]
// Output: [[2,2,2],[2,2,2],[2,2,2]]
// Explanation: Notice that the 2 is contained within every contiguous 3 x 3 matrix in grid.
