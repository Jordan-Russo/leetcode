/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findColumnWidth = function(grid) {
    const result = [];
    for(let col = 0; col < grid[0].length; col++){
        let max = 0;
        for(let row = 0; row < grid.length; row++){
            const value = grid[row][col];
            const length = String(value).length;
            max = Math.max(max, length);
        }
        result.push(max);
    }
    return result;
};