/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    if(n === 1){return 1}
    // judge only edge case
    const trustCache = new Map();
    const trustDonorList = new Set();
    // store the trust each person has
    // record whover vouches for another person
    for(const [donor, receiver] of trust){
        trustCache.set(receiver, trustCache.get(receiver) + 1 || 1);
        trustDonorList.add(donor);
    }
    // find anyone with n - 1 of trust
    // filter that list for someone who isn't in the trust Donor list
    for(const [receiver, rep] of trustCache){
        if(rep === n - 1 && !trustDonorList.has(receiver)){
            return receiver;
        }
    }
    // return them match for both qualities if one exists otherwise -1
    return -1;
};
// console.log(findJudge(2, [[1,2]]), 2);
// console.log(findJudge(3, [[1,3],[2,3]]), 3);
// console.log(findJudge(3, [[1,3],[2,3],[3,1]]), -1);