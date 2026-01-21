/**
 * @param {string} word
 * @return {number}
 */
const isNumber = char => char >= '0' && char <= '9';
var numDifferentIntegers = function(word) {
    const seen = new Set();
    let current = '';
    for(let i = 0; i < word.length; i++){
        if(isNumber(word[i])){
            current += word[i];
            if(current.length === 2 && current[0] === '0'){current = current[1]};
            if(!isNumber(word[i + 1])){
                seen.add(current);
                current = ''
            }
        }
            
    }
    return seen.size;
};