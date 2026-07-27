/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function(nums) {
  let singleDigit=0
  let doubleDigit=0
  for(let val of nums){
    if(val<10){
        singleDigit +=val
    }else{

        doubleDigit +=val
    }

  }
  let totalSum=singleDigit+doubleDigit;
  console.log(totalSum)
  

  return(
    singleDigit > totalSum-singleDigit ||
    doubleDigit > totalSum-doubleDigit
  )

}
  
  