/**
 * @param {string} sentence
 * @return {string}
 */
// given a string sentence that contains only words(made of only english letters) seperated by spaces
// return the sentence after translating each word in it to goat latin
// rules of goat latin: 
// if word begins with vowel append ma to the end of the word
// else remove the first letter of the word and append it to the end before adding ma
// add aditional 'a's at the end of each word based on its index (starting with 1 more 'a' for the first word and so on...)
var toGoatLatin = function(sentence) {
    return sentence
        .split(' ')
        .map((word, i) => {
            const firstChar = word[0].toLowerCase();
            const hasVowelStart = firstChar === 'a' || firstChar === 'e' || firstChar === 'i' || firstChar === 'o' || firstChar === 'u';
            if(hasVowelStart){
                return `${word}${'ma'}${'a'.repeat(i + 1)}`
            }else{
                return `${word.slice(1)}${word[0]}${'ma'}${'a'.repeat(i + 1)}`
            }
        })
        .join(' ');
};