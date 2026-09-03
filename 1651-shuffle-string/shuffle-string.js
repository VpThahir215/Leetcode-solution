/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let str=[]
    for(let val of indices){
     str[indices[val]]=s[val]
    }
    return str.join("")
};