// url: https://leetcode.com/problems/increasing-decreasing-string/
// given a string, never empty, only has english lowercase characters
// following steps in an algorithm return the final resulting string
    // remove smallest character from s, append to resulting string
    // remove smallest character from s > last appended character, append to resulting string
    // repeat previous step until no more characters can be removed

    // remove the largest character from s and append it to the resulting string
    // remove the largest character from s that is smaller than the last appended character and append to the resulting string
    // repeat previous step until no more characters can be removed

    // repeat all previous steps until all characters from s have been removed from the original string and are now in the resulting string
/**
 * @param {string} s
 * @return {string}
 */
function sortString(s){
    let result = '';
    let cache = new Array(26).fill(0);
    for(const char of s){
        const position = char.charCodeAt(0) - 97;
        cache[position]++;
    }
    while(result.length < s.length){
        for(let i = 0; i < 26; i++){
            if(cache[i]){
                cache[i]--;
                const char = String.fromCharCode(i + 97);
                result += char || '';
            }
        }
        for(let i = 25; i >= 0; i--){
            if(cache[i]){
                cache[i]--;
                const char = String.fromCharCode(i + 97);
                result += char || '';
            }
        }
    }
    return result;
};