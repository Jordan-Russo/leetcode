/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    // given a m x n grid and row and column size
    const rowLength = mat.length;
    const colLength = mat[0].length;
    // return a reshaped matrix, or the original matrix if reshaping isn't possible
    if(rowLength * colLength !== r * c){return mat}
    const result = [];
    let newRow = [];
    for(const row of mat){
        for(const value of row){
            newRow.push(value);
            if(newRow.length === c){
                result.push(newRow);
                newRow = [];
            }
        }
    }
    return result;
};