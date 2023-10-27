// url: https://leetcode.com/problems/valid-sudoku/

// Given an array of arrays, where each nested array represents a row in a 9 x 9 board.

// Return whether Each row, Each column, and Each of the nine 3 x 3 sub-boxes, contain no repeats of 1-9.

// All positions will either have a string number or a '.' empty space.

// Example 1:
// Input: board = 
// [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: true

// Example 2:
// Input: board = 
// [["8","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: false
// Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.

// Take a row, determine whether there is a repeated number
// if so return false

// Take a column, determine if there is repeat
// if so return false

// Take each sub grid 3 x 3, determinee if there is repeat
// if so return false

// return true

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    for(const row of board){
        if(!hasUniques(row)){return false}
    }
    // rows
    for(let i = 0; i < 9; i++){
        const col = [];
        for(let j = 0; j < 9; j++){
            col.push(board[j][i]);
        }
        if(!hasUniques(col)){return false}
    }
    // columns
    for(let i = 0; i < 9; i += 3){
        for(let j = 0; j < 9; j +=3){
            const subBox = [
                board[i][j],board[i][j+1],board[i][j+2],
                board[i+1][j],board[i+1][j+1],board[i+1][j+2],
                board[i+2][j],board[i+2][j+1],board[i+2][j+2]
            ]
            if(!hasUniques(subBox)){return false}
        }
    }
    // sub-boxes
    return true;
};

function hasUniques(nums){
    const numSeen = new Set();
    for(const num of nums){
        if(num === '.'){
            continue;
        }
        if(numSeen.has(num)){
            return false;
        }
        numSeen.add(num);
    }
    return true;
}