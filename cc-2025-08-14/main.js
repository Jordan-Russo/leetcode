/**
 * @param {string} number
 * @return {string}
 */
var reformatNumber = function(number) {
    let phone = '';
    for(const char of number){
        if(char >= '0' && char <= '9'){
            phone += char;
        }
    }
    let formattedPhone = [];
    for(let i = 0; i < phone.length; i += 3){
        // check if there is 4 or fewer elements
        const isEnding = i + 4 >= phone.length;
        if(isEnding){
            // how soon is it ending
                // distance from i to the end
            const length = phone.length - i;
            if(length === 2){
                formattedPhone.push(phone[i]+phone[i+1]);
            }
            if(length === 3){
                formattedPhone.push(phone[i]+phone[i+1]+phone[i+2]);
            }
            if(length === 4){
                formattedPhone.push(phone[i]+phone[i+1]);
                formattedPhone.push(phone[i+2]+phone[i+3]);
            }
        }else{
            formattedPhone.push(phone[i]+phone[i+1]+phone[i+2]);
        }
    }
    return formattedPhone.join('-');
};