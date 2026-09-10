/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
    let group;
    let pos = 0;
    while(pos < bits.length){
        const curr = bits[pos];
        if(curr === 0){
            pos++;
            group = 0;
            continue;
        }
        const next = bits[pos + 1];
        if(next !== undefined){
            group = curr * 10 + next
        }
            pos += 2;
    }
    return group === 0;
};