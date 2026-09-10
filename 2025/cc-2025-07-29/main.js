/**
 * @param {string} s
 * @return {string}
 */
function isLetter(char){
    return char >= 'a' && char <='z' || char >='A' && char <= 'Z';
}
function reverseOnlyLetters(s){
    const reversedLetters = [];
    for(let i = s.length - 1; i >= 0; i--){
        const curr = s[i];
        if(isLetter(curr)){
            reversedLetters.push(curr);
        }
    }
    let reversedStr = '';
    let pos = 0;
    for(const char of s){
        if(isLetter(char)){
            reversedStr += reversedLetters[pos];
            pos++;
        }else{
            reversedStr += char;
        }
    }
    return reversedStr;
};
