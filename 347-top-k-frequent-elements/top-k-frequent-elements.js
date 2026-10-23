/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    
    const freq=new Map()
 for(let val of nums){
    freq.set(val,(freq.get(val) || 0)+1)
 }
const arr=Array.from(freq)
arr.sort((a,b)=> b[1]-a[1])
return arr.slice(0,k).map(item=>item[0])
};