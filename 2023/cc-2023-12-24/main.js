// url: https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string/
// Given a string consisting of '0' and '1'
// Return the minimum amount of changes needed to make so that it alternates
// At most, in any string, Math.floor(length / 2) changes have to be made
// To solve this, count the amount of non-oscillations(times there is a repeat) from a variable that oscillates
// return the minimum between the amount of count or length - count.
/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) {
    let count = 0
    let value = Number(s[0])
    for(let i = 1; i < s.length; i++){
        console.log(value, s[i])
        if(s[i] == value){
            count++
        }
        value = !value
    }
    return Math.min(count, s.length - count)
};