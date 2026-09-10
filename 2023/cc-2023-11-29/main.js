// url: https://leetcode.com/problems/minimum-window-substring/

// given two strings, s and t

// return the minimum window substring
    // aka the smallest string that exists in t that contains every character (and their count) within s.
    // if s doesn't contain all of the characters in t, or doesn't contain enough of the characters in t, return an empty string

// Example 1:
// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

// Example 2:
// Input: s = "a", t = "a"
// Output: "a"
// Explanation: The entire string s is the minimum window.

// Example 3:
// Input: s = "a", t = "aa"
// Output: ""
// Explanation: Both 'a's from t must be included in the window.
// Since the largest window of s only has one 'a', return empty string.

// initialize a datastructure, characterMap, a Map that takes in t
    // consists of all the characters in t and their count

// initialize a new datastruture that counts the current amount of those characters as we loop through s within our substring

// initialize start pointer at 0

// initialize minimumString as ''

// initialize completedCharacters at 0

// one cache to state what I need

// another cache to state how much more I need.

// loop through all the characters in s
    // if character is in the Map
        // decrement the value in how much we need


    // if character is not in the Map
        // if uniqueRequiredCharacterCount is 0
            // move the start to the next character
        // else 
            // continue
// return minimumString

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    const characterMap = new Map()
    for(const char of t){
        if(!characterMap.get(char)){
            characterMap.set(char, 0)
        }
        characterMap.set(char, characterMap.get(char) + 1)
    }
    const requiredCharacters = {}
    for(const [key, value] of characterMap){
        requiredCharacters[key] = value
    }
    let uniqueRequiredCharacterCount = 0
    let uniqueRequiredCompletedCharacterCount = 0
    let start = 0
    let minimumString = ''

    for(let i = 0; i < s.length; ++i){
        const curr = s[i]
        if(characterMap.has(curr)){
            if(characterMap.get(curr) === requiredCharacters[curr]){
                // if we're getting the first of that character
                // increment uniqueChars
                uniqueRequiredCharacterCount++
            }
            requiredCharacters[curr]--
            if(requiredCharacters[curr] === 0){
                uniqueRequiredCompletedCharacterCount++
            }
            if(uniqueRequiredCompletedCharacterCount === characterMap.size){
                // while the start has requires that is not greater than or equal to 0
                    // if map has the character
                        // increment its required amount
                    // increment start position
                while(requiredCharacters[s[start]] >= 0 === false){
                    if(characterMap.has(s[start])){
                        requiredCharacters[s[start]]++
                    }
                    start++
                }
                const currentString = s.slice(start, i + 1);
                minimumString ||= currentString
                if(currentString.length < minimumString.length){
                    minimumString = currentString
                }
            }
        }else{
            if(uniqueRequiredCharacterCount === 0){
                start = i + 1
            }
        }
    }
    return minimumString
};