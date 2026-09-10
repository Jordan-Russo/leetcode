/**
 * @param {number} n
 * @return {number}
 */
var digitFrequencyScore = function(n) {
    let sum = 0;
    while(n > 0){
        const digit = n % 10;
        sum += digit;
        n = (n - digit) / 10;
    }
    return sum;
};