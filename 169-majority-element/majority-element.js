/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count={}
    for(let val of nums){
        if(count[val]){
            count[val]++
        }else{
            count[val]=1
        }
        if(count[val]>nums.length/2){
            return val
        }
    }

    
};