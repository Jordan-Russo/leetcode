// url: https://leetcode.com/problems/merge-strings-alternately/
// given two strings
// return a new string by merging them together in an alternating order whenever possible
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let newStr = '';
    const maxLength = Math.max(word1.length, word2.length);
    for(let i = 0; i < maxLength; i++){
        if(i < word1.length){
            newStr += word1[i];
        }
        if(i < word2.length){
            newStr += word2[i];
        }
    }
    return newStr;
};
// console.log(mergeAlternately('abc', 'pqr'), 'apbqcr');
// console.log(mergeAlternately('ab', 'pqrs'), 'apbqrs');
// console.log(mergeAlternately('abcd', 'pq'), 'apbqcd');