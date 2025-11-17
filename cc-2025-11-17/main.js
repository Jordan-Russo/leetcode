/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    // create a hash map with 5 and 10 as keys
    let fiveCount = 0;
    let tenCount = 0;
    // loop through the bills
    for(const payment of bills){
        // when paid a 5
        if(payment === 5){
            // increment count of 5 by 1
            fiveCount++;
        }
        // when paid a 10
        if(payment === 10){
            // decrement count of 5 by 1
            fiveCount--;
            // if not possible return false
            if(fiveCount < 0){return false}
            // increment count of 10 by 1
            tenCount++;
        }
        // when paid a 20
        if(payment === 20){
            // either decrement 10 by 1 and 5 by 1
            if(tenCount > 0 && fiveCount > 0){
                tenCount--;
                fiveCount--;
            }
            // OR decrement 5 by 3
            else if(fiveCount > 2){
                fiveCount -= 3;
            }
            // if neither is possible return false
            else{
                return false;
            }
        }
    }
    // return true
    return true;
};