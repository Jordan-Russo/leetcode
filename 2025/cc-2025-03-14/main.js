// url: https://leetcode.com/problems/find-maximum-number-of-string-pairs/submissions/1569792255/
// given an array of distinct words, each having two characters, each being strings of only lower case characters that are never empty
// there will always be at least two words
// return the maximum amount of pairs that can be formed
// a pair is two words that are equal to the reverse of each other
/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function(words) {
    // initialize a count of valid pairs as 0
    let validPairCount = 0;
    for(let i = 0; i < words.length; i++){
    // loop through each pair of words
        for(let j = i + 1; j < words.length; j++){
        // are they a valid pair
            const wordA = words[i];
            const wordB = words[j];
            const isValid = wordA[0] === wordB[1] && wordA[1] === wordB[0];
            // given words will always have a length of 2
            // if so, increment
            if(isValid){validPairCount++;}
        }
    }
    // return the valid pair count
    return validPairCount;
};
// console.log(maximumNumberOfStringPairs(["cd","ac","dc","ca","zz"]), 2);
// console.log(maximumNumberOfStringPairs(["ab","ba","cc"]), 1);