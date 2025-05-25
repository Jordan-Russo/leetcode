// given a 0-indexed array, of string words, made of lowercase englsih letters, the array will never be empty and there will be no empty strings either
// given a 0-indexed range of left and right that are within range of the words array
// a vowel is 'a', 'e', 'i','o','u'
/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
function vowelStrings(words, left, right){
    // have a method for checking if a character is a vowel
    const isVowel = (letter) => 'aeiou'.includes(letter);
    // initialize count at 0
    let count = 0;
    // loop through left and right
    for(let i = left; i <= right; i++){
        // look at the word
        const word = words[i];
            // if the first and last letter is a vowel increment count
        if(isVowel(word[0]) && isVowel(word[word.length - 1])){
            count++;
        }
    }
    // return count
    return count;
};
// console.log(vowelStrings(["are","amy","u"], 0, 2), 2);
// console.log(vowelStrings(["hey","aeo","mu","ooo","artro"], 1, 4), 3);
// console.log(vowelStrings(["hey","aeo","mu","ooo","artro"], 2, 3), 1);