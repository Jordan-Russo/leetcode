// make a set of all characters
// loop through all characters (a-z) undercase
    // if they exist check if their respective also exists
    // if higher replace
/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function(s) {
    const chars = new Set(s)
    const aLowerCode = 'a'.charCodeAt(0)
    const aUpperCode = 'A'.charCodeAt(0)
    let greatest = ''
    for(let i = 0; i < 26; i++){
        const lowerCase = String.fromCharCode(aLowerCode + i)
        const upperCase = String.fromCharCode(aUpperCode + i)
        if(chars.has(lowerCase) && chars.has(upperCase)){
            greatest = upperCase
        }
    }
    return greatest
};
// Example 1:

// Input: s = "lEeTcOdE"
// Output: "E"
// Explanation:
// The letter 'E' is the only letter to appear in both lower and upper case.

// Example 2:

// Input: s = "arRAzFif"
// Output: "R"
// Explanation:
// The letter 'R' is the greatest letter to appear in both lower and upper case.
// Note that 'A' and 'F' also appear in both lower and upper case, but 'R' is greater than 'F' or 'A'.

// Example 3:

// Input: s = "AbCdEfGhIjK"
// Output: ""
// Explanation:
// There is no letter that appears in both lower and upper case.