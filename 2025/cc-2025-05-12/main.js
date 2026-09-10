// given a string of text, words made up of only lowercase english letters with one space between as a delimiter(no trailing or leading spaces)
// given a broken letters string that contains only the distinct characters that cannot be used by the keyboard, lowercase english letters only
// return the number of words in the text string that can be typed properly from the keyboard
/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
function canBeTypedWords(text, brokenLetters){
    // initialize a count
    let count = 0;
    const badLetters = new Set(brokenLetters);
    // scan through the text into each individual word
    const words = text.split(' ');
    for(const word of words){
        // check if all the letters in that word cannot be found in broken letters
        let canType = true;
        for(const letter of word){
            if(badLetters.has(letter)){
                canType = false;
                break;    
            }
        }
        // if so then we increment the count
        if(canType){count++;}
    }
    // return the count
    return count;
};
console.log(canBeTypedWords("hello world","ad"), 1);
console.log(canBeTypedWords("leet code","lt"), 1);
console.log(canBeTypedWords("leet code","e"), 0);