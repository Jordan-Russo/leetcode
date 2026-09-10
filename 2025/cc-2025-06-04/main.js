/**
 * @param {number[][]} grid
 * @return {number}
 */
// given a 2D boolean integer matrix grid of 1s and 0s of size n x n that represent matchups in a tournament
// return the index of the team that will win
    // there will always be one team that beats ALL the others, 1 representing a WIN against a team with the index value for that team
function findChampion(grid){
    // loop through the teams, rows
    for(let row = 0; row < grid.length; row++){
        const isChampion = grid[row].every((v, col) => {
            return v === 1 || col === row;
        })
        // check that every index besides the row index is 1 for the column indexes
        // return the row index if that is true for every column in a row
        if(isChampion){return row}
    }
};
// console.log(findChampion([[0,1],[0,0]]), 0);
// console.log(findChampion([[0,0,1],[1,0,1],[0,0,0]]), 1);