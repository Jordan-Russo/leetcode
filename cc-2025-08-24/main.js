/**
 * @param {string} moves
 * @return {number}
 */
var furthestDistanceFromOrigin = function(moves) {
    let wildCount = 0;
    let pos = 0;
    for(const move of moves){
        if(move === 'L'){pos--}
        else if(move === 'R'){pos++}
        else{wildCount++}
    }
    return Math.abs(pos) + wildCount;
};