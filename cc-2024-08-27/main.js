// url: https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/
// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

 

// Example 1:

// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

// Example 2:

// Input: digits = ""
// Output: []

// Example 3:

// Input: digits = "2"
// Output: ["a","b","c"]

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const results = []
    const cache = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
    }
    combinations(0, '')
    return results
    function combinations(pos, str){
        if(str.length === digits.length){
            if(str){
                results.push(str)
            }
            return
        }
        for(let i = 0; i < cache[digits[pos]].length; i++){
            combinations(pos + 1, str + cache[digits[pos]][i])
        }
    }
};