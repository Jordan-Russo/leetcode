// url: https://leetcode.com/problems/robot-return-to-origin/description/
// string, composed of only 4 types of characters 'U', 'D', 'L', 'R'.
// boolean, t / f, whether we return to the same spot we started from (0,0) after doing all the moves.
/**
 * @param {string} moves
 * @return {boolean}
 */
function judgeCircle(moves){
    // cache to store frequnecy of U, D, L, and R
    const cache = {U: 0, D: 0, L: 0, R: 0};
    // loop through the moves to fill the cache
    for(const move of moves){cache[move]++;}
    // check for balance:
    // return whether or not the amount of ups matches the amount of downs and the the amount of lefts match the amount of rights.
    return cache.U === cache.D && cache.L === cache.R;
};
// console.log(judgeCircle('UD'), true);
// console.log(judgeCircle(''), true);
// console.log(judgeCircle('LL'), false);