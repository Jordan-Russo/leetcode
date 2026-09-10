/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {
    const rows = {};
    const cols = {};
    // loop through the matrix
    for(let row = 0; row < mat.length; row++){
        for(let col = 0; col < mat[0].length; col++){
            const isOne = mat[row][col] === 1;
            if(isOne){
                rows[row] ??= 0;
                cols[col] ??= 0;
                rows[row]++;
                cols[col]++;
            }
        }
    }
    // create a cache for rows that contain 1 where you store how many 1s are in that row 
    // do the same for columns
    // loop through the matrix again
    let count = 0;
    for(let row = 0; row < mat.length; row++){
        for(let col = 0; col < mat[0].length; col++){
            const isOne = mat[row][col];
            const uniqueRow = rows[row] === 1;
            const uniqueCol = cols[col] === 1;
            if(isOne && uniqueRow && uniqueCol){
                count++;
            }
        }
    }
        // when you find a '1' check whether other '1's exist on the same row and column
            // if so skip
            // if not count it
    // return the final count (initialized from 0)
    return count;
};