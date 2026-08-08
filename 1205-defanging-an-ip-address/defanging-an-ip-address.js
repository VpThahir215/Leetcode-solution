/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    const final=address.replaceAll(".","[.]")
    const arr= final.toString()
    return arr
};