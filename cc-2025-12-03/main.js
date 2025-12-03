/**
 * @param {string} s
 * @return {string}
 */
var reformat = function(s) {
    // initialize a letter array
    const letters = [];
    // initialize a string digit array
    const stringDigits = [];
    // loop through the string
    for(const char of s){
        // push value into the corresponding array based on type
        const isDigit = char >= '0' && char <= '9';
        if(isDigit){
            stringDigits.push(char);
        }else{
            letters.push(char);
        }
    }
    // if absolute difference between letter and digit length is > 1
    const canFormat = Math.abs(letters.length - stringDigits.length) <= 1;
        // return an empty string
    if(!canFormat){return ''}
    let formattedString = '';
    let pickLetters = letters.length >= stringDigits.length;
    for(let i = 0; i < s.length; i++){
        if(pickLetters){
            formattedString += letters.pop();
        }else{
            formattedString += stringDigits.pop();
        }
        pickLetters = !pickLetters;
    }
    return formattedString;
    // otherwise generate a string permutation by using elements from both arrays
        // start with the array that has the longer length
};