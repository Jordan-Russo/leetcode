/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
    // initialize a zero count at 0
    let zeroCount = 0;
    // initialize a one count at 0
    let oneCount = 0;
    // intialize substringCount at 0
    let substringCount = 0;
    // loop through the binary string
    for(let i = 0; i < s.length; i++){
        const bit = s[i];
        const prev = s[i - 1];
        // if the current value is not the same as the previous, then reset the current count to 0
        if(bit === '1'){
            if(bit !== prev){oneCount = 0}
            oneCount++;
            if(oneCount <= zeroCount){substringCount++}
        }else{
            if(bit !== prev){zeroCount = 0}
            zeroCount++;
            if(zeroCount <= oneCount){substringCount++}
        }
        // increment the current count by one
            // if the current count that got raised <= the other count
                // increment the substringCount
    }
    // return the substringCount
    return substringCount;
};