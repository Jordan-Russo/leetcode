// url: https://leetcode.com/problems/number-of-valid-words-in-a-sentence/description/

/**
 * @param {string} sentence
 * @return {number}
 */
function countValidWords(sentence){
    // initialize a current token
    let currentToken = '';
    // initialize a word count
    let count = 0;
    // loop through the sentence
    for(const char of sentence){
        // if character is a space, check if the current token is valid
        if(char === ' '){
            // if so 
                // increment word count
            if(isValidWord(currentToken)){
                count++;
            }
            // then reset the current token to an empty string
            currentToken = '';
        }
        // if character is not a space
        else{
            // add it to current token
            currentToken += char;
        }
    }
    // check and process the final token
    if(isValidWord(currentToken)){
        count++;
    }
    // return word count
    return count;
};
function isValidWord(word){
    if(word.length < 1){return false}
    // make a token verifier
        // word can only contain
    let hasHyphen = false;
    for(let i = 0; i < word.length; i++){
        const isLowerCase = word[i] <= 'z' && word[i] >= 'a';
        const isPunctuation = char => '!.,'.includes(char);
        const isHyphen = word[i] === '-';
        if(isLowerCase){continue}
        if(isPunctuation(word[i]) && i === word.length - 1){continue}
        if(isHyphen && !hasHyphen && i !== 0 && i !== word.length - 1 && !isPunctuation(word[i + 1])){
            hasHyphen = true;
            continue;
        }
        return false;
    } 
    return true;
            // lowercase letters
            // hyphen (one at most, CANNOT be the first or last character in the token)
            // punctuation  marks (!.,) (one at most and last character)
        // if any of those rules broken return false, otherwise return true
}