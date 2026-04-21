/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var satisfiesConditions = function(grid) {
    // loop through each cell in the grid
    for(let row = 0; row < grid.length; row++){
        for(let col = 0; col < grid[row].length; col++){
            const hasBelow = row < grid.length - 1;
        // if the cell below it exists, is it unequal to it
            // return false
            if(hasBelow){
                const unequalCellBelow = grid[row][col] !== grid[row + 1][col];
                if(unequalCellBelow){return false}
            }
        // if the cell to the right of it exists, is it equal to it
            // return false
            const hasRight = col < grid[row].length - 1;
            if(hasRight){
                const equalRight = grid[row][col] === grid[row][col + 1];
                if(equalRight){return false}
            }
        }
    }
    // return true
    return true;
};