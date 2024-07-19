// url: https://leetcode.com/problems/backspace-string-compare/
// Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

// Note that after backspacing an empty text, the text will continue empty.

 

// Example 1:

// Input: s = "ab#c", t = "ad#c"
// Output: true
// Explanation: Both s and t become "ac".

// Example 2:

// Input: s = "ab##", t = "c#d#"
// Output: true
// Explanation: Both s and t become "".

// Example 3:

// Input: s = "a#c", t = "b"
// Output: false
// Explanation: s becomes "c" while t becomes "b".

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let sPos = s.length - 1
    let tPos = t.length - 1
    let sBackspaces = 0
    let tBackspaces = 0
    while(sPos >= 0 || tPos >= 0){
        if(s[sPos] === '#'){
            do{
                if(s[sPos] === '#'){
                    sBackspaces += 2
                }
                sBackspaces--
                sPos--
            }while(sBackspaces > 0 || s[sPos] === '#')
        }
        if(t[tPos] === '#'){
            do{
                if(t[tPos] === '#'){
                    tBackspaces += 2
                }
                tBackspaces--
                tPos--
            }while(tBackspaces > 0 || t[tPos] === '#')
        }
        if(s[sPos] !== t[tPos]){
            return false
        }
        tPos--
        sPos--
    // read right to left
    // have a backspace counter that increases when it meets backspaces and decreases by 1 to 0 when it doesn't
    // if left and right character aren't equal when backspace counter is 0, return false
    }
    return true
    // return true
};