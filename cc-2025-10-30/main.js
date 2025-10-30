/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
    // is number non-negative
        // yes
            // return num.toString(16)
    if(num >= 0){return num.toString(16)}
    // no, perform two's complement
    const abs = Math.abs(num);
        // take our number, turn it into binary
    const binary = abs.toString(2).padStart(32, '0');
        // pad it to the left with zeros until it has a length of 32
        // the first digit should be 1 if negative and 0 if positive
    // invert the binary string
    let invertedBinary = ''
    for(const bit of binary){
        invertedBinary += bit === '0' ? '1' : '0';
    }
    // parse the binary, add one to finish two's complement, then turn it into hexadecimal
    const decimal = parseInt(invertedBinary, 2) + 1;
    // return the hexadecimal
    return decimal.toString(16);
};