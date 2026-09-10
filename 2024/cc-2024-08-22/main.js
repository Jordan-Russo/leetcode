// url: https://leetcode.com/problems/n-queens/
// The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.

// Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.

// Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively.

 

// Example 1:

// Input: n = 4
// Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
// Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above

// Example 2:

// Input: n = 1
// Output: [["Q"]]

/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  const solutions = []
  backtracker();

  function backtracker(solution = [], seenColumns = new Set(), seenPostiveDiagnols = new Set(), seenNegativeDiagnols = new Set()){
      if(solution.length === n){
          solutions.push(solution)
      }
      const row = solution.length
      for(let i = 0; i < n; i++){
          const column = i
          const positiveDiagnol = row + column
          const negativeDiagnol = n - row - 1 + column
          const hasCollision = seenColumns.has(column) || seenPostiveDiagnols.has(positiveDiagnol) || seenNegativeDiagnols.has(negativeDiagnol)
          if(!hasCollision){
              const newRow = '.'.repeat(i) + 'Q' + '.'.repeat(n - i - 1)
              const newColumns = new Set([...seenColumns, column])
              const newPositiveDiagnols = new Set([...seenPostiveDiagnols, positiveDiagnol])
              const newNegativeDiagnols = new Set([...seenNegativeDiagnols, negativeDiagnol])
              // do another call
              backtracker([...solution, newRow], newColumns, newPositiveDiagnols, newNegativeDiagnols)
          }
      }
  }
  return solutions
  // keep track of taken
      // columns
      // rows
      // positive diagnols
      // negative diagnols
};