/**
 * @param {number} n
 * @param {number[][]} pick
 * @return {number}
 */
var winningPlayerCount = function(n, pick) {
    const playerPicks = new Map();
    // loop through the picks and make a hash map to store each player and an object to store their picks and the frequencies of those picks
    for(const [player, color] of pick){
        if(!playerPicks.has(player)){
            playerPicks.set(player, {});
        }
        // initialize the player if it isn't in the map
        // initialize the color for the player, and increment it
        playerPicks.get(player)[color] = playerPicks.get(player)[color] + 1 || 1;
    }
    // initialize a winning count
    let winningCount = 0;
    // loop through each player
    for(const [player, colorFrequencies] of playerPicks){
        // check whether or not, they have a winning frequency
            // loop through each of the key pairs of colorFrequencies
        for(const color in colorFrequencies){
            // check if ANY have a value that is >= player + 1
            if(colorFrequencies[color] >= player + 1){
                winningCount++;
                break;
            }
            // if they do, count it by incrementing winning count and breaking out of the loop
        }
    }
    return winningCount;
    // return the final count of winning players
};