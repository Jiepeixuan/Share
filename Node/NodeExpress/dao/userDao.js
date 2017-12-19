/**
 * Created by peixuan.xie on 2017/12/18.
 */
var db = require('../common/basicConnection');
var $sqlCommands = require('../common/sqlCommand');

/**
 * 增加用户Action
 * @param req
 * @param callback
 */
function addUserAction(req, callback) {
    // 获取前台页面传过来的参数
    var param = req.body || req.params;
    // 执行Query
    db.queryArgs($sqlCommands.user_status.insertUser,
        [param.tel, param.username, param.password],
        function (err, result) {
            console.log(err + " " + result);
            callback(err, result);
        }
    );
}


/**
 * 增加用户Action接口
 * @param req
 * @param callback
 */
function addUserActionI(req, callback) {
    // 获取前台页面传过来的参数
    var param = req.query || req.params;
    // 执行Query
    db.queryArgs($sqlCommands.user_status.insertUser,
        [param.tel],
        function (err, result) {
            console.log(err + " " + result);
            callback(err, result);
        }
    );
}

/**
 * 用户登录Action
 * @param req
 * @param callback
 */
function loginUserAction(req,callback){
    // 获取前台页面传过来的参数
    var param = req.body || req.params;
    // 执行Query
    console.log(param.tel);
    db.queryArgs($sqlCommands.user_status.selectUserByTel,
        [param.tel],
        function (err, result) {
            console.log(err + " " + result);
            callback(err, result);
        }
    );
}


// exports
module.exports = {
    addUserActionI: addUserActionI,
    addUserAction: addUserAction,
    loginUserAction: loginUserAction,
};
