/**
 * @param {string} s
 * @return {boolean}
 */
var isSubstringPresent = function(s) {
    let pairs = new Set();
    for(let i = 0; i < s.length - 1; i++){
        const pair = s[i] + s[i + 1];
        pairs.add(pair);
    }
    for(let i = s.length - 1; i > 0; i--){
        const pair = s[i] + s[i - 1];
        if(pairs.has(pair)){return true}
    }
    return false;
};