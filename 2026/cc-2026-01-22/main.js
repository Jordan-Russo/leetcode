/**
 * @param {number[][]} mat
 * @param {number[][]} target
 * @return {boolean}
 */
var findRotation = function(mat, target) {
    // have 4 flags for rotations amounts 0, 90, 180, 270
    let isRotation0 = true;
    let isRotation90 = true;
    let isRotation180 = true;
    let isRotation270 = true;
        // all start set as true
    // loop through every element in the matrix
    for(let row = 0; row < target.length; row++){
        for(let col = 0; col < target[row].length; col++){
        // calculate the rotation positions for the element
            // row, col for 0
            const rotation0 = mat[row][col];
            // row, -col for 90
            const rotation90 = mat[col][target[row].length - 1 - row];
            // -row, -col for 180
            const rotation180 = mat[mat.length - 1 - row][target[col].length - 1 - col];
            // -row, col for 270
            const rotation270 = mat[mat.length - 1 - col][row];
        // if any of the rotation positions don't have a value equal to the target one
            // set the rotation flag to false
            const expected = target[row][col];
            if(rotation0 !== expected){
                isRotation0 = false;
            }
            if(rotation90 !== expected){
                isRotation90 = false;
            }
            if(rotation180 !== expected){
                isRotation180 = false;
            }
            if(rotation270 !== expected){
                isRotation270 = false;
            }
        // if all 4 rotation flags are set to false 
            // return false
            if(!isRotation0 && !isRotation90 && !isRotation180 && !isRotation270){
                return false;
            }
        }
    }
    // return true
    return true;
};