/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
  a=word1.toString().replaceAll(",","")
   b=word2.toString().replaceAll(",","")
if(a===b){
    return true

}else{
    return false
}


   
};