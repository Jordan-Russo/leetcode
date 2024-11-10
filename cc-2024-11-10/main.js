// url: https://leetcode.com/problems/matrix-cells-in-distance-order/description/

// given the number of rows, number of columns, position of row center, position of column center

// return all the coordinates of all cells in the matrix in any manner that is non-decreasing with distance to the center.

/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rCenter
 * @param {number} cCenter
 * @return {number[][]}
 */
var allCellsDistOrder = function(rows, cols, rCenter, cCenter) {
  // make an array to hold the coordinates
  const points = []
  // loop through the rows
  for(let row = 0; row < rows; row++){
      // loop through the columns
      for(let col = 0; col < cols; col++){
         // generate coordinate and place in the array
         points.push([row, col])
      }
  }
  // sort the array by non-decreasing distance to the center
  points.sort(([aRow, aCol],[bRow, bCol]) => (Math.abs(aRow - rCenter) + Math.abs(aCol - cCenter)) - (Math.abs(bRow - rCenter) + Math.abs(bCol - cCenter)))
  // return the sorted array
  return points
};