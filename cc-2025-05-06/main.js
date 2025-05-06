// url: https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/
// given an non-empty string of lowercase english letters
// return the number of substring sequences of length 3 that have all unique letters
/**
 * @param {string} s
 * @return {number}
 */
function countGoodSubstrings(s){
    // initialize a count of good strings at 0
    let count = 0;
    // loop through each substring of length 3
    for(let i = 2; i < s.length; i++){
        const a = s[i];
        const b = s[i - 1];
        const c = s[i - 2];
        // if the substring has no repeating characters
        const hasRepeats = a === b || b === c || a === c;
            // increment count
        if(!hasRepeats){count++;}
    }
    // return the count
    return count;
};
// console.log(countGoodSubstrings('xyzzaz'), 1);
// console.log(countGoodSubstrings('aababcabc'), 4);