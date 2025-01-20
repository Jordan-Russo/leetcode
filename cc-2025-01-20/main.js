// url: https://leetcode.com/problems/snake-in-matrix/
// given the size of a square grid, n, non-negative integer
// given an array of string moves ('UP', 'DOWN', 'LEFT', 'RIGHT') that the snake moves with
// return the position of the final cell when the snake stops moving
// start at left-top position with a value of 0
// positions increase left to right by row
// the snake will never move outside of bounds
/**
 * @param {number} n
 * @param {string[]} commands
 * @return {number}
 */
function finalPositionOfSnake(n, commands){
    // initialize position at 0
    let position = 0
    const moves = {
        UP: -n,
        DOWN: n,
        LEFT: -1,
        RIGHT: 1
    }
    // create a helper function that moves the postion based on command
    const move = command => {position += moves[command]}
        // right increases position by 1
        // left decreases position by 1
        // down increases position by n
        // up decreases position by n
    // loop through each command modifying position
    commands.forEach(move)
    return position
};
// console.log(finalPositionOfSnake(2, ["RIGHT","DOWN"]), 3)
// console.log(finalPositionOfSnake(3, ["DOWN","RIGHT","UP"]), 1)