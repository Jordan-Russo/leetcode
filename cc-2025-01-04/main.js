// url: https://leetcode.com/problems/count-the-number-of-special-characters-i/
// given a string of letters that are lower and uppercase
// return a count of the number of letters that can be found as both upper and lower case within the string
// for a number to be counted a letter must exist in the given string in its lower and upper case.
/**
 * @param {string} word
 * @return {number}
 */
function numberOfSpecialChars(word){
    // create a set for lowercase characters
    const lowerCaseLetters = new Set()
    // create a set for uppercase characters
    const upperCaseLetters = new Set()
    // loop through the letters in the word
    for(const letter of word){
        // if the letter is lowercase, add to lowercase set   
        if(letter === letter.toLowerCase()){lowerCaseLetters.add(letter)}
        // if the letter is uppercase, add to uppercase set   
        if(letter === letter.toUpperCase()){upperCaseLetters.add(letter)}
    }
    // initialize special character count as 0
    let count = 0
    // loop through either one the sets
    for(const letter of lowerCaseLetters){
        // check if the character exists in the other set in the opposite casing
        if(upperCaseLetters.has(letter.toUpperCase())){count++}
        // if so increment the special character count
    }
    // return the special character count
    return count
};
// console.log(numberOfSpecialChars('aaAbcBC'), 3)
// console.log(numberOfSpecialChars('abc'), 0)
// console.log(numberOfSpecialChars('abBCab'), 1)