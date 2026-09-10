// url: https://leetcode.com/problems/check-if-word-equals-summation-of-two-words/
// takes in three strings
/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
const isSumEqual = function(firstWord, secondWord, targetWord) {
    // helper function that can takes a word and returns a number
    const getScore = s => {
        // initialize a number at 0
        let score = 0;
        // loop through the characters
        for(const char of s){
            // number * 10
            score *= 10;
            // add the character's value in
            score += char.charCodeAt(0) - 97; 
        }
        // return the number
        return score;
    }
    // return whether or not the number for firstword + number for second word is equal to the number for target word
    return getScore(firstWord) + getScore(secondWord) === getScore(targetWord);
};
// console.log(isSumEqual('acb', 'cba', 'cdb'), true);
// console.log(isSumEqual('aaa', 'a', 'aab'), false);
// console.log(isSumEqual('aaa', 'a', 'aaaa'), true);