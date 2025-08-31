/**
 * @param {number[]} order
 * @param {number[]} friends
 * @return {number[]}
 */
var recoverOrder = function(order, friends) {
    const friendSet = new Set(friends);
    const finishOrder = [];
    for(const number of order){
        if(friendSet.has(number)){
            finishOrder.push(number);
        }
    }
    return finishOrder;
};