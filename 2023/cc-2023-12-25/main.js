// url: https://leetcode.com/problems/roman-to-integer/
/**
 * @param {string} s
 * @return {number}
 */
const symbols = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
}
const specialSymbols = {
    'IV': 4,
    'IX': 9,
    'XL': 40,
    'XC': 90,
    'CD': 400,
    'CM': 900
}
var romanToInt = function(s) {
    let number = 0
    // the romans never had a number for 0.
    let pos = 0
    while(pos < s.length){
        const isSpecial = s.slice(pos, pos + 2) in specialSymbols
        number += isSpecial ? specialSymbols[s.slice(pos, pos + 2)] : symbols[s[pos]]
        pos += isSpecial ? 2 : 1
    }
    return number
};