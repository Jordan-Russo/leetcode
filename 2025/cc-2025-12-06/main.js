/**
 * @param {string} s
 * @return {string}
 */
var modifyString = function(s) {
    let newString = '';
    for(let i = 0; i < s.length; i++){
        const isWildCard = s[i] === '?'
        if(isWildCard){
            newString += nonAdjacentCharacter(newString[i - 1] , s[i + 1]);
        }else{
            newString += s[i];
        }
    }
    return newString;
};
function nonAdjacentCharacter(left, right){
    for(let i = 0; i < 26; i++){
        const letter = String.fromCharCode(97 + i);
        if(letter !== left && letter !== right){
            return letter;
        }
    }
    throw new Error('Loop Error');
}
// console.log(modifyString("?zs"), "azs");
// console.log(modifyString("ubv?w"), "ubvaw");