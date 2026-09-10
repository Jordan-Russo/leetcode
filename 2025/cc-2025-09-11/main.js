/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function(text, first, second) {
    const words = text.split(' ');
    const occurrences = [];
    for(let i = 2; i < words.length; i++){
        if(words[i - 2] === first && words[i - 1] === second){
            occurrences.push(words[i]);
        }
    }
    return occurrences;
};