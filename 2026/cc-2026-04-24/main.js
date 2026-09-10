/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasSpecialSubstring = function(s, k) {
    // keep track of current character and # of that character
    let currChar = s[0];
    let count = 0;
    // loop through the values
    for(const char of s){
        // if character doesn't match the previou reset
        if(char === currChar){
            count++;
        }else{
            if(count === k){return true}
            currChar = char;
            count = 1;
        }
            // check for length before resestting and if it's equal to k
                // return true
            // do variable resetting for the new character
    }
    // check the final variables and return true if they're of length k
    // return false
    return count === k;
};