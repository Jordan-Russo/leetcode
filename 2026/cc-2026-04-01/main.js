/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var canBeEqual = function(s1, s2) {
    // make a frequency cache for the parity of both strings
    // each partiy cache from each string should match in character quantity
    // since string lengths are 4, caches are not needed
    const evenS1 = [s1[0], s1[2]].sort().join('');
    const evenS2 = [s2[0], s2[2]].sort().join('');
    const oddS1 = [s1[1], s1[3]].sort().join('');
    const oddS2 = [s2[1], s2[3]].sort().join('');
    return evenS1 === evenS2 && oddS1 === oddS2;
};