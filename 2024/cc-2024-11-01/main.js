// url: https://leetcode.com/problems/remove-outermost-parentheses/

/**
 * @param {string} s
 * @return {string}
 */
// Given a valid parentheses string and I have to return the string after removing the outmostlayer of parentheses within the string

// s, can be empty, but will alwaysw be a valid parenthesis
  // valid parenthesis string means there will be no spare parentheses
    // will never have a pattern with unmatched pairs of parentheses )(
    // will never start with a closing parenthesis
  // can be multiple outerlayers

// a new filtered string, with the outer layer of parenthesis removed
  // only removes the outer layer
  // there might be no layers
  // there might be multiple outer layers


const removeOuterParentheses = string => {
  let currentDepth = 0
  const outerLayerIndexes = new Set()
  for(let i = 0; i < string.length; i++){
    const character = string[i]
    if(character === '('){
      if(currentDepth === 0){outerLayerIndexes.add(i)}
      currentDepth++
    }
    if(character === ')'){
      if(currentDepth === 1){outerLayerIndexes.add(i)}
      currentDepth--
    }
  }
  let newString = ''
  for(let i = 0; i < string.length; i++){
    if(!outerLayerIndexes.has(i)){newString += string[i]}
  }
  return newString
}

console.log(removeOuterParentheses("((a)())(())"),"(a)()()")
console.log(removeOuterParentheses("(()())(())(()(()))"),"()()()()(())")
console.log(removeOuterParentheses("(g)(n)"),"gn")