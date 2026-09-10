// given a positive integer >= 10
// return the maximum product that can be made using the digits found from n
/**
 * @param {number} n
 * @return {number}
 */
function maxProduct(n){
    // initialize variables, largest and second largest as 0
    let largest = 0;
    let secondLargest = 0;
    // loop through all the digits of the number (modulo 10 to grab digit then move to the next)
    while(n > 0){
        // grab the current digit 
        const digit = n % 10;
        // if curr digit is > largest then move largest to second largest and assign curr digit to largest
        if(digit > largest){
            secondLargest = largest;
            largest = digit;
        }
        // if curr digit is < largest but > second largest assign curr digit to second largest
        else if(digit > secondLargest){
            secondLargest = digit;
        }
        // assign the number to move to the next digit
        n = Math.trunc(n / 10);
    }
    // return the product of the largest and second largest
    return largest * secondLargest;
};
// console.log(maxProduct(31), 3);
// console.log(maxProduct(22), 4);
// console.log(maxProduct(124), 8);
// console.log(maxProduct(100), 0);
// console.log(maxProduct(998), 81);