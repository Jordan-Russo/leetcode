// url: https://leetcode.com/problems/lexicographically-smallest-palindrome/
// given a string of lowercase english characters
// return the string after making the minimum amount of changes to characters to make it palindromic
// when making changes, favor the ones that will lead to the lexicographically smallest
    // favor 'a' over 'z'
/**
 * @param {string} s
 * @return {string}
 */
var makeSmallestPalindrome = function(s) {
    // store the characters in an array
    const chars = [...s];
    // loop through until at the middle of the array
    const middle = Math.floor(s.length / 2);
    for(let i = 0; i < middle; i++){
        // compare the left and right index positions away
        const left = chars[i];
        const right = chars[chars.length - 1 - i];
        // if they're equal continue
        if(left < right){
            // replace right index with left
            chars[chars.length - 1 - i] = left;
        }else if(right < left){
            // replace left index with right
            chars[i] = right;
        }
    }
    // join the characters in the array back into a string and return it
    return chars.join('');
};
// console.log(makeSmallestPalindrome('egcfe'), 'efcfe');
// console.log(makeSmallestPalindrome('abcd'), 'abba');
// console.log(makeSmallestPalindrome('seven'), 'neven');