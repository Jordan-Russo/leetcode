// url: https://leetcode.com/problems/valid-parentheses/

/**
 * @param {string} s
 * @return {boolean}
 */

//  Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:
    // Input: s = "()"
    // Output: true

// Example 2:
    // Input: s = "()[]{}"
    // Output: true

// Example 3:
    // Input: s = "(]"
    // Output: false
 
// s consists of parentheses only '()[]{}'

function isValid(str){
  const unusedLeftBrackets = [];
  const bracketPairs = {')': '(', 
      ']': '[', 
      '}': '{'
  }
  const leftBrackets = new Set(Object.values(bracketPairs));
  // an array to store each left bracket
  for(const char of str){
      if(leftBrackets.has(char)){
          unusedLeftBrackets.push(char)
          continue;
      }
      if(bracketPairs[char] !== unusedLeftBrackets.pop()){return false}
  // loop with the logic
      // if the branch is a left bracket push into bracket array
      // if the branch is a right bracket
          // pop the first bracket from the top of the stack and look at it.
          // if it isn't the left brakcet you need return false
  }
  return unusedLeftBrackets.length === 0;
  // if the array that has brackets isn't empty return false
  // return true
}