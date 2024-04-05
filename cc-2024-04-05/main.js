// url: https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/description/
// Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise
// return the number of negative numbers in grid.
// Example 1:

// Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
// Output: 8
// Explanation: There are 8 negatives number in the matrix.
// Example 2:

// Input: grid = [[3,2],[1,0]]
// Output: 0
/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let rowCount = grid.length
    let columnCount = grid[0].length
    let currRow = rowCount
    let negativeNumberCount = 0
    for(let column = 0; column < columnCount; column++){
        // keep going from the bottom up until the number isn't negative
        while(currRow >= 1 && grid[currRow - 1][column] < 0){
            currRow--
        }
        if(currRow < 0){
            break;
        }
        negativeNumberCount += rowCount - currRow
    }
    return negativeNumberCount
};