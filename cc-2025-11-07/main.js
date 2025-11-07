/**
 * @param {number[]} nums
 * @return {number[]}
 */
function findErrorNums(nums){
    const seen = new Set();
    const result = [];
    for(const num of nums){
        if(seen.has(num)){
            result[0] = num;
        }
        seen.add(num);
    }
    let n = nums.length;
    while(n > 0){
        if(!seen.has(n)){
            result[1] = n;
            break;
        }
        n--
    }
    return result;
}
// // n log n solution
// var findErrorNums = function(nums) {
//     const sorted = nums.toSorted((a,b) => a - b);
//     const result = [];
//     // scan for the number that was duplicated push to result
//     for(let i = 0; i < sorted.length - 1; i++){
//         if(sorted[i] === sorted[i + 1]){
//             result.push(sorted[i]);
//             break;
//         }
//     }
//     // scan for the number that is missing, push to result
//     for(let i = 0; i < sorted.length - 1; i++){
//         // take the difference between 2 sequential numbers
//         const diff = sorted[i + 1] - sorted[i];
//             // if diff is < 1 then push the number between the two and end the loops
//         if(diff > 1){result.push(sorted[i] + 1)}
//     }
//     if(result.length === 1){result.push(sorted[0] === 1 ? sorted.length : 1)}
//     // edge cases are either 1 or n missing from nums
//     return result;
// };