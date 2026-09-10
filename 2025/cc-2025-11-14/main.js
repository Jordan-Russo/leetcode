/**
 * @param {string} s
 * @return {number[][]}
 */
// given a string of lowercase english letters (a-z) of unknown length
// return an array containing subarrays that represent the start and end indexes of each "group" [start, end]
    // a group is 3 or more consecutive characters that are the same
var largeGroupPositions = function(s) {
    let start = 0;
    const result = [];
    // loop through the string
    for(let i = 1; i <= s.length; i++){
        const curr = s[i];
        const prev = s[i - 1];
        const isConsecutive = curr === prev;
        // is the character the same as the previous character
            // yes
            // no 
        if(!isConsecutive){
                // compare the start and end positions
            const distance = i - start;
                    // if distance is 3 or more, push the pair as an array into the result
            if(distance >= 3){
                result.push([start, i - 1]);
            }
                // end the previous character's range, and initialize the current
            start = i;
        }
    }
    return result;
};
// console.log(largeGroupPositions('abbxxxxzzy'), [[3,6]]);
// console.log(largeGroupPositions('abc'), []);
// console.log(largeGroupPositions('abcdddeeeeaabbbcd'), [[3,5], [6,9], [12,14]]);