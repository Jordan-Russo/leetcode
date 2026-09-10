/**
 * @param {string} s
 * @return {string}
 */
var trimTrailingVowels = function(s) {
    const vowels = new Set('aeiou');
    // grab the end as the last index
    let end = s.length - 1;
    // keep looping through the values until there are none left or the value is not a vowel
    for(;end >= 0; end--){
        const char = s[end];
        const isVowel = vowels.has(char);
        if(!isVowel){break}
    }
    // return a slice from the beginning to the end
    return s.slice(0, end + 1);
};