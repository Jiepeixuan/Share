var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
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
	res.render('product',{ title: '天狗商城', pdts:products});
});

module.exports=router;