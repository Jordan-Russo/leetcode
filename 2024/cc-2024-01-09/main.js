// url: https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/
/**
 * @param {number} num
 * @return {number}
 */
// Given a non-negative integer
// Return the # of steps to reduce it to 0.
// examples:
// Example 1:

// Input: num = 14
// Output: 6
// Explanation: 
// Step 1) 14 is even; divide by 2 and obtain 7. 
// Step 2) 7 is odd; subtract 1 and obtain 6.
// Step 3) 6 is even; divide by 2 and obtain 3. 
// Step 4) 3 is odd; subtract 1 and obtain 2. 
// Step 5) 2 is even; divide by 2 and obtain 1. 
// Step 6) 1 is odd; subtract 1 and obtain 0.
// Example 2:

// Input: num = 8
// Output: 4
// Explanation: 
// Step 1) 8 is even; divide by 2 and obtain 4. 
// Step 2) 4 is even; divide by 2 and obtain 2. 
// Step 3) 2 is even; divide by 2 and obtain 1. 
// Step 4) 1 is odd; subtract 1 and obtain 0.
// Example 3:

// Input: num = 123
// Output: 12

// find the highest power of 2 that is equal to or less than the number
// find the distance between the number and 2 to that power
// add the two previously determined values to find the number of steps required
// EDGE CASE: if 0 return 0
var numberOfSteps = function(num) {
    let steps = 0
    while(num){
        if(num & 1){
            num--
        }else{
            num /= 2
        }
        steps++
    }
    return steps
};