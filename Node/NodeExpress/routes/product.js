var express = require('express');
var router = express.Router();

var products = [];
products.push({
	name: "ZTE U880",
	price: 899.8
});
products.push({
	name: "HuWei 荣耀8",
	price: 1899.8
});
products.push({
	name: "iPhone 7 Plus 128G",
	price: 5899.8
});
router.get('/', function (req, res, next) {

	res.render('product', { title: '天狗商城', pdts: products });
});

//http://localhost:3000/pdt/1/2
router.get('/:id/:category', function (req, res, next) {
	res.send(req.params.id + "," + req.params.category);
});

//http://localhost:3000/pdt/2/1?name=aid
router.get('/2/:id', function (req, res, next) {
	res.send("name:" + req.query.name);
});

router.post('/add', function (req, res, next) {
	var entity = { name: req.body.name, price: req.body.price };
	products.push(entity);
	res.render('product', { title: '天狗商城', pdts: products, msg: "添加成功" });
})

router.get('/rest',function(req,res,next){
	console.log("rest");
	res.json(products);
});

module.exports = router;