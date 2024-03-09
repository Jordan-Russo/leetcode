// url: https://leetcode.com/problems/find-smallest-letter-greater-than-target/

// Given an array of letters (lowercase) that is already sorted in a non-decreasing order
    // array will at minimum have a length of 2 characters
// also given a character target
// Return the smallest character in letters that comes after the target
    // if one doesn't exist return the first characterof the letters array instead

// Example 1:

// Input: letters = ["c","f","j"], target = "a"
// Output: "c"
// Explanation: The smallest character that is lexicographically greater than 'a' in letters is 'c'.
// Example 2:

// Input: letters = ["c","f","j"], target = "c"
// Output: "f"
// Explanation: The smallest character that is lexicographically greater than 'c' in letters is 'f'.
// Example 3:

// Input: letters = ["x","x","y","y"], target = "z"
// Output: "x"
// Explanation: There are no characters in letters that is lexicographically greater than 'z' so we return letters[0]. 

/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let smallestLetterGreaterThanTarget = ''
    // initialize smallestLetter
    // loop through the letters
    for(let i = 0; i < letters.length; i++){
        const curr = letters[i]
        // if greater than target
        if(curr > target){
            // if none or if less than prev
            if(!smallestLetterGreaterThanTarget || curr < smallestLetterGreaterThanTarget){
                smallestLetterGreaterThanTarget = curr
                // set as smallest letter
            }
        }   
    }
    return smallestLetterGreaterThanTarget || letters[0] 
    // return smallest letter or first letter
};