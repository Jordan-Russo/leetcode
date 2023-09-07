// url: https://leetcode.com/problems/check-if-the-sentence-is-pangram/

/**
 * @param {string} sentence
 * @return {boolean}
 */

// given a string that has a length in between 1 and 1000 characters.
    // characters are going to be solely lowercase English letters.
// return whether or not every letter appears at least once in the string.

// there are 26 letters in the alphabet so that's how many unique characters we're looking for.
// we can make a set and add each character in the string to the set.
// a set cannot store copies of a character
// if the size of the set is 26 return as true.
// otherwise return as false.

function checkIfPangram(sentence){
    const uniqueCount = new Set([...sentence]).size;
    return uniqueCount.size === 26;
};


// optimize it so it leaves early when possible
function checkIfPangram(sentence){
    const uniqueCount = new Set();
    for(const char of sentence){
        uniqueCount.add(char);
        if(uniqueCount.size === 26){return true}
        // check size of set if 26 return true
    }
    return false;
    // return false
}

// without a set this time.
function checkIfPangram(str){
    const uniques = {size: 0};
    for(const char of str){
        if(char in uniques){continue}
        uniques[char] ??= null;
        uniques['size']++;
        if(uniques.size === 26){return true}
    }
    return false;
}