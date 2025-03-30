// given a string of digits and '#'
// return the string after transforming it with the following rules:
// a to i is represented by 1-9
// j to z is represented by 10# to 26#
/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
    // initialize an empty string
    let newStr = '';
    // initialize a conversion object
    const decrypt = {
        '1': 'a',
        '2': 'b',
        '3': 'c',
        '4': 'd',
        '5': 'e',
        '6': 'f',
        '7': 'g',
        '8': 'h',
        '9': 'i',
        '10#': 'j',
        '11#': 'k',
        '12#': 'l',
        '13#': 'm',
        '14#': 'n',
        '15#': 'o',
        '16#': 'p',
        '17#': 'q',
        '18#': 'r',
        '19#': 's',
        '20#': 't',
        '21#': 'u',
        '22#': 'v',
        '23#': 'w',
        '24#': 'x',
        '25#': 'y',
        '26#': 'z',
    }
    // loop through the characters
    for(let i = 0; i < s.length; i++){
        // look at current character and 2 characters ahead
        const long = s.slice(i, i + 3);
        // if it's between 10# and 26# 
        if(long in decrypt){
            newStr += decrypt[long]
            i += 2;
            // push j to z
        }
        else{
            newStr += decrypt[s[i]];
        }
        // otherwise push a to i using the current character to map
    }
    return newStr;
};
// console.log(freqAlphabets('10#11#12'), 'jkab');
// console.log(freqAlphabets('1326#'), 'acz');