// url: https://leetcode.com/problems/remove-palindromic-subsequences/
// given a string, s, composed of only b and a english letters in lowercase, and no other characters, always having a length > 0
// return the minimum amount of palindrome subsequences from s you'd need to remove to make it empty
/**
 * @param {string} s
 * @return {number}
 */
function removePalindromeSub(s){
    // check if the whole string is a palindrome
    for(let i = 0; i < s.length / 2; i++){
        // if not return 2
        if(s[i] !== s[s.length - 1 - i]){return 2;}
    }
    // if so return 1
    return 1;
};
// console.log(removePalindromeSub("ababa"), 1);
// console.log(removePalindromeSub("abb"), 2);
// console.log(removePalindromeSub("baabb"), 2);