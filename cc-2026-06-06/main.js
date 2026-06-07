/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var totalWaviness = function(num1, num2) {
    // initialize total as 0
    let total = 0;
    // loop through all the numbers in the range
    for(let i = num1; i <= num2; i++){
        // convert each number into a string
        const stringNum = String(i);
        // loop through each substring of 3 digits
        for(let i = 1; i < stringNum.length - 1; i++){
            const [prev, curr, next] = [stringNum[i - 1], stringNum[i], stringNum[i + 1]];
            // determine if it's a peak or valley
            const isPeak = curr > prev && curr > next;
            const isValley = curr < prev && curr < next;
                // if either, increment total
            if(isPeak || isValley){total++}
        }
    }
    // return total 
    return total;
};