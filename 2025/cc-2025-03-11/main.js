// url: https://leetcode.com/problems/check-if-digits-are-equal-in-string-after-operations-i/
// given a string of digits
// perform a series of operations until the string has been reduced down to 2 digits
// return a boolean as to whether the remaining two digits are equal
/**
 * @param {string} s
 * @return {boolean}
 */
function hasSameDigits(s){
    // loop until s length === 2
    while(s.length > 2){
        // assign a new string
        s = transform(s);
    }
    // return whether final two digits are the same
    return s[0] === s[1];
};
function transform(s){
    let newStr = '';
    for(let i = 1; i < s.length; i++){
        const a = Number(s[i - 1]);
        const b = Number(s[i]);
        const digit = (a + b) % 10;
        newStr += digit;
    }
    return newStr;
}
// console.log(hasSameDigits('3902'), true);
// console.log(hasSameDigits('34789'), false);