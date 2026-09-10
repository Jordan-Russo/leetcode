/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {number}
 */
var findMinimumOperations = function(s1, s2, s3) {
    let commonIndex = 0;
    while(commonIndex < s1.length){
        if(s1[commonIndex] !== s2[commonIndex] || s2[commonIndex] !== s3[commonIndex]){
            break;
        }
        commonIndex++;
    }
    if(commonIndex === 0){return -1}
    return s1.length + s2.length + s3.length - 3 * commonIndex;
};