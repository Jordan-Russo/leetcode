/**
 * @param {string} s
 * @return {string}
 */
var getSmallestString = function(s) {
    // loop through the string and find the first pair of ajacent digits that share the same parity
    for(let i = 1; i < s.length; i++){
        const prev = s[i - 1];
        const curr = s[i];
        if(prev === curr){continue}
        const hasMatchingParity = (Number(prev) & 1) === (Number(curr) & 1);
        const isDecreasingSwap = curr < prev;
        if(hasMatchingParity && isDecreasingSwap){
            return s.slice(0, i - 1) + s[i] + s[i - 1] + s.slice(i + 1);
        }
    }
    return s;
        // they cannot be equal
        // swap the two positions to make the new string number and return it
    // if not possible return the original number string
};