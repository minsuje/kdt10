// 유저에 대한 처리

// DB연결
const User = require('../model/User');

// GET /
exports.user = (req, res) =>{
    res.render('user', {userInfo: User.userInfo()});
};

