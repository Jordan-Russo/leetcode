// url: https://leetcode.com/problems/defanging-an-ip-address/description/
// Given an IP address defang it
    // replace every '.' with '[.]'
/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    return address.replaceAll('.', '[.]')
};