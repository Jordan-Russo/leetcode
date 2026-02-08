/**
 * @param {string} password
 * @return {boolean}
 */
const isLetter = char => char >= 'a' && char <= 'z' || char >= 'A' && char <= 'Z';
const strongPasswordCheckerII = function(password) {
    const goodLength = password.length >= 8;
    const specials = "!@#$%^&*()-+";
    let hasLowerCase = false;
    let hasUpperCase = false;
    let hasDigit = false;
    let hasSpecial = false;
    if(!goodLength){return false}
    for(const char of password){
        if(isLetter(char) && char === char.toLowerCase()){
            hasLowerCase = true;
            break;
        }
    }
    if(!hasLowerCase){return false}
    for(const char of password){
        if(isLetter(char) && char === char.toUpperCase()){
            hasUpperCase = true;
            break;
        }
    }
    if(!hasUpperCase){return false}
    for(const char of password){
        if(char >= '0' && char <= '9'){
            hasDigit = true;
            break;
        }
    }
    if(!hasDigit){return false}
    for(const char of password){
        if(specials.includes(char)){
            hasSpecial = true;
            break;
        }
    }
    if(!hasSpecial){return false}
    for(let i = 1; i < password.length; i++){
        if(password[i] === password[i - 1]){return false}
    }
    return true;
};