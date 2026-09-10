/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var zigzagTraversal = function(grid) {
    // have a skip flag
        // alternates with every element
    let toSkip = false;
    // have a reverse flag
        // alternates with every row
    let toReverse = false;
    // result array that gets returned
    const result = [];
    for(const row of grid){
        for(let i = 0; i < row.length; i++){
            const current = toReverse ? row[row.length - 1 - i] : row[i];
            // handle reverse
            if(i === row.length - 1){toReverse = !toReverse}
            // if i === row.length - 1, handle row changes
            if(!toSkip){
                result.push(current);
            }
            toSkip = !toSkip;
        }
    }
    return result;
};