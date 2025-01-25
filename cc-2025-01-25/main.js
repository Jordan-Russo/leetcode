// url: https://leetcode.com/problems/find-the-k-th-character-in-string-game-i/description/
// given an positive integer k
// return the kth character, 1th indexed, in the sequence of string game
// string game starts with 'a'
// then it copies the string, shifts all characters by 1 value to the right
    // looping from a-z, and pushes them back into the string
// repeating this process allows you to continue the sequence
/**
 * @param {number} k
 * @return {character}
 */
function kthCharacter(k){
    let sequence = 'a'
    while(sequence.length < k){
        sequence += nextString(sequence)
    }
    return sequence[k - 1]
};

function nextString(s){
    let newString = ''
    for(const char of s){
        const nextChar = String.fromCharCode(((char.charCodeAt(0) + 1 - 97) % 26) + 97)
        newString += nextChar
    }
    return newString
}

// Example 1:

// Input: k = 5

// Output: "b"

// Explanation:

// Initially, word = "a". We need to do the operation three times:

//     Generated string is "b", word becomes "ab".
//     Generated string is "bc", word becomes "abbc".
//     Generated string is "bccd", word becomes "abbcbccd".

// Example 2:

// Input: k = 10

// Output: "c"
