/**
 * @param {string} s
 * @return {boolean}
 */
function repeatedSubstringPattern(s){
    // initialize pattern to an empty string
    let pattern = '';
    const half = Math.floor(s.length / 2);
    // loop through to half the length of the string (rounded down) to select the pattern
    for(let i = 0; i < half; i++){
        // add the current character to the pattern
        pattern += s[i];
        // verify the pattern
        if(verifyPattern(pattern, s)){
            return true;
        }
        // if valid return true
    }
    // return false
    return false
};
function verifyPattern(pattern, s){
    // verify that the pattern and pattern length are divisible
    const isDivisible = s.length % pattern.length === 0;
    // if not, return false
    if(!isDivisible){return false}
    // loop the pattern through the string
    for(let i = 0; i < s.length; i += pattern.length){
        const section = s.slice(i, i + pattern.length);
        if(section !== pattern){return false}
        // if any segments are unequal, return false
    }
    // return true
    return true;
}