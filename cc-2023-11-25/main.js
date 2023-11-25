// url: https://leetcode.com/problems/reverse-words-in-a-string-iii/

// Given a string

// Return the string where each work is reversed but whitespace is preserved'

// Example 1:
// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"

// Example 2:
// Input: s = "God Ding"
// Output: "doG gniD"

// seperate words out
// reverse each word
// concatenate them

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.split(' ').map(word => word.split('').reverse().join('')).join(' ')
};