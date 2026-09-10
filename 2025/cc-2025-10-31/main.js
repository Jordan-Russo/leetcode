/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    // initialize a set to store the digits
    const digits = new Set();
    // loop through s
    for(const char of s){
        // if current char is a digit store it in the set
        const isDigit = char >= '0' && char <= '9';
        if(isDigit){digits.add(char)}
    }
    // if set size is < 2 return -1
    if(digits.size < 2){return -1}
    // loop through 9 -> 0
    let count = 0;
    for(let i = 9; i >= 0; i--){
        // return the first value that gets found
        if(digits.has(`${i}`)){
            count++;
        }
        if(count === 2){return i}
    }
};