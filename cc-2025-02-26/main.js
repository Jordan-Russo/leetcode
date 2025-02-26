// url: https://leetcode.com/problems/available-captures-for-rook/
// given a chess board
// return how many black pawns are currently under attack from the white rook
/**
 * @param {character[][]} board
 * @return {number}
 */
function numRookCaptures(board){
    let blackPawnAttackCount = 0;
    const rookPosition = {};
    for(let row = 0; row < board.length; row++){
        for(let col = 0; col < board.length; col++){
            const isRook = board[row][col] === 'R';
            if(isRook){
                rookPosition['row'] = row;
                rookPosition['col'] = col;
                break;
            }
        }
        // rook is found break out
        if('row' in rookPosition){break;}
    }
    // find the rook
    function findCaptures([rowChange, colChange]){
        const position = {
            row: rookPosition.row + rowChange,
            col: rookPosition.col + colChange
        }
        const isWithinBoard = (row, col) => row < 8 && row >= 0 && col < 8 && col >= 0;
        while(isWithinBoard(position['row'], position['col'])){
            const curr = board[position['row']][position['col']];
            if(curr !== '.'){
                if(curr === 'p'){blackPawnAttackCount++;}
                break;
            }
            position['row'] += rowChange;
            position['col'] += colChange;
            // is position '.' ? 
                // if yes then keep moving
                // else 
                    // if 'p' increase pawn count
                    // break;

        }
    }
    // make a helper function and the direction
        // keeps moving until off the board or a collision
            // if the collision is a black pawn 'p'
                // increment blackPawnAttackCount

    // do vertical and horizontal scans from the rook's position for the helper function
    findCaptures([-1, 0]);
    findCaptures([1, 0]);
    findCaptures([0, 1]);
    findCaptures([0, -1]);
    // return the blackPawnAttackCount
    return blackPawnAttackCount;
};