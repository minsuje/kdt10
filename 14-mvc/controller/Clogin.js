//DB 연결
const Login = require('../model/Login');

exports.axios = (req, res) => {
    res.render('axios');
}

exports.axiosP = (req, res) => {
    console.log(Login.logins());
    const result = Login.logins();
    // if(Login.logins().id == req.body.id && Login.logins().pw == req.body.pw){
    //     res.send({userInfo: req.body, isSuccess: true});
    // } else{
    //     res.send({isSuccess: false})
    // }
    res.send()
}