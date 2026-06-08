/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumOfGoodIntegers = function(n, k) {
    const start = Math.max(0, n - k);
    const end = n + k;
    let sum = 0;
    for(let i = start; i <= end; i++){
        if((i & n) === 0){sum += i}
    }
    return sum;
};