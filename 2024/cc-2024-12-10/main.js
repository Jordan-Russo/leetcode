// url: https://leetcode.com/problems/maximum-odd-binary-number/
/**
 * @param {string} s
 * @return {string}
 */
// given a binary string
// minimum length of 1
// will always have at least one '1' character
// return the maximum odd binary number string that can be made using it
// leading zeros allowed

function maximumOddBinaryNumber(s){
    let frequencyOfOne = 0
    for(const char of s){
      if(char === '1'){frequencyOfOne++}
    }
    const maximumBinaryString = '1'.repeat(frequencyOfOne - 1) + '0'.repeat(s.length - frequencyOfOne) + '1'
    // loop through the string
    // count how many 1s exist
    // keep one '1' for the end
    // use all the other '1's at the start of the string
    // fill any space between with '0's
    // return the maximumOddBinaryString
    return maximumBinaryString
}
  
// console.log(maximumOddBinaryNumber("010"), "001")
// console.log(maximumOddBinaryNumber("0101"), "1001")