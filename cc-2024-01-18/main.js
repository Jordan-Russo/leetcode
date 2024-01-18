// url: https://leetcode.com/problems/pascals-triangle/
// Given a positive integer number of rows
// Return an array which contains all the numbers in n, number of rows
// Example 1:

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2:

// Input: numRows = 1
// Output: [[1]]
// /**
//  * @param {number} numRows
//  * @return {number[][]}
//  */
var generate = function(numRows) {
    let currRow = 2
    const rows = [[1]]
    while(currRow <= numRows){
        let newRow = [1]
        rows[rows.length - 1].forEach((num, i, arr) => newRow.push(num + (arr[i + 1] || 0)))
        rows.push(newRow)
        currRow++
    }
    return rows
};