// url: https://leetcode.com/problems/build-an-array-with-stack-operations/description/
/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
function buildArray(target, n){
  const operations = []
  // initialize a pointer at 0
  let pointer = 0
  // loop, start from 1 to up to n
  for(let i = 1; i <= n; i++){
      if(pointer === target.length){break;}
      // if pointer === target.length
          // break
      operations.push('Push')
      // add push
      if(target[pointer] === i){
          pointer++
      }else{
          operations.push('Pop')
      }
      // are we currently at target[pointer]?
          // if no then pop
          // else increment pointer
  }
  return operations
};
// Example 1:

// Input: target = [1,3], n = 3
// Output: ["Push","Push","Pop","Push"]
// Explanation: Initially the stack s is empty. The last element is the top of the stack.
// Read 1 from the stream and push it to the stack. s = [1].
// Read 2 from the stream and push it to the stack. s = [1,2].
// Pop the integer on the top of the stack. s = [1].
// Read 3 from the stream and push it to the stack. s = [1,3].

// Example 2:

// Input: target = [1,2,3], n = 3
// Output: ["Push","Push","Push"]
// Explanation: Initially the stack s is empty. The last element is the top of the stack.
// Read 1 from the stream and push it to the stack. s = [1].
// Read 2 from the stream and push it to the stack. s = [1,2].
// Read 3 from the stream and push it to the stack. s = [1,2,3].

// Example 3:

// Input: target = [1,2], n = 4
// Output: ["Push","Push"]
// Explanation: Initially the stack s is empty. The last element is the top of the stack.
// Read 1 from the stream and push it to the stack. s = [1].
// Read 2 from the stream and push it to the stack. s = [1,2].
// Since the stack (from the bottom to the top) is equal to target, we stop the stack operations.
// The answers that read integer 3 from the stream are not accepted.