/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    // sort both g and s
        // g is sorted descending
        // s is sorted descending
    g = g.toSorted((a,b) => b - a);
    s = s.toSorted((a,b) => b - a);
    let matchCount = 0;
    // loop through g and have a conter variable for the index in s
    for(const requiredSize of g){
        // compare s[count] to current value in g
        const canMatch = requiredSize <= s[matchCount];
        // if s[count] aka cookie size is >= g[i], the greed factor for the kid
        if(canMatch){
            // increment count
            matchCount++;
        }
    }
    // return count
    return matchCount;
};