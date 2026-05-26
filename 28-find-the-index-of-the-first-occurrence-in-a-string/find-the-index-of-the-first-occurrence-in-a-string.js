
var strStr = function(haystack, needle) {
 for(let i=0;i<=haystack.length -needle.length;i++){
    let found=true;
    for(let k=0;k<needle.length;k++){
    if(haystack[i+k]!==needle[k]){
        found=false;
        break;
    }
    }
     if(found){
    return i

 }

 }
 return -1
}

console.log(strStr("sadbutsad","sad"))