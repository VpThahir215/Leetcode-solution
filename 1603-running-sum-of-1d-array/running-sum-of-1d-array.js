/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let i=0
   
    for(let j=1;j<nums.length;j++){
         let temp=nums[i]+nums[j]
         nums[j]=temp
         i++

    }
   return nums
};