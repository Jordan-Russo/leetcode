// url: https://leetcode.com/problems/generate-parentheses/

// Given n, a number
// n is between 1 and 8
// Return an array that has all the possible combinations of open and closed parenthesis formmated correctly ")(" is wrong.

// Example 1:
// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]

// Example 2:
// Input: n = 1
// Output: ["()"]

// Lets initialize an array of valid parenthesis

// build a stack of the current parathesis
// we can only add ) if there is an unoccupied ( before it.

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let combinations = [];
    parenthesis(combinations, n)
    return combinations;
};

function parenthesis(target, n, left = 0, right = 0, curr = ''){
    if(left === n && right === n){
        target.push(curr);
        return;
    }
    // if left === right === n 
        // push curr into the target
        // return
    if(left === right){
        parenthesis(target, n, left + 1, right, curr + '(');
    }else{
        parenthesis(target, n, left, right + 1, curr + ')');
        if(left < n){
            parenthesis(target, n, left + 1, right, curr + '(');
        }
    }
    // if left === right and both aren't equal to n
        // call function again change curr + '(' and increment left
    // if left < right
}

// left and right at 0
// if both equal push left
// if right is less than left push right or left
    // as long as left is <= n
// when left == right == n
// push it in as an option.