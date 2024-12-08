// url: https://leetcode.com/problems/check-balanced-string/
/**
 * @param {string} num
 * @return {boolean}
 */
// given a string consisting only of digits
// return a boolean (true / false ) whether a string is balanced
// balanced refering to whether the sum of odd index integers is equal to even index integers

function isBalanced(num){
// initialzie a sum for even and odd indexes
let evenSum = 0
let oddSum = 0
// loop through the even and odd indexes
for(let i = 0; i < num.length; i++){
    const isEven = i % 2 === 0
    if(isEven){evenSum += Number(num[i])}
    else{oddSum += Number(num[i])}
}
return evenSum === oddSum
}

// console.log(isBalanced("1234"), false)
// console.log(isBalanced("24123"), true)