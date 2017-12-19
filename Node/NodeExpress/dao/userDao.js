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
function addUserAction(tel,username,password, callback) {
    // 执行Query
    db.queryArgs($sqlCommands.user_status.insertUser,
        [tel, username, password],
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
function loginUserAction(tel,callback){
    // 执行Query
    db.queryArgs($sqlCommands.user_status.selectUserByTel,
        [tel],
        function (err, result) {
            callback(err, result);
        }
    );
}


// exports
module.exports = {
    addUserAction: addUserAction,
    loginUserAction: loginUserAction,
};
