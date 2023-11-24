const express = require('express');
const app = express();
const PORT = 8000;

// view엔진을 ejs로 등록
app.set('view engine', 'ejs');
app.set('/views', 'views');

// 미들웨어

// req.body 객체를 해석할 수 있도록 body-parser 미들웨어 등록
app.use(express.urlencoded({extended : true})); // Post 요청으로 들어오는 모든 형식의 데이터를 파싱
app.use(express.json()); // json형식으로 데이터를 주고 받음

app.get('/', (req, res) =>{
    // views 폴더 내부에 index라는 ejs파일을 보여줌
    res.render('index');
})


// GET 메서트로 '/login' 요청이 들어오면 임의의 메시지 전송
// GET 방식은 클라이언트에서 보낸 데이터가 req.query에 저장된다

app.get('/login', (req,res) => {
    console.log(req.query); //{ id: '1234', pw: '4321' }
    // res.send('get 요청 성공');

    res.render('result', {title : 'Get 요청', userInfo: req.query});
})

// Post '/login' 요청이 들어오면 임의의 메시지 전송
// Post 방식은 클라이언트에서 보낸 데이터가 req.body에 저장

app.post('/login', (req,res) => {
    console.log(req.body); //{ id: '1234', pw: '4321' }
    // res.send('Post 요청 성공!!');

    res.render('result', {title: 'post요청',userInfo : req.body});
})

app.post('/js-form-check', (req,res)=>{
    console.log(req.body);
    res.send('js validation 성공');
})

// =============== 실습 1 =================
app.get('/one', (req, res) =>{
    res.render('index2');
})
// ========================================

// ============== 실습1 get으로 받기 ================
app.get('/get', (req,res) =>{
    console.log(req.query)
    res.render('result2', req.query);
})
// =================================================


// ================ 실습 2 ===================
// url로 접속하는 방식은 GET 방식으로만 접근 가능
app.get('/two', (req,res) => {
    res.render('index3');
})
// ==========================================

// =============== 실습2 Post로 받기 =================
app.post('/post',(req, res)=>{
    console.log(req.body);
    res.render('result3', {title: '실습2', userInfo: req.body});
})
// =================================================


app.listen(PORT, function(){
    console.log(` ${PORT} is opening!`);
})

