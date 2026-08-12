/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
  let   product =1
    let sum=0
    let H=String(n)
    for(let i=0;i<H.length;i++){
        product *=Number(H[i])
        sum +=Number(H[i])
        
    }
    return product - sum
};