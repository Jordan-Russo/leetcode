/**
 * @param {number[][]} grid
 * @return {number}
 */
function islandPerimeter(grid){
    // initialize a perimeter at 0
    let perimeter = 0;
    // loop through every cell in the grid
    for(let row = 0; row < grid.length; row++){
        for(let col = 0; col < grid[0].length; col++){
            // if it's on land, equal to 1
            const isLand = grid[row][col] === 1;
            if(isLand){
                // check if grid spot above, below, left and right are also land
                const up = grid[row - 1]?.[col] || 0;
                const down = grid[row + 1]?.[col] || 0;
                const left = grid[row]?.[col - 1] || 0;
                const right = grid[row]?.[col + 1] || 0;
                // add 4 subtracted by each spot of adjacent land to perimeter
                perimeter += 4 - up - down - left - right;
            }
        }
    }
    // return the perimeter
    return perimeter;
};
// console.log(islandPerimeter([[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]), 16);
// console.log(islandPerimeter([[1]]), 4);
// console.log(islandPerimeter([[1, 0]]), 4);