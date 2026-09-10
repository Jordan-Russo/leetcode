/**
 * @param {string[]} words
 * @param {number[]} weights
 * @return {string}
 */
// given an array of strings, each being composed of only lowercase english letters
// for each word find the sum of its letter weight sum and then modulo it to find the word's reverse alphabetical letter using the index position
// combine and return each of the resulting letters in order
var mapWordWeights = function(words, weights) {
    let result = '';
    for(const word of words){
        let totalWeight = 0;
        for(const letter of word){
            // find letter index
            const index = letter.charCodeAt(0) - 97
            // add weight value of the letter index
            totalWeight += weights[index];
        }
        const alphabetIndex = 97 + 25 - (totalWeight % 26);
        result += String.fromCharCode(alphabetIndex);
    }
    return result;
};