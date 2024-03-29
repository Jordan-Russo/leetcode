// url: https://leetcode.com/problems/string-to-integer-atoi/
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    s = s.trimStart()
    let parsedStr = ''
    let i = 0
    let hasSign = false
    if(s[0] === '+' || s[0] === '-'){
        parsedStr += s[0]
        hasSign = true
        i++
    }
    while(i < s.length){
        const char = s[i]
        const isNumber = char > 0 && char <= 9 || char === '0'
        // check current character
        // if it's a number
        // add to parsedStr
        // otherwise
            // return the parsedStr
        if(isNumber){
            parsedStr += char
        }else{
            break;
        }
        i++
    }
    // edge case of only a sign present and no other numbers
    if(parsedStr.length === 1 && hasSign){
        parsedStr = ''
    }
    let number = Number(parsedStr)
    const isPositive = number > 0
    if(isPositive){
        number = Math.min(number, 2**31 - 1)
    }else{
        number = Math.max(number, Math.pow(-2, 31))
    }
    return number
};