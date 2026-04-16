/**
 * @param {number[]} player1
 * @param {number[]} player2
 * @return {number}
 */
function isWinner(player1, player2){
    const p1Score = calculateBowlingScore(player1);
    const p2Score = calculateBowlingScore(player2);
    if(p1Score > p2Score){
        return 1;
    }else if(p2Score > p1Score){
        return 2;
    }
    return 0;
};
function calculateBowlingScore(turns){
    let score = 0;
    for(let i = 0; i < turns.length; i++){
        const hasBonus = turns[i - 1] === 10 || turns[i - 2] === 10;
        const multiplier = hasBonus ? 2 : 1;
        score += turns[i] * multiplier;
    }
    return score;
}
