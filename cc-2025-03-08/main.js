// url: https://leetcode.com/problems/remove-trailing-zeros-from-a-string/
// given an string integer, return the string integer after remvoing all trailing zeros in the end
// a trailing zero are all the 0s that are at the end a number in a row
/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function(num) {
    let end = num.length - 1;
    // keep looping backwards until we encounter a string digit that is NOT 0.
    while(num[end] === '0'){
        end--;
    }
    // create a string that goes from the beginning up to the point before any trailing zeros
    return num.slice(0, end + 1);
};
// console.log(removeTrailingZeros("51230100"), '512301');
// console.log(removeTrailingZeros("123"), '123');