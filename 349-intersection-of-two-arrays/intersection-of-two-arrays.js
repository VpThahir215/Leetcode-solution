/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const arr=[]
    for(let val of nums1){
        if(nums2.includes(val)){
              arr.push(val)
        }
 
};
const a=[...new Set(arr)]

return a
}