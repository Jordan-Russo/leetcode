// url: https://leetcode.com/problems/count-the-number-of-special-characters-ii/
/**
 * @param {string} word
 * @return {number}
 */
// given a string, always composed only of english characters in lower and uppercase
// return a number of all the characters that are special
// special letters have both lower and upper case version of their letter in the word
// special letters also always have their last lowercase letter appear before their first uppercase letter

function numberOfSpecialChars(word){
    // create a set for lowercase characters
    const lowerCaseLetters = new Set()
    // create a set for uppercase characters
    const upperCaseLetters = new Set()
    // loop through the letters in the word
    const occurancePosition = {}
    for(let i = 0; i < word.length; i++){
        const letter = word[i]
        // if the letter is lowercase, add to lowercase set
        if(letter === letter.toLowerCase()){
            lowerCaseLetters.add(letter)
        // record latest occurance position for lower case letters
            occurancePosition[letter] = i
        }
        // if the letter is uppercase, add to uppercase set   
        if(letter === letter.toUpperCase()){
            upperCaseLetters.add(letter)
        // record earliest occurance position for upper case letters
            if(occurancePosition[letter] === undefined){occurancePosition[letter] = i}
        }
    }
    // initialize special character count as 0
    let count = 0
    // loop through either one the sets
    for(const letter of lowerCaseLetters){
        // check if the character exists in the other set in the opposite casing
        // check if occurance of lowercase is smaller than occurance of uppercase
        const upperChar = letter.toUpperCase()
        if(!upperCaseLetters.has(upperChar)){continue}
        if(occurancePosition[letter] > occurancePosition[upperChar]){continue;}
        count++
        // if so increment the special character count
    }
    // return the special character count
    return count
};
// console.log(numberOfSpecialChars('aaAbcBC'), 3)
// console.log(numberOfSpecialChars('abc'), 0)
// console.log(numberOfSpecialChars('abBCab'), 0)