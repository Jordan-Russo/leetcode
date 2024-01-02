// url: https://leetcode.com/problems/add-strings
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  const maxLength = Math.max(num1.length, num2.length)
  let result = ''
  let carry = 0
  for(let i = 0; i < maxLength; i++){
      const a = getNumber(num1, i)
      const b = getNumber(num2, i)
      const sum = a + b + carry
      const digit = sum % 10
      carry = sum >= 10 ? 1 : 0
      result = digit + result
      if(i + 1 === maxLength && carry !== 0){
          result = carry + result
      }
  }
  return result
  function getNumber(str, index){
      return Number(str[str.length - 1 - index]) || 0
  }
};