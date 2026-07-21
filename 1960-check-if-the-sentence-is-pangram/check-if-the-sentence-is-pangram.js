/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let eng="abcdefghijklmnopqrstuvwxyz"
for(let val of eng){
    if (!sentence.includes(val)){
        return false
  }
 
}
 return true
};