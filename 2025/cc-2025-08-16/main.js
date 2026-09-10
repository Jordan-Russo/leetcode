/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function(words) {
    const characterCache = {};
    for(const word of words){
        for(const char of word){
            characterCache[char] = characterCache[char] + 1 || 1;
        }
    }
    for(const key in characterCache){
        const val = characterCache[key];
        const isDivisible = val % words.length === 0;
        if(!isDivisible){return false}
    }
    return true;
};