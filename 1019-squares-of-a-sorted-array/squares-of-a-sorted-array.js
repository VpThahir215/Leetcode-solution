/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    arr=[]
    
        let squre=nums.map((val)=>val*val)
       arr=squre.sort((a,b)=>a - b)
   return arr
};