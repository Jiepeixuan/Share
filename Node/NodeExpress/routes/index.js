var express = require('express');
var router = express.Router();
var userDao = require('../dao/userDao');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

/**
 * 用户登录UI
 */
router.route("/login").get(function (req, res) {
    res.render('login', {title: '用户登录'});
}).post(function (req, res) {
    userDao.loginUserAction(req, function (err, result) {
        res.json(result);
    })
});

/**
 * 用户注册UI
 */
router.route("/register").get(function (req, res) {
    res.render('register', {title: '用户注册', message: '1234'});
}).post(function (req, res) {
    userDao.addUserAction(req, function (err, result) {
        res.json(result);
    })
});


/**
 * 用户增加的路由控制接口
 */
router.get('/addUserActionI', function (req, res) {
    userDao.addUserActionI(req, function (err, result) {
        console.log(result);
        res.json(result);
    })
});

module.exports = router;
