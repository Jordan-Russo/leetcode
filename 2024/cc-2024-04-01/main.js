// url: https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/description/
// Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.
// Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let left = 0
    let right = 0
    let vowelCount = 0
    let maxVowels = 0
    while(right < s.length){
        const windowLength = right - left
        if(windowLength === k){
            // is the left pointer a vowel
            // if so remove one from the count
            // then move the left pointer right
            if(isVowel(s[left])){
                vowelCount--
            }
            left++
        }else{
            if(isVowel(s[right])){
                vowelCount++
                maxVowels = Math.max(maxVowels, vowelCount)
            }
            right++
        }
    }
    return maxVowels
};

function isVowel(char){
    switch(char){
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            return true
        default: 
            return false
    }
}