/**
 * @param {number} n
 * @return {boolean}
 */
var canAliceWin = function(n) {
    let isAliceTurn = true;
    for(let i = 0; i < 11; i++){
        n -= 10;
        n += i;
        if(n < 0){return isAliceTurn ? false : true}
        isAliceTurn = !isAliceTurn;
    }
    return isAliceTurn ? true : false;
};