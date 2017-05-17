function logger(params){
	console.log(params);
}

{
	let [a,b,c]=[1,2,3];
	logger(a);	//1
	logger(b);	//2
	logger(c);	//3
}

{
	let[foo,[[bar],baz]]=[1,[[2],3]];
	logger(foo);	//1
	logger(bar);	//2
	logger(baz);	//3
}


{
	let [,,third]=["foo","bar","baz"];
	logger(third);	//baz
}

{
	let[x,,y]=[1,2,3];
	logger(x);	//1
	logger(y);	//3
}

{
	let[head,...tail]=[1,2,3,4];
	logger(head);	//1
	logger(tail);	//[2,3,4]
}

{
	let[m,n,...z]=['a'];
	logger(m);	//"a"
	logger(n);	//undifined
	logger(z);	//[]
}

{
	let[foo,[[bar],baz]]=[1,[[2,3],3]];
	logger(bar);	//2
}

//默认值
{
	let[x=1]=[undefined];
	//x//1
	let[y=1]=[null];
	//y 	null
	//默认赋值1 当数组成员严格等于undefined  默认值生效  否则不生效
}

//对象解构赋值
{
	let{bar,foo}={foo:"aaa",bar:"bbb"};
	logger(bar);// bbb
	logger(foo);//aaa
}



