// url: https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet/

/**
 * @param {string} s
 * @return {string[]}
 */
// given a excel sheet selection area as a string return all the cell boxes by column and row order.

// given a string, never empty, always going to be called, contain two charcter combination of a uppercase letter followed by a digit

// return all the cells in an array ordering from increasing column followed by increasing row.


function cellsInRange(selectionString){
  const selectedCells = [];
  let [startingColumn, startingRow,,endingColumn, endingRow] = selectionString
  startingColumn = startingColumn.charCodeAt(0)
  endingColumn = endingColumn.charCodeAt(0)
  startingRow = Number(startingRow)
  endingRow = Number(endingRow)
  for(let i = startingColumn; i <= endingColumn; i++){
    for(let j = startingRow; j <= endingRow; j++){
      const cellPosition = `${String.fromCharCode(i)}${j}`
      selectedCells.push(cellPosition)
    }
  }
  return selectedCells;
}

console.log(cellsInRange('K1:L2'), ['K1','K2','L1','L2'])
console.log(cellsInRange('A1:F1'), ['A1','B1','C1','D1','E1','F1'])