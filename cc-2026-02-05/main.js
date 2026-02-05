/**
 * @param {number} n
 * @return {number}
 */
var sumAndMultiply = function(n) {
    let sum = 0;
    let digitString = '';
    while(n > 0){
        const digit = n % 10;
        const isZero = digit === 0;
        if(!isZero){
            sum += digit;
            digitString = digit + digitString;
        }
        n = Math.trunc(n / 10);
    }
    return sum * (Number(digitString) || 0);
};