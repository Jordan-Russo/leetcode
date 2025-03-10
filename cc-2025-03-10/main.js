// url: https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/
// given a string of lowercase characters
// return the string after removing all adjacent duplicates
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    const letters = [];
    for(const char of s){
        letters.push(char);
        while(letters.length > 0 && letters.at(-1) === letters.at(-2)){
            letters.pop();
            letters.pop();
        }
    }
    return letters.join('');
};
// console.log(removeDuplicates('abbaca'), 'ca');
// console.log(removeDuplicates('azxxzy'), 'ay');