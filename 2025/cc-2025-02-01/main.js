// url: https://leetcode.com/problems/find-common-characters/
// given a string array of english lowercase words
// return an array that contains all the shared characters (duplicates included) that can be found in each word.
/**
 * @param {string[]} words
 * @return {string[]}
 */
function commonChars(words){
    // break down what a word has, quantity of characters
    const commonCharCache = wordCharacterFrequencyCache(words[0]);
    // find the characters that are the same between two strings
    // loop through the words, keeping track of what can be found in common
    for(let i = 1; i < words.length; i++){
        const currCharCache = wordCharacterFrequencyCache(words[i]);
        // compare the two caches
        // loop through the keys in the commonCharCache
        for(const char in commonCharCache){
            // compare each key to the curr cache
            if(!currCharCache[char]){
            // if the key doesn't exist in the curr cache, delete it from the common cache
                delete commonCharCache[char];
            }else{
            // if it exists, assign the minimum between both caches to the common cache
                commonCharCache[char] = Math.min(currCharCache[char], commonCharCache[char]);
            }
        }
    }
    // use all the commonly found letters to create a new array
    const result = [];
    for(const char in commonCharCache){
        for(let i = 0; i < commonCharCache[char]; i++){
            result.push(char);
        }
    }
    // return an array of commonly found letters
    return result;
};
function wordCharacterFrequencyCache(word){
    const cache = {};
    for(const char of word){
        cache[char] = cache[char] + 1 || 1;
    }
    return cache;
}
// console.log(commonChars(["bella","label","roller"]), ['e','l','l'])
// console.log(commonChars(["cool","lock","cook"]), ['c','o'])