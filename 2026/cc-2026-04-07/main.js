/**
 * @param {character[][]} grid
 * @return {boolean}
 */
var canMakeSquare = function(grid) {
    // in a 3x3 grid only 4 squares can be made
    // we can just check those 4 locations instead of 
    return checkSquare(0,0) || checkSquare(0, 1) || checkSquare(1, 0) || checkSquare(1, 1);
    function checkSquare(row, col){
        const a = grid[row][col];
        const b = grid[row + 1][col];
        const c = grid[row][col + 1];
        const d = grid[row + 1][col + 1];
        // 3 or 4 must be the same
        // 0 or 1 must be different
        const checkOne = new Set([a,b,c,d]).size <= 2;
        const matches = [a,b,c,d].filter((x) => x === a).length;
        const checkTwo = matches <= 1 || matches >= 3;
        return checkOne && checkTwo;
    }
};