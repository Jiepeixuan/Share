/**
 * Created by peixuan.xie on 2017/12/18.
 */
var user_status = {
    selectAll: 'SELECT * FROM User',
    insertUser: 'INSERT INTO User (tel,name,password) VALUES (?,?,?)',
    selectUserByTel: 'SELECT * FROM User WHERE tel = ? ',
};

//exports
module.exports = {
    user_status: user_status
};
