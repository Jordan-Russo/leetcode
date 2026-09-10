/**
 * @param {string} s
 * @return {number}
 */
var firstMatchingIndex = function(s) {
    for(let i = 0; i < s.length; i++){
        if(s[i] === s[s.length - 1 - i]){return i}
    }
    return -1;
};