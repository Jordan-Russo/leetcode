/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function(licensePlate, words) {
    // transform the license plate so that it is lower case
    licensePlate = licensePlate.toLowerCase();
    const licenseCache = {};
    for(const char of licensePlate){
        const isLetter = char >= 'a' && char <= 'z';
        if(isLetter){
            licenseCache[char] = licenseCache[char] + 1 || 1;
        }
    }
    // record all of the letters (not characters; letter >= 'a' && letter <= 'z') and their count in a cache
    let shortestWord;
    // loop through all of the words
    for(const word of words){
        // check if each word is completing
        if(isCompleting(word)){
            // if so and its length is smaller then the current shortest length
            if(!shortestWord || shortestWord.length > word.length){
                // reassign the word (maybe 2 variables one for word length one for the word itself...?)
                shortestWord = word;
            }
        }
    }
    return shortestWord;
    // return the shortest completing word

    // completing function checklist:
    function isCompleting(word){
        // build a cache for the characters in the word
        const wordCache = {};
        for(const letter of word){
            wordCache[letter] = wordCache[letter] + 1 || 1;
        }
        // loop through the keys within the licenseCache
        for(const letter in licenseCache){
            // if any of the keys are not found within the word
            // OR, if any of the values in the licensePlate cache are greater then the word cache
                // return false
            if(!wordCache[letter] || licenseCache[letter] > wordCache[letter]){
                return false;
            }
        }
        // return true
        return true;
    }
};