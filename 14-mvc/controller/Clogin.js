//DB 연결
const Login = require('../model/Login');

exports.axios = (req, res) => {
    res.render('axios');
}

exports.axiosP = (req, res) => {
    console.log(Login.logins());
    const result = Login.logins();

    if(result[0].id === req.body.id && result[0].pw === req.body.pw){
            res.send({userInfo: result[0], isSuccess: true});
        } else if(result[1].id === req.body.id && result[1].pw === req.body.pw){
            res.send({userInfo: result[1], isSuccess: true});
        } else{
            res.send({isSuccess: false});
        }
}