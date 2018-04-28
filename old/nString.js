function nString(a,b){var n=a,s=b,t='';if(n!==0){if(n>1){while(n>0){if(n%2===1){t+=s};s+=s;n>>=1;};}else{t=n<=0?'':s};};return t;};
