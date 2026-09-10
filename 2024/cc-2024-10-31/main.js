// url: https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/

/**
 * @param {string} s
 * @return {number}
 */
// given a valid parenthesis string, return the maximum nesting depth
// always passing a string, string never empty
// returning a number, 
// given a valid parenthesis string

function maxDepth(string){
  let count = 0
  let maxCount = count
  for(const char of string){
    if(char === '('){
      count++
      maxCount = Math.max(maxCount, count)
    }
    if(char === ')'){count--}
  }
  return maxCount
}

console.log(maxDepth('(1+(2*3)+((8)/4))+1'), 3)
console.log(maxDepth('(1)+((2))+(((3)))'), 3)
console.log(maxDepth('()(())((()()))'), 3)