const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({extended : true})); //주소 형식으로 데이터를 보내는 방식, 미들웨어
    // 클라이언트로 부터 받은 http 요청 메시지 형식에서 body데이터를 해석하기 위해, true로 설정하면 qs(querystring)모듈을 사용(node.js 내장)

app.use(express.json()); // json형태의 데이터를 해석

// 실습2
const userID = 'minsu'
const userPW = '1234'

app.get('/', (req, res) =>{
    res.render('index');
})

// ajax
app.get('/ajax', (req, res) =>{
    console.log(req.query);
    res.send(req.query);
})

app.post('/ajax', (req, res) =>{
    console.log(req.body);
    res.send(req.body);
})

// axios
app.get('/axios', (req, res) =>{
    console.log(req.query);
    res.send(req.query);

    // 의도적으로 에러 발생시킴
    // res.status(400).send("error msg!!")
})

app.post('/axios', (req, res) =>{
    console.log(req.body);
    // res.send(req.body);

    console.log({name: req.body.name, gender: req.body.gender, msg: 'fet성공'})
    res.send({name: req.body.name, gender: req.body.gender, msg: 'fet성공'});
})

// fetch
app.get('/fetch', (req, res) =>{
    console.log(req.query);
    res.send(req.query);
})

app.post('/fetch', (req, res) =>{
    console.log(req.body);
    res.send(req.body);
})


// 실습 1
app.get('/prac1', (req, res) =>{
    console.log(req.query);
    res.send(req.query);
})

app.post('/prac2', (req, res) =>{
    console.log(req.body);
    res.send(req.body);
    
    // userID, userPW 라는 변수 값과 클라이언트에서 넘겨받은 값이 일치하는지 검사
    if(userID === req.body.id && userPW === req.body.pw){
        res.send({userInfo: req.body, isSuccess: true});
    } else{
        res.send({isSuccess: false})
    }
    // 결과 값을 반환
})

app.get('/prac3',(req, res) => {
    res.render('prac3');
})

app.post('/prac3',(req, res) =>{
    console.log(req.body);
    
    // userID, userPW 라는 변수 값과 클라이언트에서 넘겨받은 값이 일치하는지 검사
    if(userID === req.body.id && userPW === req.body.pw){
        res.send({userInfo: req.body, isSuccess: true});
    } else{
        res.send({isSuccess: false})
    }
    // 결과 값을 반환
})


////////////////////////
app.listen(PORT, () =>{
    console.log(`server is opening ${PORT}`);
})

