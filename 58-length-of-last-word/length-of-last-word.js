
var lengthOfLastWord = function(s) {
let k=s.trim().split(" ")
let lastWord=k.length -1;
let str=k[lastWord];
return str.length
};
console.log(lengthOfLastWord("   fly me   to   the moon  "))