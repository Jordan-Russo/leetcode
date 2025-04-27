/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function(s) {
    // initialize a sum
    let sum = 0;
    // loop through each character in the string
    for(let i = 0; i < s.length; i++){
        // calculate product of reversed alphabet position with its index (1-indexed)
            // reversed alphabet position is a = 26, z = 1
            // -1 * (char.charCodeAt(0) - 'z'.charCodeAt(0) - 1)
        const reversePosition = -(s[i].charCodeAt(0) - 123);
        const product = reversePosition * (i + 1);
        // add product to sum
        sum += product
    }
    // return sum
    return sum;
};