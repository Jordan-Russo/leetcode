// given a rectangular array grid of rows and columns, that only contains numbers
// shift the grid k times
// return the grid after k shifts
/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
function shiftGrid(grid, k){
    // reassign grid to the shifted version of it k times
    while(k > 0){
        const newGrid = structuredClone(grid);
        for(let row = 0; row < grid.length; row++){
            for(let col = 0; col < grid[0].length; col++){
                // if we're at the first column
                // if we're at the first row
                const isFirstRow = row === 0;
                const isFirstCol = col === 0;
                // if first col and first row replace with last col last row
                if(isFirstCol){
                    if(isFirstRow){
                        newGrid[row][col] = grid[grid.length - 1][grid[row].length - 1];
                    }else{
                        newGrid[row][col] = grid[row - 1][grid[row].length - 1];
                    }
                }else{
                    newGrid[row][col] = grid[row][col - 1];
                }
                // if first col replace with last col of previous row
                // otherwise replace with previous column
            }
        }
        grid = newGrid;
        k--;
    }
    return grid
};
// console.log(shiftGrid([[1,2,3],[4,5,6],[7,8,9]], 1), [[9,1,2],[3,4,5],[6,7,8]]);
// console.log(shiftGrid([[3,8,1,9],[19,7,2,5],[4,6,11,10],[12,0,21,13]], 4), [[12,0,21,13],[3,8,1,9],[19,7,2,5],[4,6,11,10]]);
// console.log(shiftGrid([[1,2,3],[4,5,6],[7,8,9]], 9), [[1,2,3],[4,5,6],[7,8,9]]);