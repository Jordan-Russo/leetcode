/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
    // datastructure that holds the letter as a key and an array with the first and last index
    const letters = {};
    for(let i = 0; i < s.length; i++){
        const char = s[i];
        // initialized with the first index as the last and updated as you loop through the string
        if(letters[char]){
            letters[char][1] = i;
        }else{
            letters[char] = [i, i];         
        }
    }
    let maxLength = -1;
    // then loop through all 26 characters to calculate the length of the longest substring between the two points
    for(const letter in letters){
        const [start, end] = letters[letter];
        if(start !== end){
            const length = end - start - 1;
            maxLength = Math.max(maxLength, length);
        }
    }
    // return the length of the largest substring between the two letters
    return maxLength;
};