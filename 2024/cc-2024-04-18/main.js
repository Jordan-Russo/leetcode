/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
    // transform it
    function getNumber(s){
        let sum = ''
        for(const char of s){
            sum += char.charCodeAt() - 'a'.charCodeAt() + 1
        }
        return sum
    }
    let number = getNumber(s)
    // while k > 0
    while(k > 0){
        number = String(number).split('').reduce((acc, c) => {
            return acc + Number(c)
        }, 0)
        k--
    }
    // return the number
    return number
};