// url: https://leetcode.com/problems/uncommon-words-from-two-sentences/description/
// given two strings of lowercase words separated by spaces
// return an array that contains all the "uncommon" words
// uncommon -> appears only once when you combine the two strings
// uncommon words can be returned in any order
/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
function uncommonFromSentences(s1, s2){
    // make word frequency cache
    const wordFrequency = {}
    // loop through words in both strings
    for(const word of s1.split(' ')){
        wordFrequency[word] = wordFrequency[word] + 1 || 1
    }
    for(const word of s2.split(' ')){
        wordFrequency[word] = wordFrequency[word] + 1 || 1
    }
    // add words in those strings to the frequency cache
    const uncommonWords = []
    // make uncommon words array
    for(const word in wordFrequency){
        if(wordFrequency[word] === 1){
            uncommonWords.push(word)
        }
    }
    // loop through the frequency cache
    // push any words that occur once into a uncommon words array
    return uncommonWords
    // return an uncommon words array
};
// Example 1:

// Input: s1 = "this apple is sweet", s2 = "this apple is sour"

// Output: ["sweet","sour"]

// Explanation:

// The word "sweet" appears only in s1, while the word "sour" appears only in s2.

// Example 2:

// Input: s1 = "apple apple", s2 = "banana"

// Output: ["banana"]