/**
 * @param {number} n
 * @param {number[]} rounds
 * @return {number[]}
 */
// given an integer, n, representing the # of sections in the track (1-indexed)
// given an integer array, rounds, listing the start/stop positions
// return an array showing the most frequently visted sector(s) in ascending section # order
function mostVisited(n, rounds){
    const sectors = new Array(n).fill(0);
    // make our sectors array that hold how often they're visited
    // start looping through the sectors from rounds[0]
    let current = rounds[0];
    // initialize position at 0
    let position = 0;
    // as we loop through keep track of the position within the rounds array
    while(position < rounds.length){
        // sectors array is 0-indexed, while rounds array's sectors are 1-indexed
        // increment sector visted count
        sectors[current - 1]++;
        // increment position when visting the next spot
        if(current === rounds[position]){
            position++;
        }
        // increment current and modulo it at n + 1, and add 1 if it's 0
        current++;
        current %= n + 1;
        if(current === 0){current = 1}
    }
    // find the maximum visted sector frequency #
    const max = Math.max(...sectors);
    // return the sectors array filtered for that frequency (so its sorted ascending)
    const result = [];
    for(let i = 0; i < sectors.length; i++){
        if(sectors[i] === max){
            result.push(i + 1);
        }
    }
    return result;
};
function mostVisited(n, rounds){
    const startSector = rounds[0];
    let currentSector = rounds[rounds.length - 1];
    const frequentSectors = [];
    for(let i = 0; i < n; i++){
    // record the sectors visited in an array
        frequentSectors.push(currentSector);
    // start from the end, and loop in reverse, sectors until you reach the start sector value
        // convert sector 0 -> sector n
        if(currentSector === startSector){break}
        currentSector--;
        if(currentSector === 0){currentSector = n}
    }
    // reverse that array and return it
    return frequentSectors.sort((a,b) => a - b);
}
// console.log(mostVisited(4, [1,3,1,2]), [1,2]);
// console.log(mostVisited(2, [2,1,2,1,2,1,2,1,2]), [2]);
// console.log(mostVisited(7, [1,3,5,7]), [1,2,3,4,5,6,7]);