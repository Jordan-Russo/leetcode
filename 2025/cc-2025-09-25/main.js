/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var minChanges = function(n, k) {
    // make the binary strings for n and k
    let base = n.toString(2);
    let target = k.toString(2);
    // base length cannot be shorter then k length
    if(target.length > base.length){return -1}
    let count = 0;
    // at every spot that k has a 1, n must also have a one
    for(let i = 0; i < base.length; i++){
        const baseBit = base[base.length - 1 - i];
        const targetBit = target[target.length - 1 - i] ?? "0";
        // if k as a 1 but n has a 0, return false
        if(targetBit === "1" && baseBit === "0"){return -1}
        // if n has a 1 and k has a 0, keep count of those bit changes
        if(targetBit === "0" && baseBit === "1"){count++}
    // return the count of those bit changes
    }
    return count;
};