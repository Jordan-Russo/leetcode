// url: https://leetcode.com/problems/find-the-child-who-has-the-ball-after-k-seconds/description/
// given n, the last position from 0 to n - 1, and k, the amount of time in seconds
// return the ball position at time k
// the ball starts moving from left to right and bounces back at both ends of 0 and n - 1
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
function numberOfChild(n, k){
    // how many bounces we went from one end
    const directionChangeCount = Math.trunc(k / (n - 1));
    const isMovingRight = (directionChangeCount & 1) === 0;
    // how many times did we change direction
    const passesFromEnd = k % (n - 1);
    return isMovingRight ? passesFromEnd : n - 1 - passesFromEnd;
};
// console.log(numberOfChild(3, 5), 1);
// console.log(numberOfChild(5, 6), 2);
// console.log(numberOfChild(4, 2), 2);