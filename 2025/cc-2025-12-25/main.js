/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortByReflection = function(nums) {
    return nums.toSorted((a,b) => {
        const revA = binaryReflection(a);
        const revB = binaryReflection(b);
        if(revA < revB){return -1}
        else if(revA > revB){return 1}
        else{return a - b}
    })
};
function binaryReflection(n){
    const digits = n.toString(2);
    let rev = ''
    for(let i = digits.length - 1; i >= 0; i--){
        rev += digits[i];
    }
    return parseInt(rev, 2);
}