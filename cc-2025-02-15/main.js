// url: https://leetcode.com/problems/design-neighbor-sum-service/
// given a n x n 2D grid of integers in the range [0, n**2 - 1]
// return a NeighborSum Class that is able to handle the following methods
    // adjacentSum(value)
        // return the sum of elements that are top, left, right, and bottom of a given value in grid if they exist
    // diagonalSum(value)
        // returns the sum of elements that are top-left, top-right, bottom-left, bottom-right for a value in grid if they exist
    // any point that is undefined should be treated as zero

/**
 * @param {number[][]} grid
 */
class NeighborSum{
    constructor(grid){
        this.grid = grid;
    }
    adjacentSum(val){
        // where is the value, row & column
        const [row, col] = this.#findRowAndCol(val);
        // add value that's in the left, right, up and down to sum
        const left = this.grid[row][col - 1] || 0;
        const right = this.grid[row][col + 1] || 0;
        const up = this.grid[row - 1]?.[col] || 0;
        const down = this.grid[row + 1]?.[col] || 0;
            // if they don't exist treat them as 0
        return left + right + up + down;
        // return the sum
    }
    diagonalSum(val){
        // where is the value, its row & column
        const [row, col] = this.#findRowAndCol(val);
        // add top-left, top-right, bottom-left, bottom-right values to sum
        const topLeft = this.grid[row - 1]?.[col - 1] || 0;
        const topRight = this.grid[row - 1]?.[col + 1] || 0;
        const bottomLeft = this.grid[row + 1]?.[col - 1] || 0;
        const bottomRight = this.grid[row + 1]?.[col + 1] || 0;
            // if they don't exist treat them as 0
        return topLeft + topRight + bottomLeft + bottomRight;
        // return to sum
    }
    #findRowAndCol(val){
        for(let row = 0; row < this.grid.length; row++){
            for(let col = 0; col < this.grid[row].length; col++){
                if(this.grid[row][col] === val){
                    return [row, col];
                }
            }
        }
    }
}
// const a = new NeighborSum([[0, 1, 2], [3, 4, 5], [6, 7, 8]]);
// console.log([a, a.adjacentSum(1), a.adjacentSum(4), a.diagonalSum(4), a.diagonalSum(8)], [null, 6, 16,16,4]);
// const b = new NeighborSum([[1, 2, 0, 3], [4, 7, 15, 6], [8, 9, 10, 11], [12, 13, 14, 5]]);
// console.log([b, b.adjacentSum(15), b.diagonalSum(9)], [null, 23, 45]);