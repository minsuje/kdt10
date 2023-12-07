const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const app = express();
const PORT = 8000;
const userID = 'minsu';
const userPW = '1234';

app.set('view engine', 'ejs');
app.use('/static', express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const cookieConfig = {
    httpOnly : true,
    maxAge: 24*60*60*1000, //24시간
    signed: true
}

app.use(session({
    secret: 'mySessionSecret',
    resave: false,
    saveUninitialized: true,
    cookie:{
        httpOnly:true,
        maxAge: 24*60*60*1000 // 24시간
    }
}))

// TODO: cookie parser 미들웨어 등록
app.use(cookieParser('mySecretKey')) // 암호화할 값을넣어준다.



app.get('/', (req, res) => {
    // *다음과 같이 기능 구현하였는데, 굳이 이렇게 하지 않아도 됩니다.
    // 모달 체크박스 체크시 -> GET / ; undefined
    // 모달 체크박스 미체크시 -> GET / ; hide
    // console.log('req.cookies.popup >> ', req.cookies.popup);

    // TODO: index.ejs render할 때 두 번째 인자로 popup key 로 요청의 쿠키값 보내기
    console.log("req.cookies.popup >>>",req.cookies.popup);
    console.log("req.signedCookies.popup >>>",req.signedCookies.popup);
    res.render('index', {popup: req.signedCookies.popup});
});

app.post('/setcookie', (req, res) => {
    // TODO: 쿠키 생성
    // 쿠키 이름: 'popup', 쿠키 값: 'hide'
    console.log('req.body.value >>>> ',req.body.value);

    if(req.body.value){
        res.cookie('popup', 'hide', cookieConfig);
    }
    // 1)
    // res.cookie('popup', 'hide', cookieConfig);
    res.send('쿠키 설정 성공!!');
});

app.get('/clearCookie', (req,res) => {
    res.clearCookie('popup','hide', cookieConfig);
    res.send('Clear Cookie!');
});



// ============== 실습2 =================



app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

// 힌트
// req 객체
// req.cookies: cookie-parser 미들웨어가 만드는 요청의 쿠키를 해석한 객체
// req.singedCookies: 서명된 쿠키들은 req.cookies 대신 여기에 담겨 있음

// res 객체
// res.cookie(키, 값, 옵션): 쿠키를 설정하는 메서드
// res.clearCookie(키 값, 옵션): 쿠키를 제거하는 메서드
