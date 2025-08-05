/**
 * @param {number} n
 * @return {boolean}
 */
function digitSum(n){
    let sum = 0;
    while(n !== 0){
        const digit = n % 10;
        sum += digit;
        n = Math.trunc(n / 10)
    }
    return sum;
}
function digitProduct(n){
    let product = 1;
    while(n !== 0 && product !== 0){
        const digit = n % 10;
        product *= digit;
        n = Math.trunc(n / 10);
    }
    return product;
}
function checkDivisibility(n){
    return n % (digitProduct(n) + digitSum(n)) === 0;
};