/**
 * @param {string} s
 * @return {boolean}
 */
var isAdjacentDiffAtMostTwo = function(s) {
    for(let i = 1; i < s.length; i++){
        const diff = Math.abs(Number(s[i]) - Number(s[i - 1]));
        if(diff > 2){return false}
    }
    return true;
};