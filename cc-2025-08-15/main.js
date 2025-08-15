/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    const floodImage = structuredClone(image);
    // initialize targetColor as the integer value of image[sr][sc]
    const targetColor = image[sr][sc];
    const visitedPixels = new Set();

    // build a recursive function:
    function recursiveFlood(row, col){
        // is the row valid
        if(row < 0 || row >= image.length){
            // no, return
            return;
        }
        // is the column valid
        if(col < 0 || col >= image[0].length){
            // no, return
            return;
        }
        // have we visited this node before?
        if(visitedPixels.has(`${row}:${col}`)){
            // yes, then return
            return;
        }
        // is this node matching the target color
        if(image[row][col] !== targetColor){
            // no, then return
            return;
        }
        // change this node's color to the given color
        floodImage[row][col] = color;
        // add this node's position to the visited nodes list
        visitedPixels.add(`${row}:${col}`);
        // call this function for the positions above, below, left and right
        recursiveFlood(row - 1, col);
        recursiveFlood(row + 1, col);
        recursiveFlood(row, col - 1);
        recursiveFlood(row,  col + 1);
    }
    
    // call recursive function with starting row, starting column
    recursiveFlood(sr, sc);
    // return the final modified flood image
    return floodImage;
};