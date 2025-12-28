/**
 * @param {string} word
 * @return {boolean}
 */
var isValid = function(word) {
    // a word is valid if:
    // length >= 3
    if(word.length < 3){return false}
    // only uses digits and letters as characters
    let hasVowel = false;
    let hasConsonant = false;
    // contains at least 1 vowel and 1 consonant
    for(let char of word){
        const isDigit = char <= '9' && char >= '0';
        if(isDigit){continue}
        char = char.toLowerCase();
        const isLetter = char >= 'a' && char <= 'z';
        if(!isLetter){return false}
        const isVowel = ['a','e','i','o','u'].includes(char);
        if(isVowel){
            hasVowel = true;
        }else{
            hasConsonant = true;
        }
    }
    // return whether the word is valid or not as a boolean
    return hasVowel && hasConsonant;
};