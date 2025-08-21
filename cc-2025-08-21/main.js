/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    let totalOnes = 0;
    for(const bit of s){
        if(bit === '1'){
            totalOnes++;
        }
    }
    let zeros = 0
    let maxScore = 0
    for(let i = 0; i < s.length - 1; i++){
        const bit = s[i];
        if(bit === '1'){
            totalOnes--;
        }else{
            zeros++;
        }
        score = zeros + totalOnes;
        maxScore = Math.max(score, maxScore)
    }
    return maxScore;
};