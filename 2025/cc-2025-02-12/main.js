// url: https://leetcode.com/problems/di-string-match/
// given a string composed only of 'I' and 'D' characters, case sensitive
// return an array containing all numbers numbers from [0, n] inclusive, with length n + 1, that follow the pattern
    //where 'I' represents an increasing value
    // and where 'D' represents a decreasing value
// any variant is fine to return as long as it works
/**
 * @param {string} s
 * @return {number[]}
 */
function diStringMatch(s){
    // have two pointers, left at 0, right at n
    let left = 0;
    let right = s.length;
    const result = [];
    for(let i = 0; i <= s.length; i++){
        let char = s[i] || s[s.length - 1];
        result.push(char === 'I' ? left++ : right--);
        // if character is left move left
        // if character is right move right
        // repeat the actions for the last character
    }
    return result;
};
// console.log(diStringMatch('IDID'), [0,4,1,3,2]);
// console.log(diStringMatch('III'), [0,1,2,3]);
// console.log(diStringMatch('DDI'), [3,2,0,1]);