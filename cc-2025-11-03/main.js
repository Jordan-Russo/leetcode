/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(s, k) {
    // initialize a char string ''
    let charString = '';
    // scan the string, s, determine char count (everything besides '-')
    for(const char of s){
        if(char !== '-'){charString += char.toUpperCase()}
    }
    // find the modulo of the char count and k
    const firstSegmentLength = charString.length % k || k; 
    // make the first group the modulo length (if 0, then make it k-long instead)
    let keyString = charString.slice(0, firstSegmentLength);
    // make the following groups k in length as well, each group seperated by a '-'
    for(let i = firstSegmentLength; i < charString.length; i += k){
        keyString += '-';
        keyString += charString.slice(i, i + k);
        // all the characters in Upper Case
    }
    // return the final key string
    return keyString;
};