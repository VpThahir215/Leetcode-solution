/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    const arr=nums
    const res=[...arr,...nums]
    return res
};