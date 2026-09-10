/**
 * @param {number[][]} grid
 * @return {number}
 */
function minimumOperations(grid){
    let operationCount = 0;
    for(let col = 0; col < grid[0].length; col++){
        let curr = grid[0][col];
        for(let row = 1; row < grid.length; row++){
            const steps = Math.max(0, curr + 1 - grid[row][col])
            operationCount += steps;
            curr = steps + grid[row][col];
        }
    }
    return operationCount;
};