/**
 * @param {number[]} nums
 * @return {number}
 */
var findTheArrayConcVal = function(nums) {
    let val=0

    



    while(nums.length > 1){
    const last=nums.pop().toString()
    const first=nums.shift().toString()
    const conc=Number(first.concat(last))
    val += conc
 
 
    }
    if(nums.length===1){
    val+= nums[0]
       
 }
    
return val

};