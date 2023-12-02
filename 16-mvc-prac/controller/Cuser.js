const exp = require('constants');
const User = require('../model/User');
const { constants } = require('buffer');

exports.main = (req,res) => {
    res.render('index');
}


// 가입화면 표시
exports.singup = (req,res) => {
    res.render('singup');
}
// 가입 post
exports.singup_new = (req,res) => {
    console.log('req.body >>> ', req.body);
    const{id, pw, name} = req.body;

    User.postDB(req.body, (result) => {
        // console.log('psotDB, Cuser.js result >>',result);
        res.send({id: id, pw: pw, name: name});
    })
}


// 로그인
exports.singin = (req,res) => {
    res.render('singin');
}

// 프로필 수정
exports.profile = (req,res) => {
    res.render('profile');
}