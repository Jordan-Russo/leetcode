/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    // create a set of characters of allowed
    const allowedCharacters = new Set(allowed);
    // initalize counter at 0
    let count = 0;
    // loop through the words
    for(const word of words){
        // find out if all the characters in a word are within the set of allowed characters
        let isAllowed = true;
        for(const char of word){
            if(!allowedCharacters.has(char)){isAllowed = false;}
            if(!isAllowed){break;}
        }
        // if all characters are allowed increment the counter
        if(isAllowed){count++;}
    }
    // return count
    return count;
};