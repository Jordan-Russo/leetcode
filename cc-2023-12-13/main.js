// url: https://leetcode.com/problems/number-of-1-bits/

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  let count = 0
  n = n.toString(2)
  for(let i = 0; i < n.length; i++){
      if(n[i] === '1'){
          count++
      }
  }
  return count
};

var hammingWeight = function(n) {
  console.log(`new number is ${n}`)
  let count = 0
  while(n){
      if(n % 2){
          count++
      }
      n = Math.floor(n / 2)
  }
  return count
};