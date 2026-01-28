/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {boolean}
 */
var areSimilar = function(mat, k) {
    // take the modulo of k and matrix row length
    const remainder = k % mat[0].length;
    // if 0, then full shift rotation was done and return true
    if(remainder === 0){return true}
    // otherwise, loop through every value in the mat and compare it to target index
    for(let row = 0; row < mat.length; row++){
        for(let col = 0; col < mat[row].length; col++){
            const val = mat[row][col];
            const isRowOdd = row & 1;
            const targetIndex = isRowOdd ? (col - remainder + mat[0].length) % mat[row].length : (col + remainder) % mat[row].length;
            const targetVal = mat[row][targetIndex];
            if(val !== targetVal){return false}
        }
    }
    return true;
        // when looping through an even index row, do left shifts with cyclic modulo
        // and right otherwise
        // if the actual and target values don't match for any of the elements return false
    // return true since they all were matched
};