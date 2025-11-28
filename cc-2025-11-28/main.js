/**
 * @param {number} n
 * @return {number}
 */
var numPrimeArrangements = function(n){
    let primeCount = 0;
    // loop through 1 to n (inclusive)
    for(let i = 1; i <= n; i++){
        // check each number if prime
        // if so keep count
        if(isPrime(i)){primeCount++}
    }
    // run factorialModulo on both the prime count as well as n - prime count
    const primeCombinations = factorialModulo(primeCount);
    const nonPrimeCombinations = factorialModulo(n - primeCount);
    // take the product of both of those combinations (modulo'd)
    const productModulo = Number(BigInt(primeCombinations) * BigInt(nonPrimeCombinations) % BigInt(1e9 + 7));
    // introduce bigInt or use binary multiplication with progressive modulos
        // # of combinations of primes
        // # of combinations of non-primes
    // return the modulo of that product
    return productModulo;
};
function factorialModulo(n, divisor = 1e9 + 7){
    if(n < 2){return 1}
    return (n * factorialModulo(n - 1, divisor)) % divisor;
}
function isPrime(n){
    if(n === 1){return false}
    if(n < 4){return true}
    const sqrt = Math.sqrt(n);
    for(let i = 2; i <= sqrt; i++){
        const isDivisible = n % i === 0;
        if(isDivisible){return false}
    }
    return true;
}