/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    const cache = {};
    const columnCount = matrix[0].length;
    for(let row = 0; row < matrix.length; row++){
        for(let col = 0; col < matrix[0].length; col++){
            const distance = columnCount - 1 - col + row;
            cache[distance] ??= matrix[row][col];
            if(cache[distance] !== matrix[row][col]){return false}
        }
    }
    return true;
};