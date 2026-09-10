// url: https://leetcode.com/problems/prime-number-of-set-bits-in-binary-representation/
/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
// given two positive integers, left and right, where left <= right
// count within the range of [left, right] (inc.)
// return an integer count of how many numbers in that range have a set bit count that is a prime number
function countSetBits(num){
    let count = 0;
    num = num.toString(2);
    for(const digit of num){
        if(digit === '1'){count++}
    }
    return count;
}
function isPrime(num){
    if(num === 1){return false}
    const sqrt = Math.sqrt(num);
    // if it's only divisible by 1 and itself
    for(let i = 2; i <= sqrt; i++){
    // loop through 2 to the square root of the number (inc.) and check if any of those values can evenly divide the number
        if(num % i === 0){return false}
        // if any are so return true
    }
    // otherwise return true
    return true;
}
function countPrimeSetBits(left, right){
    // initialize primeSetBitCount
    let count = 0;
    // loop from left to right (inc.)
    for(let i = left; i <= right; i++){
        // check the set bits of the number
        const setBits = countSetBits(i);
        // check if the set bit count is prime
        if(isPrime(setBits)){count++}
            // if so increment count
    }
    // return primeSetBitCount
    return count;
};
// console.log(countPrimeSetBits(6,10), 4);
// console.log(countPrimeSetBits(10,15), 5);