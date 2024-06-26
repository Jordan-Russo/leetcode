// url: https://leetcode.com/problems/maximum-value-of-a-string-in-an-array/description/
// The value of an alphanumeric string can be defined as:

//     The numeric representation of the string in base 10, if it comprises of digits only.
//     The length of the string, otherwise.

// Given an array strs of alphanumeric strings, return the maximum value of any string in strs.

 

// Example 1:

// Input: strs = ["alic3","bob","3","4","00000"]
// Output: 5
// Explanation: 
// - "alic3" consists of both letters and digits, so its value is its length, i.e. 5.
// - "bob" consists only of letters, so its value is also its length, i.e. 3.
// - "3" consists only of digits, so its value is its numeric equivalent, i.e. 3.
// - "4" also consists only of digits, so its value is 4.
// - "00000" consists only of digits, so its value is 0.
// Hence, the maximum value is 5, of "alic3".

// Example 2:

// Input: strs = ["1","01","001","0001"]
// Output: 1
// Explanation: 
// Each string in the array has value 1. Hence, we return 1.

/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function(strs) {
    let maxLength = 0
    for(const str of strs){
        // if every character is a digit
        let isAllDigit = true
        for(let i = 0; i < str.length; i++){
            const char = str[i]
            if(char >= '0' && char <= '9'){
                continue
            }else{
                isAllDigit = false
                break;
            }

        }
        
        if(isAllDigit){
            maxLength = Math.max(maxLength, Number(str))
        }else{
            maxLength = Math.max(str.length, maxLength)
        }
        
    }
    return maxLength
};