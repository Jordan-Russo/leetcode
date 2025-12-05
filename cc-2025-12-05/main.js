/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function(n) {
    let counter = 0;
    let stringNumber = ''
    while(n > 0){
        const digit = n % 10;
        n = Math.trunc(n / 10);
        stringNumber = digit + stringNumber;
        counter++;
        if(counter === 3){
            if(n > 0){
                stringNumber = '.' + stringNumber;
            }
            counter = 0;
        }
    }
    return stringNumber || '0';
};