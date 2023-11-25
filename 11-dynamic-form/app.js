const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({extended : true}));
app.use(express.json()); 

//실습

const userID = 'minsu'
const userPW = '1234!'

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

////////////////////////
app.listen(PORT, () =>{
    console.log(`server is opening ${PORT}`);
})

