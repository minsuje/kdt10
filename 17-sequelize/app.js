const express = require('express');
const app = express();
const PORT = 8000;

const db = require('./models/index');

app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/static', express.static(__dirname + '/static'));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// // 라우터 분리
const indexRouter = require('./routes/index');
app.use('/', indexRouter);


// 애러 처리
app.get('*', (req,res) => {
    res.render('404');
})

db.sequelize.sync({force: false}).then(() => {

    //force: false => 테이블이 없으면 생성
    //force: true => 테이블 무조건 생성(만약 db가 있다면 삭제하고 다시 생성 -> prod에서 사용 x [사용자 정보 손실] )

    app.listen(PORT, () => {
        console.log(`${PORT} is opening!!`)
    })
}) 