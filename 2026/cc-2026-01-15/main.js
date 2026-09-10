/**
 * @param {number} n
 * @return {number}
 */
var numberOfCuts = function(n) {
    // if n is 1 return 0
    if(n === 1){return 0}
    // if n is even return n / 2
    if((n & 1) === 0){return n / 2}
    // if n is odd return n
    return n;
};