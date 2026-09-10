// url: https://leetcode.com/problems/pascals-triangle-ii/description/
// Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

 

// Example 1:

// Input: rowIndex = 3
// Output: [1,3,3,1]

// Example 2:

// Input: rowIndex = 0
// Output: [1]

// Example 3:

// Input: rowIndex = 1
// Output: [1,1]


/**
 * @param {number} rowIndex
 * @return {number[]}
 */
// has number
// takes number and number infront to make a new number

var getRow = function(rowIndex) {
    let row = [1]
    for(let i = 0; i < rowIndex; i++){
        const newRow = [1]
        for(let j = 0; j < row.length; j++){
            newRow.push(row[j] + (row[j + 1] || 0))
        }
        row = newRow
    }
    return row
};