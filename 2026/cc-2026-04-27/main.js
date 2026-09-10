/**
 * @param {number} n
 * @param {number} x
 * @return {boolean}
 */
var validDigit = function(n, x) {
    let currentDigit = n % 10;
    let hasTarget = currentDigit === x;
    while(n > 0){
        currentDigit = n % 10;
        if(currentDigit === x){hasTarget = true}
        n = Math.trunc(n / 10);
    }
    return hasTarget && currentDigit !== x;
};