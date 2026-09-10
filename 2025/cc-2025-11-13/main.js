/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
    for(let i = 1; i < n; i++){
    // loop through 1 to n, as i
        // at each value verify that i or n - i have NO zeros
        const a = hasNoZeros(i);
        const b = hasNoZeros(n - i);
        if(a&b){
            return [i, n - i];
        }
            // if they do loop to the next value
            // if they don't return an array containing both of the values
    }
};

// create a function that takes in 1 number and states whether there are zeros in it
function hasNoZeros(n){
    // loop through the digits in that number
    while(n > 0){
        const digit = n % 10;
        // return false if any of them are zero
        if(digit === 0){return false}
        n = Math.trunc(n / 10);
    }
        // return true otherwise
    return true;
}
console.log(getNoZeroIntegers(2), [1,1]);
console.log(getNoZeroIntegers(11), [2,9]);