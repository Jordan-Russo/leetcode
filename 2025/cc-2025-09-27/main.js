/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function(num, k) {
    const string = num.toString();
    let count = 0;
    for(let i = 0; i < string.length - k + 1; i++){
        const divisor = parseInt(string.slice(i, i + k));
        if(divisor === 0){continue;}
        if(num % divisor === 0){count++;}
    }
    return count;
};