// url: https://leetcode.com/problems/word-search-ii/description/

// Given an m x n board of characters and a list of strings words, return all words on the board.

// Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.

 

// Example 1:

// Input: board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]
// Output: ["eat","oath"]

// Example 2:

// Input: board = [["a","b"],["c","d"]], words = ["abcb"]
// Output: []

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {

    const root = new Trie()
    // use words to build a trie tree
    for(const word of words){
        root.insert(word)
    }

    console.log(root)
    const foundWords = new Set()

    const rows = board.length
    const columns = board[0].length
    const visited = new Set()

    // loop through board
    for(let row = 0; row < rows; row++){
        for(let column = 0; column < columns; column++){
            dfs(row, column, root.tree, '')
        }
    }

    function dfs(row, column, node, string){
        if(!board[row]?.[column]){return false}
        const key = `${row}:${column}`;
        const position = board[row][column]
        const char = board[row][column]
        if(!node[position] || visited.has(key)){return}

        visited.add(key)
        node = node[position]
        string += char

        if(node.isWord){
            foundWords.add(string)
        }

        dfs(row + 1, column, node, string)
        dfs(row - 1, column, node, string)
        dfs(row, column + 1, node, string)
        dfs(row, column - 1, node, string)

        visited.delete(key)
    }

    // return found words

    return [...foundWords];
};

class Trie{
    constructor(){
        this.tree = []
    }

    insert(string){
        let curr = this.tree
        for(const char of string){
            curr[char] ??= {}
            curr = curr[char]
        }
        curr.isWord = true
        return null
    }
}