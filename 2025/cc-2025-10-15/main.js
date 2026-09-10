/**
 * @param {string[]} words
 * @return {string}
 */
function oddString(words) {
    const differenceCache = {};
    for(const word of words){
        let differenceArray = [];
        for(let i = 1; i < word.length; i++){
            const prev = word[i - 1];
            const curr = word[i];
            const difference = prev.charCodeAt(0) - curr.charCodeAt(0);
            differenceArray.push(difference);
        }
        const key =  differenceArray.toString();
        differenceCache[key] = differenceCache[key] + 1 || 1;
    }
    let targetKey;
    for(const key in differenceCache){
        if(differenceCache[key] === 1){
            targetKey = key;
        }
    }
    for(const word of words){
        let differenceArray = [];
        for(let i = 1; i < word.length; i++){
            const prev = word[i - 1];
            const curr = word[i];
            const difference = prev.charCodeAt(0) - curr.charCodeAt(0);
            differenceArray.push(difference);
        }
        const key =  differenceArray.toString();
        if(key === targetKey){return word}
    }
};