const models = require('../models/index');
const User = models.User;
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const saltRounds = 10;

function hashPW(password) {
    // 해쉬된 값 반환
    return bcrypt.hashSync(password, saltRounds); // salt를 자동으로 생성
}

function comparePW(password, hashedPW){
    return bcrypt.compareSync(password, hashedPW);
}



exports.index = (req, res) => {
    res.render('index');
}

exports.user_new = (req, res) => {
    res.render('singup');
}

exports.login_user = (req,res) =>{
    res.render('singin');
}

exports.postNewUser = async (req, res) => {
    console.log('req.body >> ',req.body);
    try{
        const {pw, name, userid} = req.body;
        const hashedPW = hashPW(pw);
        await User.create(
            {
                pw: hashedPW,
                name,
                userid,
            }
        )
            res.send('회원가입 성공');
    }
    catch(err){
        console.log(err);
    }
}

exports.postLogin = async (req,res) => {
    try{
        // step1. 아이디를 찾아서 사용자 존재 유무 체크
        console.log('req.body >>>>>>> ',req.body);
        const {userid, pw} = req.body;
        const user = await User.findOne({
            where: {userid}
        });
        
        if(user){
            // 입력된 비밀번호를 암호화 하여 기존 데이터와 비교
            const result = await bcrypt.compare(pw, user.pw); // true or false

            // 일치
            if(result){
                res.send({result:true, data: user});
            }else{
                //불일치
                res.send({result:false, message: "비밀번호가 틀렸습니다."})
            }
        }else{
            //유저가 없다
            console.log('여기까지 도착');
            res.send({result: false, message: '존재하지 않는 사용자'})
        }
    }catch(err){
        console.log(err);
    }
}