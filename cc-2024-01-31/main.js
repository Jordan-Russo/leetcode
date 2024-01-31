// url: https://leetcode.com/problems/number-of-lines-to-write-string/
// Given an array of lowercase letter widths and a string
// Return an array containing the number of lines and width of the last line
// [lines, lastLineWidth]

// Example 1:

// Input: widths = [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], s = "abcdefghijklmnopqrstuvwxyz"
// Output: [3,60]
// Explanation: You can write s as follows:
// abcdefghij  // 100 pixels wide
// klmnopqrst  // 100 pixels wide
// uvwxyz      // 60 pixels wide
// There are a total of 3 lines, and the last line is 60 pixels wide.
// Example 2:

// Input: widths = [4,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], s = "bbbcccdddaaa"
// Output: [2,4]
// Explanation: You can write s as follows:
// bbbcccdddaa  // 98 pixels wide
// a            // 4 pixels wide
// There are a total of 2 lines, and the last line is 4 pixels wide.

/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function(widths, s) {
  let lines = 1
  let pixels = 0
  // loop through characters of the string
  const getPos = char => char.charCodeAt() - 'a'.charCodeAt()
  for(const char of s){
      const width = widths[getPos(char)]
      if(pixels + width > 100){
          lines++
          pixels = width
      }else{
          pixels += width
      }
  }
  // check if adding the next character will increase pixels to over 100
      // if so increment lines and assign pixels to current character length
      // if not then add current character's length to the pixels
  // return an array that has lines + 1, and pixels
  return [lines, pixels]
};