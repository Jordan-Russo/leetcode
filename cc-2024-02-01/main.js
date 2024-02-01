// url: https://leetcode.com/problems/binary-prefix-divisible-by-5/
/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(nums) {
    let curr = 0
    // initialize value at 0
    const answer = []
    // intialize empty array
    for(const num of nums){
        curr <<= 1
        curr |= num
        if(curr >= 10){
            curr -= 10
        }
        answer.push(curr === 0 || curr === 5)
    }
    // start loops
        // left bitshift
        // add the current bit
        // push whether new number is divisible by 5
    return answer
    // return array
};