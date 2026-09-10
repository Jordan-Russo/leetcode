// url: https://leetcode.com/problems/convert-date-to-binary/
/**
 * @param {string} date
 * @return {string}
 */
//given string date "yyyy-mm-dd"

// turn the year month and day into binary /w no leading 0s and return it in the year-month-date format
  // i.e. 1-1-1

// function convertDateToBinary(date){
//   // parse the year, month, day
//   let times = date.split('-')
//   // convert each of them to binary
//   times = times.map(time => Number(time).toString(2))
//   // join them together with '-'
//   const binaryDateString = times.join('-')
//   // return the binary date string
//   return binaryDateString
// }

const convertDateToBinary = date => date.split('-').map(time => Number(time).toString(2)).join('-')

console.log(convertDateToBinary('2080-02-29') === "100000100000-10-11101")
console.log(convertDateToBinary('1900-01-01') === "11101101100-1-1")