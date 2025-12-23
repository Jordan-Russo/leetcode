/**
 * @param {string} s
 * @return {string}
 */
var findValidPair = function(s) {
    // make a frequency cache of every digit
    const cache = {};
    for(const char of s){
        cache[char] = cache[char] + 1 || 1;
    }
    // loop through each adjacent pair and loop for a pair that
    for(let i = 1; i < s.length; i++){
        const prev = s[i - 1];
        const curr = s[i];
        if(prev === curr){continue}
        if(cache[prev] !== Number(prev) || cache[curr] !== Number(curr)){continue}
        return prev + curr;
    }
        // has 2 different digits
        // each digit is equal to its frequency in the string
        // if it matches both return the first valid pair
    // otherwise if no match is found return an empty string
    return '';
};