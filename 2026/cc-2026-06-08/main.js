/**
 * @param {number} n
 * @return {boolean}
 */
var consecutiveSetBits = function(n) {
    const bitString = n.toString(2);
    let setBitPairs = 0;
    for(let i = 1; i < bitString.length; i++){
        if(bitString[i - 1] === '1' && bitString[i] === '1'){setBitPairs++}
        if(setBitPairs > 1){return false}
    }
    return setBitPairs === 1;
};