/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPrimeFrequency = function(nums) {
    const cache = {};
    for(const num of nums){
        cache[num] = cache[num] + 1 || 1;
    }
    return Object.values(cache).some(isPrime);
};
function isPrime(n){
    if(n < 2){return false}
    const sqrt = Math.floor(Math.sqrt(n));
    for(let i = 2; i <= sqrt; i++){
        const isDivisible = n % i === 0;
        if(isDivisible){return false}
    }
    return true;
}