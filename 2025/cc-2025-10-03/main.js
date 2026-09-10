/**
 * @param {string} s
 * @return {boolean}
 */
var checkZeroOnes = function(s) {
    // given a binary string composed only of '1's and '0's.
    // return a boolean on whether the longest contiguous segment of '1's is longer then the longest segment of '0's

    // make a max length count for both '1' and '0'
    let maxLengthOnes = 0;
    let maxLengthZeros = 0;
    // make a current count
    let curr = 0;
    // loop through the string
    for(let i = 0; i < s.length; i++){
        // is the letter equal to the previous letter?
        const isStreak = s[i] === s[i-1];
            // yes, increment count
            // no, reset count to 1
        if(isStreak){
            curr++
        }else{
            curr = 1;
        }
        // then check to reassign maxlength (for either '1' or '0')
        if(s[i] === '1'){
            maxLengthOnes = Math.max(maxLengthOnes, curr);
        }else{
            maxLengthZeros = Math.max(maxLengthZeros, curr);
        }
    }
    // return whether maxLengthOnes > maxLengthZeros
    return maxLengthOnes > maxLengthZeros;
};
