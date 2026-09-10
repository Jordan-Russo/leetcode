/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function(turnedOn) {
    // initialize result array
    const result = [];
    // generate all possible bit combinations
    Bit10Combinations();
    function Bit10Combinations(currentStr = '', bitCount = 0){
        // base case + verification step
        if(currentStr.length === 10){
            if(bitCount !== turnedOn){return}
            const hours = parseInt(currentStr.slice(0,4), 2);
            const minutes = parseInt(currentStr.slice(4), 2);
            if(hours > 11 || minutes > 59){return}
            // format the validated time
            result.push(`${hours}:${minutes.toString().padStart(2, '0')}`);
            return;
        }
        const on = currentStr + '1';
        const off = currentStr + '0';
        if(bitCount < turnedOn){
            Bit10Combinations(on, bitCount + 1);
        }
        Bit10Combinations(off, bitCount);
    }
    return result;
    // verify whether they have the same number of bits turned on
    // verify that they produce a legal time
        // add them to a result array
    // return result array
};