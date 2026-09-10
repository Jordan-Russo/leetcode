// url: https://leetcode.com/problems/flipping-an-image/
// given a binary matrix grid, composed of 0s and 1s
// return a copy of the binary matrix grid that has each row reversed, and each value inverted from 0 to 1
/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    // create a new grid array
    const newImage = [];
    // loop through each row in the grid
    for(const row of image){
        // make a new row
        const newRow = [];
        // loop through each value in reverse in the row
        for(let i = row.length - 1; i >= 0; i--){
            // push the inverted value into the new row
            newRow.push(row[i] === 1 ? 0 : 1);
        }
        // push the new row into the new grid array
        newImage.push(newRow);
    }
    // return the new grid array
    return newImage;
};
// console.log(flipAndInvertImage([[1,1,0],[1,0,1], [0,0,0]]), [[1,0,0],[0,1,0],[1,1,1]]);
// console.log(flipAndInvertImage([[1,1,0,0], [1,0,0,1], [0,1,1,1], [1,0,1,0]]), [[1,1,0,0],[0,1,1,0], [0,0,0,1],[1,0,1,0]]);