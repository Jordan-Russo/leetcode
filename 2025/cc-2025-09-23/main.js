/**
 * @param {string} s
 * @return {string}
 */
var longestNiceSubstring = function(s) {
    let result = '';
    for(let i = 0; i < s.length; i++){
        for(let j = i + 1; j <= s.length; j++){
            const substring = s.slice(i, j);
            if(isValid(substring)){
                if(substring.length > result.length){
                    result = substring
                }
            }
        }
    }
    return result;
};
function isValid(string){
    // if all letter are the same and both upper and lower case exist for that letter
        // so length must be >= 2
    if(string.length < 2){return false}
    const letters = new Set(string);
    for(const letter of letters){
        if(!letters.has(letter.toUpperCase()) || !letters.has(letter.toLowerCase())){
            return false;
        }
    }
    return true;
}