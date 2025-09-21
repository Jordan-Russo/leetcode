/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    const string = n.toString(2);
    for(let i = 1; i < string.length; i++){
        if(string[i] === string[i - 1]){return false}
    }
    return true;
};