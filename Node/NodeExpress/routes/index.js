var express = require('express');
var router = express.Router();
var userDao = require('../dao/userDao');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get("/home",function(req,res){
    if(!req.session.user){                     //到达/home路径首先判断是否已经登录
        req.session.error = "请先登录"
        res.redirect("/login");                //未登录则重定向到 /login 路径
    }
    res.render("home",{title:'Home',name:req.session.user.name});         //已登录则渲染home页面
});

/**
 * 用户登录UI
 */
router.route("/login").get(function (req, res) {
    res.render('login', {title: '用户登录'});
}).post(function (req, res) {
    var tel = req.body.tel
    var _password = req.body.password;
    userDao.loginUserAction(tel, function (err, result) {
        if (err) {
            req.session.error = '系统错误';
            res.send(404);
            return;
        }
        if(result.length === 0){
            req.session.error = '用户名不存在';
            res.send(404);
            return;
        }
        var pwd = result[0].password;
        if (_password !== pwd) {
            req.session.error = "密码错误";
            res.send(404);
            return;
        }
        //res.json({"code": "0000", msg: "success"})
        req.session.user = result[0];
        console.log(req.session.user);
        res.send(200);
    })
});

/**
 * 用户登录接口
 */
router.get('/userLoginAction', function (req, res) {
    var _tel = req.query.tel;
    var _password = req.query.password;
    userDao.loginUserAction(_tel, function (err, result) {
        if (err) {
            res.json({"code": "9999", msg: "error"});
            return;
        }
        var pwd = result[0].password;
        console.log(pwd);
        if (_password !== pwd) {
            res.json({"code": "0001", msg: "密码错误"});
            return;
        }
        res.json({"code": "0000", msg: "success"})
    })
});

/**
 * 用户注册UI
 */
router.route("/register").get(function (req, res) {
    res.render('register', {title: '用户注册', message: '1234'});
}).post(function (req, res) {
    var _tel = req.body.tel;
    var _uersName = req.body.username;
    var _password = req.body.password;
    userDao.addUserAction(_tel, _uersName, _password, function (err, result) {
        res.json(result);
    })
});


/**
 * 用户注册接口
 */
router.get('/userRegisterAction', function (req, res) {
    var _tel = req.query.tel;
    var _uersName = req.query.username;
    var _password = req.query.password;
    userDao.addUserAction(_tel, _uersName, _password, function (err, result) {
        console.log(result);
        res.json(result);
    })
});

module.exports = router;
