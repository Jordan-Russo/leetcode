/**
 * @param {number} n
 * @return {number}
 */
var removeZeros = function(n) {
    // keep a counter (for powers of 10) initialized at 0
    let counter = 0;
    // initialize result at 0
    let result = 0;
    // loop through the value, while n > 0
    while(n > 0){
        // grab the last digit
        const digit = n % 10;
        // if the digit is NOT 0
        if(digit > 0){
            // add that digit * 10 ** counter to result
            result += digit * 10 ** counter
            // increment counter
            counter++;
        }
        // divide n by 10 and truncate to move to the next position
        n = Math.trunc(n / 10);
    }
    // return the new number
    return result;
};