/**
 * @param {number} n
 * @return {boolean}
 */
var isFascinating = function(n) {
    const fascinatingString = `${n}${n+n}${n+n+n}`;
    if(fascinatingString.length > 9){return false}
    const digits = new Set(fascinatingString);
    if(digits.size !== 9){return false}
    if(digits.has('0')){return false}
    return true;
};