/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {

   
const u = nums.find(item => nums.indexOf(item) === nums.lastIndexOf(item));
return u
};