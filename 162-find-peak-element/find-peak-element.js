/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
const greater=Math.max(...nums)
    const index=nums.indexOf(greater)
    return index
};