// url: https://leetcode.com/problems/reverse-prefix-of-word/
// given a string word and a character prefix, ch 
// return a new string made by reversing the region before and including the first found prefix character, if it can be found in the string and concatenating it to the rest of the string
// otherwise return original string
/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
function reversePrefix(word, ch){
    // find the index of the prefix character
    const index = word.indexOf(ch);
    // if found reverse the region before and include the index
    if(index !== -1){
        let reversed = ''
        for(let i = index; i >= 0; i--){
            reversed += word[i]
        }
        // return the reverse segment + rest of the string
        return reversed + word.slice(index + 1)
    }
    // if not found return the word
    return word
};
// console.log(reversePrefix('abcdefd', 'd'), 'dcbaefd')
// console.log(reversePrefix('xyxzxe', 'z'), 'zxyxxe')
// console.log(reversePrefix('abcd', 'z'), 'abcd')