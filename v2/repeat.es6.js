(w=>{
	const typeOf=(o=>{let f=x=>typeof x;if(o && 'function'===typeof o){const s='symbol';if(s===typeof o.iterator){const p=o.prototype;f=x=>x && x.constructor===o && x!==p?s:typeof x}};return f})(w.Symbol),
	exist=(o,p,t)=>p in o && typeOf(o[p])===t;

	(o=>{
		if(!exist(o,'repeat','function')){
			const A=w.Array;
			o.repeat=function(n){var i=n>>0,s='';if(i!==0){let t=this;const l=t.length;if(l!==0){if(i<0||i>=(t=268435456)||i*l>t){throw new RangeError('Invalid count value')}else if(i>0){s=A(++i).join(t)}}};return s};
		};
		//..
	})(w.String.prototype);

})(window);



/**/
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

