/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
 let k=nums1.slice(0,m);
k=k.concat(nums2);
k=k.sort((a,b)=>{
    return a-b
})
console.log(k)
for(let i=0;i<k.length;i++){
    nums1[i]=k[i]
}

};
