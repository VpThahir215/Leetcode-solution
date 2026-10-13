/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const newSet=new Set(nums)
    let longest=0
    
   
    for(let num of newSet){
        if (!newSet.has(num -1)){
        let currentNum=num
        let count=1
        console.log(count)
        console.log(currentNum)

           while(newSet.has(currentNum +1)){
            currentNum++
            count++

           }
             longest=Math.max(longest,count)
        }
      
          
    }
 return longest
};