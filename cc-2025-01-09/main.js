// url: https://leetcode.com/problems/modify-the-matrix/
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
// given an integer matrix
// return a new integer matrix where every -1 is replaced with the largest integer in the same column of the matrix
function modifiedMatrix(matrix){
  // create an array which holds the largest integer for every column in the matrix
  const columnMaximums = new Array(matrix[0].length).fill(0)
  // loop through all columns adding maximum integer for each one
  for(let column = 0; column < matrix[0].length; column++){
      let max = 0
      for(let row = 0; row < matrix.length; row++){
          const curr = matrix[row][column]
          max = Math.max(max, curr)
      }
      columnMaximums[column] = max
  }
  // loop through the matrix coping it into a new one, if any value is -1, lookup the new value from the array and use it instead
  const newMatrix = []
  for(let row = 0; row < matrix.length; row++){
      const newRow = []
      for(let column = 0; column < matrix[0].length; column++){
          const curr = matrix[row][column]
          newRow.push(curr === -1 ? columnMaximums[column] : curr)
      }
      newMatrix.push(newRow)
  }
  // return the new matrix
  return newMatrix
};
// console.log(modifiedMatrix([[1,2,-1],[4,-1,6],[7,8,9]]), [[1,2,9],[4,8,6],[7,8,9]])
// console.log(modifiedMatrix([[3,-1],[5,2]]), [[3,2],[5,2]])