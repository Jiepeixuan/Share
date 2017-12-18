var express = require('express');
var router = express.Router();
var userDao = require('../dao/userDao');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/**
 * 用户增加的路由控制接口
 */
router.get('/addUserAction', function(req, res, next) {
  userDao.addUserAction(req,res,next)
});

module.exports = router;
