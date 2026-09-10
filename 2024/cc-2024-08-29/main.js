// url: https://leetcode.com/problems/word-search/description/
// Given an m x n grid of characters board and a string word, return true if word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

 

// Example 1:

// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// Output: true

// Example 2:

// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
// Output: true

// Example 3:

// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
// Output: false

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const rowCount = board.length
    const colCount = board[0].length
    const visited = new Set()
    return board.some((rows, rowIndex) => rows.some((cols, colIndex) => dfs(rowIndex, colIndex, 0)))


    function dfs(row, col, index){
        // return true if index === word.length
        if(word.length === index){return true}
        if(row < 0 || row >= rowCount || col < 0 || col >= colCount || board[row][col] !== word[index] || visited.has(`${row}:${col}`)){return false}
        // if row/col is out of bounds
        // if already visited the spot
        // if the character doesn't match the character we're looking for
        visited.add(`${row}:${col}`)
        const up = dfs(row - 1, col, index + 1)
        const right = dfs(row, col + 1, index + 1)
        const down = dfs(row + 1, col, index + 1)
        const left = dfs(row, col - 1, index + 1)
        visited.delete(`${row}:${col}`)
        return up || right|| down || left
    }
};