// url: https://leetcode.com/problems/split-a-string-in-balanced-strings/
// given a balanced string, has equal number of 'L' and 'R'
// return the maximum number of balanced strings I can create from the given string
/**
 * @param {string} s
 * @return {number}
 */
function balancedStringSplit(s){
    // initialize splitCount
    let splitCount = 0
    // initialize leftCount
    let leftCount = 0
    // initialize rightCount
    let rightCount = 0
    // loop through the string
    for(const char of s){
        // if 'L', increment leftCount
        if(char === 'L'){leftCount++}
        // if 'R', increment rightCount
        else{rightCount++}
        // if leftCount === rightCount
        if(leftCount === rightCount){
            // increment splitCount
            splitCount++
        }
    }
    // return splitCount
    return splitCount
};
// console.log(balancedStringSplit("RLRRLLRLRL"), 4)
// console.log(balancedStringSplit("RLRRRLLRLL"), 2)
// console.log(balancedStringSplit("LLLLRRRR"), 1)