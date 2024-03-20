// url: https://leetcode.com/problems/matrix-diagonal-sum/description/
// Given a square matrix mat, return the sum of the matrix diagonals.

// Example 1:
// Input: mat = [[1,2,3],
//               [4,5,6],
//               [7,8,9]]
// Output: 25
// Explanation: Diagonals sum: 1 + 5 + 9 + 3 + 7 = 25
// Notice that element mat[1][1] = 5 is counted only once.

// Example 2:
// Input: mat = [[1,1,1,1],
//               [1,1,1,1],
//               [1,1,1,1],
//               [1,1,1,1]]
// Output: 8

// Example 3:
// Input: mat = [[5]]
// Output: 5

/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let sum = 0
    for(let i = 0; i < mat.length; i++){
        sum += mat[i][i]
    // do a loop while able to
        if(i !== mat.length - 1 - i){
            sum += mat[i][mat.length - 1 - i]
    // only add the value on the other side if the index pos is not the same
        }
    }
    return sum
};