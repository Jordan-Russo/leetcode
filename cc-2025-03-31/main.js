// url: https://leetcode.com/problems/number-of-changing-keys/description/
// given a string, always string, only upper and lower case english alphabetical characters
// return how many times the character type changes, a number, as you loop through it
// type changes are not case-sensitive
/**
 * @param {string} s
 * @return {number}
 */
var countKeyChanges = function(s) {
    // intialize a counter at 0
    let count = 0;
    // grab the first character of the string as the key
    let key = s[0].toLowerCase();
    // make sure key detection is not case sensitive
    // loop through the string
    for(const char of s){
        // is the character the same
        if(key !== char.toLowerCase()){
        // if not, then change the key and increment the count
            key = char.toLowerCase();
            count++;
        }
    }
    // return the count
    return count;
};
// console.log(countKeyChanges('aAbBcC'), 2);
// console.log(countKeyChanges('AaAaAaaA'), 0);