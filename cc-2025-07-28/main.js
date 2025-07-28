/**
 * @param {number[]} colors
 * @return {number}
 */
var numberOfAlternatingGroups = function(colors) {
    function getLeft(i){
        return colors[(i - 1 + colors.length) % colors.length];
    }
    function getRight(i){
        return colors[(i + 1) % colors.length];
    }
    let count = 0;
    for(let i = 0; i < colors.length; i++){
        if(colors[i] !== getLeft(i) && colors[i] !== getRight(i)){
            count++;
        }
    }
    return count;
};