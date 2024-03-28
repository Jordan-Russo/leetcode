// url: https://leetcode.com/problems/sorting-the-sentence/
// Given a string of words seperated by spaces
// Each word has characters followed by a single digit at the end of the sentence (1-9)
// Rearrange the words in the sentence in ascending order of the digits while removing them
// Example 1:

// Input: s = "is2 sentence4 This1 a3"
// Output: "This is a sentence"
// Explanation: Sort the words in s to their original positions "This1 is2 a3 sentence4", then remove the numbers.
// Example 2:

// Input: s = "Myself2 Me1 I4 and3"
// Output: "Me Myself and I"
// Explanation: Sort the words in s to their original positions "Me1 Myself2 and3 I4", then remove the numbers.
/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    return s
        .split(' ')
        .sort((a,b) => {
            a = a.at(-1)
            b = b.at(-1)
            if(a < b){
                return -1
            }else if(a > b){
                return 1
            }else{
                return 0
            }
        })
        .map(word => word.slice(0, -1))
        .join(' ')
};