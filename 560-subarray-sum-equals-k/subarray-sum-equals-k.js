/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
//    let count=0;
//    let i=0;
//    let amount=0
//    for(let j=0;j<nums.length;j++){
//         amount+=nums[j]
//         if(amount===k){
//             count ++
//         }
        
//    }
//    return count
 let count = 0;

    for (let i = 0; i < nums.length; i++) {
        let sum = 0;

        for (let j = i; j < nums.length; j++) {
            sum += nums[j];

            if (sum === k) {
                count++;
            }
        }
    }

    return count;
};