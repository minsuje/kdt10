const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const PORT = 8000;

// SECRET은 아무 값이나 가능
const SECRET = 'minstnsladlWkddldi';

// 임시 DB
const userInfo = {id : 'banana', pw: '1234', name:'홍길동', age: '29'};

app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/', (req,res) => {
    res.render('index');
})

app.get('/login', (req,res)=>{
    res.render('login');
})

// 로그인 요청
app.post('/login', (req,res)=>{
    try{
        const{id, pw} = req.body;
        const {id: realId, pw: realPw} = userInfo;

        if(id === realId && pw === realPw){
            // 토큰 생성
            // jwt.sign(payload, secretOrPrivateKey, [options, callback]) , []값은 넣어도 되고 안넣어도 되고
            const token = jwt.sign({id: id}, SECRET);
            res.send({isLogin:true, token});
        }else{
            // 로그인 실패
            res.send({isLogin:false, msg:'로그인 정보가 올바르지 않습니다.'});
        }
    }
    catch(err){
        console.error(err);
    }
})

// 토큰 검증 요청
app.post('/token',(req,res) =>{
    // 헤더에 있는 토큰을 가져옴
    console.log('token > ', req.headers.authorization);
    if(req.headers.authorization){
        //'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImJhbmFuYSIsImlhdCI6MTcwMjA5MjE5MH0.76-w0FJBEqkybSiqLVWFYSVXHM_0ehgYpw6iPSUva-s'
        // 띄워 쓰기를 나눠줌
        const authorization = req.headers.authorization.split(' ');
        console.log(authorization); // ['Bearer', 'token_string']
        const token = authorization[1];
        
        try{
            
            // 토큰 검증 : jwt.verift(token, secretKey)
            const result = jwt.verify(token, SECRET);
            console.log('result > ',result);
    
            if(result.id === userInfo.id){
                res.send({isVerify: true, name: userInfo.name});
            }else{
                res.send({isVerify:false , msg: '잘못된 접근입니다.'});
            }
        }catch(err){
            console.log('Verify err > ', err);
            res.send({isVerify: false, msg: '인증된 회원이 아닙니다.'});
        }
    }
    else{
        res.redirect('/login');
    }

})

app.listen(PORT, (req,res) => {
    console.log(`http://localhost:${PORT}`);
})