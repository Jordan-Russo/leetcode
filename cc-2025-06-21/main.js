// url: https://leetcode.com/problems/circular-sentence/?
// A sentence is a list of words that are separated by a single space with no leading or trailing spaces.

//     For example, "Hello World", "HELLO", "hello world hello world" are all sentences.

// Words consist of only uppercase and lowercase English letters. Uppercase and lowercase English letters are considered different.

// A sentence is circular if:

//     The last character of each word in the sentence is equal to the first character of its next word.
//     The last character of the last word is equal to the first character of the first word.

// For example, "leetcode exercises sound delightful", "eetcode", "leetcode eats soul" are all circular sentences. However, "Leetcode is cool", "happy Leetcode", "Leetcode" and "I like Leetcode" are not circular sentences.

// Given a string sentence, return true if it is circular. Otherwise, return false.
/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function(sentence) {
    const words = sentence.split(' ');
    for(let i = 1; i < words.length; i++){
        const prev = words[i - 1];
        const curr = words[i];
        if(prev[prev.length - 1] !== curr[0]){return false}
    }
    // last of the lastword is equal to the start of the first word
    return words[0][0] === words.at(-1).at(-1);
};
// Example 1:

// Input: sentence = "leetcode exercises sound delightful"
// Output: true
// Explanation: The words in sentence are ["leetcode", "exercises", "sound", "delightful"].
// - leetcode's last character is equal to exercises's first character.
// - exercises's last character is equal to sound's first character.
// - sound's last character is equal to delightful's first character.
// - delightful's last character is equal to leetcode's first character.
// The sentence is circular.

// Example 2:

// Input: sentence = "eetcode"
// Output: true
// Explanation: The words in sentence are ["eetcode"].
// - eetcode's last character is equal to eetcode's first character.
// The sentence is circular.

// Example 3:

// Input: sentence = "Leetcode is cool"
// Output: false
// Explanation: The words in sentence are ["Leetcode", "is", "cool"].
// - Leetcode's last character is not equal to is's first character.
// The sentence is not circular.