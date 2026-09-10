/**
 * @param {number} n
 * @return {number[]}
 */
var decimalRepresentation = function(n) {
    const digitsReverse = [];
    let count = 0;
    while(n > 0){
        const digit = n % 10;
        n = Math.trunc(n / 10);
        const value = digit * 10 ** count;
        count++;
        if(value){
            digitsReverse.push(value);
        }
        
    }
    return digitsReverse.reverse();
};