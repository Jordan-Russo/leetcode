/**
 * @param {string[]} words
 * @return {number}
 */
var similarPairs = function(words) {
    let count = 0;
    for(let i = 0; i < words.length; i++){
        for(let j = i + 1; j < words.length; j++){
            const a = new Set(words[i]);
            const b = new Set(words[j]);
            if(a.size !== b.size){continue}
            let isSimilar = true;
            for(const char of a){
                if(b.has(char) === false){
                    isSimilar = false;
                    break;
                }
            }
            if(isSimilar){
                count++;
            }
        }
    }
    return count;
};