/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function(n) {
    let binaryString = n.toString(2);
    let currentZeros = 1;
    let max = 0;
    for(let i = 1; i < binaryString.length; i++){
        // keep a count of the number of zeros found after a 1
        if(binaryString[i] === '0'){
            currentZeros++;
        }else{
            max = Math.max(max, currentZeros);
            currentZeros = 1;
        }
        // when we find a 1, we use and record the max value of those zeros and reset the count to zero
    }
    return max;
    // return the maximum count of zeros found in a row that was followed by a 1
};