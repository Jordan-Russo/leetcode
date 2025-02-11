// url: https://leetcode.com/problems/surface-area-of-3d-shapes/
// given a grid of non-negative integers
// return the surface area of the shape that gets made of stacking 1x1x1 cubes as the height for each grid elements' value
/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function(grid) {
    // make a sum of the surface area, initialized at 0
    let sum = 0;
    // loop through every grid value
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[i].length; j++){
            const height = grid[i][j];
            // if its 0, continue to the next value
            if(height === 0){continue;}
            // add 2 to surface area for up and down surface area at that position
            sum += 2;
            // go through north, east, south, west positions
            const north = grid[i - 1]?.[j] || 0;
            const south = grid[i + 1]?.[j] || 0;
            const east = grid[i][j + 1] || 0;
            const west = grid[i][j - 1] || 0;
            // if they exist add the maximum of the difference between the current height and the other position or 0
            // if they don't add the height of the position to the surface area
            sum += Math.max(height - north, 0);
            sum += Math.max(height - south, 0);
            sum += Math.max(height - east, 0);
            sum += Math.max(height - west, 0);
        }
    }
    // return surface area
    return sum;
};
// console.log(surfaceArea([[1,2],[3,4]]), 34);
// console.log(surfaceArea([[1,1,1],[1,0,1],[1,1,1]]), 32);
// console.log(surfaceArea([[2,2,2],[2,1,2],[2,2,2]]), 46);