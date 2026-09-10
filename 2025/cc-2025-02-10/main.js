// url: https://leetcode.com/problems/pass-the-pillow/
// given a positive integer, n, represents amount of positions
// given a time in seconds
// return the final position that a pillow will be in after the time has elapsed
// pillow starts at position 1, moves right, and will change direction at 1 and n, moving 1 position per second
/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function(n, time) {
    // find direction that the pillow moving (right/left)
        // every n - 1, movements changes the direction
    const isMovingRight = Math.trunc(time / (n - 1)) % 2 === 0;
    // find how many positions away from either 1 or n it is
        // the remainder after dividing by n - 1 would tell us how many positions its moved
    const endOfLineDistance = time % (n - 1);
    const finalPosition = isMovingRight ? endOfLineDistance + 1 : n - endOfLineDistance;
    return finalPosition;
};
// console.log(passThePillow(4,5), 2);
// console.log(passThePillow(3,2), 3);