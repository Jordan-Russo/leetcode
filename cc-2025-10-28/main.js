/**
 * @param {number[]} players
 * @param {number[]} trainers
 * @return {number}
 */
var matchPlayersAndTrainers = function(players, trainers) {
    // sort both players and trainers descending
    players = players.toSorted((a,b) => b - a);
    trainers = trainers.toSorted((a,b) => b - a);
    let matchCount = 0;
    // loop through players and have a conter variable for the index in trainers
    for(const requiredSize of players){
        // compare trainers[count] to current value in players
        const canMatch = requiredSize <= trainers[matchCount];
        // if trainers[count] aka cookie size is >= players[i], the greed factor for the kid
        if(canMatch){
            // increment count
            matchCount++;
        }
    }
    // return count
    return matchCount;
};