/**
 * @param {number} n
 * @return {number}
 */
var minimumFlips = function(n) {
    const binaryString = n.toString(2);
    let flipCount = 0;
    for(let i = 0; i < binaryString.length; i++){
        const curr = binaryString[i];
        const rev = binaryString[binaryString.length - 1 - i];
        if(curr !== rev){
            flipCount++;
        }
    }
    return flipCount;
};