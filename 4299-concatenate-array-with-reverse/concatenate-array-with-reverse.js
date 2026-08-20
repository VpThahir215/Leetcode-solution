/**
 * @param {number[]} nums
 * @return {number[]}
 */
var concatWithReverse = function(nums) {
    const rev=nums.slice().reverse()
    return [...nums,...rev]
    
};