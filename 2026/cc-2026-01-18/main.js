/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function(sequence, word) {
    let max = 0;
    for(let i = 0; i < sequence.length + 1 - word.length; i++){
        let count = 0;
        for(let j = i; j < sequence.length; j += word.length){
            if(word !== sequence.slice(j, j + word.length)){break}
            count++;
            max = Math.max(max, count);
        }
    }
    return max;
};