// url: https://leetcode.com/problems/faulty-keyboard/

// Given a string

// return the string 
// whenever given i, reverse the previous characters in the string
// i isn't added to the string

// Example 1:
// Input: s = "string"
// Output: "rtsng"
// Explanation: 
// After typing first character, the text on the screen is "s".
// After the second character, the text is "st". 
// After the third character, the text is "str".
// Since the fourth character is an 'i', the text gets reversed and becomes "rts".
// After the fifth character, the text is "rtsn". 
// After the sixth character, the text is "rtsng". 
// Therefore, we return "rtsng".

// Example 2:
// Input: s = "poiinter"
// Output: "ponter"
// Explanation: 
// After the first character, the text on the screen is "p".
// After the second character, the text is "po". 
// Since the third character you type is an 'i', the text gets reversed and becomes "op". 
// Since the fourth character you type is an 'i', the text gets reversed and becomes "po".
// After the fifth character, the text is "pon".
// After the sixth character, the text is "pont". 
// After the seventh character, the text is "ponte". 
// After the eighth character, the text is "ponter". 
// Therefore, we return "ponter".

// 

/**
 * @param {string} s
 * @return {string}
 */
var finalString = function(s) {
    let string = ''
    let revString = ''
    for(const char of s){
        if(char === 'i'){
            temp = revString
            revString = string
            string = temp
        }else{
            string += char
            revString = char + revString
        }
    }
    return string;
};