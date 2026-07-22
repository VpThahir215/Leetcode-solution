/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
    let count=0;
   for (let val of arr){
    if (val %2 !==0){
        count++
      
        if(count===3){
            return true

        }
    }else{
            count=0
        }
   }
   return false
};