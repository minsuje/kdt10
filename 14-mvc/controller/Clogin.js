//DB 연결
const Login = require('../model/Login');

exports.axios = (req, res) => {
    res.render('axios');
}

exports.axiosP = (req, res) => {
    console.log(Login.logins());
    const result = Login.logins();
    // console.log(result[1]);

    for(let i = 0; i < result.length; i++) {
        if(result[i].id == req.body.id && result[i].pw == req.body.pw){
            res.send({userInfo: result[i], isSuccess: true});
        } else if(result[i].id !== req.body.id || result[i].pw !== req.body.pw){
            return res.send({isSuccess: false});
        }
    }

    // id : result.id
    
    
    // res.send()
}