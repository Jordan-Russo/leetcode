// url: https://leetcode.com/problems/consecutive-characters/
// given a string of characters composed only of lowercase english
// return the longest length of consecutive characters that are the same within the string
/**
 * @param {string} s
 * @return {number}
 */
function maxPower(s){
    // initialize current length at 0
    let currLen = 0
    // initialize current character at ''
    let currChar
    // record the maximum length
    let maxLen = 1
    for(let i = 0; i < s.length; i++){
        if(s[i] === currChar){
            currLen++
            maxLen = Math.max(maxLen, currLen)
        }else{
            currChar = s[i]
            currLen = 1
        }
    }
    return maxLen
}
// console.log(maxPower('leetcode'), 2)
// console.log(maxPower('abbcccddddeeeeedcba'), 5)