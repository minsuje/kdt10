const models = require('../models/index');
const User = models.User;

exports.main = (req,res) => {
    res.render('index');
}

//db에러 처리는 .catch로 만들면 된다.( 사이트 죽이지 않게 )

// 가입화면 표시
exports.singup = (req,res) => {
    res.render('singup');
}
// 가입 post
exports.singup_new = (req,res) => {
    // 뷰(요청) -> 라우터 -> 컨트롤러 -> 모델 -> DB -> 모델 -> 컨트롤러 -> 뷰(응답)
    console.log('req.body >>> ', req.body);
    const{id, pw, name} = req.body;

    // [before]
    // User.postDB(req.body, (result) => {
    //     console.log('psotDB, Cuser.js result >>',result);
    //     if(result.error){
    //         res.send({isLogin:false})
    //     }else{
    //         res.send({isLogin:true, id: id, pw: pw, name: name});
    //     }
    //     // res.send({id: id, pw: pw, name: name});
    // })
    // [after]
    User.findOne({
        where: {
            id : id
        }
    }).then((result) =>{
        console.log('id duplicate >', result);
        if(result!==null) {
            res.send({isLogin:false});
        }else{
            console.log('else');
            User.create({
                id: id,
                pw: pw,
                name: name
            }).then((result)=>{
                console.log('then >', result)
                res.send({isLogin:true});
            })
        }
    })
}


// 로그인
exports.singin = (req,res) => {
    res.render('singin');
}
exports.sigin_check = (req, res) => {
    console.log('req.body >' , req.body)

    //[before]
    // User.postCheck(req.body, (result) => {
    //     // result:rows
    //     if(result.length > 0 ) res.send({isLogin:true,userInfo:result[0]});
    //     else(res.send({isLogin:false}))
    // })

    //[After]
    // SELECT id,pw FROM user WHERE id = ? AND pw = ?"
    User.findAll(
    {
        attributes: ['id', 'pw'],
        where: {
            id : req.body.id,
            pw: req.body.pw
        }
    }
    ).then((result) => {
        console.log('findOne result >>',result);
        if(result.length > 0){
            res.send({isLogin:true})
        }else{
            res.send({isLogin:false})
        }

        //result
        //id, pw 일치 : {}
        //불일치 : null
    })


        // if(rows.length > 0 ){
        //     res.send({result:true},rows[0].id);
        // }else{
        //     res.send({result:false});
        // }
    
}

// 프로필 수정(id값 가져오기)
exports.profile = (req,res) => {
    console.log(req.body);

    //[before]
    // User.get_user(req.body.id, (result) =>{
    //     if(result.length > 0) res.render('profile', {data: result[0]})
    // })

    //[After]
    //"SELECT * FROM user WHERE id = ?"
    User.findOne({
        // User.findAll({
        // raw:true,
        where: {
            id : req.body.id
        }
    }).then((result)=>{
        // console.log('RESULT!!!!!!! >>> ',result);
        // res.render('profile',{data:result[0]});

        if(result){
            res.render('profile',{data:result})
        }
    })


    // console.log(req.body.id);
    // res.render('profile', {fixid:req.body.id});
}

// 프로필 수정 2 (회원 정보 수정)
exports.profileEdit = (req,res) => {
    //[Before]
    // User.profileChange(req.body, (result) => {
    //     console.log('바꿀 정보 > ', req.body);
    //     console.log('화원 정보 수정 > ', result);
    //     res.send('수정 성공');
    // })

    //[After]
    User.update({
        pw : req.body.pw,
        name : req.body.name
    },{
        where: {
            id : req.body.id
        }
    }).then((result)=>{
        console.log('update > ', result);
        res.send('수정성공');
    })
}

// 프로필 삭제
exports.profileDelete = (req, res) => {
    console.log(req.body);

    //[Before]
    // User.delete_profile(req.body.id, (result) => {
    //     res.send({deletedId : req.body});
    // })

    //[After]
    User.destroy({
        where: {
            id: req.body.id
        }
    }).then((result)=>{
        res.send('삭제성공');
    })
}