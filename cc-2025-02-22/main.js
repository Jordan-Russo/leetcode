// url: https://leetcode.com/problems/smallest-divisible-digit-product-i/
// given two integers, n and t
// return the first integer >= n 
    // and its digit product is divisible by t
/**
 * @param {number} n
 * @param {number} t
 * @return {number}
 */
const digitProduct = n => {
    let product = 1;
    while(n > 0){
        const digit = n % 10;
        if(digit === 0){return 0}
        // if digit is 0, return 0
        product *= digit;
        n = Math.trunc(n / 10);
    }
    return product;
} 
const smallestNumber = function(n, t) {
    // start looping from n
    while(n <= 100){
        // find digit product
        const product = digitProduct(n);
        // if digit product is divisible by t
        if(product % t === 0){
            return n
        }
        // increment n and loop again
        n++;
    }
};
// console.log(smallestNumber(10,2), 10);
// console.log(smallestNumber(15, 3), 16);