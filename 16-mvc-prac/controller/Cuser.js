const exp = require('constants');
const User = require('../model/User');

exports.main = (req,res) => {
    res.render('index');
}


// 가입화면 표시
exports.singup = (req,res) => {
    res.render('singup');
}
// 가입 post
exports.singup_new = (req,res) => {
    // 뷰(요청) -> 라우터 -> 컨트롤러 -> 모델 -> DB -> 모델 -> 컨트롤러 -> 뷰(응답)
    console.log('req.body >>> ', req.body);
    const{id, pw, name} = req.body;

    User.postDB(req.body, (result) => {
        console.log('psotDB, Cuser.js result >>',result);
        if(result.error){
            res.send({isLogin:false})
        }else{
            res.send({isLogin:true, id: id, pw: pw, name: name});
        }
        // res.send({id: id, pw: pw, name: name});
    })
}


// 로그인
exports.singin = (req,res) => {
    res.render('singin');
}
exports.sigin_check = (req, res) => {
    console.log('req.body >' , req.body)
    User.postCheck(req.body, (result) => {
        // result:rows
        if(result.length > 0 ) res.send({isLogin:true,userInfo:result[0]});
        else(res.send({isLogin:false}))


        // if(rows.length > 0 ){
        //     res.send({result:true},rows[0].id);
        // }else{
        //     res.send({result:false});
        // }
    })
}

// 프로필 수정
exports.profile = (req,res) => {
    console.log(req.body);
    User.get_user(req.body.id, (result) =>{
        if(result.length > 0) res.render('profile', {data: result[0]})
    })
    // console.log(req.body.id);
    // res.render('profile', {fixid:req.body.id});
}

// 프로필 수정 2 (회원 정보 수정)
exports.profileEdit = (req,res) => {
    User.profileChange(req.body, (result) => {
        console.log('바꿀 정보 > ', req.body);
        console.log('화원 정보 수정 > ', result);
        res.send('수정 성공');
    })
}

exports.profileDelete = (req, res) => {
    console.log(req.body);

    User.delete_profile(req.body.id, (result) => {
        res.send({deletedId : req.body});
    })
}