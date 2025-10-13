/**
 * @param {number[]} ranks
 * @param {character[]} suits
 * @return {string}
 */
var bestHand = function(ranks, suits) {
    const isFlush = suits.every((cardSuit) => cardSuit === suits[0])
    if(isFlush){return "Flush"}
    const rankCache = {};
    for(const card of ranks){
        rankCache[card] = rankCache[card] + 1 || 1;
    }
    let max = 1;
    for(const rank in rankCache){
        max = Math.max(max, rankCache[rank]);
    }
    if(max > 2){return "Three of a Kind"}
    if(max === 2){return "Pair"}
    return "High Card";
};