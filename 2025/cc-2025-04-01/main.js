// url: https://leetcode.com/problems/lucky-numbers-in-a-matrix/
// given an integer grid of postive numbers
// all numbers in the grid are distinct
// return an array containing any lucky numbers found in the grid
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function(matrix) {
    const minRow = new Set();
    const result = [];
    // loop through every row and add the smallest value into a minRow set
    for(const row of matrix){
        minRow.add(Math.min(...row));
    }
    // loop through every col and add the biggest value into the maxCol set
    for(let col = 0; col < matrix[0].length; col++){
        let max = 0;
        for(let row = 0; row < matrix.length; row++){
            const val = matrix[row][col];
            max = Math.max(max, val);
        }
    // return values that can be found in both sets in an array
        if(minRow.has(max)){
            result.push(max);
        }
    }
    return result;
};
// console.log(luckyNumbers([[3,7,8],[9,11,13],[15,16,17]]), [15]);
// console.log(luckyNumbers([[1,10,4,2],[9,3,8,7],[15,16,17,12]]), [12]);
// console.log(luckyNumbers([[7,8],[1,2]]), [7]);