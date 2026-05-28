/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestBalancedSubstring = function(s) {
    // initialize longest to 0
    let longest =  0;
    // initialize on count
    let onCount = 0;
    // initialize off count
        // both as 0
    let offCount = 0;
    // loop from right to left
    for(let i = s.length - 1; i >= 0; i--){
        // is 1 and offcount is 0
            // increment on count
        if(s[i] === '1' && offCount === 0){
            onCount++;
        }else if(s[i] === '0'){
        // is 0
            // increment off count
                // take the current balanced string ( min ( offcount, oncount)) and set longest to it if larger
            offCount++;
            longest = Math.max(2 * Math.min(offCount, onCount), longest);
        }else{
        // is 1 but offcount isn't 0 
            // set off count to 0 and oncount to 1
            onCount = 1;
            offCount = 0;
        }
    }
    // return longest
    return longest;
};