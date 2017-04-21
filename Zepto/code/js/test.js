var div = document.getElementById('main');
var n2 = document.getElementById('n1')

//contains param1 是否包含param2
//$.contains(parent, node)  ⇒ boolean
console.log($.contains(div, n2));

//each 用于遍历 数据 或者KV去遍历对象
//$.each(collection, function(index, item){ ... })  ⇒ collection
$.each(['a', 'b', 'c'], function(index, item) {
	console.log(index)
	console.log(item)
})

var hash = {
	name: 'zepto.js',
	size: 'micro'
}
$.each(hash, function(key, value) {
	//				console.log('%s: %s', key, value)
	console.log(key)
	console.log(value)
})

//extend
//$.extend(target, [source, [source2, ...]])  ⇒ target
//$.extend(true, target, [source, ...])  ⇒ target

var target = {
		one: 'patridge'
	},
	source = {
		name: "karry",
		email: "karry@a.com",
		tel: {
			homeTel: "158255",
			officeTel: "02112585"
		}
	}

$.extend(target, source);
console.log(JSON.stringify(target));
console.log(JSON.stringify(source))

//$.grep
//$.grep(items, function(item){ ... })   ⇒ array
var arr;
arr = $.grep([1, 2, 3], function(item) {
	console.log(item)
	return item > 1
});
for(x in arr) {
	console.log(arr[x]);
}

//$.inArray
//$.inArray(element, array, [fromIndex])   ⇒ number
var temp;
temp = $.inArray("abc", ["bcd", "abc", "edf", "aaa"]);
console.log(temp) //1
temp = $.inArray("abc", ["bcd", "abc", "edf", "aaa"], 1);
console.log(temp) //1
temp = $.inArray("abc", ["bcd", "abc", "edf", "aaa"], 2);
console.log(temp) //-1

//$.isArray
//$.isArray(object)   ⇒ boolean
var arr = [1, 2, 3];
console.log($.isArray(arr))
console.log($.isArray(temp))

//$.isFunction
//$.isFunction(object)   ⇒ boolean

//$.isNumeric 
//$.isNumeric(value)  ⇒ boolean
console.log($.isNumeric(1)); //true
console.log($.isNumeric(true)); //false
console.log($.isNumeric('aaa')); //true
console.log($.isNumeric("1")); //true

//$.isPlainObject
//$.isPlainObject(object)   ⇒ boolean
//判断object是否为简单对象 ，只有使用{} 和new Object 返回true

console.log($.isPlainObject([])); //false 
console.log($.isPlainObject({})); //true
console.log($.isPlainObject(new Object)); //true
console.log($.isPlainObject(new Date)); //false
console.log($.isPlainObject(window)); //false

//$.isWindow
//$.isWindow(object)  ⇒ boolean

//$.map
//$.map(collection, function(item, index){ ... })  ⇒ collection

arr = $.map([1, 2, 3, 4, 5], function(item, index) {
	console.log(item);
	console.log(index)
	if(item >= 2) {
		return item * 3;
	}
});
for(x in arr) {
	console.log(arr[x]);
}

$.map({
	"yao": 1,
	"tai": 2,
	"yang": 3
}, function(item, index) {
	console.log(item); //1 2 3
	console.log(index) // yao tai yang
	if(item > 1) {
		return item * item;
	} //[4,9]
});

//$.noop
//var callback = $.noop

//$.parseJSON
//$.parseJSON(String)=> object
temp = $.parseJSON('{"name":"John"}');
console.log(JSON.stringify(temp));

//$.trim
//$.trim(string)    ⇒ string
//删除字符串开始和末尾空格

temp = " 2 2 2  ";
console.log(temp); // " 2 2 2  "
temp = $.trim(temp);
console.log(temp) //"2 2 2"

//$.type
//$.type(object)=>string

console.log($.type(true)); //boolean
console.log($.type(2)); //number
console.log($.type(1.02)); //number
console.log($.type("1")); //string
console.log($.type()); //undefined
console.log($.type(null)); //null
console.log($.type([1, 2])); //array

//add
//add(selector,[context])=>self

n2 = document.getElementById('n1')

$('li').add('p').css('background-color', 'red'); //在document中寻找li标签，并将p标签加入集合，设置背景色为red
$('li', n2).add('p').css('background-color', 'yellow'); //在n2中寻找li标签，并将p标签加入集合，设置背景色为yellow

//addClass
//addClass(name)    ⇒ self
// addClass(function(index, oldClassName){ ... })    ⇒ self
$(n2).addClass('div1'); //给n2一个名字为div1的class

//after
//after(content)=>self  content可以为HTML string, a DOM node or an array of nodes.
//在每个匹配的元素后插入内容
$('p', n2).after('<p>A note below the label</p>'); //在n2中的p标签下插入一个p表情

//append
//append(content)    ⇒ self
//在每个匹配的元素末尾插入内容
$('ul', n2).append('<p>new list item</p>')

//appendTo
//appendTo(target)    ⇒ self

$('<li>new list items</li>').appendTo('ul')

//attr

//attr(name)    ⇒ string
//attr(name, value)    ⇒ self
//attr(name, function(index, oldValue){ ... })    ⇒ self
//attr({ name: value, name2: value2, ... })    ⇒ self
//这只div的属性
var div = $('div')
div.attr('action')//=> read value
div.attr('action','/create') //=> set value
div.attr('action',null) //=> remove attribute

// multiple attributes:
div.attr({
	action: '/create',
	method: 'post'
})


//before
//before(content)    ⇒ self
$('div').before('<p>See the following div:</p>')


//children
//children([selector]) =>collection

$('ul','div').children('li:nth-child(2n)');//选择div下的ul中偶数位置的li标签 
$('ul').children('li:nth-child(2n)'); //所有的ul中偶数位置的li标签

