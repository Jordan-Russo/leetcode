// url: https://leetcode.com/problems/minimum-time-to-type-word-using-special-typewriter/
// There is a special typewriter with lowercase English letters 'a' to 'z' arranged in a circle with a pointer. A character can only be typed if the pointer is pointing to that character. The pointer is initially pointing to the character 'a'.

// Each second, you may perform one of the following operations:

//     Move the pointer one character counterclockwise or clockwise.
//     Type the character the pointer is currently on.

// Given a string word, return the minimum number of seconds to type out the characters in word.
/**
 * @param {string} word
 * @return {number}
 */
var minTimeToType = function(word) {
    let start = 'a';
    let time = 0;
    for(const char of word){
        const turnTime = typewriterDistance(start, char);
        time += turnTime + 1;
        start = char;
    }
    return time;
};

function typewriterDistance(start, end){
    // find char codes of start and end and make them modulo 26
    const startPos = start.charCodeAt(start) - 97;
    const endPos = end.charCodeAt(end) - 97;
    // return minimum turns to get to the end from the start
    const diff = Math.abs(startPos - endPos);
    const minTurns = Math.min(diff, 26 - diff);
    return minTurns;
}
// Example 1:

// Input: word = "abc"
// Output: 5
// Explanation: 
// The characters are printed as follows:
// - Type the character 'a' in 1 second since the pointer is initially on 'a'.
// - Move the pointer clockwise to 'b' in 1 second.
// - Type the character 'b' in 1 second.
// - Move the pointer clockwise to 'c' in 1 second.
// - Type the character 'c' in 1 second.

// Example 2:

// Input: word = "bza"
// Output: 7
// Explanation:
// The characters are printed as follows:
// - Move the pointer clockwise to 'b' in 1 second.
// - Type the character 'b' in 1 second.
// - Move the pointer counterclockwise to 'z' in 2 seconds.
// - Type the character 'z' in 1 second.
// - Move the pointer clockwise to 'a' in 1 second.
// - Type the character 'a' in 1 second.

// Example 3:

// Input: word = "zjpc"
// Output: 34
// Explanation:
// The characters are printed as follows:
// - Move the pointer counterclockwise to 'z' in 1 second.
// - Type the character 'z' in 1 second.
// - Move the pointer clockwise to 'j' in 10 seconds.
// - Type the character 'j' in 1 second.
// - Move the pointer clockwise to 'p' in 6 seconds.
// - Type the character 'p' in 1 second.
// - Move the pointer counterclockwise to 'c' in 13 seconds.
// - Type the character 'c' in 1 second.