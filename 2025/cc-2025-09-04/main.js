/**
 * @param {string} s
 * @return {number}
 */
var maximumLengthSubstring = function(s) {
    // make a frequency cache
    const cache = {};
    // make a start index, initialized at zero
    let start = 0;
    // loop through the string
    let maxLength = 0;
    // store max length
    for(let i = 0; i < s.length; i++){
        const char = s[i];
        // record the current character
        cache[char] = cache[char] + 1 || 1;
        // while the count of the current character is > 2, keep removing the start index characters until that is no longer the case
        while(cache[char] > 2){
            cache[s[start]]--;
            start++;
        }
        // record the length of the substring, and store the maximum size found
        maxLength = Math.max(i - start + 1, maxLength);
    }
    // return maximum size found
    return maxLength;
};