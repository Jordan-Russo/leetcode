// url: https://leetcode.com/problems/buddy-strings/
// Given two strings s and goal, return true if you can swap two letters in s so the result is equal to goal, otherwise, return false.

// Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at s[i] and s[j].

// For example, swapping at indices 0 and 2 in "abcd" results in "cbad".

// Example 1:

// Input: s = "ab", goal = "ba"
// Output: true
// Explanation: You can swap s[0] = 'a' and s[1] = 'b' to get "ba", which is equal to goal.
// Example 2:

// Input: s = "ab", goal = "ab"
// Output: false
// Explanation: The only letters you can swap are s[0] = 'a' and s[1] = 'b', which results in "ba" != goal.
// Example 3:

// Input: s = "aa", goal = "aa"
// Output: true
// Explanation: You can swap s[0] = 'a' and s[1] = 'a' to get "aa", which is equal to goal.

/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */

// Return if two strings have the same characters and frequency with no more then two character index mismatches
// however if indentical, both strings must have at least one character with a frequency greater than 1 (or just a single character).
var buddyStrings = function(s, goal) {
    if(s.length !== goal.length){
        return false
    }
    const goalCache = {}
    for(const char of goal){
        goalCache[char] ??= 0
        goalCache[char]++
    }
    const sCache = {}
    for(const char of s){
        sCache[char] ??= 0
        sCache[char]++
    }
    // to swap two characters and have the string work
    // s and goal has to have the same length
    // both to have all the same characters & freq
    for(const char in goalCache){
        if(goalCache[char] !== sCache[char]){
            return false
        }
    }
    // find number of mismatches
    // find if chars are all distinct
    let mismatchCount = 0
    const mismatchPositions = []
    for(let i = 0; i < s.length; i++){
        if(s[i] !== goal[i]){
            mismatchPositions.push(i)
            mismatchCount++
        }
        if(mismatchCount > 2){
            return false
        }
    }
    if(mismatchCount === 0){
        return s.length !== new Set(s).size
    }
    return true
    // has to have no more than 2 mismatches between each other
    // if equal but has all distinct characters return false
};