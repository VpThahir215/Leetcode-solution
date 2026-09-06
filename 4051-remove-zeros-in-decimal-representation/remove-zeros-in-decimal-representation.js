/**
 * @param {number} n
 * @return {number}
 */
var removeZeros = function(n) {
    const res=String(n).replaceAll(0,"")
    console.log(res)
    return Number(res) 
};