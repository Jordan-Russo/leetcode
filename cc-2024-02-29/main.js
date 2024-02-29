// url: https://leetcode.com/problems/check-if-every-row-and-column-contains-all-numbers/
// An n x n matrix is valid if every row and every column contains all the integers from 1 to n (inclusive).

// Given an n x n integer matrix matrix, return true if the matrix is valid. Otherwise, return false.

// Example 1:


// Input: matrix = [[1,2,3],[3,1,2],[2,3,1]]
// Output: true
// Explanation: In this case, n = 3, and every row and column contains the numbers 1, 2, and 3.
// Hence, we return true.
// Example 2:


// Input: matrix = [[1,1,1],[1,2,3],[1,2,3]]
// Output: false
// Explanation: In this case, n = 3, but the first row and the first column do not contain the numbers 2 or 3.
// Hence, we return false.

// make a set for each row and column
// iterate through all the row/column
    // add value to the set
// if the size isn't equal to the count of elements iterated through
    // return false
// return true

/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function(matrix) {
    for(const row of matrix){
        if(!validate(row)){
            return false
        }
    }
    for(let columnPos = 0; columnPos < matrix.length; columnPos++){
        const column = []
        for(let rowPos = 0; rowPos < matrix.length; rowPos++){
            column.push(matrix[rowPos][columnPos])
        }
        if(!validate(column)){
            return false
        }
    }
    return true
    function validate(arr){
        const seen = new Set()
        for(const num of arr){
            seen.add(num)
        }
        return seen.size === matrix.length
    }
};