/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function(moves) {
    // check who went last
        // use parity to find out if player A or B
    const playerALast = moves.length % 2 === 1;
    const lastPlayerMoves = new Set();
    // check if they won
        // loop backwards from the end, in steps of 2
    for(let i = moves.length - 1; i >= 0; i -= 2){
            // add all positions into a set
            const pos = moves[i].join('');
            lastPlayerMoves.add(pos);
    }
    // check all positions, and if found return player
        // loop for an all row match
    for(let i = 0; i < 3; i++){
        const hasMatch = lastPlayerMoves.has(`${i}0`) && lastPlayerMoves.has(`${i}1`) && lastPlayerMoves.has(`${i}2`);
        if(hasMatch){
            return playerALast ? 'A' : 'B';
        }
    }
        // loop for an all column match
    for(let i = 0; i < 3; i++){
        const hasMatch = lastPlayerMoves.has(`0${i}`) && lastPlayerMoves.has(`1${i}`) && lastPlayerMoves.has(`2${i}`);
        if(hasMatch){
            return playerALast ? 'A' : 'B';
        }
    }
    // check both diagnols
    const hasDiagnol = lastPlayerMoves.has('00') && lastPlayerMoves.has('11') && lastPlayerMoves.has('22')
        || lastPlayerMoves.has('02') && lastPlayerMoves.has('11') && lastPlayerMoves.has('20')
        // if so return their letter 
    if(hasDiagnol){
        return playerALast ? 'A' : 'B';
    }
        // otherwise return draw
            // win not found
    return moves.length === 9 ? 'Draw' : 'Pending';
};
