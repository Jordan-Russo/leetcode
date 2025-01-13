// url: https://leetcode.com/problems/detect-capital/
// given a string of only english characters, never empty
// return a boolean on whether the given string is properly cased
// properly cased means the word is uppercased, lowercased, or has only its first character uppercased.

/**
 * @param {string} word
 * @return {boolean}
 */
function detectCapitalUse(word){
    // a check that the word is uppercased
    const isUpperCased = word === word.toUpperCase()
    // a check that the word is lowercased
    const isLowerCased = word === word.toLowerCase()
    // a check that the word has only its first character uppercased
    const isFirstWord = word === word.slice(0,1).toUpperCase() + word.slice(1).toLowerCase()
    // return true if any of those checks are met
    return isUpperCased || isLowerCased || isFirstWord
};
// console.log(detectCapitalUse('USA'), true)
// console.log(detectCapitalUse('Flag'), true)
// console.log(detectCapitalUse('FlaG'), false)