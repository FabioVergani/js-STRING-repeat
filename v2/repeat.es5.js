'use strict';
(function(win){

 var typeOf=(function(w){var f=function f(x){return typeof(x)},o=w.Symbol,p;if(o && typeof(o)==='function' && typeof(o.iterator)==='symbol'){p=o.prototype;f=function(x){return x && x.constructor===o && x!==p?'symbol':typeof x}};return f})(win),
 exist=function(o,p,t){return p in o && typeOf(o[p])===t};

 (function(w){
	var o=w.String.prototype;
	if(!exist(o,'repeat','function')){
		o.repeat=(function(A,E){
			return function(n){
				var i=n>>0,s=this,l=s.length,j;
				if(i===0||l<1){s=''}else{
					j=268435456;
					if(i<0||i>=j||i*l>j){throw new RE('Invalidcountvalue')}else if(i>0){s=A(++i).join(s)}
				};
				return s
			};
		})(w.Array,w.RangeError);
	};
	//..
 })(win);

})(window);





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
