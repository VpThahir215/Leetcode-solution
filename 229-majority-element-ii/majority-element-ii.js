/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    const count={}
    const res=[]
    for(let val of nums){
        if(count[val]){
            count[val]++

        }else{
            count[val]=1
        }
    if (count[val]>nums.length/3){
        res.push(val)

        
    }
    }
return [...new Set(res)]
};