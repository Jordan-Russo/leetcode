/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
var removeDigit = function(number, digit) {
    // grab the last index of digit within number
    let targetIndex = number.lastIndexOf(digit);
    // loop through the number
    for(let i = 0; i < number.length; i++){
        // find the first index where the character is 'digit' and the following character is 'digit' or greater
        const curr = number[i];
        if(curr === digit){
            // reassign it as the targetIndex
            if(number[i + 1] > curr){
                targetIndex = i;
                break;
            }
        }
        // break out of the loop
    }
    // return the modified string with the removedIndex
    return number.slice(0, targetIndex) + number.slice(targetIndex + 1);
};
// console.log(removeDigit("123", "3"), "12");
// console.log(removeDigit("1231", "1"), "231");
// console.log(removeDigit("551", "5"), "51");