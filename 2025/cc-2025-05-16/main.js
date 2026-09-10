// given a string of only lowercase english letters
// return the sum of the frequencies of the most frequent vowels and frequencies of the most frequent consonants
/**
 * @param {string} s
 * @return {number}
 */
function maxFreqSum(s){
    // make one max freq count for vowels and one for consonants starting at 0
    let vowelMax = 0;
    let consonantMax = 0;
    // letter freq cache
    const cache = {};
    // loop letters in s
    for(const letter of s){
        // add it to the letter freq cache
        cache[letter] = cache[letter] + 1 || 1;
    }
    // vowel set
    const vowels = new Set('aeiou');
    // find the largest freq of vowels and consonants
    for(const letter in cache){
        const isVowel = vowels.has(letter);
        const count = cache[letter];
        // if vowel assign vowelMax to maximum of both
        if(isVowel){vowelMax = Math.max(vowelMax, count);}
        // if consonant assign consonantMax to maximum of both
        else{consonantMax = Math.max(consonantMax, count);}
    }
    // return the sum of the two max freq counts
    return vowelMax + consonantMax;
};
// console.log(maxFreqSum("successes"), 6);
// console.log(maxFreqSum("aeiaeia"), 3);