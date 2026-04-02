/**
 * @param {string} s
 * @return {number}
 */
var vowelConsonantScore = function(s) {
    const vowels = new Set('aeiou');
    const nonLetters = new Set(' 0123456789');
    let vowelCount = 0;
    let consonantCount = 0;
    for(const char of s){
        if(nonLetters.has(char)){continue}
        else if(vowels.has(char)){
            vowelCount++;
        }else{
            consonantCount++;
        }
    }
    return consonantCount === 0 ? 0 : Math.trunc(vowelCount / consonantCount);
};