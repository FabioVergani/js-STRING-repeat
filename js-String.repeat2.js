//#
Object.refill=function(o,p,e){o[p]=p in o ?o[p]:e||null}

//#
(function(e,r,s,f){
r(e,s,f.bind({p:'pop'}));
r(e,s+'TopDown',f.bind({p:'shift'}));
r.by=function(o,e){eachKey(e,function(p){Object.refill(o,p,e[p])})};
})(Array,Object.refill,'Consume',function(o,f){var e,p=this.p,m=[];while(e=o[p]()){f(e);m.push(e)};return m});

//#
function eachKey(o,f){return Array.Consume(Object.keys(o),f)};

//#
Object.refill.by(String.prototype,{
 repeat:function(n){var s=this;if(s!==null && n>0){var t='';while(n>0){if(n%2===1){t+=s};s+=s;n>>=1};s=t};return s}//,...
});


console.log("6".repeat(3));





