// url: https://leetcode.com/problems/calculate-digit-sum-of-a-string/description/
// given a string s, composed of digits, and an integer k
// keep grouping the string into groups into substrings of size k or less than keep summing the digits over and over as numbers until the string is size k

// Example 1:

// Input: s = "11111222223", k = 3
// Output: "135"
// Explanation: 
// - For the first round, we divide s into groups of size 3: "111", "112", "222", and "23".
//   ​​​​​Then we calculate the digit sum of each group: 1 + 1 + 1 = 3, 1 + 1 + 2 = 4, 2 + 2 + 2 = 6, and 2 + 3 = 5. 
//   So, s becomes "3" + "4" + "6" + "5" = "3465" after the first round.
// - For the second round, we divide s into "346" and "5".
//   Then we calculate the digit sum of each group: 3 + 4 + 6 = 13, 5 = 5. 
//   So, s becomes "13" + "5" = "135" after second round. 
// Now, s.length <= k, so we return "135" as the answer.
// Example 2:

// Input: s = "00000000", k = 3
// Output: "000"
// Explanation: 
// We divide s into "000", "000", and "00".
// Then we calculate the digit sum of each group: 0 + 0 + 0 = 0, 0 + 0 + 0 = 0, and 0 + 0 = 0. 
// s becomes "0" + "0" + "0" = "000", whose length is equal to k, so we return "000".

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var digitSum = function(s, k) {
    let sum = s
    while(sum.length > k){
        let newSum = ''
        for(let i = 0; i < sum.length; i += k){
            newSum += digitSum(sum.slice(i, i + k))
        }
        sum = newSum
    }
    return sum
    function digitSum(str){
        let sum = 0
        for(const digit of str){
            sum += Number(digit)
        }
        return sum.toString()
    }
};