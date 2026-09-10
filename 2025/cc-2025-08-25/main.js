/**
 * @param {number[][]} grid
 * @param {number} x
 * @param {number} y
 * @param {number} k
 * @return {number[][]}
 */
var reverseSubmatrix = function(grid, x, y, k) {
    grid = structuredClone(grid);
    const startRow = x;
    const startCol = y;
    const endRow = startRow + k - 1;
    const endCol = startCol + k;
    const middle = startRow + Math.floor(k / 2);
    for(let i = startRow; i < middle; i++){
        for(let j = startCol; j < endCol; j++){
            const curr = grid[i][j];
            const swap = grid[endRow - (i - startRow)][j];
            grid[i][j] = swap;
            grid[endRow - (i - startRow)][j] = curr;
        }
    }
    return grid;
};