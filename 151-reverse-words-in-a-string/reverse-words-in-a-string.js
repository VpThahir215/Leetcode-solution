/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
const reverse=s.split(/\s+/).reverse()
    const cut=reverse.join(" ")
    console.log(cut)
    
   return cut.trim()
};