/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let i=0
   let temp;
  for(let j=0;j<nums.length;j++){
    if(nums[j]!==0){
       temp=nums[j]
        nums[j]=nums[i]
        nums[i]=temp
        i++
    }
  }
  return nums
};