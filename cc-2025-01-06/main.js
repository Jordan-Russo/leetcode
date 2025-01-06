// url: https://leetcode.com/problems/verifying-an-alien-dictionary/
/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
// given an array of words
// given an order of lexographical correctness for a language
// return a boolean on whether the given array of words are in the correct alien language order
function isAlienSorted(words, order){
    // loop from second word to last word
    for(let i = 1; i < words.length; i++){
        // compare the current word with the previous word
        const isCorrectlyOrdered = isOrdered(words[i - 1], words[i], order)
        // if the current word should come before the previous word, return false
        if(!isCorrectlyOrdered){return false}
    }
    // return true
    return true
};
function isOrdered(word1, word2, order){
    const maxLength = Math.max(word1.length, word2.length)
    for(let i = 0; i < maxLength; i++){
        const pos1 = order.indexOf(word1[i])
        const pos2 = order.indexOf(word2[i])
        if(pos1 < pos2){return true}
        else if(pos2 < pos1){return false}
    }
    return true
}
// In an alien language, surprisingly, they also use English lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.

// Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographically in this alien language.

 

// Example 1:

// Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
// Output: true
// Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.

// Example 2:

// Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
// Output: false
// Explanation: As 'd' comes after 'l' in this language, then words[0] > words[1], hence the sequence is unsorted.

// Example 3:

// Input: words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
// Output: false
// Explanation: The first three characters "app" match, and the second string is shorter (in size.) According to lexicographical rules "apple" > "app", because 'l' > '∅', where '∅' is defined as the blank character which is less than any other character