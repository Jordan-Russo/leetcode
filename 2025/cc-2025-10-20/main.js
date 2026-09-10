/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    // keep a position in s, initialized at 0
    let pos = 0;
    // loop through t
    for(const letter of t){
        // if s[pos] === t increment the pos
        if(letter === s[pos]){
            pos++;
        }
    }
    // return whether or not pos === s.length
    return pos === s.length;
};