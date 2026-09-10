// url: https://leetcode.com/problems/diagonal-traverse-ii/
/**
 * @param {number[][]} nums
 * @return {number[]}
 */
// given a 2d integer array
  // given an array containing subarrays of rows
  // the array may have holes in the 2d space
    // regions with no numbers
// return an array containing all teh elements in diagnol order

function findDiagonalOrder(grid){
  const positions = []
  // loop every number
  for(let row = 0; row < grid.length; row++){
    for(let col = 0; col < grid[row].length; col++){
      positions.push([row, col])
    }
  }
  // gather them in one position
    // make sure we have the position(row/col)
  positions.sort(([rowA, colA],[rowB, colB]) => {
    const sumA = rowA + colA
    const sumB = rowB + colB
    if(sumA !== sumB){
      return sumA - sumB
    }else{
      return rowB - rowA
    }
  });
  // make the element with the ascending (row + col) sum
    // if equal, then prioritize descending row values
  // order those values based on the combination of their row and column
  const orderedValues = positions.map(([row, col]) => grid[row][col])
  // map ordered values so that we only now have the numbers and not position
  return orderedValues
  // return the diagnol order
}

// console.log(findDiagnolOrder([[1,2,3],[4,5,6],[7,8,9]]), [1,4,2,7,5,3,8,6,9])
// console.log(findDiagnolOrder([[1,2,3,4,5],[6,7],[8],[9,10,11],[12,13,14,15,16]]), [1,6,2,8,7,3,9,4,12,10,5,13,11,14,15,16])