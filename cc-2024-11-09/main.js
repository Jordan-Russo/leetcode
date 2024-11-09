// url: https://leetcode.com/problems/excel-sheet-column-title/
// Given an positive integer, n
// Return the nth excel column, string

// Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.

// For example:

// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28 
// ...

 

// Example 1:

// Input: columnNumber = 1
// Output: "A"

// Example 2:

// Input: columnNumber = 28
// Output: "AB"

// Example 3:

// Input: columnNumber = 701
// Output: "ZY"


function convertToTitle(columnNumber){
  let column = ''
  while(columnNumber >= 1){
    columnNumber--
    column = String.fromCharCode(columnNumber % 26 + 'A'.charCodeAt(0)) + column
    columnNumber /= 26
  }
  return column
}
