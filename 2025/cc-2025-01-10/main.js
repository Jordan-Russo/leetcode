// url: https://leetcode.com/problems/shifting-letters/
// You are given a string s of lowercase English letters and an integer array shifts of the same length.

// Call the shift() of a letter, the next letter in the alphabet, (wrapping around so that 'z' becomes 'a').

//     For example, shift('a') = 'b', shift('t') = 'u', and shift('z') = 'a'.

// Now for each shifts[i] = x, we want to shift the first i + 1 letters of s, x times.

// Return the final string after all such shifts to s are applied.

 

// Example 1:

// Input: s = "abc", shifts = [3,5,9]
// Output: "rpl"
// Explanation: We start with "abc".
// After shifting the first 1 letters of s by 3, we have "dbc".
// After shifting the first 2 letters of s by 5, we have "igc".
// After shifting the first 3 letters of s by 9, we have "rpl", the answer.

// Example 2:

// Input: s = "aaa", shifts = [1,2,3]
// Output: "gfd"

/**
 * @param {string} s
 * @param {number[]} shifts
 * @return {string}
 */
function shiftingLetters(s, shifts){
    const netShifts = new Array(shifts.length)
    let currShift = 0
    for(let i = shifts.length - 1; i >= 0; i--){
        currShift += shifts[i]
        netShifts[i] = currShift
    }
    let shiftS = ''
    for(let i = 0; i < s.length; i++){
        // add character code from 'a' to the shift
        netShifts[i] += s[i].charCodeAt(0) - 97
        // modulo the shift position
        netShifts[i] %= 26
        // use the new offset to determine new character
        shiftS += (String.fromCharCode(netShifts[i] + 97))
    }
    return shiftS
};