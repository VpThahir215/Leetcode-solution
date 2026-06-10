/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
   let m= s.toLowerCase().replace(/[^a-zA-Z0-9]/gi,"")
let arr=[];
for(let i=m.length;i>=0;i--){
    arr.push(m[i])
}
let n=arr.toString().replaceAll(",","");
if(m===n){
    return true
}else{
    return false
}

};
isPalindrome("race a car")