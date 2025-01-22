// url: https://leetcode.com/problems/find-the-losers-of-the-circular-game/
/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
function circularGameLosers(n, k){
    const hadBall = new Set()
    let position = 1
    let turn = 1
    while(hadBall.has(position) === false){
        hadBall.add(position)
        position = position + k * turn++
        position %= n
        if(position === 0){position = n}
    }
    const losers = []
    for(let i = 1; i <= n; i++){
        if(hadBall.has(i) === false){
            losers.push(i)
        }
    }
    return losers
};
// console.log(circularGameLosers(5,2), [4,5])
// console.log(circularGameLosers(4,4), [2,3,4])