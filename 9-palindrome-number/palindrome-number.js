/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let str=String(x)
    let arr=[];
for(let i=str.length-1;i>=0;i--){
    arr.push(str[i])
}
let toString=arr.toString().replaceAll(",","")
 if(str===toString){
    return true
}else{
  return false
}

};
isPalindrome(121)
