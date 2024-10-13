// url: https://leetcode.com/problems/longest-palindromic-substring/
// Given a string s, return the longest
// palindromic
// substring
// in s.

 

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.

// Example 2:

// Input: s = "cbbd"
// Output: "bb"

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let maximum = '';
    for(let i = 0; i < s.length; i++){
        // do expansion at each size to search for odd size palindromes
        recursive(i,i);
        recursive(i, i + 1);
    }
    return maximum;
    function recursive(l, r){
        if(l < 0 || r === s.length){return;}
        let isPalindromic = s[l] === s[r];
        if(!isPalindromic){return}
        const length = r - l + 1;
        if(length > maximum.length){maximum = s.slice(l, r + 1)}
        recursive(l - 1, r + 1)
    }
};