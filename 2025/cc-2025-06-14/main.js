/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
// given an array of strings and strings, chars
    // strings in the array and chars are lowercase english letters
// return the sum of lengths found in the the array of strings that are "good"
    // a good string is a string that can be formed from the letters in chars (quantity matters)
function countCharacters(words, chars){
    // make a frequency cache of the chars string
    const cache = {};
    for(const char of chars){
        cache[char] = cache[char] + 1 || 1;
    }
    // have a sum of good string lengths initialized at 0
    let goodStringsLength = 0;
    // loop through all of the words
    for(const word of words){
        // build a frequency cache of the word
        // loop through the word cache and make sure the chars cache can make that word
            // if any letter cannot be found break from the loop
        // if it can, then push the word's length into the good string length
        goodStringsLength += goodString(word, cache);
    }
    // return the total of good string lengths
    return goodStringsLength;
};
function goodString(word, cache){
    const letters = {};
    for(const letter of word){
        letters[letter] = letters[letter] + 1 || 1;
    }
    for(const letter in letters){
        if(!cache[letter] || cache[letter] < letters[letter]){return 0}
    }
    return word.length;
}
// console.log(countCharacters(["cat","bt","hat","tree"], "atach"), 6);
// console.log(countCharacters(["hello","world","leetcode"], "welldonehoneyr"), 10);