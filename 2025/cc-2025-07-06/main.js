/**
 * @param {number} n
 * @return {boolean}
 */
var isStrictlyPalindromic = function(n) {
    for(let i = 2; i + 2 <= n; i++){
        const baseString = n.toString(i);
        const half = baseString.length / 2;
        for(let j = 0; j <= half; j++){
            if(baseString[j] !== baseString[baseString.length - 1 - j]){return false}
        }
    }
    return true
};