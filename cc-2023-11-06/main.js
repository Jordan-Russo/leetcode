// url: https://leetcode.com/problems/evaluate-reverse-polish-notation/

// Given an array of strings
// strings will either be a integer or an operator (+, - , *, / )
// evalute the expression and return the value

// division will always truncate towards 0.
// no division by 0.
// there will always be at least one element
// there will never be an uneven amount of numbers and operators
// will always resolve down to a single value


// Example 1:
// Input: tokens = ["2","1","+","3","*"]
// Output: 9
// Explanation: ((2 + 1) * 3) = 9
// Example 2:

// Input: tokens = ["4","13","5","/","+"]
// Output: 6
// Explanation: (4 + (13 / 5)) = 6
// Example 3:

// Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
// Output: 22
// Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
// = ((10 * (6 / (12 * -11))) + 17) + 5
// = ((10 * (6 / -132)) + 17) + 5
// = ((10 * 0) + 17) + 5
// = (0 + 17) + 5
// = 17 + 5
// = 22

// Loop through all tokens
// Whenever I encounter a number
// add it to a stack (actual number)
// Whenever I encounter a operator
// pop the last two numbers from the stack
// then do the operation on them (the first element popped is the 2nd operand and the 2nd popped element is the first operand)
// Return the final value in the stack.

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const operations = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => Math.trunc(a / b)
    }
    const numbers = [];
    for(const token of tokens){
        const isInteger = Number.isInteger(+token);
        if(isInteger){
            numbers.push(+token);
        }else{
            const a = numbers.pop();
            const b = numbers.pop();
            numbers.push(operations[token](b,a))
        }
    }
    return numbers[0];
};