/**
 * @param {string} word
 * @return {number}
 */
function countVowelSubstrings(word){
    let left = 0;
    let count = 0;
    const vowels = {
        a: 0,
        e: 0, 
        i: 0,
        o: 0,
        u: 0
    };
    for(let right = 0; right <= word.length; right++){
        // check that the right index, is on a vowel
        if(isVowel(word[right])){
        // if yes
            // add vowel to vowels
            vowels[word[right]]++;
            // if all vowels are present
                // increment count
            if(hasAllVowels(vowels)){count++}
        }else{
        // if no
            // loop and increment left until equal to right
            while(left < right){
                // remove vowel count as you move the left pointer forward
                vowels[word[left]]--;
                left++;
                // check whether left to right - 1 is a valid substring and increment count if so
                if(hasAllVowels(vowels)){count++}
                let tempRight = right - 2;
                let tempCache = {...vowels};
                while(tempRight - left >= 4){
                    // remove tempRight + 1 from tempCache
                    tempCache[word[tempRight + 1]]--;
                    // check if it hasAll Vowels and increment count if so
                    if(hasAllVowels(tempCache)){count++}
                    tempRight--;
                }
            }
            // assign left to be right + 1
            left = right + 1;
        }
    }
    return count;
};
function isVowel(letter){
    return 'aeiou'.includes(letter);
}
function hasAllVowels(vowels){
    return Boolean(vowels.a && vowels.e && vowels.i && vowels.o && vowels.u);
}
// Example 1:

// Input: word = "aeiouu"
// Output: 2
// Explanation: The vowel substrings of word are as follows (underlined):
// - "aeiouu"
// - "aeiouu"

// Example 2:

// Input: word = "unicornarihan"
// Output: 0
// Explanation: Not all 5 vowels are present, so there are no vowel substrings.

// Example 3:

// Input: word = "cuaieuouac"
// Output: 7
// Explanation: The vowel substrings of word are as follows (underlined):
// - "cuaieuouac"
// - "cuaieuouac"
// - "cuaieuouac"
// - "cuaieuouac"
// - "cuaieuouac"
// - "cuaieuouac"
// - "cuaieuouac"