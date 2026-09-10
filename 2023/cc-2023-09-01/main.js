// url: https://leetcode.com/problems/reverse-integer

// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Example 1:
    // Input: x = 123
    // Output: 321

// Example 2:
    // Input: x = -123
    // Output: -321

// Example 3:
    // Input: x = 120
    // Output: 21

var reverse = function(x) {
  const reverseNum = parseInt(x.toString().split('').reverse().join('')) * Math.sign(x);
  return Math.abs(reverseNum) > 2**31 - 1 ? 0 : reverseNum
}; 

function reverse(n){
  let revNum = 0;
  while(n){
      revNum *= 10;
      const digit = n % 10;
      revNum += digit;
      n -= digit;
  }
  const isInRange = revNum >= -1 * 2**31 && revNum <= 2**31 - 1;
  return isInRange ? revNum : 0;
}