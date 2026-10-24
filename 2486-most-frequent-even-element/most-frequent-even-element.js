/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function(nums) {
    const freq=new Map()
    for (let val of nums){
        freq.set(val,(freq.get(val)||0)+1)

    }
   let arr=Array.from(freq).sort((a,b)=>b[1]-a[1] || a[0]-b[0])
   console.log(arr)
   

for(let [num,count] of arr){
    console.log("num",num,": count",count)
    if(num %2==0){
        return num
    }
} 
return -1




 
};