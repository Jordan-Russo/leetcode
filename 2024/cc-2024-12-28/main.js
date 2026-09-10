// url: https://leetcode.com/problems/replace-all-digits-with-characters/description/
// given a string that has concatenated pairs of one english character and one digit
// return a new string made by replacing each pair's digit by the previous character shifted digits letters forward alphabetically
    // the new character will never exceed 'z'
// after shifting return the new string, just characters only no digits
/**
 * @param {string} s
 * @return {string}
 */
function replaceDigits(s){
  // initialize a new string
  let newString = ''
  // loop through the s (increment by 2)
  for(let i = 0; i < s.length; i += 2){
      // grab current index as letter
      const curr = s[i]
      // grab next index as the digit
      const shift = Number(s[i + 1])
      // use the digit to shift the charcode of the curr digit
      const replaced = String.fromCharCode(curr.charCodeAt(0) + shift)
      // push both the current character and the shifted character into the new string
      newString += curr
      if(s[i+1]){newString += replaced}
  }
  // return the new string
  return newString
};

// console.log(replaceDigits('a1c1e1'), 'abcdef')
// console.log(replaceDigits('a1b2c3d4e'), 'abbdcfdhe')