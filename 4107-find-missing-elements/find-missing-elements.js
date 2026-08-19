/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function(nums) {
const smallest=Math.min(...nums)
const largest=Math.max(...nums)
const arr=[]
const sorted=[]
for(let i=smallest;i<=largest;i++){
    arr.push(i)
}
const flat=[...nums,...arr]

for(let val of flat){
    if(!nums.includes(val)){
        sorted.push(val)
    }
}
return sorted
}
