/**
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function(colors) {
    let max = 0;
    for(let i = 0; i < colors.length; i++){
        for(let j = i + 1; j < colors.length; j++){
            const isUnequal = colors[i] !== colors[j];
            const distance = j - i;
            if(isUnequal){
                max = Math.max(max, distance)
            }
        }
    }
    return max;
};