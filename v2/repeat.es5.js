'use strict';
(function(w) {
 var A=w.Array,S=w.String,exist=function(a,b,c){return b in a && typeof(a[b])===c};

 (function(o) {
	if(!exist(o,'repeat','function')){
		o.repeat=function(n){
			var i=n>>0,s=this,l=s.length,j;
			if(i===0||l<1){
				s='';
			}else{
				j=268435456;
				if(i<0||i>=j||i*l>j){//console.info(i);
					throw new RangeError('Invalidcountvalue');
				}else if(i>0){
					s=A(++i).join(s);
				}
			};
			return s;
		};
	};
	//..
 })(S.prototype);

})(window);

/*
console.clear();

console.log(
'abc'.repeat(false),//''
'abc'.repeat({}),//''
'abc'.repeat([]),//''
'abc'.repeat(['']),//''
'abc'.repeat([0]),//''
'abc'.repeat([0,1]),//''
'abc'.repeat([1,1]),//''
'abc'.repeat(0),//''
'abc'.repeat(.6),//''
'abc'.repeat(true),//'abc'
'abc'.repeat(1),//'abc'
'abc'.repeat(2),//'abcabc'
'abc'.repeat([2]),//'abcabc'
'abc'.repeat(3.5),//'abcabcabc'
''.repeat(2)//''
);

console.log(
'abc'.repeat(-Infinity),//RangeError: Invalid count value
'abc'.repeat(Infinity),//RangeError: Invalid count value
'abc'.repeat(1/0),//RangeError: Invalid count value
'abc'.repeat(-1)//RangeError: Invalid count value
);
*/