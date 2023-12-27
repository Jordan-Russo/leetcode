// url: https://leetcode.com/problems/climbing-stairs/
// Solve using recursion
// keep a count that's initialized at 1
// option 1, everytime we subtract 2, we increment the count,
// return count at end
// edit: realized the problem can be modeled with a fibonacci sequence instead.
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // two variables that start at 1 and 2
    // if n is 1 return 1, if n is 2 return 2
    // keep looping until i === n, return value of stairs at that point
    let a = 1
    let b = 2
    for(let i = 3; i <= n; i++){
        // a === b
        // b === a + b
        // if i === n, return b
        b += a
        a = b - a
        if(i === n){
            return b
        }
    }
    if(n === 1){
        return 1
    }
    if(n === 2){
        return 2
    }
};