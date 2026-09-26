/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    const dp=[]
    let arrr=[]
    for(let i =0;i<arr.length;i++){
         arrr.push(arr[i])
        if(arrr.length===size){
             dp.push(arrr)
             arrr=[]
          
        }
       
    }
      if (arrr.length > 0) {
        dp.push(arrr)
    }
return dp
};
