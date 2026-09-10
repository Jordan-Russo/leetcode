/**
 * @param {number} n
 * @return {boolean}
 */
var checkGoodInteger = function(n) {
    let digitSum = 0;
    let squareDigitSum = 0;
    while(n){
        const digit = n % 10;
        digitSum += digit;
        squareDigitSum += digit * digit;
        n -= digit;
        n /= 10;
    }
    return squareDigitSum - digitSum >= 50;
};