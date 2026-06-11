/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  res=[];
    let a=digits.toString().replace(/[","]/g,"");
    let b=BigInt(a) ;
b++
let c=String(b);
for(let num of c){
   
   let d=Number(num)
   res.push(d)
}
return res

};
console.log(plusOne([1,2,3]))