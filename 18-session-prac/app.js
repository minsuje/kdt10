const express = require('express');
const session = require('express-session');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use('/static', express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
    secret: 'mySessionSecret',
    resave: false,
    saveUninitialized: false,
    cookie:{
        httpOnly:true,
        maxAge: 60*1000// 1분
    }
}))

userInfo = { id: 'banana', pw:'1234'};

// ============== 실습2 =================

app.get('/', (req,res) => {
    //req.session.user 값이 있는지 검사를 해서 isLogin이라는 변수로 로그인 여부를 보내준다.
    const user = req.session.user;
    console.log('req.session.user >>>> ', user);
    // 값이 없을 때는 undefined가 나온다.
    if(user !== undefined){
        res.render('index', {isLogin: true, user:user});
    }else{
        res.render('index', {isLogin:false})
    }
})
app.get('/login', (req,res)=>{
    res.render('login');
})
app.post('/login', (req,res) =>{
    const {id, pw} = req.body;
    if(id === userInfo.id && pw === userInfo.pw){
        req.session.user = id;
        res.redirect('/');
    }else{
        res.send('로그인 실패!')
    }
})
// 로그아웃 요청
app.get('/logout', (req,res) => {
    const user = req.session.user; //user id
    if(user !== undefined){
        req.session.destroy((err) => {
            res.redirect('/');
        })
    }else{
        // (로그인x) 유저가 잘못 접근했을 떄
        res.send('잘못된 접근입니다.');
    }

})


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

