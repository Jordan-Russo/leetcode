// url: https://leetcode.com/problems/sum-of-two-integers/
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
// anytime both bitpositions have a value
    // carry it over to the left one position
// keep doing that while XORing both of the terms as one
// Return the XOR once there is no more carry over
var getSum = function(a, b) {
  while(b){
      const temp = (a & b) << 1
      a ^= b
      b = temp
  }
  return a
};