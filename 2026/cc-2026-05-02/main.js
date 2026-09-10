/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
var isPrefixString = function(s, words) {
    let match = '';
    for(const word of words){
        match += word
        if(match.length >= s.length){break}
    }
    return match === s;
};