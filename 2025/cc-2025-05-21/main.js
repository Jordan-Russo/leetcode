/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfEncryptedInt = function(nums) {
    // create an encrypt function that returns a new number with the same number of digits that are all the biggest one
    // sum the numbers made
    return nums.reduce((acc, c) => acc + encrypt(c), 0);
};
function encrypt(n){
    let encryptedNumber = n;
    let largestDigit = 0;
    while(encryptedNumber > 0){
        const digit = encryptedNumber % 10;
        largestDigit = Math.max(digit, largestDigit);
        encryptedNumber = Math.floor(encryptedNumber / 10);
    }
    while(encryptedNumber < n){
        encryptedNumber *= 10;
        encryptedNumber += largestDigit;
    }
    return encryptedNumber;
}
// console.log(sumOfEncryptedInt([1,2,3]), 6);
// console.log(sumOfEncryptedInt([10,21,31]), 66);