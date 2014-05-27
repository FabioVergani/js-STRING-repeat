String.repeat=function(s,n){var t='';if(n>1){while(n>0){if(n%2===1){t+=s};s+=s;n>>=1}}else{t=n<=0?'':s};return t};



String.padN=function(s,i,t){return t?i?String.repeat(t,i-s.length)+s:s:s}

console.log(String.padN("1",0));
console.log(String.padN("1",0,'-'));
console.log(String.padN("1",1,'x'));
console.log(String.padN("1",2,'x'));
console.log(String.padN("1",23,'x'));
