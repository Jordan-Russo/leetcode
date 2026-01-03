/**
 * @param {string} s
 * @return {boolean}
 */
var checkOnesSegment = function(s) {
    // a flag that is set to true
    let isOne = true;
    for(let i = 1; i < s.length; i++){
    // once a '0' is seen set the flag to false
        if(s[i] === '0'){
            isOne = false;
        }
    // if a '1' is seen and the flag is false return false
        if(s[i] === '1' && !isOne){
            return false
        }
    }
    // return true at the end of the loop otherwise
    return true;
};