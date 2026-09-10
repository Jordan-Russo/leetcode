/**
 * @param {string} s
 * @return {boolean}
 */
function getScore(char){
    return char.charCodeAt(0) - 96;
}
function scoreBalance(s){
    let total = 0;
    for(let i = 0; i < s.length; i++){
        total += getScore(s[i]);
    }
    const isOdd = total & 1;
    if(isOdd){return false}
    let current = 0;
    for(let i = 0; i < s.length - 1; i++){
        const value = getScore(s[i]);
        current += value;
        total -= value;
        if(current === total){return true}
    }
    return false
};
