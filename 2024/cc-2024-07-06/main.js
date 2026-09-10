// url: https://leetcode.com/problems/reverse-vowels-of-a-string/
// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

// Example 1:

// Input: s = "hello"
// Output: "holle"

// Example 2:

// Input: s = "leetcode"
// Output: "leotcede"

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowels = []
    const positions = []
    for(let i = s.length - 1; i >= 0; i--){
        const char = s[i]
        if(isVowel(char)){
            vowels.push(char)
            positions.push(i)
        }
    }
    let reversedString = ''
    for(let i = s.length - 1; i >= 0; i--){
        let char = s[i]
        if(isVowel(char)){
            char = vowels.pop()
            positions.pop()
        }
        reversedString = char + reversedString
    }
    return reversedString
};
function isVowel(char){
    return char === 'a' || char === 'i' || char === 'e' || char === 'o' || char === 'u' || char === 'A' || char === 'I' || char === 'E' || char === 'O' || char === 'U'
}