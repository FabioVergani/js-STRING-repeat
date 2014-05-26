String.repeat=function(s,n){var t='';if(n>1){while(n>0){if(n%2===1){t+=s};s+=s;n>>=1}}else{t=n<=0?'':s};return t};

/*
var k=1,test=String.repeat("a",k)
console.log(test,k+"=="+test.length,k==test.length)
var k=145,test=String.repeat("a",k)
console.log(test,k+"=="+test.length,k==test.length)
*/
var k=0,test=String.repeat("a",k)
console.log(test,k+"=="+test.length,k==test.length)
