/**
 * @param {string} word
 * @return {boolean}
 */
var equalFrequency = function(word) {
    // loop through every option
    for(let i = 0; i < word.length; i++){
        const testStr = word.slice(0, i) + word.slice(i + 1);
        const freq = {}
        for(const char of testStr){
            freq[char] = freq[char] + 1 || 1;
        }
        // test if it works
        // if it does return true
        if(new Set(Object.values(freq)).size === 1){return true;}
    }
    // if all fail return false
    return false;
};