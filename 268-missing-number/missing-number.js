/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const arr=[]
    let num;

  for(let i=0;i<=nums.length;i++){
    arr.push(i)
  }
    for(let val of arr){
        if(!nums.includes(val)){
        num=val
        }

    }
    return num
};