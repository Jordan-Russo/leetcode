/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    let revisedParagraph = '';
    for(let i = 0; i < paragraph.length; i++){
        let char = paragraph[i].toLowerCase();
        const isValid = char === ' ' || (char <= 'z' && char >= 'a');
        if(!isValid){char = ' '}
        if(char === ' ' && revisedParagraph.at(-1) === ' '){continue}
        // prevents 2+ spaces
        revisedParagraph += char
    }
    // split the paragraph into words
    // make a cache of the words
    console.log(revisedParagraph)
    const words = revisedParagraph.trim().split(' ');
    const cache = {};
    for(const word of words){
        cache[word] = cache[word] + 1 || 1;
    }
    let mostCommon = '';
    let unbannedFrequency = 0;
    for(const word in cache){
        if(banned.includes(word)){continue}
        if(cache[word] > unbannedFrequency){
            unbannedFrequency = Math.max(unbannedFrequency, cache[word]);
            mostCommon = word;
        }
    }
    return mostCommon;
};