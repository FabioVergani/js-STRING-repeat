repeat={
 text.function(s,n){if(s!==null && n>0){var t='';while(n>0){if(n%2===1){t+=s};s+=s;n>>=1};s=t};return s},//..
};
String.prototype.repeat=function(n){return repeat.text(this,n)};

//
console.clear();
var demo="2".repeat(114);
console.log(demo.length,demo)





/*
function repeat(s,n){
 if(s!==null && n>0){var t='';while(n>0){if(n%2===1){t+=s};s+=s;n>>=1};s=t};
 return s
};
//
console.clear();
var demo=repeat("2",114);
console.log(demo.length,demo)
*/
